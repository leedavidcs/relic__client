import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Backdrop } from ".";

storiesOf("backdrop", module).add("default", () => {
	const active: boolean = boolean("active", false);

	return <Backdrop active={active} />;
});
