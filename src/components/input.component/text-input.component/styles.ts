import { CustomTheme } from "@/themes";
import { timingFunctions, transparentize } from "polished";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: 48,
		marginBottom: 4,
		position: "relative",
		fontFamily: theme.fontPrimary,
		fontWeight: 400
	},
	label: {
		display: "block",
		width: "100%",
		height: 30,
		position: "absolute",
		top: 18,
		left: 0,
		fontSize: "1rem",
		fontWeight: 400,
		color: transparentize(1 - theme.mediumEmphasis, theme.onSurface),
		transition: `all 0.3s ${timingFunctions("easeOutQuint")}`,
		userSelect: "none"
	},
	labelActive: {
		top: 0,
		left: 0,
		fontSize: "0.625rem",
		fontWeight: 700,
		color: transparentize(1 - theme.highEmphasis, theme.onSurface)
	},
	textInput: {
		display: "block",
		boxSizing: "border-box",
		width: "100%",
		height: 36,
		padding: "4px 0 0",
		border: "none",
		borderBottom: {
			width: 1,
			style: "solid",
			color: transparentize(1 - theme.mediumEmphasis, theme.onSurface)
		},
		margin: 0,
		position: "relative",
		outline: "none",
		backgroundColor: "initial",
		color: theme.onSurface,
		transition: `border-bottom 0.3s ${timingFunctions("easeOutQuint")}`,

		"&:focus:not($invalid)": {
			borderBottomColor: transparentize(1 - theme.highEmphasis, theme.onSurface)
		}
	},
	invalid: {
		color: theme.warning,
		borderBottomColor: theme.warning
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
