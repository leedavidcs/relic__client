import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass } from "react";
import { SortableContainer, SortableContainerProps } from "react-sortable-hoc";
import { SortableHeaderItem } from "./sortable-header-item.component";

interface IInternalProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

interface IProps extends IInternalProps, SortableContainerProps {}

export const SortableDataGridHeaders: ComponentClass<IProps> = SortableContainer<IInternalProps>(
	({ className = "", headers }: IInternalProps) => {
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
