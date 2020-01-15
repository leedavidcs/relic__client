import { ContextMenuProvider } from "@/components/context-menu.component";
import { ModalProvider } from "@/components/modal.component";
import { Client } from "@/graphql";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { JssProvider } from "./jss-provider.component";

export * from "./jss-provider.component";

export const RootProvider: FC = ({ children }) => (
	<ApolloProvider client={Client}>
		<JssProvider>
			<ModalProvider>
				<ContextMenuProvider>{children}</ContextMenuProvider>
			</ModalProvider>
		</JssProvider>
	</ApolloProvider>
);
