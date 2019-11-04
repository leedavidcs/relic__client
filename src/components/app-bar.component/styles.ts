import { ITheme } from "@/components/root-provider.component";
import { timingFunctions } from "polished";
import { createUseStyles } from "react-jss";

const styles = (theme: ITheme) => ({
	contentWrapper: {
		display: "flex",
		height: "100%",
		paddingLeft: 6,
		paddingRight: 6,
		alignItems: "center"
	},
	menuBtnWrapper: {
		display: "flex",
		flex: "0 0 auto",
		alignItems: "center",
		justifyContent: "center",
		height: 48,
		width: 48,
		marginRight: 12,
		borderRadius: 24,
		cursor: "pointer",
		transition: `background-color 0.15s ${timingFunctions("easeInOutCubic")}`,

		"&:hover": {
			backgroundColor: "#dcdcdc"
		}
	},
	title: {
		flexGrow: 1,
		fontSize: "1.25rem",
		fontWeight: 500
	},
	profileIcon: {
		marginRight: 10
	}
});

export const useStyles = createUseStyles<ITheme, keyof ReturnType<typeof styles>>(styles);
