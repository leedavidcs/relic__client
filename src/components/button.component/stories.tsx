import { action } from "@storybook/addon-actions";
import React from "react";
import { Button, ButtonSize } from ".";

export default { title: "button", component: Button };

export const standard = () => {
	const onClick = action("onClick");

	return (
		<div>
			<Button onClick={onClick} size={ButtonSize.Small}>
				Small
			</Button>
			<Button onClick={onClick}>Medium</Button>
			<Button onClick={onClick} size={ButtonSize.Large}>
				Large
			</Button>
		</div>
	);
};
