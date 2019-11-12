import { LoginLocalUserVariables, Mutations, TokenResponse } from "@/graphql";
import React, { FC, useCallback } from "react";
import { useMutation } from "react-apollo";
import { SignInDisplay } from "./sign-in-display.component";

export const SignInForm: FC<{}> = () => {
	const [loginUser] = useMutation<TokenResponse, LoginLocalUserVariables>(
		Mutations.LoginLocalUser
	);

	const onSubmit = useCallback(
		async (variables: LoginLocalUserVariables): Promise<boolean> => {
			const result = await loginUser({ variables });

			const didSucceed: boolean = !result.errors && Boolean(result.data);

			if (result.data) {
				const { token, refreshToken } = result.data;

				localStorage.setItem("refreshToken", refreshToken);
				localStorage.setItem("token", token);
			}

			return didSucceed;
		},
		[loginUser]
	);

	return <SignInDisplay onSubmit={onSubmit} />;
};
