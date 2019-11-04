import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

interface IProps {
	className?: string;
	stickTop?: boolean;
}

export const Toolbar: FC<IProps> = (props) => {
	const { children, className } = props;

	const classes = useStyles(props);

	const classNames = classnames(classes.root, className);

	return <div className={classNames}>{children}</div>;
};

Toolbar.defaultProps = { stickTop: false };
