import { breakpoints, CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

export const styles = (theme: CustomTheme) => ({
	root: {
		height: "100vh",
		width: "100vw",
		boxSizing: "border-box",
		backgroundColor: theme.background,

		[breakpoints.down("sm")]: {
			padding: "96px 25px 0"
		}
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
