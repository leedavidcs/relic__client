import { CustomTheme, getZIndex } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	headers: {
		display: "flex",
		position: "sticky",
		top: 0,
		left: 0,
		backgroundColor: "#fff",
		zIndex: getZIndex("data-grid-header")
	},
	body: {
		position: "absolute",
		top: 28,
		left: 0,
		zIndex: getZIndex("data-grid-content")
	},
	dragHeadersHelper: {
		pointerEvents: ["auto", "!important"] as any,
		cursor: ["ew-resize", "!important"] as any
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
