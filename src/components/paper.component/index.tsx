import classnames from "classnames";
import React, { DetailedHTMLProps, forwardRef, HTMLAttributes, ReactNode } from "react";
import { useStyles } from "./styles";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}

export const Paper = forwardRef<HTMLDivElement, IProps>(
	({ className, children, ...divProps }, ref) => {
		const classes = useStyles();

		const classNames: string = classnames(classes.root, className);

		return (
			<div className={classNames} {...divProps} ref={ref}>
				{children}
			</div>
		);
	}
);
