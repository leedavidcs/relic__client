import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (themes: ITheme) => ({
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

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
