import { CustomTheme, getZIndex } from "@/themes";
import { transparentize } from "polished";
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
			color: transparentize(1 - theme.mediumEmphasis, theme.onSurface)
		},
		backgroundColor: theme.gridOdd,
		color: theme.onSurface,
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	},
	sortable: {
		paddingLeft: 0
	},
	select: {
		padding: 0
	},
	evenItem: {
		backgroundColor: theme.gridEven
	},
	selected: {
		border: {
			color: theme.gridSelected,
			style: "solid",
			width: 1
		},
		zIndex: getZIndex("data-grid-selected-cell")
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
