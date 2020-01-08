import { Context, createContext } from "react";
import { IHeaderConfig } from ".";

interface IHeadersContextProps {
	headers: ReadonlyArray<IHeaderConfig>;
	onHeadersChange: (headers: ReadonlyArray<IHeaderConfig>) => void;
	setHeaderWidth: (width: number, index: number) => void;
}

export const HeadersContext: Context<IHeadersContextProps> = createContext<IHeadersContextProps>({
	headers: [],
	onHeadersChange: () => void 0,
	setHeaderWidth: () => void 0
});

HeadersContext.displayName = "HeadersContext";
