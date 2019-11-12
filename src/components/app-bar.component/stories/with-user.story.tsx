import { Background } from "@/components/background.component";
import { action } from "@storybook/addon-actions";
import React from "react";
import { AppBar } from "..";

export const WithUserStory = () => {
	const onClickSignIn = action("sign in");
	const onClickSignOut = action("sign out");

	return (
		<Background>
			<AppBar
				onClickSignIn={onClickSignIn}
				onClickSignOut={onClickSignOut}
				title="Title goes here"
				user={{
					id: "",
					email: "",
					emailVerified: false,
					username: ""
				}}
			/>
		</Background>
	);
};
