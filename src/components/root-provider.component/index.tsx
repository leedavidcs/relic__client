import { ClickOutsideProvider } from "@/components/click-outside.component";
import { ContextMenuProvider } from "@/components/context-menu.component";
import { ModalProvider } from "@/components/modal.component";
import React, { FC, ReactNode } from "react";
import { ApolloProvider } from "./apollo-provider.component";
import { GlobalStyles } from "./global-styles.component";
import { JssProvider } from "./jss-provider.component";

export * from "./jss-provider.component";

interface IProps {
	children: ReactNode;
	mockRequests?: boolean;
}

export const RootProvider: FC<IProps> = ({ children, mockRequests = true }) => {
	return (
		<ApolloProvider mockRequests={mockRequests}>
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
