import React, { ComponentClass } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { ResizeHandle } from "./resize-handle.component";
import { useStyles } from "./styles";

interface IProps extends SortableElementProps {
	name: string;
	width: number;
	i: number;
}

export const SortableHeader: ComponentClass<IProps> = SortableElement<IProps>(
	({ i, name, width }: IProps) => {
		const classes = useStyles();

		return (
			<div className={classes.root} style={{ minWidth: width }}>
				<div className={classes.content}>{name}</div>
				<ResizeHandle index={i} />
			</div>
		);
	}
);
