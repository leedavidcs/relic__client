import React, { ComponentClass, ReactNode } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";

interface IInternalProps {
	children: ReactNode;
	className?: string;
}

interface IProps extends IInternalProps, SortableContainerProps {}

export const SortableDataGridBody: ComponentClass<IProps> = SortableContainer(
	({ children, className }: IInternalProps) => {
		return <div className={className}>{children}</div>;
	}
);
