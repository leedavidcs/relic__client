/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginLocalUser
// ====================================================

export interface LoginLocalUser_loginLocalUser {
  readonly __typename: "TokenPayload";
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
  readonly input: LoginLocalUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshAccessToken
// ====================================================

export interface RefreshAccessToken_refreshAccessToken {
  readonly __typename: "TokenPayload";
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
  readonly input: RefreshAccessTokenInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterLocalUser
// ====================================================

export interface RegisterLocalUser_registerLocalUser_user {
  readonly __typename: "User";
  readonly id: string;
  /**
   * The user's email
   */
  readonly email: any | null;
  readonly emailVerified: boolean;
  readonly username: string;
}

export interface RegisterLocalUser_registerLocalUser {
  readonly __typename: "RegisterLocalUserPayload";
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
   * Performs local auth registration (custom username + password)
   */
  readonly registerLocalUser: RegisterLocalUser_registerLocalUser | null;
}

export interface RegisterLocalUserVariables {
  readonly input: RegisterLocalUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResendVerifyEmail
// ====================================================

export interface ResendVerifyEmail_resendVerifyEmail {
  readonly __typename: "ResendVerifyEmailPayload";
  /**
   * Status, on whether the email was successfully resent
   */
  readonly success: boolean;
}

export interface ResendVerifyEmail {
  /**
   * Resends the account verification email to the logged-in user
   */
  readonly resendVerifyEmail: ResendVerifyEmail_resendVerifyEmail | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetUser
// ====================================================

export interface SetUser_setUser {
  readonly __typename: "User";
  readonly id: string;
  /**
   * The user's email
   */
  readonly email: any | null;
  readonly emailVerified: boolean;
  readonly username: string;
}

export interface SetUser {
  readonly setUser: SetUser_setUser | null;
}

export interface SetUserVariables {
  readonly user?: UserInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleModal
// ====================================================

export interface ToggleModal {
  readonly toggleModal: boolean;
}

export interface ToggleModalVariables {
  readonly force?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModal
// ====================================================

export interface GetModal {
  readonly modal: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  readonly __typename: "User";
  readonly id: string;
  /**
   * The user's email
   */
  readonly email: any | null;
  readonly emailVerified: boolean;
  readonly username: string;
}

export interface GetUser {
  readonly user: GetUser_user | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewer
// ====================================================

export interface GetViewer_viewer {
  readonly __typename: "Viewer";
  /**
   * The viewer's id
   */
  readonly id: string | null;
  /**
   * The viewer's email
   */
  readonly email: string | null;
  /**
   * Whether this viewer verified their email address
   */
  readonly emailVerified: boolean | null;
  /**
   * The viewer's username
   */
  readonly username: string | null;
}

export interface GetViewer {
  /**
   * The viewer of this request
   */
  readonly viewer: GetViewer_viewer | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface LoginLocalUserInput {
  readonly userIdentifier: string;
  readonly password: string;
}

export interface RefreshAccessTokenInput {
  readonly refreshToken: string;
}

export interface RegisterLocalUserInput {
  readonly email: any;
  readonly password: any;
  readonly username: string;
}

export interface UserInput {
  readonly id: string;
  readonly email: any;
  readonly emailVerified: boolean;
  readonly username: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
