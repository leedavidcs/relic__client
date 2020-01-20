import React, { FC, memo, ReactNode, useMemo } from "react";
import { DataContext, DataValue } from "./data.context";

export * from "./data.context";

interface IProps {
	children: ReactNode;
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	onDataChange: (data: ReadonlyArray<{ [key: string]: DataValue }>) => void;
}

export const DataProvider: FC<IProps> = memo(({ children, data, onDataChange }) => {
	const value = useMemo(() => ({ data, onDataChange }), [data, onDataChange]);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
});
