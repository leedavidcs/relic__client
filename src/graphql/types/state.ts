import { InMemoryCache } from "apollo-boost";
import { User } from "./generated.types";

export interface IClientContext {
	cache: InMemoryCache;
}

export interface IClientState {
	modal: boolean;
	user: User | null;
}
