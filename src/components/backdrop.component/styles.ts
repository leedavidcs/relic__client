import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		display: "none",
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "#000",
		opacity: 0,
		transition: "opacity 0.4s ease"
	},
	active: {
		display: "block",
		opacity: 0.6
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
