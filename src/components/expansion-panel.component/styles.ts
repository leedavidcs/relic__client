import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {},
	content: {
		width: "100%",
		overflow: "hidden"
	},
	expansion: {
		maxHeight: ({ active, height }) => (active ? height : 0)
	},
	header: {
		height: "100%",
		width: "100%"
	},
	transition: {
		transition: "max-height 0.2s ease-out"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
