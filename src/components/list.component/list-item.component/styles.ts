import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		position: "relative",
		textDecoration: "none",
		width: "100%",
		boxSizing: "border-box",
		textAlign: "left",
		padding: "8px 16px",
		cursor: ({ selected }) => (typeof selected === "boolean" ? "pointer" : "unset")
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
