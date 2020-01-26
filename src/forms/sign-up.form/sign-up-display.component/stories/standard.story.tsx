import { Paper } from "@/components";
import { SignUpDisplay } from "@/forms/sign-up.form/sign-up-display.component";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";

export const StandardStory = () => {
	const onClickResend = action("onClickResend");
	const onSubmitAction = action("onSubmit");

	const onSubmit = useCallback(
		(values) => {
			onSubmitAction(values);

			return Promise.resolve({
				success: true,
				error: null
			});
		},
		[onSubmitAction]
	);

	return (
		<Paper>
			<SignUpDisplay onClickResend={onClickResend} onSubmit={onSubmit} />
		</Paper>
	);
};
