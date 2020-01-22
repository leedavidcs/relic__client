import { Context, createContext, ReactNode } from "react";

interface IModalContextProps {
	active: boolean;
	setContent: (content: { title: string; body: ReactNode } | null) => void;
	toggle: (force?: boolean) => void;
}

export const ModalContext: Context<IModalContextProps> = createContext<IModalContextProps>({
	active: false,
	setContent: () => undefined,
	toggle: () => undefined
});

ModalContext.displayName = "ModalContext";
