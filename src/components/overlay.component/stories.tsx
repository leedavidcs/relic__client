import { boolean } from "@storybook/addon-knobs";
import React from "react";
import { Overlay } from ".";

export default { title: "general/overlay", component: Overlay };

export const standard = () => {
	const active: boolean = boolean("active", true);

	return <Overlay active={active} relative={false} />;
};
