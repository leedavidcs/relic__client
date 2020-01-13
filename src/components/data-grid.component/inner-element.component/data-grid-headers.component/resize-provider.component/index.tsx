import { HeadersContext } from "@/components/data-grid.component";
import React, { FC, ReactNode, useCallback, useContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import { ResizeContext } from "./resize.context";

export * from "./resize.context";

interface IProps {
	children: ReactNode;
	resizeHandleClassName: string;
}

export const ResizeProvider: FC<IProps> = ({ children, resizeHandleClassName }) => {
	const { headers, setHeaderWidth } = useContext(HeadersContext);

	const onResize = useCallback(
		(event: DraggableEvent, { deltaX }: DraggableData, i: number) => {
			event.stopPropagation();

			const newWidth: number = headers[i].width + deltaX;

			setHeaderWidth(newWidth, i);
		},
		[headers, setHeaderWidth]
	);

	const onResizeEnd = useCallback(() => void 0, []);

	return (
		<ResizeContext.Provider value={{ resizeHandleClassName, onResize, onResizeEnd }}>
			{children}
		</ResizeContext.Provider>
	);
};
