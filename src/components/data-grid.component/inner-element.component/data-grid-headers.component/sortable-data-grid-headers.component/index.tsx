import { IHeaderConfig } from "@/components/data-grid.component";
import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { SortableHeaderItem } from "./sortable-header-item.component";

interface IProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

export const SortableDataGridHeaders = SortableContainer<IProps>((props: IProps) => {
	const { className = "", headers } = props;

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
});
