import { CustomTheme } from "@/themes";
import { createUseStyles } from "react-jss";

const styles = (theme: CustomTheme) => ({
	"@global": {
		body: {
			overflow: "hidden"
		}
	}
});

export const useStyles = createUseStyles<CustomTheme, keyof ReturnType<typeof styles>>(styles);
