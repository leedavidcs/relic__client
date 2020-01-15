import { Background } from "@/components/background.component";
import React from "react";
import { ContextMenu } from ".";
import { Paper } from "../paper.component";
import { ContextMenuProvider } from "./context-menu-provider.component";

const MENU_SIZE: number = 200;
const PAPER_SIZE: number = 500;

export default { title: "context-menu", component: ContextMenu };

export const Standard = () => {
	return (
		<ContextMenuProvider>
			<Background>
				<ContextMenu
					menu={
						<div style={{ backgroundColor: "gray", height: MENU_SIZE, width: MENU_SIZE }} />
					}
				>
					<Paper>
						<div style={{ height: PAPER_SIZE, width: PAPER_SIZE }} />
					</Paper>
				</ContextMenu>
			</Background>
		</ContextMenuProvider>
	);
};
