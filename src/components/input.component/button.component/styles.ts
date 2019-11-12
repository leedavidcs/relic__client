import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

/* tslint:disable:no-magic-numbers */
export const styles = (theme: CustomTheme) => {
	const getHeight = (size) => {
		switch (size) {
			case "small":
				return 30;
			case "large":
				return 42;
			case "medium":
			default:
				return 36;
		}
	};

	const getPadding = (size) => {
		switch (size) {
			case "small":
				return "0 10px";
			case "large":
				return "0 22px";
			case "medium":
			default:
				return "0 16px";
		}
	};

	return {
		root: {
			position: "relative",
			display: "inline-flex",
			justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
			boxSizing: "borderBox",
			height: ({ size }) => getHeight(size),
			padding: ({ size }) => getPadding(size),
			margin: 0,
			border: {
				width: 1,
				style: "solid",
				radius: 4
			},
			outline: "none",
			backgroundColor: ({ color }) => theme[color],
			textAlign: "center",
			fontFamily: theme.fontPrimary,
			fontSize: "0.8125rem",
			fontWeight: "bold",
			letterSpacing: "0.02857em",
			cursor: "pointer"
		},
		rippleContainer: {
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%"
		}
	};
};

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
