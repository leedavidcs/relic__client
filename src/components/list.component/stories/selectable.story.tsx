import { Background } from "@/components/background.component";
import React, { FC, MouseEvent, useCallback, useState } from "react";
import { FaApple, FaBacon } from "react-icons/fa";
import { List, ListItem, ListItemIcon, ListItemText } from "..";

export const SelectableStory: FC = () => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const onClick = useCallback(
		(index: number) => {
			return (event: MouseEvent<HTMLLIElement>) => {
				setSelectedIndex(index);
			};
		},
		[setSelectedIndex]
	);

	return (
		<Background>
			<List>
				<ListItem selected={selectedIndex === 0} onClick={onClick(0)}>
					<ListItemIcon>
						<FaBacon />
					</ListItemIcon>
					<ListItemText primary="Banana" />
				</ListItem>
				<ListItem selected={selectedIndex === 1} onClick={onClick(1)}>
					<ListItemIcon>
						<FaApple />
					</ListItemIcon>
					<ListItemText primary="Apple" />
				</ListItem>
				<ListItem selected={selectedIndex === 2} onClick={onClick(2)}>
					<ListItemText primary="Strawberry" />
				</ListItem>
			</List>
		</Background>
	);
};