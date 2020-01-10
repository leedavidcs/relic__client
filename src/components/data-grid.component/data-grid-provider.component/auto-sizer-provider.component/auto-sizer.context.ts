import { Context, createContext } from "react";

const DEFAULT_HEIGHT: number = 500;
const DEFAULT_WIDTH: number = 500;

interface IAutoSizerContextProps {
	height: number;
	width: number;
}

export const AutoSizerContext: Context<IAutoSizerContextProps> = createContext<
	IAutoSizerContextProps
>({
	height: DEFAULT_HEIGHT,
	width: DEFAULT_WIDTH
});

AutoSizerContext.displayName = "AutoSizerContext";
