import { Background, Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";
import { SignInDisplay } from ".";

export default { title: "form|sign-in", component: SignInDisplay };

export const Standard = () => {
	const submitAction = action("onSubmit");

	const onClickForgotPassword = action("onClickForgotPassword");
	const onClickSignUp = action("onClickSignIn");

	const onSubmit = useCallback(
		(values) => {
			submitAction(values);

			return false;
		},
		[submitAction]
	);

	return (
		<Background>
			<Paper>
				<SignInDisplay
					onClickForgotPassword={onClickForgotPassword}
					onClickSignUp={onClickSignUp}
					onSubmit={onSubmit}
				/>
			</Paper>
		</Background>
	);
};
