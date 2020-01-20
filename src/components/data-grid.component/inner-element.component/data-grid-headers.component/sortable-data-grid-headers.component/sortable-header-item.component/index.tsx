import { ContextMenu } from "@/components/context-menu.component";
import { IHeaderConfig } from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import { codes } from "keycode";
import React, { ChangeEvent, KeyboardEvent, useCallback } from "react";
import { SortableElement } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderSelect } from "./header-select.component";
import { useStyles } from "./styles";
import { useEditActions } from "./use-edit-actions.hook";
import { useSelectActions } from "./use-select-actions.hook";

interface IProps extends IHeaderConfig {
	headerIndex: number;
}

export const SortableHeaderItem = SortableElement<IProps>((props: IProps) => {
	const { headerIndex: index, ...headerProps } = props;
	const { options, value, width } = headerProps;

	const classes = useStyles();

	const {
		inputValue,
		isEditing,
		setInputValue,
		startEditing,
		stopEditing,
		updateLabel
	} = useEditActions(index);
	const { closeSelect, openSelect, isSelected, selectOption } = useSelectActions(index);

	const stopOperations = useCallback(() => {
		closeSelect();
		stopEditing();
	}, [closeSelect, stopEditing]);

	const onInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value),
		[setInputValue]
	);

	const onInputKeyDown = useCallback(
		({ keyCode }: KeyboardEvent<HTMLInputElement>) => {
			switch (keyCode) {
				case codes.esc:
					stopEditing();
					break;
				case codes.enter:
					updateLabel();
					stopEditing();
					break;
				default:
					return;
			}
		},
		[stopEditing, updateLabel]
	);

	return (
		<Tooltip
			className={classes.root}
			active={isSelected}
			direction="bottom-start"
			onClickOut={stopOperations}
			style={{ width }}
			tooltip={<HeaderSelect onSelect={selectOption} options={options} value={value} />}
		>
			<ContextMenu menu={<HeaderMenu onEditLabel={startEditing} />} onOpen={stopOperations}>
				{isEditing ? (
					<input
						className={classes.editLabel}
						value={inputValue}
						onChange={onInputChange}
						onKeyDown={onInputKeyDown}
						autoFocus={true}
						spellCheck={false}
					/>
				) : (
					<HeaderItem index={index} onClick={openSelect} {...headerProps} />
				)}
			</ContextMenu>
		</Tooltip>
	);
});
