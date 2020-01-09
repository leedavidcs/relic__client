import { IHeaderConfig } from "@/components/data-grid.component";
import React, { FC, ReactNode } from "react";
import { Size } from "react-virtualized-auto-sizer";
import { AutoSizerProvider } from "./auto-sizer-provider.component";
import { DataContext, DataValue } from "./data.context";
import { HeadersProvider } from "./headers-provider.component";
import { SelectedCellProvider } from "./selected-cell-provider.component";

export * from "./auto-sizer-provider.component";
export * from "./data.context";
export * from "./headers-provider.component";
export * from "./selected-cell-provider.component";

interface IProps {
	children: (size: Size) => ReactNode;
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	onDataChange: (data: ReadonlyArray<{ [key: string]: DataValue }>) => void;
	headers: ReadonlyArray<IHeaderConfig>;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

export const DataGridProvider: FC<IProps> = ({
	children,
	data,
	onDataChange,
	headers,
	onHeadersChange
}) => {
	return (
		<DataContext.Provider value={{ data, onDataChange }}>
			<HeadersProvider headers={headers} onHeadersChange={onHeadersChange}>
				<SelectedCellProvider>
					<AutoSizerProvider>{children}</AutoSizerProvider>
				</SelectedCellProvider>
			</HeadersProvider>
		</DataContext.Provider>
	);
};
