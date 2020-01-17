const { addWebpackAlias, addWebpackModuleRule } = require("customize-cra");
const path = require("path");
const _ = require("lodash");

module.exports = {
	addons: [
		"@storybook/addon-actions/register",
		"@storybook/addon-knobs/register",
		"@storybook/addon-storysource/register",
		"@storybook/addon-viewport/register",
		"storybook-addon-jss-theme/dist/register"
	],
	presets: ["@storybook/preset-create-react-app"],
	webpackFinal: async (config) => {
		const tmpConfig = _.flow(
			addWebpackAlias({
				"@": path.resolve(__dirname, "../src"),
			}),
			addWebpackModuleRule({
				exclude: /node_modules/,
				test: /\.(graphql|gql)$/,
				use: [{ loader: "graphql-tag/loader" }]
			})
		)(config);

		tmpConfig.module.rules.push({
			test: /\.tsx?$/,
			include: [path.resolve(__dirname, "../src")],
			use: [
				{
					loader: "ts-loader",
					options: {
						compilerOptions: {
							noEmit: false
						}
					}
				},
				{ loader: "react-docgen-typescript-loader" }
			]
		});

		tmpConfig.node = { ...tmpConfig.node, fs: "empty" };

		return tmpConfig;
	}
};
