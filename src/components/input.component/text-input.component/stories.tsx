import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import Faker from "faker";
import React, { CSSProperties, useCallback, useState } from "react";
import { FaBacon } from "react-icons/fa";
import { TextInput } from ".";
import { onInputValueChanged } from "../../../utils";

const MAX_INPUT_LENGTH: number = 5;

export default { title: "input|text-input", component: TextInput };

export const Standard = () => {
	Faker.seed(1);

	const [value0, setValue0] = useState<string>("");
	const [value1, setValue1] = useState<string>("");
	const [value2, setValue2] = useState<string>("");
	const [value3, setValue3] = useState<string>("");

	const validator = (value: string): string | null => {
		const isValid: boolean = value.length < MAX_INPUT_LENGTH;

		return isValid ? null : "Text is too long";
	};

	const style: CSSProperties = {
		marginBottom: 8
	};

	const onChange0 = useCallback(onInputValueChanged(setValue0), []);
	const onChange1 = useCallback(onInputValueChanged(setValue1), []);
	const onChange2 = useCallback(onInputValueChanged(setValue2), []);
	const onChange3 = useCallback(onInputValueChanged(setValue3), []);

	return (
		<Background>
			<Paper>
				<TextInput
					label={"Must be fewer than 5 chars"}
					validator={validator}
					style={style}
					onChange={onChange0}
					value={value0}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					validator={validator}
					variant="outlined"
					style={style}
					onChange={onChange1}
					value={value1}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					startIcon={<FaBacon />}
					validator={validator}
					style={style}
					onChange={onChange2}
					value={value2}
				/>
				<TextInput
					label={"Must be fewer than 5 chars"}
					startIcon={<FaBacon />}
					validator={validator}
					variant="outlined"
					style={style}
					onChange={onChange3}
					value={value3}
				/>
			</Paper>
		</Background>
	);
};
