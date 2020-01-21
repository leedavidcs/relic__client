import { List, ListItem, ListItemText } from "@/components/list.component";
import { Paper } from "@/components/paper.component";
import React, { FC, memo } from "react";
import { useStyles } from "./styles";

export interface IOption {
	text: string;
	handler: () => void;
}

interface IProps {
	options: ReadonlyArray<IOption>;
}

export const HeaderMenu: FC<IProps> = memo(({ options }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<List className={classes.list}>
				{options.map(({ text, handler }, i) => (
					<ListItem
						key={text}
						className={classes.listItem}
						onClick={handler}
						selected={false}
					>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
});
