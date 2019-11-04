import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

export const styles = (theme: ITheme) => ({
	formWrapper: {
		padding: 32
	},
	btnContainer: {
		paddingTop: 8,
		textAlign: "right"
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
