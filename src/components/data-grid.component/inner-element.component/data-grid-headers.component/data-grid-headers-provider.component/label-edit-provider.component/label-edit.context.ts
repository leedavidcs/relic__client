import { Context, createContext } from "react";

interface ILabelEditContextProps {
	editing: number | null;
	setEditing: (editing: number | null) => void;
}

export const LabelEditContext: Context<ILabelEditContextProps> = createContext<
	ILabelEditContextProps
>({
	editing: null,
	setEditing: () => void 0
});

LabelEditContext.displayName = "LabelEditContext";
