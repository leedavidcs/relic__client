import { CustomTheme, getZIndex } from "@/themes";
import { timingFunctions, transparentize } from "polished";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => {
	const getBorderColor = (variant) => ({
		outlined: transparentize(1 - theme.mediumEmphasis, theme.onSurface),
		underlined: "transparent"
	})[variant] || "transparent";

	const getFocusValidBorderColor = (variant) => ({
		outlined: theme.secondaryVariant,
		underlined: "transparent"
	})[variant] || "transparent";

	const getErrorBorderColor = (variant) => ({
		outlined: theme.error,
		underlined: "transparent"
	})[variant] || "transparent";

	return {
		root: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			height: 48,
			marginBottom: 4,
			position: "relative",
			backgroundColor: theme.surface,
			fontFamily: theme.fontPrimary,
			fontWeight: 400
		},
		label: {
			display: "inline-block",
			position: "absolute",
			top: 18,
			left: 6,
			fontSize: "1rem",
			fontWeight: 400,
			color: transparentize(1 - theme.mediumEmphasis, theme.onSurface),
			transition: `all 0.3s ${timingFunctions("easeOutQuint")}`,
			userSelect: "none"
		},
		labelActive: {
			top: 0,
			left: 6,
			padding: "0 4px",
			backgroundColor: theme.surface,
			fontSize: "0.625rem",
			fontWeight: 700,
			color: transparentize(1 - theme.highEmphasis, theme.onSurface),
			zIndex: getZIndex("text-input-label")
		},
		textInput: {
			display: "block",
			width: "100%",
			height: 36,
			padding: "4px 0 0 6px",
			borderWidth: 1,
			borderStyle: "solid",
			borderTopColor: ({ variant }) => getBorderColor(variant),
			borderLeftColor: ({ variant }) => getBorderColor(variant),
			borderRightColor: ({ variant }) => getBorderColor(variant),
			borderBottomColor: transparentize(1 - theme.mediumEmphasis, theme.onSurface),
			borderRadius: ({ variant }) => ({
				outlined: 4,
				underlined: "unset"
			})[variant] || "unset",
			margin: 0,
			position: "relative",
			outline: "none",
			backgroundColor: "rgba(0, 0, 0, 0)",
			color: theme.onSurface,
			transition: `border 0.3s ${timingFunctions("easeOutQuint")}`,
	
			"&:focus:not($invalid)": {
				borderTopColor: ({ variant }) => getFocusValidBorderColor(variant),
				borderLeftColor: ({ variant }) => getFocusValidBorderColor(variant),
				borderRightColor: ({ variant }) => getFocusValidBorderColor(variant),
				borderBottomColor: theme.secondaryVariant
			}
		},
		invalid: {
			color: theme.warning,
			borderTopColor: ({ variant }) => getErrorBorderColor(variant),
			borderLeftColor: ({ variant }) => getErrorBorderColor(variant),
			borderRightColor: ({ variant }) => getErrorBorderColor(variant),
			borderBottomColor: theme.error
		}
	};
};

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
