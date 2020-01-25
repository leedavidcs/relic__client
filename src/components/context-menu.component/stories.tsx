import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import React, { useCallback } from "react";
import { ContextMenu } from ".";

const MENU_SIZE = 200;
const PAPER_SIZE = 500;

export default { title: "general/context-menu", component: ContextMenu };

export const Standard = () => {
	const onClose0 = useCallback(action("onClose0"), []);
	const onClose1 = useCallback(action("onClose1"), []);
	const onOpen0 = useCallback(action("onOpen0"), []);
	const onOpen1 = useCallback(action("onOpen1"), []);

	return (
		<div style={{ display: "flex" }}>
			<div style={{ flexGrow: 1 }}>
				<ContextMenu
					menu={
						<div
							style={{
								backgroundColor: "red",
								height: MENU_SIZE,
								width: MENU_SIZE
							}}
						/>
					}
					onClose={onClose0}
					onOpen={onOpen0}
				>
					<Paper>
						<div style={{ height: PAPER_SIZE, width: PAPER_SIZE }} />
					</Paper>
				</ContextMenu>
			</div>
			<div style={{ flexGrow: 1 }}>
				<ContextMenu
					menu={
						<div
							style={{
								backgroundColor: "blue",
								height: MENU_SIZE,
								width: MENU_SIZE
							}}
						/>
					}
					onClose={onClose1}
					onOpen={onOpen1}
				>
					<Paper>
						<div style={{ height: PAPER_SIZE, width: PAPER_SIZE }} />
					</Paper>
				</ContextMenu>
			</div>
		</div>
	);
};
