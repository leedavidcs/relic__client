import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { FaApple, FaBacon } from "react-icons/fa";
import { Divider } from "..";

export const InsetStory: FC = () => {
	return (
		<List>
			<ListItem>
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary="Banana" />
			</ListItem>
			<Divider list={true} variant="inset" />
			<ListItem>
				<ListItemIcon>
					<FaApple />
				</ListItemIcon>
				<ListItemText primary="Apple" />
			</ListItem>
		</List>
	);
};
