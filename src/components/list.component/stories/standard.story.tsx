import { Background } from "@/components/background.component";
import React, { FC } from "react";
import { FaApple, FaBacon } from "react-icons/fa";
import { List, ListItem, ListItemIcon, ListItemText } from "..";

export const StandardStory: FC = () => {
	return (
		<Background>
			<List>
				<ListItem>
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
		</Background>
	);
};
