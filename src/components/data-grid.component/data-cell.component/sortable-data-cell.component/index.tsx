import React, { ComponentClass, CSSProperties } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { DragHandle } from "./drag-handle.component";

interface IProps extends SortableElementProps {
	className: string;
	onClick?: () => void;
	style: CSSProperties;
	value: any;
}

export const SortableDataCell: ComponentClass<IProps> = SortableElement(
	({ className, onClick, style, value }) => (
		<div className={className} style={style} onClick={onClick}>
			<DragHandle />
			{value}
		</div>
	)
);
