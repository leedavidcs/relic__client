import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		display: "flex",
		pointerEvents: ["auto", "!important"] as any,
		cursor: ["ns-resize", "!important"] as any
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
