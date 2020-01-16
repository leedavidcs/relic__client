import { IHeaderConfig } from "@/components/data-grid.component";
import React, { FC, ReactNode } from "react";
import { Size } from "react-virtualized-auto-sizer";
import { AutoSizerProvider } from "./auto-sizer-provider.component";
import { DataProvider, DataValue } from "./data-provider.component";
import { HeadersProvider } from "./headers-provider.component";

export * from "./auto-sizer-provider.component";
export * from "./data-provider.component";
export * from "./headers-provider.component";

interface IProps {
	children: (size: Size) => ReactNode;
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	headers: ReadonlyArray<IHeaderConfig>;
	onDataChange: (data: ReadonlyArray<{ [key: string]: DataValue }>) => void;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

/**
 * @description Global properties provider to react-window.FixedSizeList.innerElementType and
 *     react-window.FixedSizeList.children (item renderer), since they cannot be passed such props
 *     directly
 */
export const DataGridProvider: FC<IProps> = ({
	children,
	data,
	onDataChange,
	headers,
	onHeadersChange
}) => {
	return (
		<DataProvider data={data} onDataChange={onDataChange}>
			<HeadersProvider headers={headers} onHeadersChange={onHeadersChange}>
				<AutoSizerProvider>{children}</AutoSizerProvider>
			</HeadersProvider>
		</DataProvider>
	);
};
