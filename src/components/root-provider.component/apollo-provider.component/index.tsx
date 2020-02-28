import { cache, Client, mocks, resolvers } from "@/graphql";
import { MockedProvider } from "@apollo/react-testing";
import React, { FC, ReactElement } from "react";
import { ApolloProvider as RealProvider } from "react-apollo";

interface IProps {
	children: ReactElement;
	mockRequests?: boolean;
}

export const ApolloProvider: FC<IProps> = ({ children, mockRequests = true }) => {
	return mockRequests ? (
		<MockedProvider mocks={mocks} addTypename={true} cache={cache} resolvers={resolvers}>
			{children}
		</MockedProvider>
	) : (
		<RealProvider client={Client}>{children}</RealProvider>
	);
};
