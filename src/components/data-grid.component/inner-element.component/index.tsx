import { IHeaderConfig } from "@/components/data-grid.component";
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
import { DataGridContext } from "..";
import { DataGridBody } from "./data-grid-body.component";
import { DataGridHeaders } from "./data-grid-headers.component";
import { DataGridHeadersContext } from "./data-grid-headers.context";
import { useStyles } from "./styles";

export * from "./data-grid-headers.component";
export * from "./data-grid-headers.context";

const RESIZE_HANDLE_CLASS: string = "RESIZE_HANDLE_CLASS";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const InnerElement: ForwardRefExoticComponent<RefAttributes<HTMLDivElement> &
	Props> = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
	const classes = useStyles();
	const { data, headers, setData, setHeaders, setHeaderWidth } = useContext(DataGridContext);

	const onHeaderSortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const sortedHeaders: ReadonlyArray<IHeaderConfig> = arrayMove(
				headers,
				oldIndex,
				newIndex
			);

			setHeaders(sortedHeaders);
		},
		[headers, setHeaders]
	);

	const onBodySortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const sortedData: ReadonlyArray<{ [key: string]: any }> = arrayMove(
				data,
				oldIndex,
				newIndex
			);

			setData(sortedData);
		},
		[data, setData]
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
		<div ref={ref} {...rest}>
			<DataGridHeadersContext.Provider
				value={{
					onResize: onHeaderResize,
					resizeHandleClassName: RESIZE_HANDLE_CLASS
				}}
			>
				<DataGridHeaders
					className={classes.headers}
					headers={headers}
					onSortEnd={onHeaderSortEnd}
					axis="x"
					lockAxis="x"
					shouldCancelStart={shouldCancelStart}
					helperClass={classes.dragHeadersHelper}
				/>
			</DataGridHeadersContext.Provider>
			<DataGridBody
				className={classes.body}
				onSortEnd={onBodySortEnd}
				axis="y"
				lockAxis="y"
				useDragHandle={true}
			>
				{children}
			</DataGridBody>
		</div>
	);
});
