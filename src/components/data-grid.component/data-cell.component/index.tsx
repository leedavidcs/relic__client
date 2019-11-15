import classnames from "classnames";
import React, { FC, useCallback, useContext, useMemo } from "react";
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
	const { headers, selectedCell, setSelectedCell } = useContext(DataGridContext);

	const { name } = headers[columnIndex];
	const rowData: { [key: string]: any } = data[rowIndex];
	const cellData: any = rowData[name];
	const isEven: boolean = rowIndex % EVEN === 0;

	const onClick = useCallback(() => {
		setSelectedCell({
			x: columnIndex,
			y: rowIndex
		});
	}, [columnIndex, rowIndex, setSelectedCell]);

	const isSelected: boolean = useMemo(() => {
		if (selectedCell === null) {
			return false;
		}

		const { x, y } = selectedCell;

		const isSelectedColumn = x === columnIndex;
		const isSelectedRow = y === rowIndex;

		return isSelectedColumn && isSelectedRow;
	}, [columnIndex, rowIndex, selectedCell]);

	return columnIndex === 0 ? (
		<SortableDataCell
			className={classnames(classes.sortable, {
				[classes.evenItem]: isEven,
				[classes.selected]: isSelected
			})}
			index={rowIndex}
			onClick={onClick}
			style={style}
			value={cellData}
		/>
	) : (
		<div
			className={classnames(classes.item, {
				[classes.evenItem]: isEven,
				[classes.selected]: isSelected
			})}
			onClick={onClick}
			style={style}
		>
			{cellData}
		</div>
	);
};
