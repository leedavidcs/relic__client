import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

export type DividerVariant = "full" | "inset" | "middle";

interface IProps {
	className?: string;
	list?: boolean;
	variant?: DividerVariant;
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
