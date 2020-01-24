import classnames from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { useStyles } from "./styles";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
	primary?: ReactNode;
	secondary?: ReactNode;
}

export const ListItemText: FC<IProps> = ({ className, primary, secondary, ...restProps }) => {
	const classes = useStyles();

	return (
		<div
			className={classnames(classes.root, className, {
				[classes.multiline]: primary && secondary
			})}
			{...restProps}
		>
			{primary}
			{secondary}
		</div>
	);
};
