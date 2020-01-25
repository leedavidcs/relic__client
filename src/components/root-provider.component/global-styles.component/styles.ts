import { breakpoints, CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	"@global": {
		"html, body, #root": {
			height: "100%"
		}
	},
	root: {
		boxSizing: "border-box",
		backgroundColor: theme.background,
		height: "100%",

		[breakpoints.up("sm")]: {
			padding: "96px 25px"
		}
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
