import React, { FC } from "react";
import { ApolloProvider as Provider } from "react-apollo";
import { Client } from "./client";

export * from "./client";

export const ApolloProvider: FC = ({ children }) => {
	return <Provider client={Client}>{children}</Provider>;
};
