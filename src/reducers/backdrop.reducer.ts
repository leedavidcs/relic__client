import { BackdropAction } from "@/actions";
import { Reducer } from "redux";

export interface IBackdropState {
	dependants: number;
}

export const DEFAULT_BACKDROP_STATE: IBackdropState = {
	dependants: 0
};

export const backdropReducer: Reducer<IBackdropState, IAction> = (
	state = DEFAULT_BACKDROP_STATE,
	action
) => {
	switch (action.type) {
		case BackdropAction.DECREMENT_DEPENDANTS:
			return { ...state, dependants: state.dependants - 1 };
		case BackdropAction.FORCE_CLOSE:
			return { ...state, dependants: 0 };
		case BackdropAction.INCREMENT_DEPENDANTS:
			return { ...state, dependants: state.dependants + 1 };
		default:
			return state;
	}
};
