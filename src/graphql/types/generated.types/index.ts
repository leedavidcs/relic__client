import {
	LoginLocalUserInput as genLoginLocalUserInput,
	RefreshAccessTokenInput as genRefreshAccessTokenInput,
	RegisterLocalUserInput as genRegisterLocalUserInput,
	UserInput as genUserInput
} from "./typings-graphql-inputs";

export * from "./typings-graphql-inputs";

export type LoginLocalUserInput = genLoginLocalUserInput;
export type RefreshAccessTokenInput = genRefreshAccessTokenInput;
export type RegisterLocalUserInput = genRegisterLocalUserInput;
export type UserInput = genUserInput;
