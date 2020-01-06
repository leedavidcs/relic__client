import classnames from "classnames";
import React, { FC, ReactElement, useCallback, CSSProperties } from "react";
import { Manager, Popper, PopperChildrenProps, Reference } from "react-popper";
import { ClickOutside } from "../click-outside.component";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	className?: string;
	direction: PopperChildrenProps["placement"];
	onClick?: (event) => void;
	onClickOut?: () => void;
	style?: CSSProperties;
	tooltip?: ReactElement;
}

export const Tooltip: FC<IProps> = (props) => {
	const {
		children,
		className,
		direction,
		onClick = () => {
			return;
		},
		onClickOut = () => {
			return;
		},
		style: propsStyle,
		tooltip
	} = props;

	const classes = useStyles(props);

	const referenceOnClick = useCallback(
		(scheduleUpdate: () => void) => {
			return (event) => {
				onClick(event);
				scheduleUpdate();
			};
		},
		[onClick]
	);

	return (
		<Manager>
			<Reference>
				{({ ref }) => (
					<Popper placement={direction}>
						{({ scheduleUpdate, ref: popperRef, style, placement, arrowProps }) => (
							<ClickOutside onClickOut={onClickOut}>
								<div
									ref={ref}
									onClick={referenceOnClick(scheduleUpdate)}
									className={classnames(classes.reference, className)}
									style={propsStyle}
								>
									{children}
								</div>
								<div
									ref={popperRef}
									className={classes.popper}
									style={style}
									data-placement={placement}
								>
									{tooltip}
									<div ref={arrowProps.ref} style={arrowProps.style} />
								</div>
							</ClickOutside>
						)}
					</Popper>
				)}
			</Reference>
		</Manager>
	);
};

Tooltip.defaultProps = {
	active: false
};
