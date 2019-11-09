import { rootEpic } from "@/epics";
import { createRootReducer, DEFAULT_ROOT_STATE, IRootState } from "@/reducers";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { logger } from "redux-logger";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";

const composeEnhancer = (middlewares?: Middleware[]): StoreEnhancer => {
	const devMiddleware: Middleware[] = process.env.NODE_ENV === "development" ? [logger] : [];

	const enhancer: StoreEnhancer = composeWithDevTools(
		compose(applyMiddleware(...middlewares, ...devMiddleware), offline(offlineConfig))
	);

	return enhancer;
};

export const configureStore = (history: History): Store<IRootState> => {
	const epicMiddleware: EpicMiddleware<IAction, IAction, IRootState> = createEpicMiddleware();
	const routeMiddleware: Middleware = routerMiddleware(history);

	const middlewares: Middleware[] = [epicMiddleware, routeMiddleware];
	const enhancer: StoreEnhancer = composeEnhancer(middlewares);

	const store = createStore(createRootReducer(history), DEFAULT_ROOT_STATE, enhancer);

	epicMiddleware.run(rootEpic);

	return store;
};
