import { HeadersContext, IHeaderConfig } from "@/components/data-grid.component";
import React, { FC, useCallback, useContext } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import { arrayMove, SortEndHandler, SortEvent, SortEventWithTag } from "react-sortable-hoc";
import { ResizeContext } from "./resize.context";
import { SortableDataGridHeaders } from "./sortable-data-grid-headers.component";
import { useStyles } from "./styles";

export * from "./resize.context";

// Required to prevent sorting, when the user intends to resize instead
const RESIZE_HANDLE_CLASS: string = "RESIZE_HANDLE_CLASS";
// Required in order to invoke click handlers, since sortable drag events block click events
const SORTABLE_HEADER_PRESS_DELAY: number = 100;

export const DataGridHeaders: FC<{}> = () => {
	const classes = useStyles();

	const { headers, onHeadersChange, setHeaderWidth } = useContext(HeadersContext);

	const onSortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const newHeaders: IHeaderConfig[] = headers.slice();

			const sortedHeaders: ReadonlyArray<IHeaderConfig> = arrayMove(
				newHeaders,
				oldIndex,
				newIndex
			);

			onHeadersChange(sortedHeaders);
		},
		[headers, onHeadersChange]
	);

	const onResize = useCallback(
		(event: DraggableEvent, { deltaX }: DraggableData, i: number) => {
			event.stopPropagation();

			const newWidth: number = headers[i].width + deltaX;

			setHeaderWidth(newWidth, i);
		},
		[headers, setHeaderWidth]
	);

	const onResizeEnd = useCallback(() => void 0, []);

	const shouldCancelStart = useCallback(({ target }: SortEvent | SortEventWithTag): boolean => {
		const isResizeHandle: boolean = (target as HTMLElement).classList.contains(
			RESIZE_HANDLE_CLASS
		);

		return isResizeHandle;
	}, []);

	const resizeHandleClassName: string = RESIZE_HANDLE_CLASS;

	return (
		<ResizeContext.Provider value={{ onResize, onResizeEnd, resizeHandleClassName }}>
			<SortableDataGridHeaders
				className={classes.root}
				headers={headers}
				onSortEnd={onSortEnd}
				axis="x"
				lockAxis="x"
				shouldCancelStart={shouldCancelStart}
				pressDelay={SORTABLE_HEADER_PRESS_DELAY}
				helperClass={classes.helper}
			/>
		</ResizeContext.Provider>
	);
};
