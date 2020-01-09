import { DataValue, HeadersContext, SelectedCellContext } from "@/components/data-grid.component";
import React, { ComponentClass, CSSProperties, useCallback, useContext } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { DataCell } from "./data-cell.component";
import { useStyles } from "./styles";

interface IInternalProps {
	data: ReadonlyArray<{ [key: string]: DataValue }>;
	rowIndex: number;
	style: CSSProperties;
}

interface IProps extends IInternalProps, SortableElementProps {}

export const SortableDataRow: ComponentClass<IProps> = SortableElement(
	({ data, rowIndex, style }: IInternalProps) => {
		const classes = useStyles();

		const { headers } = useContext(HeadersContext);
		const { setSelectedCell } = useContext(SelectedCellContext);

		const rowData: { [key: string]: DataValue } = data[rowIndex];

		const onClick = useCallback(
			(_, location: { x: number; y: number }) => setSelectedCell(location),
			[setSelectedCell]
		);

		return (
			<div className={classes.root} style={style}>
				{headers.map((header, i) => {
					const { value, width } = header;

					const cellData: DataValue = rowData[value];

					return (
						<DataCell
							key={`${rowIndex}__${value}`}
							columnIndex={i}
							rowIndex={rowIndex}
							onClick={onClick}
							value={cellData}
							width={width}
						/>
					);
				})}
			</div>
		);
	}
);
