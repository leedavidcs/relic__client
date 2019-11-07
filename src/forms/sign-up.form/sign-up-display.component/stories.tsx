import { Background } from "@/components";
import { action } from "@storybook/addon-actions";
import React from "react";
import { SignUpDisplay } from "../sign-up-display.component";

export default { title: "form|sign-up-modal", component: SignUpDisplay };

export const standard = () => {
	const onSubmit = action("onSubmit");

	return (
		<Background>
			<SignUpDisplay onSubmit={onSubmit} />
		</Background>
	);
};
