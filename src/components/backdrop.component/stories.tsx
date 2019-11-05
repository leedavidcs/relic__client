import { Background } from "@/components/background.component";
import { boolean } from "@storybook/addon-knobs";
import React from "react";
import { Backdrop } from ".";

export default { title: "backdrop", component: Backdrop };

export const standard = () => {
	const active: boolean = boolean("active", false);

	return (
		<Background>
			<Backdrop active={active} />
		</Background>
	);
};
