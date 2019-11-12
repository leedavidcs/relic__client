import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";

interface IProps extends SortableContainerProps {
	className?: string;
}

export const DataGridBody: ComponentClass<IProps> = SortableContainer(({ children, className }) => {
	return <div className={className}>{children}</div>;
});
