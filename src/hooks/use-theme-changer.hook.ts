import {
	IJssProviderState,
	IThemeContextProps,
	themeContext
} from "@/components/root-provider.component";
import { CustomTheme } from "@/themes";
import { Dispatch, SetStateAction, useContext } from "react";

export const useThemeChanger = (): IJssProviderState | Dispatch<SetStateAction<CustomTheme>> => {
	const { setState } = useContext<IThemeContextProps>(themeContext);

	return setState;
};
