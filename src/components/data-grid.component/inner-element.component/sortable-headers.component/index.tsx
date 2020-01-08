import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";
import { SortableHeaderItem } from "./sortable-header-item.component";

interface IProps extends SortableContainerProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

export const SortableHeaders: ComponentClass<IProps> = SortableContainer<IProps>(
	({ className = "", headers }: IProps) => {
		return (
			<div className={className}>
				{headers.map((header, i) => {
					const { sortable } = header;

					return (
						<SortableHeaderItem
							key={header.value}
							{...header}
							headerIndex={i}
							index={i}
							disabled={!sortable}
						/>
					);
				})}
			</div>
		);
	}
);
