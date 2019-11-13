import { Mutations, RegisterLocalUser, RegisterLocalUserVariables } from "@/graphql";
import React, { FC, useCallback } from "react";
import { useMutation } from "react-apollo";
import { SignUpDisplay } from "./sign-up-display.component";

export const SignUpForm: FC<{}> = () => {
	const [registerUser] = useMutation<RegisterLocalUser, RegisterLocalUserVariables>(
		Mutations.RegisterLocalUser
	);

	const onClickResend = useCallback(() => void 0, []);

	const onSubmit = useCallback(
		async (variables: RegisterLocalUserVariables) => {
			const { data, errors } = await registerUser({ variables });

			if (!data || errors) {
				return { success: false, error: "Unexpected error. Please try again" };
			}

			const {
				registerLocalUser: { success, error }
			} = data;

			return { success, error };
		},
		[registerUser]
	);

	return <SignUpDisplay onClickResend={onClickResend} onSubmit={onSubmit} />;
};
