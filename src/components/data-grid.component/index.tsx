import React, { FC, MutableRefObject, useCallback, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeGrid } from "react-window";
import { DataCell } from "./data-cell.component";
import { DataGridContext } from "./data-grid.context";
import { InnerElement } from "./inner-element.component";
import { useStyles } from "./styles";

export * from "./data-grid.context";

const DEFAULT_ROW_HEIGHT: number = 28;

export interface IHeaderOption {
	/** The text that gets displayed on the data-grid header */
	label: string;
	/** The key of the data that is fetched for this column */
	value: string;
}

export interface IHeaderConfig extends IHeaderOption {
	/** If supplied, headers are selected by a dropdown, else this is just a plain-text input */
	options: ReadonlyArray<IHeaderOption> | null;
	/** Whether this column can be resized */
	resizable: boolean;
	/** Whether this column can be dragged (for re-sorting) */
	sortable: boolean;
	/** The width of this column */
	width: number;
}

interface IProps {
	/** Entities array */
	data: ReadonlyArray<{ [key: string]: any }>;
	/** Column data is: `data[headers[i].value]` */
	headers: ReadonlyArray<IHeaderConfig>;
	/** `headers` is a controlled property, to be set externally through `onHeadersChange` */
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

export const DataGrid: FC<IProps> = ({ data: propsData, headers, onHeadersChange }) => {
	const classes = useStyles();
	const [data, setData] = useState<ReadonlyArray<{ [key: string]: any }>>(propsData);
	const [selectedCell, setSelectedCell] = useState<{ x: number; y: number } | null>(null);

	const ref: MutableRefObject<VariableSizeGrid | null> = useRef(null);

	const getColumnWidth = useCallback((columnIndex: number) => headers[columnIndex].width, [
		headers
	]);
	const getRowHeight = useCallback(() => DEFAULT_ROW_HEIGHT, []);
	const columnCount: number = headers.length;
	const rowCount: number = data.length;

	const setHeaderWidth = useCallback(
		(width: number, index: number) => {
			const grid: VariableSizeGrid | null = ref.current;

			if (!grid) {
				return;
			}

			const updatedHeader: IHeaderConfig = { ...headers[index], width };
			const newHeaders: ReadonlyArray<IHeaderConfig> = [
				...headers.slice(0, index),
				updatedHeader,
				...headers.slice(index + 1)
			];
			grid.resetAfterColumnIndex(index);

			onHeadersChange(newHeaders);
		},
		[headers, onHeadersChange]
	);

	return (
		<DataGridContext.Provider
			value={{
				data,
				headers,
				onHeadersChange,
				selectedCell,
				setData,
				setHeaderWidth,
				setSelectedCell
			}}
		>
			<div className={classes.root}>
				<AutoSizer>
					{({ height, width }) => (
						<VariableSizeGrid
							ref={ref}
							columnWidth={getColumnWidth}
							rowHeight={getRowHeight}
							height={height}
							width={width}
							columnCount={columnCount}
							rowCount={rowCount}
							itemData={data}
							innerElementType={InnerElement}
						>
							{DataCell}
						</VariableSizeGrid>
					)}
				</AutoSizer>
			</div>
		</DataGridContext.Provider>
	);
};
