import classnames from "classnames";
import React, { FC, ReactNode } from "react";
import { useStyles } from "./styles";

interface IProps {
	primary?: ReactNode;
	secondary?: ReactNode;
}

export const ListItemText: FC<IProps> = ({ primary, secondary }) => {
	const classes = useStyles();

	return (
		<div
			className={classnames(classes.root, {
				[classes.multiline]: primary && secondary
			})}
		>
			{primary}
			{secondary}
		</div>
	);
};
