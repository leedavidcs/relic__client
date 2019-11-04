import { createContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";

interface IDataGridHeadersContext {
	onResize: (event: DraggableEvent, { deltaX }: DraggableData, i: number) => void;
	resizeHandleClassName: string;
}

export const DataGridHeadersContext = createContext<IDataGridHeadersContext>({
	onResize: () => {
		return;
	},
	resizeHandleClassName: ""
});

DataGridHeadersContext.displayName = "DataGridHeadersContext";
