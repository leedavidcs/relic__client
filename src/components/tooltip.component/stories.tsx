import { Background } from "@/components/background.component";
import { Button } from "@/components/input.component";
import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import { Paper } from "@/components/paper.component";
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
		setActive(!active);
	}, [active, setActive]);

	const onClickOut = useCallback(() => {
		setActive(false);
	}, [setActive]);

	return (
		<Background>
			<Paper>
				<div
					style={{
						display: "flex",
						justifyContent: "center"
					}}
				>
					<Tooltip
						active={active}
						direction={direction}
						onClickOut={onClickOut}
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
				</div>
			</Paper>
		</Background>
	);
};
