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

	const onClickOut = useCallback(() => setIsSelected(false), [setIsSelected]);

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
			onClick={onClick}
			onClickOut={onClickOut}
			style={{ width }}
			tooltip={<HeaderSelect onSelect={onSelect} options={options} value={value} />}
		>
			<HeaderItem key={value} index={headerIndex} {...headerProps} />
		</Tooltip>
	);
});
