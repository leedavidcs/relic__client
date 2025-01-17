import classnames from "classnames";
import React, { memo, NamedExoticComponent, useCallback, useContext } from "react";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import { DataGridHeadersContext } from "../../..";
import { useStyles } from "./styles";

interface IProps {
	index: number;
}

export const ResizeHandle: NamedExoticComponent<IProps> = memo<IProps>(({ index }) => {
	const classes = useStyles();
	const { resizeHandleClassName, onResize } = useContext(DataGridHeadersContext);

	const onDrag = useCallback(
		(event: DraggableEvent, data: DraggableData): void => {
			onResize(event, data, index);
		},
		[index, onResize]
	);

	return (
		<DraggableCore onDrag={onDrag}>
			<div className={classnames(classes.root, resizeHandleClassName)} />
		</DraggableCore>
	);
});
