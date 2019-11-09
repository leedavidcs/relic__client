import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import Faker from "faker";
import React, { CSSProperties } from "react";
import { FaBacon } from "react-icons/fa";
import { TextInput } from ".";

const MAX_INPUT_LENGTH: number = 5;

export default { title: "input|text-input", component: TextInput };

export const Standard = () => {
	Faker.seed(1);

	const validator = (value: string): string | null => {
		const isValid: boolean = value.length < MAX_INPUT_LENGTH;

		return isValid ? null : "Text is too long";
	};

	const style: CSSProperties = {
		marginBottom: 8
	};

	return (
		<Background>
			<Paper>
				<TextInput
					label={"Must be fewer than 5 chars"}
					validator={validator}
					style={style}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					validator={validator}
					variant="outlined"
					style={style}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					startIcon={<FaBacon />}
					validator={validator}
					style={style}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					startIcon={<FaBacon />}
					validator={validator}
					variant="outlined"
					style={style}
				/>
			</Paper>
		</Background>
	);
};
