import { CustomTheme, getZIndex } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	contextMenu: {
		position: "fixed",
		zIndex: getZIndex("context-menu")
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
