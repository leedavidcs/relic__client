module.exports = {
	presets: [
		"@babel/preset-react",
		["@babel/preset-env", { targets: { node: "current" } }],
		"@babel/preset-typescript"
	],
	plugins: ["require-context-hook"]
};
