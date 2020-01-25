import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	backgroundElem: {
		height: 120,
		background: "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
