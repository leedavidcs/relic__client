import { CustomTheme, standardTheme } from "@/themes";
import React, { FC, useState } from "react";
import { ThemeProvider } from "react-jss";
import { ThemeSetterContext } from "./theme-setter.context";

export * from "./theme-setter.context";

export const JssProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<CustomTheme>(standardTheme);

	return (
		<ThemeSetterContext.Provider value={{ setState: setTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeSetterContext.Provider>
	);
};
