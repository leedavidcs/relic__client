import { IHeaderOption } from "@/components/data-grid.component";
import { List, ListItem, ListItemText } from "@/components/list.component";
import React, { FC, useCallback } from "react";
import { useStyles } from "./styles";

interface IProps {
	onSelect: (option: IHeaderOption) => void;
	options: ReadonlyArray<IHeaderOption>;
	value: string;
}

export const SortableHeaderSelect: FC<IProps> = ({ onSelect, options, value: propsValue }) => {
	const classes = useStyles();

	const onClick = useCallback((option: IHeaderOption) => () => onSelect(option), [onSelect]);

	return (
		<List className={classes.root}>
			{options.map((option) => {
				const { label, value } = option;

				return (
					<ListItem key={value} selected={value === propsValue} onClick={onClick(option)}>
						<ListItemText primary={label} />
					</ListItem>
				);
			})}
		</List>
	);
};
