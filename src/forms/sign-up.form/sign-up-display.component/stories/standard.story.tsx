import { Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";
import { SignUpDisplay } from "..";

export const StandardStory = () => {
	const onClickResend = action("onClickResend");
	const onSubmitAction = action("onSubmit");

	const onSubmit = useCallback(
		async (values) => {
			onSubmitAction(values);

			return {
				success: true,
				error: null
			};
		},
		[onSubmitAction]
	);

	return (
		<Paper>
			<SignUpDisplay onClickResend={onClickResend} onSubmit={onSubmit} />
		</Paper>
	);
};
