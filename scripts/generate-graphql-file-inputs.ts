import { exec } from "child_process";
import DotEnv from "dotenv";

DotEnv.config();

/* tslint:disable:no-console */

const strOptions = {
	endpoint: `${process.env.REACT_APP_API_BASE_URL}/graphql`,
	includes: "src/graphql/**/*.{gql,graphql}",
	localSchemaFile: "src/graphql/schema.json",
	target: "typescript"
};

const boolOptions = ["addTypename", "outputFlat", "useReadOnlyTypes"];

const outputDir: string = "src/graphql/types/generated.types/typings-graphql-inputs.ts";

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
	`apollo client:codegen ${buildOptions()} ${outputDir}`,
	(err, stdout, stderr) => {
		if (err) {
			console.error(err);

			process.exit(1);
		}

		if (stdout) {
			console.log(`stdout:\n${stdout}`);
		}

		if (stderr) {
			console.log(`stderr:\n${stderr}`);
		}

		process.exit(0);
	}
);
