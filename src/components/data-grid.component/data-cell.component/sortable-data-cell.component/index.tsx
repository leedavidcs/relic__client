import React, { ComponentClass, HTMLAttributes } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { DragHandle } from "./drag-handle.component";

interface IProps extends SortableElementProps, HTMLAttributes<HTMLDivElement> {}

export const SortableDataCell: ComponentClass<IProps> = SortableElement(
	({ children, ...props }) => {
		return (
			<div {...props}>
				<DragHandle />
				{children}
			</div>
		);
	}
);
