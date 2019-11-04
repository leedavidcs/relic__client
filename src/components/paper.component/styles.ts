import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		borderRadius: 4,
		boxShadow: [
			"0px 1px 3px 0px rgba(0,0,0,0.2)",
			"0px 1px 1px 0px rgba(0,0,0,0.14)",
			"0px 2px 1px -1px rgba(0,0,0,0.12)"
		].join(),
		backgroundColor: "#fff"
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
