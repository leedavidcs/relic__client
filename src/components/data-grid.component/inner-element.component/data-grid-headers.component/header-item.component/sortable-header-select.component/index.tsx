import { IHeaderOption } from "@/components/data-grid.component";
import { List, ListItem, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { useStyles } from "./styles";

interface IProps {
	options: ReadonlyArray<IHeaderOption>;
	value: string;
}

export const SortableHeaderSelect: FC<IProps> = ({ options, value: propsValue }) => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			{options.map(({ label, value }) => (
				<ListItem key={value} selected={value === propsValue}>
					<ListItemText primary={label} />
				</ListItem>
			))}
		</List>
	);
};
