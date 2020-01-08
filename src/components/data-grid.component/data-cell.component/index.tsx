import classnames from "classnames";
import React, { FC, useCallback, useContext, useMemo } from "react";
import { GridChildComponentProps } from "react-window";
import { HeadersContext } from "../headers.context";
import { SelectedCellContext } from "../selected-cell.context";
import { SortableDataCell } from "./sortable-data-cell.component";
import { useStyles } from "./styles";

const EVEN: number = 2;

interface IProps extends GridChildComponentProps {
	data: Array<{ [key: string]: any }>;
}

export const DataCell: FC<IProps> = ({ columnIndex, data, rowIndex, style }) => {
	const classes = useStyles();

	const { headers } = useContext(HeadersContext);
	const { selectedCell, setSelectedCell } = useContext(SelectedCellContext);

	const { value } = headers[columnIndex];
	const rowData: { [key: string]: any } = data[rowIndex];
	const cellData: any = rowData[value];

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

	const isEven: boolean = rowIndex % EVEN === 0;
	const isFirstColumn: boolean = columnIndex === 0;
	const RootType = isFirstColumn ? SortableDataCell : "div";

	return (
		<RootType
			className={classnames(classes.item, {
				[classes.sortable]: isFirstColumn,
				[classes.evenItem]: isEven,
				[classes.selected]: isSelected
			})}
			onClick={onClick}
			style={style}
			index={rowIndex}
		>
			{cellData}
		</RootType>
	);
};
