import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		backgroundColor: theme.onSurface,
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		height: "100%",
		width: "100%",
		pointerEvents: "none"
	},
	active: {
		opacity: ({ active, opacity }) => (active ? opacity : 0),
		pointerEvents: ({ clickThrough }) => (clickThrough ? "none" : "auto")
	},
	transition: {
		transition: ({ animate }) => (animate ? "opacity 0.4s ease" : "all 0s ease 0s")
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
