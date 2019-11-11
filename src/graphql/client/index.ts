import { IClientState } from "@/graphql";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schemas";
import { ApolloClient, defaultDataIdFromObject, InMemoryCache } from "apollo-boost";
import { link } from "./links";

export const cache = new InMemoryCache({
	dataIdFromObject: defaultDataIdFromObject
});

const isDevelopmentMode: boolean = process.env.NODE_ENV === "development";

export const Client = new ApolloClient({
	cache,
	connectToDevTools: isDevelopmentMode,
	link,
	resolvers,
	typeDefs
});

cache.writeData<IClientState>({
	data: {
		user: null
	}
});
