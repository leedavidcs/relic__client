import { Tooltip } from "@/components/tooltip.component";
import React, { FC, ReactNode, useCallback, useState } from "react";
import { ContextMenuContext, ILocation } from "./context-menu.context";

export * from "./context-menu.context";

export const ContextMenuProvider: FC = ({ children }) => {
	const [content, setContent] = useState<{ body: ReactNode } | null>(null);
	const [location, setLocation] = useState<ILocation | null>(null);

	const value = { location, setContent, setLocation };

	const onClickOut = useCallback(() => setLocation(null), [setLocation]);

	return (
		<ContextMenuContext.Provider value={value}>
			{children}
			{location !== null && (
				<Tooltip
					active={true}
					direction="bottom-start"
					onClickOut={onClickOut}
					tooltip={content?.body}
				>
					{location}
				</Tooltip>
			)}
		</ContextMenuContext.Provider>
	);
};
