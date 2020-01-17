const { override } = require("customize-cra");
const webpackCraOverrides = require("./webpack-cra-overrides");

module.exports = override.apply(null, webpackCraOverrides);
