import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

interface IProps {
	className?: string;
	stickTop?: boolean;
}

export const Toolbar: FC<IProps> = ({ children, className, stickTop = false }) => {
	const classes = useStyles({ stickTop });

	const classNames = classnames(classes.root, className);

	return <div className={classNames}>{children}</div>;
};
