import { action, HandlerFunction } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import Faker from "faker";
import React from "react";
import { Modal } from ".";

export default { title: "general/modal", component: Modal };

export const standard = () => {
	Faker.seed(1);

	const title: string = Faker.lorem.word();
	const heading: string = Faker.lorem.word();
	const paragraph: string = Faker.lorem.paragraph();

	const active: boolean = boolean("active", true);
	const onClickOutside: HandlerFunction = action("onClickOutside");
	const onClose: HandlerFunction = action("onClose");

	return (
		<Modal title={title} active={active} onClickOutside={onClickOutside} onClose={onClose}>
			<h1>{heading}</h1>
			<p>{paragraph}</p>
		</Modal>
	);
};
