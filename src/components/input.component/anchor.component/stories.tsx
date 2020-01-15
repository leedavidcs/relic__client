import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Anchor } from ".";

export default { title: "input/anchor", component: Anchor };

export const standard = () => {
	const onClick = action("onClick");

	return (
		<Background>
			<Paper>
				<div>
					<Anchor value="No Href" onClick={onClick} />
				</div>
				<div>
					<Anchor value="With Href" href="https://www.google.com" />
				</div>
			</Paper>
		</Background>
	);
};
