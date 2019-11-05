import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button, ButtonSize } from ".";

export default { title: "button", component: Button };

export const standard = () => {
	const onClick = action("onClick");

	return (
		<Background>
			<Paper>
				<Button onClick={onClick} size={ButtonSize.Small}>
					Small
				</Button>
				<Button onClick={onClick}>Medium</Button>
				<Button onClick={onClick} size={ButtonSize.Large}>
					Large
				</Button>
			</Paper>
		</Background>
	);
};
