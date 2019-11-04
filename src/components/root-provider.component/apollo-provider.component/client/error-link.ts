import { Mutations } from "@/graphql";
import { ApolloLink, FetchResult, Observable, Operation } from "apollo-boost";
import { onError } from "apollo-link-error";
import { ServerError, ServerParseError } from "apollo-link-http-common";
import { print } from "graphql/language";
import HttpStatus from "http-status";

const BASE_GRAPHQL_URL: string = `${process.env.REACT_APP_API_BASE_URL}/graphql`;

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
	doRefreshToken()
		.then((value) => {
			if (subscriber.closed) {
				return;
			}

			subscriber.next(value);
			subscriber.complete();
		})
		.catch(subscriber.error);
});

const handleNetworkError = ({
	statusCode
}: ServerError | ServerParseError): Observable<string | null> | null => {
	return statusCode === HttpStatus.UNAUTHORIZED ? onRefreshToken : null;
};

const setNewAuthorizationHeader = (operation: Operation, newToken: string): void => {
	const oldHeaders = operation.getContext().headers;

	operation.setContext({
		headers: {
			...oldHeaders,
			Authorization: `Bearer ${newToken}`
		}
	});
};

export const ErrorLink: ApolloLink = onError(({ operation, forward, networkError }): Observable<
	FetchResult
> | void => {
	if (networkError && isServerError(networkError)) {
		const networkErrorResult: Observable<string | null> | null = handleNetworkError(
			networkError
		);

		if (networkErrorResult) {
			return networkErrorResult.flatMap((newToken) => {
				if (newToken) {
					setNewAuthorizationHeader(operation, newToken);
				}

				return forward(operation);
			});
		}
	}
});
