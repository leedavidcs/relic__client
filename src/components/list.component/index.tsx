import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

export * from "./list-item.component";

interface IProps {
	className?: string;
}

export const List: FC<IProps> = ({ children, className }) => {
	const classes = useStyles();

	return <ul className={classnames(classes.root, className)}>{children}</ul>;
};
