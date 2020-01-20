import { Context, createContext } from "react";

interface IScrollContextProps {
	onHorizontalScroll: (scrollOffset: number) => void;
	onVerticalScroll: (scrollOffset: number) => void;
	xOffset: number;
	yOffset: number;
}

export const ScrollContext: Context<IScrollContextProps> = createContext<IScrollContextProps>({
	onHorizontalScroll: () => void 0,
	onVerticalScroll: () => void 0,
	xOffset: 0,
	yOffset: 0
});

ScrollContext.displayName = "ScrollContext";
