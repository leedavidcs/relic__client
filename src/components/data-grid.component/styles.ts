import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		boxSizing: "border-box",
		height: "100%",
		width: "100%",
		outline: {
			width: 1,
			style: "solid",
			color: "#000"
		}
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
