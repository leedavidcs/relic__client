import { Context, createContext, Dispatch, SetStateAction } from "react";
import { IHeaderConfig } from ".";

interface IDataGridContextProps {
	data: ReadonlyArray<{ [key: string]: any }>;
	headers: ReadonlyArray<IHeaderConfig>;
	selectedCell: { x: number; y: number } | null;
	setData: Dispatch<SetStateAction<ReadonlyArray<{ [key: string]: any }>>>;
	setHeaders: Dispatch<SetStateAction<ReadonlyArray<IHeaderConfig>>>;
	setHeaderWidth: (width: number, index: number) => void;
	setSelectedCell: Dispatch<SetStateAction<{ x: number; y: number } | null>>;
}

export const DataGridContext: Context<IDataGridContextProps> = createContext<IDataGridContextProps>(
	{
		data: [] as ReadonlyArray<{ [key: string]: any }>,
		headers: [] as IHeaderConfig[],
		selectedCell: null,
		setData: () => void 0,
		setHeaders: () => void 0,
		setHeaderWidth: () => void 0,
		setSelectedCell: () => void 0
	}
);

DataGridContext.displayName = "DataGridContext";
