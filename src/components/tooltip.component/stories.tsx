import { Button } from "@/components/input.component";
import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import React, { useCallback, useState } from "react";
import { FaBacon } from "react-icons/fa";
import { Tooltip } from ".";

export default { title: "tooltip", component: Tooltip };

export const Standard = () => {
	const [active, setActive] = useState<boolean>(false);

	const direction = select(
		"direction",
		{
			"auto-start": "auto-start",
			auto: "auto",
			"auto-end": "auto-end",
			"top-start": "top-start",
			top: "top",
			"top-end": "top-end",
			"right-start": "right-start",
			right: "right",
			"right-end": "right-end",
			"bottom-end": "bottom-end",
			bottom: "bottom",
			"bottom-start": "bottom-start",
			"left-end": "left-end",
			left: "left",
			"left-start": "left-start"
		},
		"right-start"
	);

	const onClick = useCallback(() => {
		action("onClick");
		setActive(!active);
	}, [active, setActive]);

	const onClickOut = useCallback(() => {
		action("onClickOut");
		setActive(false);
	}, [setActive]);

	return (
		<Paper style={{ display: "flex", justifyContent: "center" }}>
			<Tooltip
				active={active}
				direction={direction}
				onMouseDownOut={onClickOut}
				tooltip={
					<List>
						<ListItem>
							<ListItemIcon>
								<FaBacon />
							</ListItemIcon>
							<ListItemText primary="Banana" />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<FaBacon />
							</ListItemIcon>
							<ListItemText primary="Apple" />
						</ListItem>
					</List>
				}
			>
				<Button onClick={onClick}>Toggle</Button>
			</Tooltip>
		</Paper>
	);
};
