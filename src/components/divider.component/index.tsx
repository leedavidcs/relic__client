import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

const variants = ["full", "inset", "middle"] as const;

interface IProps {
	className?: string;
	list?: boolean;
	variant?: typeof variants[number];
}

export const Divider: FC<IProps> = (props) => {
	const { className, list } = props;

	const classes = useStyles(props);

	const DividerElement = list ? "li" : "hr";

	return <DividerElement className={classnames(classes.root, className)} />;
};

Divider.defaultProps = {
	variant: "full"
};
