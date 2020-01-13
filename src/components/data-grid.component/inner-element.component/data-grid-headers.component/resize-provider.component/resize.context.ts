import { createContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";

interface IResizeContextProps {
	onResize: (event: DraggableEvent, data: DraggableData, i: number) => void;
	onResizeEnd: () => void;
	resizeHandleClassName: string;
}

export const ResizeContext = createContext<IResizeContextProps>({
	onResize: () => void 0,
	onResizeEnd: () => void 0,
	resizeHandleClassName: ""
});

ResizeContext.displayName = "ResizeContext";
