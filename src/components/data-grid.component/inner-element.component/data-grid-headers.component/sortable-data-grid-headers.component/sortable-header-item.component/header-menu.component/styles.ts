import { CustomTheme } from "@/themes";
import { transparentize } from "polished";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		padding: 0,
		border: {
			style: "solid",
			width: 1,
			color: transparentize(1 - theme.mediumEmphasis, theme.onSurface)
		},
		fontFamily: theme.fontPrimary,
		fontSize: 14
	},
	list: {
		width: 200,
		borderRadius: 4
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
