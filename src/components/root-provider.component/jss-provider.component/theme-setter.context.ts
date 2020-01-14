import { CustomTheme, standardTheme } from "@/themes";
import { Context, createContext, Dispatch, SetStateAction } from "react";

export interface IJssProviderState {
	theme: CustomTheme;
}

export interface IThemeContextProps {
	setTheme: IJssProviderState | Dispatch<SetStateAction<CustomTheme>>;
}

export const ThemeSetterContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({
	setTheme: { theme: standardTheme }
});

ThemeSetterContext.displayName = "ThemeSetterContext";
