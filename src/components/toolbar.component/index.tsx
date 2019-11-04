import React, { FC } from "react";
import { useStyles } from "./styles";

export interface IProps {
	stickTop?: boolean;
}

export const Toolbar: FC<IProps> = (props) => {
	const { children } = props;

	const classes = useStyles(props);

	return <div className={classes.root}>{children}</div>;
};

Toolbar.defaultProps = { stickTop: false };
