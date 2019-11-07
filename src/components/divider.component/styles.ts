import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const MARGIN_LEFT_INSET: number = 52;
const MARGIN_LEFT_MIDDLE: number = 16;
const MARGIN_RIGHT_MIDDLE: number = 16;

const styles = (theme: CustomTheme) => ({
	root: {
		height: 1,
		marginLeft: ({ variant }) => {
			switch (variant) {
				case "inset":
					return MARGIN_LEFT_INSET;
				case "middle":
					return MARGIN_LEFT_MIDDLE;
				case "full":
				default:
					return 0;
			}
		},
		marginRight: ({ variant }) => {
			switch (variant) {
				case "middle":
					return MARGIN_RIGHT_MIDDLE;
				case "full":
				case "inset":
				default:
					return 0;
			}
		},
		border: "none",
		backgroundColor: theme.onSurface,
		opacity: 0.12
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
