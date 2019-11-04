import React from "react";
import { AppBar } from ".";
import { Background } from "../background.component";

export default { title: "app-bar", component: AppBar };

export const standard = () => {
	return (
		<Background>
			<AppBar title="Title goes here" />
		</Background>
	);
};
