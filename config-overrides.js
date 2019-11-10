const { override, addWebpackAlias, addWebpackModuleRule } = require("customize-cra");
const Path = require("path");

module.exports = override(
	addWebpackAlias({
		"@": Path.resolve(__dirname, "src")
	}),
	addWebpackModuleRule({
		exclude: /node_modules/,
		test: /\.(graphql|gql)$/,
		use: [{ loader: "graphql-tag/loader" }]
	})
);
