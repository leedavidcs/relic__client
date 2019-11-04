import { exec } from "child_process";
import DotEnv from "dotenv";

DotEnv.config();

/* tslint:disable:no-console */

const strOptions = {
	includes: "src/**/*.{gql,graphql}",
	localSchemaFile: "src/graphql/schema.json",
	target: "typescript"
};

const boolOptions = ["addTypename", "outputFlat", "useReadOnlyTypes"];

const buildStrOptions = (): string => {
	return Object.keys(strOptions)
		.map((option) => `--${option}=${strOptions[option]}`)
		.join(" ");
};

const buildBoolOptions = (): string => {
	return boolOptions
		.map((option) => `--${option}`)
		.join(" ");
};

const buildOptions = () => `${buildStrOptions()} ${buildBoolOptions()}`;

exec(
	`apollo client:codegen ${buildOptions()} src/graphql/types/typings-grapqhl-inputs.ts`,
	(err, stdout, stderr) => {
		if (err) {
			console.error(err);

			process.exit(1);
		}

		console.log(`stdout:\n${stdout}`);
		console.log(`stderr:\n${stderr}`);

		process.exit(0);
	}
);
