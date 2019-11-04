import { storiesOf } from "@storybook/react";
import Faker from "faker";
import React from "react";
import { Toolbar } from ".";

Faker.seed(1);

const content: string = Faker.lorem.sentence();

storiesOf("toolbar", module).add("default", () => {
	return <Toolbar>{content}</Toolbar>;
});
