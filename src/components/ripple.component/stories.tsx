import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import React from "react";
import { Ripple } from ".";

const RIPPLE_CONTAINER_SIZE: number = 500;

export default { title: "ripple", component: Ripple };

export const standard = () => {
	return (
		<Background>
			<Paper>
				<div style={{ height: RIPPLE_CONTAINER_SIZE }}>
					<Ripple />
				</div>
			</Paper>
		</Background>
	);
};
