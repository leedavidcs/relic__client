import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";
import { SortableHeader } from "./sortable-header.component";

interface IProps extends SortableContainerProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

export const DataGridHeaders: ComponentClass<IProps> = SortableContainer<IProps>(
	({ className = "", headers }: IProps) => {
		return (
			<div className={className}>
				{headers.map(({ name, width }, i) => (
					<SortableHeader key={name} name={name} width={width} index={i} i={i} />
				))}
			</div>
		);
	}
);
