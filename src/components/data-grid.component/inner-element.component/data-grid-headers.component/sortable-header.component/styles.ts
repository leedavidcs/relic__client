import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (themes: CustomTheme) => ({
	root: {
		position: "relative",
		height: 28,
		outline: {
			width: 1,
			style: "solid",
			color: "#000"
		},
		backgroundColor: "#fff",
		cursor: "pointer"
	},
	content: {
		boxSizing: "border-box",
		paddingLeft: 4,
		width: "100%",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		lineHeight: "28px"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
