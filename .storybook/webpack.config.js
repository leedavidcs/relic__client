const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.tsx?$/,
		include: [path.resolve(__dirname, "../src")],
		use: {
			loader: "awesome-typescript-loader"
		}
	});

	config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");

	config.resolve.plugins = config.resolve.plugins || [
		new TsConfigPathsPlugin({
			configFileName: "tsconfig.paths.json"
		})
	];

	config.module.rules.forEach((rule) => (rule.exclude = rule.exclude || []));

	const configWithGql = rewireGqlTag(config);

	return configWithGql;
};
