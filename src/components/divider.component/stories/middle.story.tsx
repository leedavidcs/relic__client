import { List, ListItem, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { Divider } from "..";

export const MiddleStory: FC = () => {
	return (
		<List>
			<ListItem>
				<ListItemText primary="Banana" />
			</ListItem>
			<Divider list={true} variant="middle" />
			<ListItem>
				<ListItemText primary="Apple" />
			</ListItem>
		</List>
	);
};
