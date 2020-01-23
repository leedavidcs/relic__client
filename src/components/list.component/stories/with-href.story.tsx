import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { FaApple, FaBacon } from "react-icons/fa";

export const WithHrefStory: FC = () => {
	return (
		<List divider="full">
			<ListItem href="https://google.com">
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary="Banana" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<FaApple />
				</ListItemIcon>
				<ListItemText primary="Apple" />
			</ListItem>
			<ListItem>
				<ListItemText primary="Strawberry" />
			</ListItem>
		</List>
	);
};
