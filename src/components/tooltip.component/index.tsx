import classnames from "classnames";
import React, { CSSProperties, FC, ReactNode } from "react";
import { Manager, Popper, PopperChildrenProps, Reference } from "react-popper";
import { ClickOutside } from "../click-outside.component";
import { PopperElement } from "./popper-element.component";
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

export const Tooltip: FC<IProps> = ({
	active,
	children,
	className,
	direction,
	onClick = () => void 0,
	onClickOut = () => void 0,
	onMouseDown = () => void 0,
	style: propsStyle,
	tooltip
}) => {
	const classes = useStyles({ active });

	return (
		<ClickOutside onClickOut={onClickOut}>
			<Manager>
				<Reference>
					{({ ref }) => (
						<div
							ref={ref}
							className={classnames(classes.reference, className)}
							onClick={onClick}
							onMouseDown={onMouseDown}
							style={propsStyle}
						>
							{children}
						</div>
					)}
				</Reference>
				<Popper placement={direction}>
					{({ scheduleUpdate, ref, style, placement }) => (
						<div
							ref={ref}
							className={classes.popper}
							style={style}
							data-placement={placement}
						>
							<PopperElement active={active} scheduleUpdate={scheduleUpdate}>
								{tooltip}
							</PopperElement>
						</div>
					)}
				</Popper>
			</Manager>
		</ClickOutside>
	);
};

Tooltip.defaultProps = {
	active: false
};
