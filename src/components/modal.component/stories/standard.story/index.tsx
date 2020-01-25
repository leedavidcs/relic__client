import { Modal } from "@/components/modal.component";
import { action, HandlerFunction } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import Faker from "faker";
import React, { useCallback } from "react";

Faker.seed(1);

const title: string = Faker.lorem.word();
const heading: string = Faker.lorem.word();
const paragraph: string = Faker.lorem.paragraph();

export const StandardStory = () => {
	const active: boolean = boolean("active", true);
	const onClickOutside: HandlerFunction = useCallback(action("onClickOutside"), []);
	const onClose: HandlerFunction = useCallback(action("onClose"), []);

	return (
		<div style={{ height: 120 }}>
			<Modal title={title} active={active} onClickOutside={onClickOutside} onClose={onClose}>
				<h1>{heading}</h1>
				<p>{paragraph}</p>
			</Modal>
		</div>
	);
};
