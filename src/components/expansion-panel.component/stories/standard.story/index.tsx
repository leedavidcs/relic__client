import { ExpansionPanel } from "@/components/expansion-panel.component";
import { Paper } from "@/components/paper.component";
import { boolean } from "@storybook/addon-knobs";
import Faker from "faker";
import React, { useMemo } from "react";
import { useStyles } from "./styles";

const PARAGRAPH_COUNTS = 10;

export const StandardStory = () => {
	const classes = useStyles();

	const content: string = useMemo(() => Faker.lorem.paragraphs(PARAGRAPH_COUNTS), []);

	const active: boolean = boolean("active", true);

	return (
		<Paper>
			<ExpansionPanel
				active={active}
				header={<div className={classes.header}>Header Item</div>}
			>
				<p className={classes.content}>{content}</p>
			</ExpansionPanel>
		</Paper>
	);
};
