import { Modal } from "@/components/modal.component";
import { action, HandlerFunction } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import Faker from "faker";
import React, { Fragment, useCallback } from "react";

Faker.seed(1);

const title: string = Faker.lorem.word();
const heading: string = Faker.lorem.word();
const paragraph: string = Faker.lorem.paragraph();

export const StandardStory = () => {
	const active: boolean = boolean("active", true);
	const onClickOut: HandlerFunction = useCallback(action("onClickOut"), []);
	const onClose: HandlerFunction = useCallback(action("onClose"), []);

	return (
		<div style={{ height: 120 }}>
			<Modal title={title} active={active} onClickOut={onClickOut} onClose={onClose}>
				<Fragment>
					<h1>{heading}</h1>
					<p>{paragraph}</p>
				</Fragment>
			</Modal>
		</div>
	);
};
