import React, { FC, useCallback, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeGrid } from "react-window";
import { DataCell } from "./data-cell.component";
import { DataGridContext } from "./data-grid.context";
import { IHeaderConfig, InnerElement } from "./inner-element.component";
import { useStyles } from "./styles";

export * from "./data-grid.context";

const DEFAULT_ROW_HEIGHT: number = 28;

interface IProps {
	data: Array<{ [key: string]: any }>;
	headers: IHeaderConfig[];
	itemKey?: (params: {
		columnIndex: number;
		data: { [key: string]: any };
		rowIndex: number;
	}) => string;
}

export const DataGrid: FC<IProps> = ({ data: propsData, headers: propsHeader, itemKey }) => {
	const classes = useStyles();
	const [data, setData] = useState<Array<{ [key: string]: any }>>(propsData);
	const [headers, setHeaders] = useState<IHeaderConfig[]>(propsHeader);

	const getColumnWidth = useCallback((columnIndex: number) => headers[columnIndex].width, [
		headers
	]);
	const getRowHeight = useCallback(() => DEFAULT_ROW_HEIGHT, []);
	const columnCount: number = headers.length;
	const rowCount: number = data.length;

	return (
		<div className={classes.root}>
			<DataGridContext.Provider value={{ data, headers, setData, setHeaders }}>
				<AutoSizer>
					{({ height, width }) => (
						<VariableSizeGrid
							columnWidth={getColumnWidth}
							rowHeight={getRowHeight}
							height={height}
							width={width}
							columnCount={columnCount}
							rowCount={rowCount}
							itemData={data}
							itemKey={itemKey}
							innerElementType={InnerElement}
						>
							{DataCell}
						</VariableSizeGrid>
					)}
				</AutoSizer>
			</DataGridContext.Provider>
		</div>
	);
};
