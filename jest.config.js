module.exports = {
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/index.tsx",
		"!src/serviceWorker.ts",
		"!**/*stor{ies,y}*.{ts,tsx}",
		"!**/*stor{ies,y}/*.{ts,tsx}",
		"!.storybook/**/*",
		"!coverage/**/*",
		"!dist/**/*",
		"!test-reports/**/*"
	],
	coverageDirectory: "./coverage",
	coverageReporters: ["cobertura", "json", "lcov", "text"],
	moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/.jest/asset-transformer.ts",
		"\\.(css|less)$": "<rootDir>/.jest/asset-transformer.ts"
	},
	setupFiles: ["<rootDir>/.jest/enzyme-adapter.ts", "<rootDir>/.jest/require-context.ts"],
	testMatch: [
		"<rootDir>/{src,storyshots}/**/*test.{ts,tsx}",
		"<rootDir>/{src,storyshots}/**/*test/index.{ts,tsx}"
	],
	testPathIgnorePatterns: ["/.storybook/", "/node_modules/", "/dist/", "/build"],
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest",
		"^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
	}
};
