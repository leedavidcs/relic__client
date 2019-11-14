import { Background, Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { VerifyEmailDisplay } from ".";

export const VerifyEmailStory = () => {
	const email: string = text("email", "test@test.com");

	const onClickResend = action("onClickResend");

	return (
		<Background>
			<Paper>
				<VerifyEmailDisplay email={email} onClickResend={onClickResend} />
			</Paper>
		</Background>
	);
};
