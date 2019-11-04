import classnames from "classnames";
import React, { FC, useContext } from "react";
import { GridChildComponentProps } from "react-window";
import { DataGridContext } from "..";
import { SortableDataCell } from "./sortable-data-cell.component";
import { useStyles } from "./styles";

const EVEN: number = 2;

interface IProps extends GridChildComponentProps {
	data: Array<{ [key: string]: any }>;
}

export const DataCell: FC<IProps> = ({ columnIndex, data, rowIndex, style }) => {
	const classes = useStyles();
	const { headers } = useContext(DataGridContext);

	const { name } = headers[columnIndex];
	const rowData: { [key: string]: any } = data[rowIndex];
	const cellData: any = rowData[name];
	const isEven: boolean = rowIndex % EVEN === 0;

	return columnIndex === 0 ? (
		<SortableDataCell
			className={classnames(classes.sortable, {
				[classes.evenItem]: isEven
			})}
			index={rowIndex}
			style={style}
			value={cellData}
		/>
	) : (
		<div
			className={classnames(classes.item, {
				[classes.evenItem]: isEven
			})}
			style={style}
		>
			{cellData}
		</div>
	);
};
