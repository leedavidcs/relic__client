import { ClickOutside } from "@/components/click-outside.component";
import { ITooltipLocation, useTooltip } from "@/hooks";
import { Placement } from "@popperjs/core";
import { identity } from "lodash";
import memoizeOne from "memoize-one";
import React, {
	CSSProperties,
	FC,
	isValidElement,
	ReactElement,
	ReactNode,
	useLayoutEffect,
	useMemo,
	useRef
} from "react";
import { createPortal } from "react-dom";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	children: ReactNode | ITooltipLocation;
	className?: string;
	direction: Placement;
	onClickOut?: () => void;
	onMouseDownOut?: () => void;
	style?: CSSProperties;
	tooltip?: ReactNode;
}

const isLocation = memoizeOne((value: any): value is ITooltipLocation => !isValidElement(value));

const mountToDocumentBody = (element: ReactElement) => createPortal(element, document.body);

export const Tooltip: FC<IProps> = ({
	active,
	children,
	className,
	direction: placement,
	onClickOut,
	onMouseDownOut,
	style,
	tooltip
}) => {
	const classes = useStyles({ active });

	const referenceRef = useRef<HTMLDivElement | null>(null);
	const popper = useRef<HTMLDivElement | null>(null);

	const reference = isLocation(children) ? children : referenceRef;

	const { update } = useTooltip({ reference, popper, placement });

	useLayoutEffect(() => {
		update();
	}, [active, update]);

	const mountStrategy: (element: ReactElement) => ReactElement = useMemo(() => {
		return isLocation(children) ? mountToDocumentBody : identity;
	}, [children]);

	return mountStrategy(
		<ClickOutside onClick={onClickOut} onMouseDown={onMouseDownOut}>
			<div>
				{!isLocation(children) && (
					<div ref={referenceRef} className={className} style={style}>
						{children}
					</div>
				)}
				<div ref={popper} className={classes.popper}>
					{tooltip}
				</div>
			</div>
		</ClickOutside>
	);
};

Tooltip.defaultProps = {
	active: false
};
