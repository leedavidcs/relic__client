import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	item: {
		display: "flex",
		alignItems: "center",
		boxSizing: "border-box",
		padding: "0px 4px",
		borderBottom: {
			width: 1,
			style: "solid",
			color: "#000"
		},
		backgroundColor: "#fff",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	},
	sortable: {
		composes: "$item",
		paddingLeft: 0
	},
	evenItem: {
		backgroundColor: "#f3f3f3"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
