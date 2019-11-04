import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, ButtonSize } from ".";

storiesOf("button", module).add("default", () => {
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
});
