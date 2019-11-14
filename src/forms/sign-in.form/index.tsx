import { LoginLocalUserVariables } from "@/graphql";
import { useAuth, useModal, useSetUser } from "@/hooks";
import React, { FC, useCallback } from "react";
import { SignInDisplay } from "./sign-in-display.component";

export const SignInForm: FC<{}> = () => {
	const { login } = useAuth();
	const { setContent, toggle } = useModal();

	const onCompleted = useCallback(() => {
		toggle(false);
		setContent(null);
	}, [setContent, toggle]);

	const [setUser] = useSetUser({ onCompleted });

	const onSubmit = useCallback(
		async (variables: LoginLocalUserVariables): Promise<boolean> => {
			const result = await login({ variables });

			if (result) {
				setUser();
			}

			return Boolean(result);
		},
		[login, setUser]
	);

	return <SignInDisplay onSubmit={onSubmit} />;
};
