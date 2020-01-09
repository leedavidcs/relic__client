import { IHeaderConfig } from "@/components/data-grid.component";
import React, { FC, ReactNode, useCallback } from "react";
import { HeadersContext } from "./headers.context";

export * from "./headers.context";

interface IProps {
	children: ReactNode;
	headers: ReadonlyArray<IHeaderConfig>;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
}

export const HeadersProvider: FC<IProps> = ({ children, headers, onHeadersChange }) => {
	const setHeaderWidth = useCallback(
		(width: number, index: number) => {
			const updatedHeader: IHeaderConfig = { ...headers[index], width };
			const newHeaders: ReadonlyArray<IHeaderConfig> = [
				...headers.slice(0, index),
				updatedHeader,
				...headers.slice(index + 1)
			];

			onHeadersChange(newHeaders);
		},
		[headers, onHeadersChange]
	);

	return (
		<HeadersContext.Provider value={{ headers, onHeadersChange, setHeaderWidth }}>
			{children}
		</HeadersContext.Provider>
	);
};
