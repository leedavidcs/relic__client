import { Client } from "@/graphql";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { JssProvider } from "./jss-provider.component";
import { ModalProvider } from "./modal-provider.component";

export * from "./jss-provider.component";

export const RootProvider: FC = ({ children }) => (
	<JssProvider>
		<ApolloProvider client={Client}>
			<ModalProvider>{children}</ModalProvider>
		</ApolloProvider>
	</JssProvider>
);
