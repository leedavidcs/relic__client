import initStoryshots, { snapshotWithOptions } from "@storybook/addon-storyshots";

initStoryshots({
	test: snapshotWithOptions({
		createNodeMock: (elem: React.ReactElement) => {
			if (elem.type === "input") {
				return document.createElement("input");
			}
		}
	})
});
