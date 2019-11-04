import { ITheme } from "@/components/root-provider.component";
import { timingFunctions } from "polished";
import { createUseStyles } from "react-jss";
import { ButtonSize } from ".";

export const styles = (theme: ITheme) => ({
	root: {
		display: "inline-flex",
		alignItems: "center",
		boxSizing: "border-box",
		height: ({ size }) => {
			switch (size) {
				case ButtonSize.Small:
					return 18;
				case ButtonSize.Large:
					return 42;
				default:
					return 30;
			}
		},
		padding: ({ size }) => {
			switch (size) {
				case ButtonSize.Small:
					return "0 4px";
				case ButtonSize.Large:
					return "0 16px";
				default:
					return "0 8px";
			}
		},
		margin: 0,
		border: {
			width: 1,
			style: "solid",
			color: "#d3d3d3"
		},
		borderRadius: 4,
		outline: "none",
		backgroundColor: "#fff",
		fontSize: "0.875rem",
		fontWeight: 500,
		cursor: "pointer",
		transition: [
			`background-color 0.25s ${timingFunctions("easeInOutQuad")}`,
			`border 0.25s ${timingFunctions("easeInOutQuad")}`
		].join(),

		"&:hover": {
			borderColor: "#000",
			backgroundColor: "#dcdcdc"
		}
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
