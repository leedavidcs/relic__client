import {
	IJssProviderState,
	IThemeContextProps,
	ThemeSetterContext
} from "@/components/root-provider.component";
import { CustomTheme } from "@/themes";
import { Dispatch, SetStateAction, useContext } from "react";

export const useThemeChanger = (): IJssProviderState | Dispatch<SetStateAction<CustomTheme>> => {
	const { setState } = useContext<IThemeContextProps>(ThemeSetterContext);

	return setState;
};
