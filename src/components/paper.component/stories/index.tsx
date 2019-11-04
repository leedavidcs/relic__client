import { storiesOf } from "@storybook/react";
import Faker from "faker";
import React, { FC } from "react";
import { Paper } from "../";
import { useStyles } from "./styles";

Faker.seed(1);

const heading: string = Faker.lorem.word();
const paragraph: string = Faker.lorem.paragraph();

const Story: FC<{}> = () => {
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

storiesOf("paper", module).add("default", () => {
	return <Story />;
});
