import {
	IJssProviderState,
	ITheme,
	IThemeContextProps,
	themeContext
} from "@/components/root-provider.component";
import { Dispatch, SetStateAction, useContext } from "react";

export const useThemeChanger = (): IJssProviderState | Dispatch<SetStateAction<ITheme>> => {
	const { setState } = useContext<IThemeContextProps>(themeContext);

	return setState;
};
