import { CustomTheme } from "@/themes";
import { timingFunctions, transparentize } from "polished";
import { createUseStyles } from "react-jss";
import { ButtonSize, ButtonType } from ".";

/* tslint:disable:no-magic-numbers */
export const styles = (theme: CustomTheme) => {
	const getSurfaceColor = (type) => {
		switch (type) {
			case ButtonType.Primary:
				return theme.primary;
			case ButtonType.PrimaryVariant:
				return theme.primaryVariant;
			case ButtonType.Secondary:
				return theme.secondary;
			case ButtonType.SecondaryVariant:
				return theme.secondaryVariant;
			case ButtonType.Error:
				return theme.error;
			case ButtonType.Warning:
				return theme.warning;
			case ButtonType.Transparent:
			default:
				return "rgba(0, 0, 0, 0)";
		}
	};

	const getTextColor = (type) => {
		switch (type) {
			case ButtonType.Primary:
			case ButtonType.PrimaryVariant:
				return theme.onPrimary;
			case ButtonType.Secondary:
			case ButtonType.SecondaryVariant:
				return theme.onSecondary;
			case ButtonType.Error:
				return theme.onError;
			case ButtonType.Warning:
				return theme.onWarning;
			case ButtonType.Transparent:
			default:
				return theme.onSurface;
		}
	};

	return {
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
				radius: 4,
				color: transparentize(1 - theme.mediumEmphasis, theme.onSurface)
			},
			outline: "none",
			backgroundColor: ({ type }) => getSurfaceColor(type),
			fontFamily: theme.fontPrimary,
			fontSize: "0.875rem",
			fontWeight: 500,
			color: ({ type }) => getTextColor(type),
			cursor: "pointer",
			transition: [
				`background-color 0.25s ${timingFunctions("easeInOutQuad")}`,
				`border 0.25s ${timingFunctions("easeInOutQuad")}`
			].join(),

			"&:hover": {
				borderColor: ({ type }) =>
					transparentize(1 - theme.highEmphasis, getTextColor(type)),
				backgroundColor: ({ type }) =>
					transparentize(1 - theme.highEmphasis, getSurfaceColor(type))
			}
		}
	};
};

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
