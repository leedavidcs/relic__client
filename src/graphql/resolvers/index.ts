import { Resolvers } from "apollo-boost";
import { UserMutations } from "./user.resolver";

export const resolvers: Resolvers = {
	Mutation: {
		...UserMutations
	}
};
