import { addDecorator, addParameters, configure } from "@storybook/react";
import { themes } from "@storybook/theming";
import withStoryRouter from "storybook-react-router";
import { withRootProvider } from "../src/storybook";

const alphabeticSort = (a, b) => {
	const isSameKind: boolean = a[1].kind === b[1].kind;

	if (isSameKind) {
		return 0;
	}

	const compared: boolean = a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

	return compared;
};

addParameters({
	options: {
		showRoots: true,
		storySort: alphabeticSort,
		theme: themes.dark
	}
});

addDecorator(withStoryRouter());
addDecorator(withRootProvider);

configure(require.context("../src", true, /\.?stories(\/index)?\.(tsx?|mdx)$/), module);
