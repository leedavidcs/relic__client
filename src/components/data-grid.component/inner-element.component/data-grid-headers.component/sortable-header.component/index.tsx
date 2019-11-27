import { ClickOutside } from "@/components/click-outside.component";
import { IHeaderConfig } from "@/components/data-grid.component";
import React, { ComponentClass, useCallback, useState } from "react";
import { SortableElement, SortableElementProps } from "react-sortable-hoc";
import { ResizeHandle } from "./resize-handle.component";
import { SortableHeaderSelect } from "./sortable-header-select.component";
import { useStyles } from "./styles";

interface IInternalProps extends IHeaderConfig {
	sortIndex: number;
}

interface IProps extends SortableElementProps, IInternalProps {}

export const SortableHeader: ComponentClass<IProps> = SortableElement<IInternalProps>(
	({ label, options, resizable, sortIndex, value, width }: IInternalProps) => {
		const classes = useStyles();

		const [isSelect, setIsSelect] = useState<boolean>(false);

		const onClickOut = useCallback(() => setIsSelect(false), [setIsSelect]);

		const onDoubleClick = useCallback(() => setIsSelect(options === null), [
			options,
			setIsSelect
		]);

		const ComponentType = options === null ? "div" : ClickOutside;

		return (
			<ComponentType
				className={classes.root}
				onClickOut={onClickOut}
				onDoubleClick={onDoubleClick}
				style={{ minWidth: width }}
			>
				{isSelect && options !== null ? (
					<SortableHeaderSelect options={options} value={value} />
				) : (
					<div className={classes.content}>{label}</div>
				)}
				{resizable ? <ResizeHandle index={sortIndex} /> : null}
			</ComponentType>
		);
	}
);
