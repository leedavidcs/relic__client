import { Mutations, RegisterLocalUserVariables } from "@/graphql";
import React, { FC, useCallback } from "react";
import { useMutation } from "react-apollo";
import { SignUpDisplay } from "./sign-up-display.component";

export const SignUpForm: FC<{}> = () => {
	const [registerUser] = useMutation(Mutations.RegisterLocalUser);

	const onSubmit = useCallback(
		(variables: RegisterLocalUserVariables) => {
			registerUser({ variables });
		},
		[registerUser]
	);

	return <SignUpDisplay onSubmit={onSubmit} />;
};
