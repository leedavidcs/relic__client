import { ExpansionPanel } from "@/components/expansion-panel.component";
import { List, ListItem, ListItemText } from "@/components/list.component";
import { lorem } from "faker";
import React, { useCallback, useState } from "react";
import { useStyles } from "./styles";

const PARAGRAPH_COUNT = 10;
const ITEM_COUNT = 5;

const paragraphs: string = lorem.paragraphs(PARAGRAPH_COUNT);
const contents: readonly string[] = Array(ITEM_COUNT).fill(paragraphs);

export const AccordionStory = () => {
	const classes = useStyles();

	const [selected, setSelected] = useState<number>(-1);

	const selectActive = useCallback(
		(index: number) => () => setSelected(index === selected ? -1 : index),
		[selected, setSelected]
	);

	return (
		<List divider="full">
			{contents.map((content, i) => (
				<ListItem key={i} onClick={selectActive(i)} selected={selected === i}>
					{({ deferred }) => (
						<ExpansionPanel
							active={selected === i}
							header={deferred(<ListItemText primary={`Header ${i}`} />)}
						>
							<p className={classes.content}>{content}</p>
						</ExpansionPanel>
					)}
				</ListItem>
			))}
		</List>
	);
};
