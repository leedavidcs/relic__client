import { IHeaderConfig, LabelEditContext } from "@/components/data-grid.component";
import React, { memo, useContext } from "react";
import { SortableContainer } from "react-sortable-hoc";
import { SortableHeaderItem } from "./sortable-header-item.component";

interface IProps {
	className?: string;
	headers: ReadonlyArray<IHeaderConfig>;
}

export const SortableDataGridHeaders = SortableContainer<IProps>(
	memo((props: IProps) => {
		const { className = "", headers } = props;

		const { editing } = useContext(LabelEditContext);

		return (
			<div className={className}>
				{headers.map((header, i) => {
					const { frozen } = header;
					const isEditing: boolean = editing === i;

					return (
						<SortableHeaderItem
							key={header.value}
							{...header}
							headerIndex={i}
							index={i}
							disabled={frozen || isEditing}
						/>
					);
				})}
			</div>
		);
	})
);
