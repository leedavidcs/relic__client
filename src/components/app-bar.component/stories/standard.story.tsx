import { AppBar } from "@/components/app-bar.component";
import { action } from "@storybook/addon-actions";
import React from "react";

export const StandardStory = () => {
	const onClickSignOut = action("sign out");

	return <AppBar onClickSignOut={onClickSignOut} title="Title goes here" user={null} />;
};
