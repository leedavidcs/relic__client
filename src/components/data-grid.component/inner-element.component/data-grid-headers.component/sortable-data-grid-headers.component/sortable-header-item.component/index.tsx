import {
	HeadersContext,
	IHeaderConfig,
	IHeaderOption,
	ResizeContext
} from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import { useDoubleClick } from "@/hooks";
import React, { ComponentClass, useCallback, useContext, useState } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { HeaderItem } from "./header-item.component";
import { SortableHeaderSelect } from "./sortable-header-select.component";

interface IInternalProps extends IHeaderConfig {
	headerIndex: number;
}

interface IProps extends IInternalProps, SortableElementProps {}

export const SortableHeaderItem: ComponentClass<IProps> = SortableElement<IInternalProps>(
	({ headerIndex, ...headerProps }: IInternalProps) => {
		const { options, value, width } = headerProps;

		const { setHeaderOption } = useContext(HeadersContext);
		const { isResizing } = useContext(ResizeContext);

		const [isEditingLabel, setIsEditingLabel] = useState<boolean>(false);
		const [isSelected, setIsSelected] = useState<boolean>(false);

		const onClick = useCallback(() => {
			// Do not trigger click, on mouse-up from a resize event
			if (isResizing) {
				return;
			}

			const hasOptions: boolean = options !== null;

			setIsSelected(hasOptions && !isSelected);
		}, [isResizing, isSelected, options, setIsSelected]);

		const onClickOut = useCallback(() => {
			setIsEditingLabel(false);
			setIsSelected(false);
		}, [setIsEditingLabel, setIsSelected]);

		const onDoubleClick = useCallback(() => {
			const hasOptions: boolean = options !== null;

			setIsEditingLabel(hasOptions);
			setIsSelected(false);
		}, [options, setIsEditingLabel, setIsSelected]);

		const onSimulatedDoubleClick = useDoubleClick({ onClick, onDoubleClick });

		const onSelect = useCallback(
			(option: IHeaderOption) => setHeaderOption(option, headerIndex),
			[headerIndex, setHeaderOption]
		);

		return (
			<Tooltip
				active={isSelected}
				direction="bottom-start"
				onClick={onSimulatedDoubleClick}
				onClickOut={onClickOut}
				style={{ width }}
				tooltip={
					options && (
						<SortableHeaderSelect onSelect={onSelect} options={options} value={value} />
					)
				}
			>
				{isEditingLabel ? (
					<div>CLICKED</div>
				) : (
					<HeaderItem key={value} index={headerIndex} {...headerProps} />
				)}
			</Tooltip>
		);
	}
);
