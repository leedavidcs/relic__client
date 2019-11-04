const Path = require("path");
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = (config, env) => {
	config.resolve = {
		...config.resolve,
		alias: {
			"@": Path.resolve(__dirname, "src")
		}
	};

	const configWithGql = rewireGqlTag(config);

	return configWithGql;
};
