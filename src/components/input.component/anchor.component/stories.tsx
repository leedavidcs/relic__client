import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Anchor } from ".";

export default { title: "general/inputs/anchor", component: Anchor };

export const standard = () => {
	const onClick = action("onClick");

	return (
		<Paper>
			<div>
				<Anchor value="No Href" onClick={onClick} />
			</div>
			<div>
				<Anchor value="With Href" href="https://www.google.com" />
			</div>
		</Paper>
	);
};
