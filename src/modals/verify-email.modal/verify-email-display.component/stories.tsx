import { Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { VerifyEmailDisplay } from ".";

export default { title: "modal-display/verify-email", component: VerifyEmailDisplay };

export const Standard = () => {
	const email: string = text("email", "test@test.com");

	const onClickResend = action("onClickResend");

	return (
		<Paper>
			<VerifyEmailDisplay email={email} onClickResend={onClickResend} />
		</Paper>
	);
};
