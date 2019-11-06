import { CustomTheme, standardTheme } from "@/themes";
import React, {
	Context,
	createContext,
	Dispatch,
	FC,
	ReactElement,
	SetStateAction,
	useState
} from "react";
import { createTheming } from "react-jss";

export interface IJssProviderState {
	theme: CustomTheme;
}

export interface IThemeContextProps {
	setState: IJssProviderState | Dispatch<SetStateAction<CustomTheme>>;
	useTheme: () => CustomTheme;
}

export const themeSetterContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({
	setState: { theme: standardTheme },
	useTheme: () => standardTheme
});

export const JssProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<CustomTheme>(standardTheme);

	const themeContext: Context<CustomTheme> = createContext<CustomTheme>(theme);
	const { ThemeProvider, useTheme } = createTheming(themeContext);

	return (
		<themeSetterContext.Provider value={{ setState: setTheme, useTheme }}>
			<ThemeProvider theme={theme}>{children as ReactElement}</ThemeProvider>
		</themeSetterContext.Provider>
	);
};
