import { Background, Paper } from "@/components";
import { VerifyEmail } from "@/forms/sign-up.form/verify-email.component";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";

export const VerifyEmailStory = () => {
	const email: string = text("email", "test@test.com");

	const onClickResend = action("onClickResend");

	return (
		<Background>
			<Paper>
				<VerifyEmail email={email} onClickResend={onClickResend} />
			</Paper>
		</Background>
	);
};
