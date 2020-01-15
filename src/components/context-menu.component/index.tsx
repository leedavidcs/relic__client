import React, { FC, MouseEvent, ReactNode, useCallback, useContext, useEffect } from "react";
import { ContextMenuContext, ILocation } from "./context-menu-provider.component";

export * from "./context-menu-provider.component";

interface IProps {
	/** Element that will be the bounding box for right click events */
	children: ReactNode;
	/** The component to render at location. This does not necessarily need to be a menu */
	menu: ReactNode;
	/** Invoked when the context menu is opened */
	onOpen?: () => void;
}

export const ContextMenu: FC<IProps> = ({ children, menu, onOpen = () => void 0 }) => {
	const { setContent, setLocation } = useContext(ContextMenuContext);

	const onContextMenu = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			event.preventDefault();

			const { clientX, clientY } = event;

			const location: ILocation = { x: clientX, y: clientY };

			setLocation(location);

			onOpen();
		},
		[onOpen, setLocation]
	);

	useEffect(() => setContent({ body: menu }), [menu, setContent]);

	return <div onContextMenu={onContextMenu}>{children}</div>;
};
