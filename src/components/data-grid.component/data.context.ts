import { Context, createContext } from "react";

interface IDataContextProps {
	data: ReadonlyArray<{ [key: string]: any }>;
	onDataChange: (data: ReadonlyArray<{ [key: string]: any }>) => void;
}

export const DataContext: Context<IDataContextProps> = createContext<IDataContextProps>({
	data: [],
	onDataChange: () => void 0
});

DataContext.displayName = "DataContext";
