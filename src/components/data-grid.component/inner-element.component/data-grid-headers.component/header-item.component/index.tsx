import { IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { DataGridContext } from "@/components/data-grid.component/data-grid.context";
import { Tooltip } from "@/components/tooltip.component";
import { useDoubleClick } from "@/hooks";
import { ArrayUtil } from "@/utils";
import React, { FC, useCallback, useContext, useState, MutableRefObject, useRef } from "react";
import { SortableHeaderSelect } from "./sortable-header-select.component";
import { SortableHeader } from "./sortable-header.component";

interface IProps extends IHeaderConfig {
	index: number;
}

export const HeaderItem: FC<IProps> = ({ index, ...headerProps }) => {
	const { options, sortable, value, width } = headerProps;

	const { headers, onHeadersChange } = useContext(DataGridContext);

	const [isEditingLabel, setIsEditingLabel] = useState<boolean>(false);
	const [isSelected, setIsSelected] = useState<boolean>(false);

	const lastWidth: MutableRefObject<number> = useRef<number>(width);

	const onMouseDown = useCallback(() => {
		lastWidth.current =  width;
	}, [width]);

	const onClick = useCallback(() => {
		// Do not trigger click, on mouse-up from a resize event
		if (width !== lastWidth.current) {
			return;
		}

		const hasOptions: boolean = options !== null;

		setIsSelected(hasOptions && !isSelected);
	}, [isSelected, options, setIsSelected, width]);

	const onClickOut = useCallback(() => {
		setIsEditingLabel(false);
		setIsSelected(false);
	}, [setIsEditingLabel, setIsSelected]);

	const onDoubleClick = useCallback(() => {
		setIsEditingLabel(options !== null);
		setIsSelected(false);
	}, [options, setIsEditingLabel, setIsSelected]);

	const onSimulatedDoubleClick = useDoubleClick({ onClick, onDoubleClick });

	const onSelect = useCallback(
		(option: IHeaderOption) => {
			const newHeaders: ReadonlyArray<IHeaderConfig> = ArrayUtil.replace(headers, index, {
				...headers[index],
				...option
			});

			onHeadersChange(newHeaders);
		},
		[headers, index, onHeadersChange]
	);

	return (
		<Tooltip
			active={isSelected}
			direction="bottom-start"
			onClick={onSimulatedDoubleClick}
			onClickOut={onClickOut}
			onMouseDown={onMouseDown}
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
				<SortableHeader
					key={value}
					sortIndex={index}
					index={index}
					disabled={!sortable}
					{...headerProps}
				/>
			)}
		</Tooltip>
	);
};
