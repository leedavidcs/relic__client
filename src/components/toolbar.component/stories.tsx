import { Background } from "@/components/background.component";
import Faker from "faker";
import React from "react";
import { Toolbar } from ".";

export default { title: "toolbar", components: Toolbar };

export const standard = () => {
	Faker.seed(1);

	const content: string = Faker.lorem.sentence();

	return (
		<Background>
			<Toolbar stickTop={true}>{content}</Toolbar>
		</Background>
	);
};
