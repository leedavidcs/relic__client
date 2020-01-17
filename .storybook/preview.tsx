import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import withStoryRouter from "storybook-react-router";
import { RootProvider } from "../src/components";
import { standardTheme } from "../src/themes";

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withStoryRouter());
addDecorator((getStory) => <RootProvider>{getStory()}</RootProvider>);

const loadStories = () => {
	// Dynamically load stories
	const req = require.context("../src", true, /\.?stories(\/index)?\.tsx?$/);

	return req.keys().map(req);
};

configure(loadStories, module);
