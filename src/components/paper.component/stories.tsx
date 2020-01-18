import { Background } from "@/components/background.component";
import Faker from "faker";
import React from "react";
import { Paper } from ".";

export default { title: "paper", component: Paper };

export const standard = () => {
	Faker.seed(1);

	const heading: string = Faker.lorem.word();
	const paragraph: string = Faker.lorem.paragraph();

	return (
		<Background>
			<Paper>
				<h1>{heading}</h1>
				<p>{paragraph}</p>
			</Paper>
		</Background>
	);
};
