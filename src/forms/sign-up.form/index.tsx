import { Mutations, RegisterLocalUserVariables, ResendVerifyEmail } from "@/graphql";
import { useAuth, useModal, useSetUser } from "@/hooks";
import { VerifyEmailModal } from "@/modals";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { SignUpDisplay } from "./sign-up-display.component";

export const SignUpForm: FC<{}> = () => {
	const [resendVerifyEmail] = useMutation<ResendVerifyEmail>(Mutations.ResendVerifyEmail);

	const { login, register } = useAuth();
	const { setContent, toggle } = useModal();

	const [email, setEmail] = useState<string>("");
	const [didSucceed, setDidSucceed] = useState<boolean>(false);

	const onClickResend = useCallback(() => resendVerifyEmail(), [resendVerifyEmail]);

	const onCompleted = useCallback(() => {
		setContent({
			title: "Confirm your email address",
			body: <VerifyEmailModal email={email} onClickResend={onClickResend} />
		});
		toggle(true);
	}, [email, onClickResend, setContent, toggle]);

	const [setUser] = useSetUser({ onCompleted });

	const onSubmit = useCallback(
		async (variables: RegisterLocalUserVariables) => {
			const result = await register({ variables });

			if (!result) {
				return { success: false, error: "Unexpected error. Please try again" };
			}

			const { success, error } = result;

			if (!success) {
				return { success, error };
			}

			const { email: userIdentifier, password } = variables;

			await login({ variables: { userIdentifier, password } });

			setEmail(variables.email);
			setDidSucceed(true);

			return { success, error };
		},
		[login, register]
	);

	useEffect(() => {
		if (didSucceed) {
			setUser();
		}
	}, [didSucceed, setUser]);

	return <SignUpDisplay onClickResend={onClickResend} onSubmit={onSubmit} />;
};
