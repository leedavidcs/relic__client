import { IClientContext, UserInput } from "@/graphql/types";

const setUser: LocalResolver<any, IClientContext, { user: UserInput }> = (
	parent,
	{ user },
	{ cache }
) => {
	const data = {
		user: { ...user, __typename: "User" }
	};

	cache.writeData({ data, id: user.id });

	return user;
};

export const UserMutations = { setUser };
