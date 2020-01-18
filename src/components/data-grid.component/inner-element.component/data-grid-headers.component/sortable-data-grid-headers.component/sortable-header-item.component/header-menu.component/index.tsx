import { List, ListItem, ListItemText } from "@/components/list.component";
import { Paper } from "@/components/paper.component";
import React, { FC, useCallback, useMemo } from "react";
import { useStyles } from "./styles";

interface IOption {
	text: string;
	handler: () => void;
}

interface IProps {
	onEditLabel: () => void;
}

export const HeaderMenu: FC<IProps> = ({ onEditLabel }) => {
	const classes = useStyles();

	const closeAfter = useCallback((handler: () => void) => () => handler(), []);

	const options: ReadonlyArray<IOption> = useMemo(
		() => [{ text: "Edit label", handler: closeAfter(onEditLabel) }],
		[closeAfter, onEditLabel]
	);

	return (
		<Paper className={classes.root}>
			<List className={classes.list}>
				{options.map(({ text, handler }, i) => (
					<ListItem key={text} onClick={handler} selected={false}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
};
