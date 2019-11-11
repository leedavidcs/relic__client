import { Background, Paper } from "@/components";
import { action } from "@storybook/addon-actions";
import React from "react";
import { SignUpDisplay } from "../sign-up-display.component";

export default { title: "form|sign-up", component: SignUpDisplay };

export const standard = () => {
	const onSubmit = action("onSubmit");

	return (
		<Background>
			<Paper>
				<SignUpDisplay onSubmit={onSubmit} />
			</Paper>
		</Background>
	);
};
