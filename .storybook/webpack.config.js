const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = ({ config }) => {
	config.module.rules.push({
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

	config.module.rules.push({
		test: /\.(graphql|gql)$/,
		exclude: /node_modules/,
		loader: "graphql-tag/loader"
	});

	config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");

	config.resolve.plugins = config.resolve.plugins || [
		new TsConfigPathsPlugin({
			configFile: "tsconfig.json"
		})
	];

	return config;
};
