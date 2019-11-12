import { CustomTheme, standardTheme } from "@/themes";
import { Context, createContext, Dispatch, SetStateAction } from "react";

export interface IJssProviderState {
	theme: CustomTheme;
}

export interface IThemeContextProps {
	setState: IJssProviderState | Dispatch<SetStateAction<CustomTheme>>;
}

export const ThemeSetterContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({
	setState: { theme: standardTheme }
});

ThemeSetterContext.displayName = "ThemeSetterContext";
