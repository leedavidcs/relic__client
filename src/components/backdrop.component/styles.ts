import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "#000",
		opacity: 0,
		transition: "opacity 0.4s ease"
	},
	active: {
		opacity: 0.6
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
