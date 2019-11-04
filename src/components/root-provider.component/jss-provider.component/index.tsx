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
import { ThemeProvider } from "react-jss";

export interface IJssProviderState {
	theme: CustomTheme;
}

export interface IThemeContextProps {
	setState: IJssProviderState | Dispatch<SetStateAction<CustomTheme>>;
}

export const themeContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({
	setState: { theme: standardTheme }
});

export const JssProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<CustomTheme>(standardTheme);

	return (
		<themeContext.Provider value={{ setState: setTheme }}>
			<ThemeProvider theme={theme}>{children as ReactElement}</ThemeProvider>
		</themeContext.Provider>
	);
};
