import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		maxWidth: "100%"
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
