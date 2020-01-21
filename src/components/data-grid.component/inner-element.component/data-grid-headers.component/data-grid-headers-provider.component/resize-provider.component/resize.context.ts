import { Context, createContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";

interface IResizeContextProps {
	onResize: (event: DraggableEvent, data: DraggableData, i: number) => void;
	isResizing: boolean;
	onResizeEnd: (event: DraggableEvent) => void;
	resizeHandleClassName: string;
}

export const ResizeContext: Context<IResizeContextProps> = createContext<IResizeContextProps>({
	isResizing: false,
	onResize: () => void 0,
	onResizeEnd: () => void 0,
	resizeHandleClassName: ""
});

ResizeContext.displayName = "ResizeContext";
