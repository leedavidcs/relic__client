import React, { ChangeEvent, FC } from "react";
import { useStyles } from "./styles";

interface IOption {
	label: string;
	value: string | number;
}

interface IProps {
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	options: ReadonlyArray<IOption>;
	value: string | number;
}

export const DataCellSelect: FC<IProps> = ({ onChange, options, value: propsValue }) => {
	const classes = useStyles();

	return (
		<select className={classes.root} onChange={onChange} value={propsValue}>
			{options.map(({ label, value }) => (
				<option value={value} key={value}>
					{label}
				</option>
			))}
		</select>
	);
};
