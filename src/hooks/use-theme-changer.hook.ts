import {
	IJssProviderState,
	IThemeContextProps,
	themeSetterContext
} from "@/components/root-provider.component";
import { CustomTheme } from "@/themes";
import { Dispatch, SetStateAction, useContext } from "react";

export const useThemeChanger = (): IJssProviderState | Dispatch<SetStateAction<CustomTheme>> => {
	const { setState } = useContext<IThemeContextProps>(themeSetterContext);

	return setState;
};
