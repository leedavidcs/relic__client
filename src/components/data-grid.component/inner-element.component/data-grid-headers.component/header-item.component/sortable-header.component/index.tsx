import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { ResizeHandle } from "./resize-handle.component";
import { useStyles } from "./styles";

interface IInternalProps extends IHeaderConfig {
	sortIndex: number;
}

interface IProps extends SortableElementProps, IInternalProps {}

export const SortableHeader: ComponentClass<IProps> = SortableElement<IInternalProps>(
	({ label, resizable, sortIndex }: IInternalProps) => {
		const classes = useStyles();

		return (
			<div className={classes.root}>
				<div className={classes.content}>{label}</div>
				{resizable ? <ResizeHandle index={sortIndex} /> : null}
			</div>
		);
	}
);
