import { Mutations } from "@/graphql";
import { Logger } from "@/utils";
import { ApolloLink, FetchResult, Observable, Operation } from "apollo-boost";
import { onError } from "apollo-link-error";
import { ServerError, ServerParseError } from "apollo-link-http-common";
import { print } from "graphql/language";
import HttpStatus from "http-status";

const BASE_GRAPHQL_URL = `${process.env.REACT_APP_API_BASE_URL}/graphql`;

const isServerError = (value: any): value is ServerError | ServerParseError => {
	return Boolean(value.statusCode);
};

const doRefreshToken = async (): Promise<string | null> => {
	const oldToken = localStorage.getItem("token");
	const oldRefreshToken: string | null = localStorage.getItem("refreshToken");

	if (!oldRefreshToken) {
		return null;
	}

	const tokenRequest = await fetch(BASE_GRAPHQL_URL, {
		body: JSON.stringify({
			mutation: print(Mutations.RefreshAccessToken),
			variables: {
				refreshToken: oldRefreshToken
			}
		}),
		headers: {
			Accept: "application/json",
			Authorization: oldToken ? `Bearer ${oldToken}` : "",
			"Content-Type": "application/json"
		},
		method: "POST"
	});

	if (tokenRequest.status !== HttpStatus.OK) {
		return null;
	}

	const { refreshToken: newRefreshToken, token } = await tokenRequest.json();

	localStorage.setItem("refreshToken", newRefreshToken);
	localStorage.setItem("token", token);

	return token as string;
};

const onRefreshToken = new Observable<string | null>((subscriber) => {
	const performRefreshToken = async () => {
		try {
			const value = await doRefreshToken();

			subscriber.next(value);
			subscriber.complete();
		} catch (err) {
			subscriber.error(err);
		}
	};

	performRefreshToken();
});

const handleNetworkError = (
	networkError: ServerError | ServerParseError
): Observable<string | null> | null => {
	const { statusCode } = networkError;

	if (statusCode === HttpStatus.UNAUTHORIZED) {
		return onRefreshToken;
	}

	Logger.error(`[Network error]: ${networkError}`);

	return null;
};

const handleGraphQLErrors = (graphqlErrors: readonly any[]): void => {
	graphqlErrors.forEach(({ message, locations, path }) => {
		Logger.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
	});
};

const setNewAuthorizationHeader = (operation: Operation, newToken: string): void => {
	const oldHeaders = operation.getContext().headers;

	operation.setContext({ headers: { ...oldHeaders, Authorization: `Bearer ${newToken}` } });
};

export const ErrorLink: ApolloLink = onError(
	({ operation, forward, graphQLErrors, networkError }): Observable<FetchResult> | void => {
		if (graphQLErrors) {
			handleGraphQLErrors(graphQLErrors);
		}

		if (!networkError || !isServerError(networkError)) {
			return;
		}

		const networkErrorResult: Observable<string | null> | null = handleNetworkError(
			networkError
		);

		if (!networkErrorResult) {
			return;
		}

		return networkErrorResult.flatMap((newToken) => {
			if (newToken) {
				setNewAuthorizationHeader(operation, newToken);
			}

			return forward(operation);
		});
	}
);
