import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import React, { FC } from "react";
import { FaBacon } from "react-icons/fa";

export const ProfileMenu: FC = () => {
	return (
		<List>
			<ListItem selected={false}>
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary="Your profile" />
			</ListItem>
			<ListItem selected={false}>
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary="Sign out" />
			</ListItem>
		</List>
	);
};
