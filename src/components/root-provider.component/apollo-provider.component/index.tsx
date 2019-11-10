import { Client } from "@/graphql";
import React, { FC } from "react";
import { ApolloProvider as Provider } from "react-apollo";

export const ApolloProvider: FC = ({ children }) => {
	return <Provider client={Client}>{children}</Provider>;
};
