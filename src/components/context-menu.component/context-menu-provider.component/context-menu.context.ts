import { Context, createContext, ReactNode } from "react";

export interface ILocation {
	x: number;
	y: number;
}

interface IContextMenuContextProps {
	location: ILocation | null;
	setContent: (content: { body: ReactNode } | null) => void;
	setLocation: (location: ILocation | null) => void;
}

export const ContextMenuContext: Context<IContextMenuContextProps> = createContext<
	IContextMenuContextProps
>({
	location: null,
	setContent: () => void 0,
	setLocation: () => void 0
});

ContextMenuContext.displayName = "ContextMenuContext";
