import React, { FC } from "react";
import { FixedSizeList } from "react-window";
import { DataGridProvider } from "./data-grid-provider.component";
import { DataRow } from "./data-row.component";
import { InnerElement } from "./inner-element.component";
import { OuterElement } from "./outer-element.component";

const DEFAULT_ROW_HEIGHT: number = 28;

export * from "./data-grid-provider.component";
export * from "./inner-element.component";

export interface IHeaderOption {
	/** The text that gets displayed on the data-grid header */
	label: string;
	/** The key of the data that is fetched for this column */
	value: string;
}

export interface IHeaderConfig extends IHeaderOption {
	/** Whether this column is frozen (to the left) */
	frozen: boolean;
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
	/** Function to derive the key prop for each row of the data-grid. Defaults to index. */
	itemKey?: (index: number, data: ReadonlyArray<{ [key: string]: any }>) => string;
	/** `data` is a controlled property, to be set externally through `onDataChange` */
	onDataChange: (data: ReadonlyArray<{ [key: string]: any }>) => void;
	/** `headers` is a controlled property, to be set externally through `onHeadersChange` */
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

export const DataGrid: FC<IProps> = ({
	data,
	headers,
	itemKey = (index: number) => index,
	onHeadersChange,
	onDataChange
}) => {
	const itemCount: number = data.length;

	return (
		<DataGridProvider
			data={data}
			onDataChange={onDataChange}
			headers={headers}
			onHeadersChange={onHeadersChange}
		>
			{({ height, width }) => (
				<FixedSizeList
					height={height}
					width={width}
					itemCount={itemCount}
					itemData={data}
					itemKey={itemKey}
					itemSize={DEFAULT_ROW_HEIGHT}
					innerElementType={InnerElement}
					outerElementType={OuterElement}
				>
					{DataRow}
				</FixedSizeList>
			)}
		</DataGridProvider>
	);
};
