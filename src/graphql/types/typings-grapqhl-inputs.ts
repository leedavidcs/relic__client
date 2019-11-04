/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginLocalUser
// ====================================================

export interface LoginLocalUser_loginLocalUser {
	readonly __typename: "TokenResponse";
	/**
	 * JSON web token to authenticate API requests
	 */
	readonly token: string;
	/**
	 * JSON web token to refresh the token
	 */
	readonly refreshToken: string;
}

export interface LoginLocalUser {
	/**
	 * Logins in the user, and returns an expiring access token
	 */
	readonly loginLocalUser: LoginLocalUser_loginLocalUser | null;
}

export interface LoginLocalUserVariables {
	readonly userIdentifier: string;
	readonly password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshAccessToken
// ====================================================

export interface RefreshAccessToken_refreshAccessToken {
	readonly __typename: "TokenResponse";
	/**
	 * JSON web token to authenticate API requests
	 */
	readonly token: string;
	/**
	 * JSON web token to refresh the token
	 */
	readonly refreshToken: string;
}

export interface RefreshAccessToken {
	/**
	 * Refreshes the currently logged-in user's access token
	 */
	readonly refreshAccessToken: RefreshAccessToken_refreshAccessToken | null;
}

export interface RefreshAccessTokenVariables {
	readonly refreshToken: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterLocalUser
// ====================================================

export interface RegisterLocalUser_registerLocalUser_user {
	readonly __typename: "User";
	/**
	 * The id of the user
	 */
	readonly id: string;
	/**
	 * The user's email
	 */
	readonly email: any;
	/**
	 * Whether the user verified their email address
	 */
	readonly emailVerified: string;
	/**
	 * The user's encoded password
	 */
	readonly password: string;
	/**
	 * The user's username
	 */
	readonly username: string;
}

export interface RegisterLocalUser_registerLocalUser {
	readonly __typename: "RegisterLocalUserResponse";
	/**
	 * Whether the registration successfully created a user or not
	 */
	readonly success: boolean;
	/**
	 * An error will be described if success is false
	 */
	readonly error: string | null;
	/**
	 * The user object
	 */
	readonly user: RegisterLocalUser_registerLocalUser_user | null;
}

export interface RegisterLocalUser {
	/**
	 * Performs local authentication (custom username + password)
	 */
	readonly registerLocalUser: RegisterLocalUser_registerLocalUser | null;
}

export interface RegisterLocalUserVariables {
	readonly email: any;
	readonly password: string;
	readonly username: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
