import Faker from "faker";
import React from "react";
import { Toolbar } from ".";

export default { title: "general/toolbar", components: Toolbar };

export const standard = () => {
	Faker.seed(1);

	const content: string = Faker.lorem.sentence();

	return <Toolbar stickTop={true}>{content}</Toolbar>;
};
