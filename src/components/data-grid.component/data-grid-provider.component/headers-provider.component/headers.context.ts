import { IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { Context, createContext } from "react";

interface IHeadersContextProps {
	headers: readonly IHeaderConfig[];
	moveHeaderItem: (oldIndex: number, newIndex: number) => void;
	onHeadersChange: (headers: readonly IHeaderConfig[]) => void;
	setHeaderFreeze: (freeze: boolean, index: number) => void;
	setHeaderLabel: (label: string, index: number) => void;
	setHeaderOption: (option: IHeaderOption, index: number) => void;
	setHeaderWidth: (width: number, index: number) => void;
}

export const HeadersContext: Context<IHeadersContextProps> = createContext<IHeadersContextProps>({
	headers: [],
	moveHeaderItem: () => undefined,
	onHeadersChange: () => undefined,
	setHeaderFreeze: () => undefined,
	setHeaderLabel: () => undefined,
	setHeaderOption: () => undefined,
	setHeaderWidth: () => undefined
});

HeadersContext.displayName = "HeadersContext";
