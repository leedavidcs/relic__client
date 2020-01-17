import { ClickOutside } from "@/components/click-outside.component";
import { ITooltipLocation, useTooltip } from "@/hooks";
import { Placement } from "@popperjs/core";
import memoizeOne from "memoize-one";
import React, {
	CSSProperties,
	FC,
	isValidElement,
	ReactNode,
	useLayoutEffect,
	useRef
} from "react";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	children: ReactNode | ITooltipLocation;
	className?: string;
	direction: Placement;
	onClickOut?: () => void;
	style?: CSSProperties;
	tooltip?: ReactNode;
}

const isLocation = memoizeOne((value: any): value is ITooltipLocation => !isValidElement(value));

export const Tooltip: FC<IProps> = ({
	active,
	children,
	className,
	direction: placement,
	onClickOut = () => void 0,
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

	return (
		<ClickOutside onClickOut={onClickOut}>
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
