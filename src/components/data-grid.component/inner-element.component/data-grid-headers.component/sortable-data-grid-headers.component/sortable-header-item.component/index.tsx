import { IHeaderConfig, IHeaderOption } from "@/components/data-grid.component";
import { HeadersContext } from "@/components/data-grid.component";
import { Tooltip } from "@/components/tooltip.component";
import { useDoubleClick } from "@/hooks";
import { ArrayUtil } from "@/utils";
import React, {
	ComponentClass,
	MutableRefObject,
	useCallback,
	useContext,
	useRef,
	useState
} from "react";
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

		const { headers, onHeadersChange } = useContext(HeadersContext);

		const [isEditingLabel, setIsEditingLabel] = useState<boolean>(false);
		const [isSelected, setIsSelected] = useState<boolean>(false);

		const lastWidth: MutableRefObject<number> = useRef<number>(width);

		const onMouseDown = useCallback(() => {
			lastWidth.current = width;
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
			const hasOptions: boolean = options !== null;

			setIsEditingLabel(hasOptions);
			setIsSelected(false);
		}, [options, setIsEditingLabel, setIsSelected]);

		const onSimulatedDoubleClick = useDoubleClick({ onClick, onDoubleClick });

		const onSelect = useCallback(
			(option: IHeaderOption) => {
				const newHeaders: ReadonlyArray<IHeaderConfig> = ArrayUtil.replace(
					headers,
					headerIndex,
					{ ...headers[headerIndex], ...option }
				);

				onHeadersChange(newHeaders);
			},
			[headers, headerIndex, onHeadersChange]
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
					<HeaderItem key={value} index={headerIndex} {...headerProps} />
				)}
			</Tooltip>
		);
	}
);
