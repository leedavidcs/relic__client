import { ContextMenu } from "@/components/context-menu.component";
import {
	HeadersContext,
	IHeaderConfig,
	IHeaderOption,
	ResizeContext
} from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import Keycode from "keycode";
import React, {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useContext,
	useEffect,
	useState
} from "react";
import { SortableElement } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderSelect } from "./header-select.component";
import { useStyles } from "./styles";

interface IProps extends IHeaderConfig {
	headerIndex: number;
}

export const SortableHeaderItem = SortableElement<IProps>((props: IProps) => {
	const { headerIndex: index, ...headerProps } = props;
	const { label, options, value, width } = headerProps;

	const classes = useStyles();

	const { setHeaderOption } = useContext(HeadersContext);
	const { isResizing } = useContext(ResizeContext);

	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const onClick = useCallback(() => {
		if (isResizing) {
			return;
		}

		setIsSelected(true);
	}, [isResizing, setIsSelected]);

	const closeSelect = useCallback(() => setIsSelected(false), [setIsSelected]);

	// Unselect when resizing
	useEffect(() => setIsSelected(!isResizing && isSelected), [isResizing, isSelected]);

	const onSelect = useCallback((option: IHeaderOption) => setHeaderOption(option, index), [
		index,
		setHeaderOption
	]);

	const [editLabel, setEditLabel] = useState<string>("");

	const onEditLabel = useCallback(() => setIsEditing(true), [setIsEditing]);

	const onChangeEditLabel = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setEditLabel(event.target.value);
		},
		[setEditLabel]
	);

	const onKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			switch (event.keyCode) {
				case Keycode.codes.esc:
					setEditLabel(label);

					break;
				default:
					return;
			}
		},
		[setEditLabel, label]
	);

	return (
		<Tooltip
			className={classes.root}
			active={isSelected}
			direction="bottom-start"
			onClickOut={closeSelect}
			style={{ width }}
			tooltip={<HeaderSelect onSelect={onSelect} options={options} value={value} />}
		>
			<ContextMenu menu={<HeaderMenu onEditLabel={onEditLabel} />} onOpen={closeSelect}>
				{isEditing ? (
					<input
						className={classes.editLabel}
						value={editLabel}
						onChange={onChangeEditLabel}
						onKeyDown={onKeyDown}
						autoFocus={true}
					/>
				) : (
					<HeaderItem key={value} index={index} onClick={onClick} {...headerProps} />
				)}
			</ContextMenu>
		</Tooltip>
	);
});
