import { storiesOf } from "@storybook/react";
import Faker from "faker";
import React from "react";
import { TextInput } from ".";

Faker.seed(1);

const MAX_INPUT_LENGTH: number = 5;

storiesOf("text-input", module).add("default", () => {
	const validator = (value: string): string | null => {
		const isValid: boolean = value.length < MAX_INPUT_LENGTH;

		return isValid ? null : "Text is too long";
	};

	return <TextInput label={"Must be fewer than 5 chars"} validator={validator} />;
});
