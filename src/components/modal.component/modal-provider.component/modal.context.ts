import { Context, createContext, ReactNode } from "react";

interface IModalContextProps {
	active: boolean;
	setContent: (content: { title: string; body: ReactNode } | null) => void;
	toggle: (force?: boolean) => void;
}

export const ModalContext: Context<IModalContextProps> = createContext<IModalContextProps>({
	active: false,
	setContent: () => void 0,
	toggle: () => void 0
});

ModalContext.displayName = "ModalContext";
