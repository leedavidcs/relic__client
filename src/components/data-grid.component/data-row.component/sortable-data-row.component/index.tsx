import {
	DataValue,
	HeadersContext,
	IHeaderConfig,
	ScrollContext,
	SelectedCellContext
} from "@/components/data-grid.component";
import { takeRightWhile, takeWhile } from "lodash";
import React, { CSSProperties, ReactElement, useCallback, useContext, useMemo } from "react";
import { SortableElement } from "react-sortable-hoc";
import { DataCell } from "./data-cell.component";
import { useStyles } from "./styles";

interface IProps {
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	rowIndex: number;
	style: CSSProperties;
}

export const SortableDataRow = SortableElement<IProps>((props: IProps) => {
	const { data, rowIndex, style } = props;

	const { xOffset } = useContext(ScrollContext);

	const classes = useStyles({ xOffset });

	const { headers } = useContext(HeadersContext);
	const { setSelectedCell } = useContext(SelectedCellContext);

	const rowData: { [key: string]: DataValue } = data[rowIndex];

	const onClick = useCallback(
		(_, location: { x: number; y: number }) => setSelectedCell(location),
		[setSelectedCell]
	);

	const getCellItems = useCallback(
		(configs: ReadonlyArray<IHeaderConfig>, offset: number = 0) => {
			return configs.map((header, i) => {
				const { value, width } = header;
				const adjIndex: number = i + offset;

				const cellData: DataValue = rowData[value];

				return (
					<DataCell
						key={`${rowIndex}__${value}`}
						columnIndex={adjIndex}
						rowIndex={rowIndex}
						onClick={onClick}
						value={cellData}
						width={width}
					/>
				);
			});
		},
		[onClick, rowData, rowIndex]
	);

	const frozenCells: ReadonlyArray<ReactElement> = useMemo(
		() => getCellItems(takeWhile(headers, { frozen: true })),
		[getCellItems, headers]
	);

	const unfrozenCells: ReadonlyArray<ReactElement> = useMemo(
		() => getCellItems(takeRightWhile(headers, { frozen: false }), frozenCells.length),
		[getCellItems, headers, frozenCells.length]
	);

	return (
		<div className={classes.root} style={style}>
			<div className={classes.frozenPanel}>{frozenCells}</div>
			{unfrozenCells}
		</div>
	);
});
