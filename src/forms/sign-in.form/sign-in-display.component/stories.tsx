import { Background, Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";
import { SignInDisplay } from ".";

export default { title: "form|sign-in", component: SignInDisplay };

export const Standard = () => {
	const submitAction = action("onSubmit");

	const onSubmit = useCallback(
		(values) => {
			submitAction(values);

			return true;
		},
		[submitAction]
	);

	return (
		<Background>
			<Paper>
				<SignInDisplay onSubmit={onSubmit} />
			</Paper>
		</Background>
	);
};
