import { ITooltipLocation } from "@/hooks";
import { Context, createContext } from "react";

export interface IContextMenuRegisterHandlers {
	close: () => void;
	open: (location: ITooltipLocation) => void;
}

interface IContextMenuContextProps {
	close: (id?: string) => void;
	open: (id: string, location: ITooltipLocation) => void;
	register: (handlers: IContextMenuRegisterHandlers) => string;
	unregister: (id: string) => void;
}

export const ContextMenuContext: Context<IContextMenuContextProps> = createContext<
	IContextMenuContextProps
>({
	close: () => void 0,
	open: () => void 0,
	register: () => "",
	unregister: () => void 0
});

ContextMenuContext.displayName = "ContextMenuContext";
