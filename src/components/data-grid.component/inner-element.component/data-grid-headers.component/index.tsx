import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";
import { SortableHeader } from "./sortable-header.component";

export interface IHeaderConfig {
	name: string;
	width: number;
	sortable: boolean;
	resizable: boolean;
}

interface IProps extends SortableContainerProps {
	className?: string;
	headers: IHeaderConfig[];
}

export const DataGridHeaders: ComponentClass<IProps> = SortableContainer(
	({ className = "", headers }) => (
		<div className={className}>
			{headers.map(({ name, width }, i) => (
				<SortableHeader key={name} name={name} width={width} index={i} />
			))}
		</div>
	)
);
