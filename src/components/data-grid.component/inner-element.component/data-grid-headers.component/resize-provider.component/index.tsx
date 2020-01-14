import { HeadersContext } from "@/components/data-grid.component";
import React, { FC, ReactNode, useCallback, useContext, useState } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import { ResizeContext } from "./resize.context";

export * from "./resize.context";

// Required in order differentiate click handlers from drag-end
const RESIZE_HANDLE_DRAG_END_DELAY: number = 100;

interface IProps {
	children: ReactNode;
	resizeHandleClassName: string;
}

export const ResizeProvider: FC<IProps> = ({ children, resizeHandleClassName }) => {
	const { headers, setHeaderWidth } = useContext(HeadersContext);

	const [isResizing, setIsResizing] = useState<boolean>(false);

	const onResize = useCallback(
		(event: DraggableEvent, { deltaX }: DraggableData, i: number) => {
			event.stopPropagation();

			setIsResizing(true);

			const newWidth: number = headers[i].width + deltaX;

			setHeaderWidth(newWidth, i);
		},
		[headers, setHeaderWidth]
	);

	const onResizeEnd = useCallback((event: DraggableEvent) => {
		event.stopPropagation();

		setTimeout(() => setIsResizing(false), RESIZE_HANDLE_DRAG_END_DELAY);
	}, [setIsResizing]);

	return (
		<ResizeContext.Provider
			value={{ isResizing, onResize, onResizeEnd, resizeHandleClassName }}
		>
			{children}
		</ResizeContext.Provider>
	);
};
