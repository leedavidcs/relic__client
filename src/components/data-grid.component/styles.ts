import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		boxSizing: "border-box",
		height: "100%",
		width: "100%",
		outline: {
			width: 1,
			style: "solid",
			color: "#000"
		}
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
