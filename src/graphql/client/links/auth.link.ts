import { ApolloLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { IncomingHttpHeaders } from "http";

interface IAuthLinkContext {
	headers: IncomingHttpHeaders;
}

export const AuthLink: ApolloLink = setContext(
	async (__, { headers }: IAuthLinkContext): Promise<IAuthLinkContext> => {
		const token = localStorage.getItem("token");

		return {
			headers: {
				...headers,
				Authorization: token ? `Bearer ${token}` : ""
			}
		};
	}
);
