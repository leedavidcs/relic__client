import { Context, createContext } from "react";

export type DataValue = number | string | null;

interface IDataContextProps {
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	onDataChange: (data: ReadonlyArray<{ [key: string]: DataValue }>) => void;
}

export const DataContext: Context<IDataContextProps> = createContext<IDataContextProps>({
	data: [],
	onDataChange: () => void 0
});

DataContext.displayName = "DataContext";