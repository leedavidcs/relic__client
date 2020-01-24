import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure, addParameters } from "@storybook/react";
import React from "react";
import withStoryRouter from "storybook-react-router";
import { RootProvider, Background } from "../src/components";

addParameters({
	options: {
		showRoots: true,
		storySort: (a, b) => {
			const isSameKind: boolean = a[1].kind === b[1].kind;

			if (isSameKind) {
				return 0;
			}

			const compared: boolean = a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

			return compared;
		}
	}
});

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withStoryRouter());
addDecorator((getStory) => (
	<RootProvider>
		<Background>{getStory()}</Background>
	</RootProvider>
));

const loadStories = () => {
	// Dynamically load stories
	const req = require.context("../src", true, /\.?stories(\/index)?\.tsx?$/);

	return req.keys().map(req);
};

configure(loadStories, module);
