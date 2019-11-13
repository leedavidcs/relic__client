import { Background, Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";
import { SignUpDisplay } from "../sign-up-display.component";

export default { title: "form|sign-up", component: SignUpDisplay };

export const Standard = () => {
	const onSubmitAction = action("onSubmit");

	const onSubmit = useCallback(
		async (values) => {
			onSubmitAction(values);

			return {
				success: false,
				error: "Something went wrong."
			};
		},
		[onSubmitAction]
	);

	return (
		<Background>
			<Paper>
				<SignUpDisplay onSubmit={onSubmit} />
			</Paper>
		</Background>
	);
};
