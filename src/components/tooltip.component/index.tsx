import { ClickOutside } from "@/components/click-outside.component";
import { ITooltipLocation, useTooltip } from "@/hooks";
import { Placement } from "@popperjs/core";
import memoizeOne from "memoize-one";
import React, { FC, isValidElement, ReactNode, useLayoutEffect, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	children: ReactNode | ITooltipLocation;
	direction: Placement;
	onClickOut?: () => void;
	tooltip?: ReactNode;
}

const isLocation = memoizeOne((value: any): value is ITooltipLocation => !isValidElement(value));

export const Tooltip: FC<IProps> = ({
	active,
	children,
	direction: placement,
	onClickOut = () => void 0,
	tooltip
}) => {
	const classes = useStyles({ active });

	const refElement = useRef<HTMLDivElement | null>(null);
	const popper = useRef<HTMLDivElement | null>(null);

	const reference = isLocation(children) ? children : refElement;

	const { update } = useTooltip({ reference, popper, placement });

	useLayoutEffect(() => {
		update();
	}, [active, update]);

	return (
		<ClickOutside onClickOut={onClickOut}>
			{!isLocation(children) && (
				<div ref={refElement} className={classes.reference}>
					{children}
				</div>
			)}
			<div ref={popper} className={classes.popper}>
				{tooltip}
			</div>
		</ClickOutside>
	);
};

Tooltip.defaultProps = {
	active: false
};
