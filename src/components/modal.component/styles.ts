import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		position: "fixed",
		top: "0%",
		left: "50%",
		transform: "translate(-50%, -110%)",
		width: 680,
		maxHeight: "75%",
		transition: "all 0.2s ease"
	},
	"@media (max-width: 768px)": {
		root: {
			width: "100%"
		}
	},
	active: {
		top: "50%",
		transform: "translate(-50%, -50%)"
	},
	title: {
		height: 36,
		position: "relative",
		borderBottom: {
			width: 1,
			style: "solid",
			color: "#d3d3d3"
		},
		textAlign: "center",
		lineHeight: "36px"
	},
	closeBtn: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		position: "absolute",
		top: "50%",
		right: 0,
		transform: "translate(-50%, -50%)",
		cursor: "pointer"
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
