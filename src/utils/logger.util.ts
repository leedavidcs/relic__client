import Winston from "winston";
import BrowserConsole from "winston-transport-browserconsole";

const isDev: boolean = process.env.NODE_ENV === "development";

export const Logger: Winston.Logger = Winston.createLogger({
	transports: [
		new BrowserConsole({
			format: Winston.format.simple(),
			level: "debug"
		}) as any,
		new Winston.transports.Console({
			format: Winston.format.simple(),
			level: "debug"
		})
	],
	silent: !isDev
});
