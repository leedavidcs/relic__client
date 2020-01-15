import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { PasswordStrength } from ".";

export default { title: "input/password-strength", component: PasswordStrength };

export const standard = () => {
	const password = text("password", "");

	return (
		<Background>
			<Paper>
				<PasswordStrength password={password} />
			</Paper>
		</Background>
	);
};
