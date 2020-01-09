import { IHeaderConfig } from "@/components/data-grid.component";
import React, { FC } from "react";
import { ResizeHandle } from "./resize-handle.component";
import { useStyles } from "./styles";

interface IProps extends IHeaderConfig {
	index: number;
}

export const HeaderItem: FC<IProps> = ({ label, resizable, index }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.content}>{label}</div>
			{resizable ? <ResizeHandle index={index} /> : null}
		</div>
	);
};
