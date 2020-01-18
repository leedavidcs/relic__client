import { ClickOutsideProvider } from "@/components/click-outside.component";
import { ContextMenuProvider } from "@/components/context-menu.component";
import { ModalProvider } from "@/components/modal.component";
import { Client } from "@/graphql";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { JssProvider } from "./jss-provider.component";
import { useStyles } from "./styles";

export * from "./jss-provider.component";

export const RootProvider: FC = ({ children }) => {
	useStyles();

	return (
		<ApolloProvider client={Client}>
			<JssProvider>
				<ClickOutsideProvider>
					<ContextMenuProvider>
						<ModalProvider>{children}</ModalProvider>
					</ContextMenuProvider>
				</ClickOutsideProvider>
			</JssProvider>
		</ApolloProvider>
	);
};
