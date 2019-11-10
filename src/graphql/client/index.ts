import { IClientState } from "@/graphql";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schemas";
import { ApolloClient, defaultDataIdFromObject, InMemoryCache } from "apollo-boost";
import { link } from "./links";

export const cache = new InMemoryCache({
	dataIdFromObject: defaultDataIdFromObject
});

export const Client = new ApolloClient({
	cache,
	link,
	resolvers,
	typeDefs
});

cache.writeData<IClientState>({
	data: {
		user: null
	}
});
