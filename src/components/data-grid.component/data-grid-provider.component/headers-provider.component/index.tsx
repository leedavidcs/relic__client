import { IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { ArrayUtil } from "@/utils";
import React, { FC, ReactNode, useCallback } from "react";
import { arrayMove } from "react-sortable-hoc";
import { HeadersContext } from "./headers.context";

export * from "./headers.context";

interface IProps {
	children: ReactNode;
	headers: ReadonlyArray<IHeaderConfig>;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

export const HeadersProvider: FC<IProps> = ({ children, headers, onHeadersChange }) => {
	const moveHeaderItem = useCallback(
		(oldIndex: number, newIndex: number) => {
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

	const setHeaderWidth = useCallback(
		(width: number, index: number) => {
			const updatedHeader: IHeaderConfig = { ...headers[index], width };
			const newHeaders: ReadonlyArray<IHeaderConfig> = ArrayUtil.replace(
				headers,
				index,
				updatedHeader
			);

			onHeadersChange(newHeaders);
		},
		[headers, onHeadersChange]
	);

	const setHeaderOption = useCallback(
		(option: IHeaderOption, index: number) => {
			const updatedHeader: IHeaderConfig = { ...headers[index], ...option };
			const newHeaders: ReadonlyArray<IHeaderConfig> = ArrayUtil.replace(
				headers,
				index,
				updatedHeader
			);

			onHeadersChange(newHeaders);
		},
		[headers, onHeadersChange]
	);

	return (
		<HeadersContext.Provider
			value={{ headers, moveHeaderItem, onHeadersChange, setHeaderOption, setHeaderWidth }}
		>
			{children}
		</HeadersContext.Provider>
	);
};
