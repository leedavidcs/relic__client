import React, { FC } from "react";
import { ApolloProvider } from "./apollo-provider.component";
import { JssProvider } from "./jss-provider.component";
import { ModalProvider } from "./modal-provider.component";
import { ReduxProvider } from "./redux-provider.component";

export * from "./apollo-provider.component";
export * from "./jss-provider.component";
export * from "./redux-provider.component";

export const RootProvider: FC = ({ children }) => (
	<JssProvider>
		<ApolloProvider>
			<ReduxProvider>
				<ModalProvider>{children}</ModalProvider>
			</ReduxProvider>
		</ApolloProvider>
	</JssProvider>
);
