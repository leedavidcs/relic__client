import { DataValue } from "@/components/data-grid.component";
import React, { FC } from "react";
import { ListChildComponentProps } from "react-window";
import { SortableDataRow } from "./sortable-data-row.component";

interface IProps extends ListChildComponentProps {
	data: ReadonlyArray<{ [key: string]: DataValue }>;
}

export const DataRow: FC<IProps> = ({ data, index, style }) => {
	return <SortableDataRow data={data} rowIndex={index} style={style} index={index} />;
};
