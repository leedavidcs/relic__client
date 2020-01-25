import { ClickOutsideProvider } from "@/components/click-outside.component";
import { ContextMenuProvider } from "@/components/context-menu.component";
import { ModalProvider } from "@/components/modal.component";
import { Client } from "@/graphql";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { GlobalStyles } from "./global-styles.component";
import { JssProvider } from "./jss-provider.component";

export * from "./jss-provider.component";

export const RootProvider: FC = ({ children }) => {
	return (
		<ApolloProvider client={Client}>
			<JssProvider>
				<GlobalStyles>
					<ClickOutsideProvider>
						<ContextMenuProvider>
							<ModalProvider>{children}</ModalProvider>
						</ContextMenuProvider>
					</ClickOutsideProvider>
				</GlobalStyles>
			</JssProvider>
		</ApolloProvider>
	);
};
