import { Context, createContext, MouseEventHandler } from "react";

interface IClickOutsideContextProps {
	register: (handler: MouseEventHandler<HTMLElement>) => string;
	unregister: (id: string) => void;
}

export const ClickOutsideContext: Context<IClickOutsideContextProps> = createContext<
	IClickOutsideContextProps
>({
	register: () => "",
	unregister: () => void 0
});

ClickOutsideContext.displayName = "ClickOutsideContext";
