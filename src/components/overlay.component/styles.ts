import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		position: "absolute",
		backgroundColor: theme.onSurface,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		height: "100%",
		width: "100%",
		pointerEvents: "none",
		transition: "opacity 0.4s ease",
		opacity: 0
	},
	active: {
		opacity: ({ opacity }) => opacity,
		pointerEvents: ({ clickThrough }) => (clickThrough ? "none" : "auto")
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);