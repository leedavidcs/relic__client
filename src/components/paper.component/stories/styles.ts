import { ITheme } from "@/components/root-provider.component";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	root: {
		padding: 20
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
