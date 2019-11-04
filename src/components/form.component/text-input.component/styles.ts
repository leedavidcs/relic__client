import { ITheme } from "@/components/root-provider.component";
import { timingFunctions } from "polished";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: 48,
		marginBottom: 4,
		position: "relative",
		fontWeight: 400
	},
	label: {
		display: "block",
		width: "100%",
		height: 30,
		position: "absolute",
		top: 18,
		left: 0,
		fontSize: "1rem",
		fontWeight: 400,
		color: "#40454a",
		transition: `all 0.3s ${timingFunctions("easeOutQuint")}`,
		userSelect: "none"
	},
	labelActive: {
		top: 0,
		left: 0,
		fontSize: "0.625rem",
		fontWeight: 700
	},
	textInput: {
		display: "block",
		boxSizing: "border-box",
		width: "100%",
		height: 36,
		padding: "4px 0 0",
		border: "none",
		borderBottom: {
			width: 1,
			style: "solid",
			color: "#d3d3d3"
		},
		margin: 0,
		position: "relative",
		outline: "none",
		backgroundColor: "initial",
		color: "#40454a",
		transition: `border-bottom 0.3s ${timingFunctions("easeOutQuint")}`,

		"&:focus:not($invalid)": {
			borderBottomColor: "#40454a"
		}
	},
	invalid: {
		color: "#fa5560",
		borderBottomColor: "#fa5560"
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
