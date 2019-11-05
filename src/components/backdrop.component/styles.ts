import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.onBackground,
		opacity: 0,
		transition: "opacity 0.4s ease",
		pointerEvents: "none"
	},
	active: {
		opacity: 0.6,
		pointerEvents: "auto"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
