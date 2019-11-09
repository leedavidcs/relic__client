import { IRootState } from "@/reducers";
import { ConnectedRouter } from "connected-react-router";
import { createHashHistory, History } from "history";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { configureStore } from "./configure-store";

const history: History = createHashHistory();

export const store: Store<IRootState, IAction> = configureStore(history);

export const ReduxProvider: FC = ({ children }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>{children}</ConnectedRouter>
		</Provider>
	);
};
