import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		backgroundColor: theme.surface,
		color: theme.onSurface
	},
	contentWrapper: {
		display: "flex",
		height: "100%",
		paddingLeft: 6,
		paddingRight: 6,
		alignItems: "center"
	},
	menuBtnWrapper: {
		display: "flex",
		flex: "0 0 auto",
		alignItems: "center",
		justifyContent: "center",
		height: 48,
		width: 48,
		marginRight: 12,
		borderRadius: 24,
		cursor: "pointer"
	},
	title: {
		fontFamily: theme.fontPrimary,
		fontSize: "1.25rem",
		fontWeight: 500
	},
	profileIcon: {
		cursor: "pointer"
	},
	profileIconWrapper: {
		height: 32,
		width: 32,
		borderRadius: 16,
		overflow: "hidden"
	},
	searchWrapper: {
		display: "flex",
		flexGrow: 1,
		width: "auto",
		margin: "0 20px"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
