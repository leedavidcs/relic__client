import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
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

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
