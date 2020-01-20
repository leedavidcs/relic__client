import { IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { Context, createContext } from "react";

interface IHeadersContextProps {
	headers: ReadonlyArray<IHeaderConfig>;
	moveHeaderItem: (oldIndex: number, newIndex: number) => void;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
	setHeaderFreeze: (freeze: boolean, index: number) => void;
	setHeaderLabel: (label: string, index: number) => void;
	setHeaderOption: (option: IHeaderOption, index: number) => void;
	setHeaderWidth: (width: number, index: number) => void;
}

export const HeadersContext: Context<IHeadersContextProps> = createContext<IHeadersContextProps>({
	headers: [],
	moveHeaderItem: () => void 0,
	onHeadersChange: () => void 0,
	setHeaderFreeze: () => void 0,
	setHeaderLabel: () => void 0,
	setHeaderOption: () => void 0,
	setHeaderWidth: () => void 0
});

HeadersContext.displayName = "HeadersContext";
