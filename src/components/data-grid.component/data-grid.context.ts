import { Context, createContext, Dispatch, SetStateAction } from "react";
import { IHeaderConfig } from "./inner-element.component";

interface IDataGridContextProps {
	data: Array<{ [key: string]: any }>;
	headers: IHeaderConfig[];
	setData: Dispatch<SetStateAction<Array<{ [key: string]: any }>>>;
	setHeaders: Dispatch<SetStateAction<IHeaderConfig[]>>;
}

export const DataGridContext: Context<IDataGridContextProps> = createContext<IDataGridContextProps>(
	{
		data: [] as Array<{ [key: string]: any }>,
		headers: [] as IHeaderConfig[],
		setData: () => {
			return;
		},
		setHeaders: () => {
			return;
		}
	}
);

DataGridContext.displayName = "DataGridContext";
