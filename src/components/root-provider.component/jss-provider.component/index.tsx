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
import { DefaultTheme, ITheme } from "./themes";

export * from "./themes";

export interface IJssProviderState {
	theme: ITheme;
}

export interface IThemeContextProps {
	setState: IJssProviderState | Dispatch<SetStateAction<ITheme>>;
}

export const themeContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({
	setState: { theme: DefaultTheme }
});

export const JssProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<ITheme>(DefaultTheme);

	return (
		<themeContext.Provider value={{ setState: setTheme }}>
			<ThemeProvider theme={theme}>{children as ReactElement}</ThemeProvider>
		</themeContext.Provider>
	);
};
