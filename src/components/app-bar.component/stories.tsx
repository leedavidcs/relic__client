import { action } from "@storybook/addon-actions";
import React from "react";
import { AppBar } from ".";
import { Background } from "../background.component";

export default { title: "app-bar", component: AppBar };

export const standard = () => {
	const onClickSignIn = action("sign in");
	const onClickSignOut = action("sign out");

	return (
		<Background>
			<AppBar
				onClickSignIn={onClickSignIn}
				onClickSignOut={onClickSignOut}
				title="Title goes here"
				user={null}
			/>
		</Background>
	);
};
