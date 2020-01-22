import { Paper } from "@/components/paper.component";
import { boolean } from "@storybook/addon-knobs";
import Faker from "faker";
import React, { useMemo } from "react";
import { ExpansionPanel } from ".";

export default { title: "expansion-panel", component: ExpansionPanel };

const PARAGRAPH_COUNTS = 10;

export const Standard = () => {
	const content: string = useMemo(() => Faker.lorem.paragraphs(PARAGRAPH_COUNTS), []);

	const active: boolean = boolean("active", false);

	return (
		<Paper>
			<ExpansionPanel
				active={active}
				header={<div style={{ border: "1px solid gray", height: 50 }}>Header Item</div>}
			>
				<p style={{ border: "1px solid gray", margin: 0 }}>{content}</p>
			</ExpansionPanel>
		</Paper>
	);
};
