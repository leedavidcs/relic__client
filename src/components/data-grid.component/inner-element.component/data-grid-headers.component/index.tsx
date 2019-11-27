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
				{headers.map((header, i) => {
					const { value, sortable } = header;

					return (
						<SortableHeader
							key={value}
							sortIndex={i}
							index={i}
							disabled={sortable}
							{...header}
						/>
					);
				})}
			</div>
		);
	}
);
