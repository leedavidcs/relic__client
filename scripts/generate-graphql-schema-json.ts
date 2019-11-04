import { exec } from "child_process";
import DotEnv from "dotenv";

DotEnv.config();

/* tslint:disable:no-console */
exec(
	`apollo client:download-schema --endpoint=${process.env.REACT_APP_API_BASE_URL}/graphql ` + 
	"src/graphql/schema.json",
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
