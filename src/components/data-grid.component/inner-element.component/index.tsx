import {
	AutoSizerContext,
	DataContext,
	HeadersContext,
	IHeaderConfig
} from "@/components/data-grid.component";
import arrayMove from "array-move";
import React, {
	DetailedHTMLProps,
	forwardRef,
	ForwardRefExoticComponent,
	HTMLAttributes,
	RefAttributes,
	useCallback,
	useContext
} from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import { SortEndHandler, SortEvent, SortEventWithTag } from "react-sortable-hoc";
import { DataGridBody } from "./data-grid-body.component";
import { ResizeContext } from "./resize.context";
import { SortableHeaders } from "./sortable-headers.component";
import { useStyles } from "./styles";

export * from "./sortable-headers.component";
export * from "./resize.context";

const RESIZE_HANDLE_CLASS: string = "RESIZE_HANDLE_CLASS";
// Required in order to invoke click handlers, since sortable drag events block click events
const SORTABLE_HEADER_PRESS_DELAY: number = 100;

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const InnerElement: ForwardRefExoticComponent<RefAttributes<HTMLDivElement> &
	Props> = forwardRef<HTMLDivElement, Props>(({ children, ...restProps }, ref) => {
	const { width } = useContext(AutoSizerContext);
	const { data, onDataChange } = useContext(DataContext);
	const { headers, onHeadersChange, setHeaderWidth } = useContext(HeadersContext);

	const classes = useStyles({ width });

	const onHeaderSortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const sortedHeaders: ReadonlyArray<IHeaderConfig> = arrayMove(
				headers,
				oldIndex,
				newIndex
			);

			onHeadersChange(sortedHeaders);
		},
		[headers, onHeadersChange]
	);

	const onBodySortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const sortedData: ReadonlyArray<{ [key: string]: any }> = arrayMove(
				data,
				oldIndex,
				newIndex
			);

			onDataChange(sortedData);
		},
		[data, onDataChange]
	);

	const onHeaderResize = useCallback(
		(event: DraggableEvent, { deltaX }: DraggableData, i: number) => {
			event.stopPropagation();

			const newWidth: number = headers[i].width + deltaX;

			setHeaderWidth(newWidth, i);
		},
		[headers, setHeaderWidth]
	);

	const shouldCancelStart = useCallback(({ target }: SortEvent | SortEventWithTag): boolean => {
		const isResizeHandle: boolean = (target as HTMLElement).classList.contains(
			RESIZE_HANDLE_CLASS
		);

		return isResizeHandle;
	}, []);

	return (
		<div ref={ref} {...restProps}>
			<ResizeContext.Provider
				value={{
					onResize: onHeaderResize,
					resizeHandleClassName: RESIZE_HANDLE_CLASS
				}}
			>
				<SortableHeaders
					className={classes.headers}
					headers={headers}
					onSortEnd={onHeaderSortEnd}
					axis="x"
					lockAxis="x"
					shouldCancelStart={shouldCancelStart}
					helperClass={classes.dragHeadersHelper}
					pressDelay={SORTABLE_HEADER_PRESS_DELAY}
				/>
			</ResizeContext.Provider>
			<DataGridBody
				className={classes.body}
				onSortEnd={onBodySortEnd}
				axis="y"
				lockAxis="y"
				useDragHandle={true}
				helperClass={classes.dragBodyHelper}
			>
				{children}
			</DataGridBody>
		</div>
	);
});
