import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

export const styles = (theme: CustomTheme) => ({
	root: {},
	btnContainer: {
		paddingTop: 8
	},
	signUpBtn: {
		width: 140
	},
	textInput: {
		marginBottom: 16
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
