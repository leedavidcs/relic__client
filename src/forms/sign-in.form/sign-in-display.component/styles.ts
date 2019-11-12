import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		paddingTop: 20
	},
	btnContainer: {
		paddingTop: 8
	},
	signInBtn: {
		width: 140
	},
	textInput: {
		marginBottom: 16
	},
	forgotPassword: {
		marginTop: 10
	},
	signUpWrapper: {
		marginTop: 28,
		fontSize: 14
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
