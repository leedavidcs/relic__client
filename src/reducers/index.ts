import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { backdropReducer, DEFAULT_BACKDROP_STATE, IBackdropState } from "./backdrop.reducer";

/* tslint:disable:no-empty-interface */
export interface IRootState {
	backdrop: IBackdropState;
}
/* tslint:disable:no-empty-interface */

export const DEFAULT_ROOT_STATE: IRootState = {
	backdrop: DEFAULT_BACKDROP_STATE
};

export const createRootReducer = (history: History) =>
	combineReducers({
		backdrop: backdropReducer,
		router: connectRouter(history)
	});
