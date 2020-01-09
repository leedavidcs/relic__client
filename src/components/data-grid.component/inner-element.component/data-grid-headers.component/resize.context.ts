import { createContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";

interface IResizeContextProps {
	onResize: (event: DraggableEvent, { deltaX }: DraggableData, i: number) => void;
	resizeHandleClassName: string;
}

export const ResizeContext = createContext<IResizeContextProps>({
	onResize: () => void 0,
	resizeHandleClassName: ""
});

ResizeContext.displayName = "ResizeContext";
