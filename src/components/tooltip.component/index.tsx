import classnames from "classnames";
import React, { CSSProperties, FC, ReactNode, useCallback } from "react";
import { Manager, Popper, PopperChildrenProps, Reference } from "react-popper";
import { ClickOutside } from "../click-outside.component";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	className?: string;
	direction: PopperChildrenProps["placement"];
	onClick?: (event) => void;
	onClickOut?: () => void;
	onMouseDown?: (event: React.MouseEvent) => void;
	style?: CSSProperties;
	tooltip?: ReactNode;
}

export const Tooltip: FC<IProps> = (props) => {
	const {
		children,
		className,
		direction,
		onClick = () => void 0,
		onClickOut = () => void 0,
		onMouseDown = () => void 0,
		style: propsStyle,
		tooltip
	} = props;

	const classes = useStyles(props);

	const referenceOnClick = useCallback(
		(scheduleUpdate: () => void) => (event) => {
			onClick(event);
			scheduleUpdate();
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
									onMouseDown={onMouseDown}
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
