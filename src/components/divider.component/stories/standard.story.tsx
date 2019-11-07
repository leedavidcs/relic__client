import { Background } from "@/components/background.component";
import { List, ListItem, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { Divider } from "..";

export const StandardStory: FC = () => {
	return (
		<Background>
			<List>
				<ListItem>
					<ListItemText primary="Banana" />
				</ListItem>
				<Divider list={true} />
				<ListItem>
					<ListItemText primary="Apple" />
				</ListItem>
			</List>
		</Background>
	);
};
