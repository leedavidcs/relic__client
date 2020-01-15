import { ClickOutside } from "@/components/click-outside.component";
import React, { FC, ReactNode, useCallback, useState } from "react";
import { ContextMenuContext, ILocation } from "./context-menu.context";
import { useStyles } from "./styles";

export * from "./context-menu.context";

export const ContextMenuProvider: FC = ({ children }) => {
	const classes = useStyles();

	const [content, setContent] = useState<{ body: ReactNode } | null>(null);
	const [location, setLocation] = useState<ILocation | null>(null);

	const value = { location, setContent, setLocation };

	const onClickOut = useCallback(() => setLocation(null), [setLocation]);

	return (
		<ContextMenuContext.Provider value={value}>
			{children}
			{location !== null && (
				<ClickOutside
					className={classes.contextMenu}
					onClickOut={onClickOut}
					style={{ top: location.y, left: location.x }}
				>
					{content?.body}
				</ClickOutside>
			)}
		</ContextMenuContext.Provider>
	);
};
