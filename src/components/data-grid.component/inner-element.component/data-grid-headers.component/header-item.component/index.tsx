import { IHeaderConfig } from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import { useDoubleClick } from "@/hooks";
import React, { FC, useCallback, useState } from "react";
import { SortableHeader } from "./sortable-header.component";

interface IProps extends IHeaderConfig {
	index: number;
}

export const HeaderItem: FC<IProps> = ({ index, ...headerProps }) => {
	const { options, sortable, value, width } = headerProps;

	const [isEditingLabel, setIsEditingLabel] = useState<boolean>(false);
	const [isSelected, setIsSelected] = useState<boolean>(false);

	const onClick = useCallback(() => setIsSelected(options !== null), [options, setIsSelected]);

	const onClickOut = useCallback(() => {
		setIsEditingLabel(false);
		setIsSelected(false);
	}, [setIsEditingLabel, setIsSelected]);

	const onDoubleClick = useCallback(() => {
		setIsEditingLabel(options !== null);
		setIsSelected(false);
	}, [options, setIsEditingLabel, setIsSelected]);

	const onSimulatedDoubleClick = useDoubleClick({ onClick, onDoubleClick });

	const TestType = false ? "div" : Tooltip;

	return (
		<TestType
			active={isSelected}
			direction="bottom-start"
			onClick={onSimulatedDoubleClick}
			onClickOut={onClickOut}
			style={{ width }}
		>
			{isEditingLabel ? (
				<div>CLICKED</div>
			) : (
				<SortableHeader
					key={value}
					sortIndex={index}
					index={index}
					disabled={!sortable}
					{...headerProps}
				/>
			)}
		</TestType>
	);
};
