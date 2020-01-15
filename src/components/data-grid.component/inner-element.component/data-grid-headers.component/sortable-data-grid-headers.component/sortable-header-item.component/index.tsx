import { HeadersContext, IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import React, { useCallback, useContext } from "react";
import { SortableElement } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";
import { SortableHeaderSelect } from "./sortable-header-select.component";
import { useHeaderEvents } from "./use-header-events.hook";

interface IProps extends IHeaderConfig {
	headerIndex: number;
}

export const SortableHeaderItem = SortableElement<IProps>((props: IProps) => {
	const { headerIndex, ...headerProps } = props;

	const { options, value, width } = headerProps;

	const { setHeaderOption } = useContext(HeadersContext);

	const hasOptions: boolean = options !== null;

	const [{ onClick, onClickOut }, { isEditingLabel, isSelected }] = useHeaderEvents(hasOptions);

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
			tooltip={<SortableHeaderSelect onSelect={onSelect} options={options} value={value} />}
		>
			{isEditingLabel ? (
				<div>CLICKED</div>
			) : (
				<HeaderItem key={value} index={headerIndex} {...headerProps} />
			)}
		</Tooltip>
	);
});
