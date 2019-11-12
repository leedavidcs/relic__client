import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

export const styles = (theme: CustomTheme) => ({
	root: {
		paddingTop: 20
	},
	btnContainer: {
		paddingTop: 8
	},
	signUpBtn: {
		width: 140
	},
	textInput: {
		marginBottom: 16
	},
	signInWrapper: {
		marginTop: 28,
		fontSize: 14
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
