import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-jss-theme";

const themes = [
	{
		name: "DEFAULT",
		variables: {}
	}
];

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withThemesProvider(themes));

const req = require.context("../src", true, /\.?stories(\/index)?\.tsx?$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
