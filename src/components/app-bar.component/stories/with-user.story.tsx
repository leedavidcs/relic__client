import { action } from "@storybook/addon-actions";
import React from "react";
import { AppBar } from "..";

export const WithUserStory = () => {
	const onClickSignOut = action("sign out");

	return (
		<AppBar
			onClickSignOut={onClickSignOut}
			title="Title goes here"
			user={{
				id: "",
				email: "",
				emailVerified: false,
				username: ""
			}}
		/>
	);
};
