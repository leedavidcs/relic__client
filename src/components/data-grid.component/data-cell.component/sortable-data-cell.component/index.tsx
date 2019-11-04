import React, { ComponentClass, CSSProperties } from "react";
import { SortableElement } from "react-sortable-hoc";
import { DragHandle } from "./drag-handle.component";

interface IProps {
	className: string;
	index: number;
	style: CSSProperties;
	value: any;
}

export const SortableDataCell: ComponentClass<IProps> = SortableElement(
	({ className, style, value }) => (
		<div className={className} style={style}>
			<DragHandle />
			{value}
		</div>
	)
);
