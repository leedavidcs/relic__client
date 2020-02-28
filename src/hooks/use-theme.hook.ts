import { IThemeContextProps, ThemeSetterContext } from "@/components/root-provider.component";
import { useContext } from "react";

export const useTheme = () => useContext<IThemeContextProps>(ThemeSetterContext);
