import { Paper } from "@/components/paper.component";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { PasswordStrength } from ".";

export default { title: "general/inputs/password-strength", component: PasswordStrength };

export const standard = () => {
	const password = text("password", "");

	return (
		<Paper>
			<PasswordStrength password={password} />
		</Paper>
	);
};
