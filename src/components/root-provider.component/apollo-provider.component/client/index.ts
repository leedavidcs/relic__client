import { ApolloClient, ApolloLink, InMemoryCache } from "apollo-boost";
import { AuthLink } from "./auth-link";
import { ErrorLink } from "./error-link";
import { HttpLink } from "./http-link";

const getApolloLink = (): ApolloLink => {
	const apolloLinks: ApolloLink[] = [AuthLink, ErrorLink, HttpLink];

	const apolloLink: ApolloLink = ApolloLink.from(apolloLinks);

	return apolloLink;
};

/* tslint:disable:object-literal-sort-keys */
export const Client = new ApolloClient({
	link: getApolloLink(),
	cache: new InMemoryCache()
});
/* tslint:enable:object-literal-sort-keys */
