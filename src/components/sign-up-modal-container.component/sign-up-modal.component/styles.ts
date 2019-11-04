import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

export const styles = (theme: CustomTheme) => ({
	formWrapper: {
		padding: 32
	},
	btnContainer: {
		paddingTop: 8,
		textAlign: "right"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
