import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {},
	btnContainer: {
		paddingTop: 8,
		textAlign: "right"
	},
	textInput: {
		marginBottom: 16
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
