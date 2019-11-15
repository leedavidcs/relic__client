import React, { FC, MutableRefObject, useCallback, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeGrid } from "react-window";
import { DataCell } from "./data-cell.component";
import { DataGridContext } from "./data-grid.context";
import { InnerElement } from "./inner-element.component";
import { useStyles } from "./styles";

export * from "./data-grid.context";

const DEFAULT_ROW_HEIGHT: number = 28;

export interface IHeaderConfig {
	name: string;
	width: number;
	sortable: boolean;
	resizable: boolean;
}

interface IProps {
	/** Entities array */
	data: ReadonlyArray<{ [key: string]: any }>;
	/** Column data is: `data[headers[i].name]` */
	headers: ReadonlyArray<IHeaderConfig>;
}

export const DataGrid: FC<IProps> = ({ data: propsData, headers: propsHeader }) => {
	const classes = useStyles();
	const [data, setData] = useState<ReadonlyArray<{ [key: string]: any }>>(propsData);
	const [headers, setHeaders] = useState<ReadonlyArray<IHeaderConfig>>(propsHeader);
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

			setHeaders(newHeaders);
		},
		[headers]
	);

	return (
		<DataGridContext.Provider
			value={{
				data,
				headers,
				selectedCell,
				setData,
				setHeaders,
				setHeaderWidth,
				setSelectedCell
			}}
		>
			<div className={classes.root}>
				<AutoSizer>
					{({ height, width }) => {
						return (
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
						);
					}}
				</AutoSizer>
			</div>
		</DataGridContext.Provider>
	);
};
