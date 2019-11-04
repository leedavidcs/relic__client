import React, { FC } from "react";
import { useStyles } from "./styles";

export const Background: FC<{}> = ({ children }) => {
	const classes = useStyles();

	return <div className={classes.root}>{children}</div>;
};
