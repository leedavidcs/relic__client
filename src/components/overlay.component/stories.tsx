import { Background } from "@/components/background.component";
import { boolean } from "@storybook/addon-knobs";
import React from "react";
import { Overlay } from ".";

export default { title: "overlay", component: Overlay };

export const standard = () => {
	const active: boolean = boolean("active", true);

	return (
		<Background>
			<Overlay active={active} />
		</Background>
	);
};
