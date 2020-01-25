import classnames from "classnames";
import React, { FC } from "react";
import { useStyles } from "./styles";

export type DividerVariant = "full" | "inset" | "middle";

interface IProps {
	className?: string;
	list?: boolean;
	variant?: DividerVariant;
}

export const Divider: FC<IProps> = ({ className, list, variant = "full" }) => {
	const classes = useStyles({ variant });

	const DividerElement = list ? "li" : "hr";

	return <DividerElement className={classnames(classes.root, className)} />;
};
