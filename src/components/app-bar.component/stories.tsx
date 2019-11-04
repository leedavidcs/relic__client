import { storiesOf } from "@storybook/react";
import React from "react";
import { AppBar } from ".";

storiesOf("app-bar", module).add("default", () => {
	return <AppBar title="Title goes here" />;
});
