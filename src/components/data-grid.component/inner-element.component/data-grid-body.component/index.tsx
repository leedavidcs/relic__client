import { AutoSizerContext, DataContext } from "@/components/data-grid.component";
import React, { FC, ReactNode, useCallback, useContext } from "react";
import { arrayMove, SortEndHandler } from "react-sortable-hoc";
import { SortableDataGridBody } from "./sortable-data-grid-body.component";
import { useStyles } from "./styles";

interface IProps {
	children: ReactNode;
}

export const DataGridBody: FC<IProps> = ({ children }) => {
	const { width } = useContext(AutoSizerContext);
	const { data, onDataChange } = useContext(DataContext);

	const classes = useStyles({ width });

	const onSortEnd: SortEndHandler = useCallback(
		({ newIndex, oldIndex }) => {
			const newData: Array<{ [key: string]: any }> = data.slice();

			const sortedData: ReadonlyArray<{ [key: string]: any }> = arrayMove(
				newData,
				oldIndex,
				newIndex
			);

			onDataChange(sortedData);
		},
		[data, onDataChange]
	);

	return (
		<SortableDataGridBody
			className={classes.root}
			onSortEnd={onSortEnd}
			axis="y"
			lockAxis="y"
			useDragHandle={true}
			helperClass={classes.helper}
		>
			{children}
		</SortableDataGridBody>
	);
};
