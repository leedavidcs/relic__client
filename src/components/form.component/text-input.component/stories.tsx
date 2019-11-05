import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import Faker from "faker";
import React from "react";
import { TextInput } from ".";

const MAX_INPUT_LENGTH: number = 5;

export default { title: "form|text-input", component: TextInput };

export const standard = () => {
	Faker.seed(1);

	const validator = (value: string): string | null => {
		const isValid: boolean = value.length < MAX_INPUT_LENGTH;

		return isValid ? null : "Text is too long";
	};

	return (
		<Background>
			<Paper>
				<TextInput label={"Must be fewer than 5 chars"} validator={validator} />
			</Paper>
		</Background>
	);
};
