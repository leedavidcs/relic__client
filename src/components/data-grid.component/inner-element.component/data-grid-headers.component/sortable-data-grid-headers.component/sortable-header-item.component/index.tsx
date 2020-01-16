import { ContextMenu } from "@/components/context-menu.component";
import {
	HeadersContext,
	IHeaderConfig,
	IHeaderOption,
	ResizeContext
} from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";
import { HeaderSelect } from "./header-select.component";

interface IProps extends IHeaderConfig {
	headerIndex: number;
}

export const SortableHeaderItem = SortableElement<IProps>((props: IProps) => {
	const { headerIndex, ...headerProps } = props;

	const { options, value, width } = headerProps;

	const { setHeaderOption } = useContext(HeadersContext);

	const { isResizing } = useContext(ResizeContext);

	const [isSelected, setIsSelected] = useState<boolean>(false);

	const onClick = useCallback(() => {
		// Do not trigger click, on mouse-up from a resize event
		if (isResizing) {
			return;
		}

		setIsSelected(true);
	}, [isResizing, setIsSelected]);

	const closeSelect = useCallback(() => setIsSelected(false), [setIsSelected]);

	// Unselect when resizing
	useEffect(() => setIsSelected(!isResizing && isSelected), [isResizing, isSelected]);

	const onSelect = useCallback((option: IHeaderOption) => setHeaderOption(option, headerIndex), [
		headerIndex,
		setHeaderOption
	]);

	return (
		<Tooltip
			active={isSelected}
			direction="bottom-start"
			onClickOut={closeSelect}
			tooltip={<HeaderSelect onSelect={onSelect} options={options} value={value} />}
		>
			<div style={{ width }}>
				<ContextMenu
					menu={<div style={{ backgroundColor: "blue" }}>MENU</div>}
					onOpen={closeSelect}
				>
					<HeaderItem
						key={value}
						index={headerIndex}
						onClick={onClick}
						{...headerProps}
					/>
				</ContextMenu>
			</div>
		</Tooltip>
	);
});
