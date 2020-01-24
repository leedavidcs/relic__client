import { Paper } from "@/components/paper.component";
import React from "react";
import { Ripple } from ".";

const RIPPLE_CONTAINER_SIZE = 500;

export default { title: "general/ripple", component: Ripple };

export const standard = () => {
	return (
		<Paper>
			CLICK BELOW:
			<div style={{ height: RIPPLE_CONTAINER_SIZE, position: "relative" }}>
				<Ripple />
			</div>
		</Paper>
	);
};
