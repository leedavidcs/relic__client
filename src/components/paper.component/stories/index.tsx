import Faker from "faker";
import React, { FC } from "react";
import { Paper } from "../";
import { useStyles } from "./styles";

export default { title: "paper", component: Paper };

const Story: FC<{}> = () => {
	Faker.seed(1);

	const heading: string = Faker.lorem.word();
	const paragraph: string = Faker.lorem.paragraph();

	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<div>
				<h1>{heading}</h1>
				<p>{paragraph}</p>
			</div>
		</Paper>
	);
};

export const standard = () => <Story />;
