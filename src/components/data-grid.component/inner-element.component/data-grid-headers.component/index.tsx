import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";

interface IProps extends SortableContainerProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

export const DataGridHeaders: ComponentClass<IProps> = SortableContainer<IProps>(
	({ className = "", headers }: IProps) => {
		return (
			<div className={className}>
				{headers.map((header, i) => (
					<HeaderItem key={header.value} {...header} index={i} />
				))}
			</div>
		);
	}
);
