import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import { useHover } from "@/hooks";
import classnames from "classnames";
import React, { ButtonHTMLAttributes, FC } from "react";
import { useStyles } from "./styles";

const OVERLAY_OPACITY = 0.04;

export type ButtonColor =
	| "primary"
	| "primaryVariant"
	| "secondary"
	| "secondaryVariant"
	| "error"
	| "warning"
	| "transparent";
export type ButtonSize = "size" | "medium" | "large";

interface IProps {
	/** Optional classes in pass to the outermost `button` */
	className?: string;
	/** The color scheme of the button. See story */
	color?: ButtonColor;
	/** HTMLButtonElement onClick event */
	onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	/** The size variant of the button. See story */
	size?: ButtonSize;
	/** Native button["type"] property */
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button: FC<IProps> = ({
	children,
	className,
	color = "primary",
	onClick,
	size = "medium",
	type
}) => {
	const classes = useStyles({ color, size });
	const [isHovered, hoverRef] = useHover<HTMLButtonElement>(false);

	return (
		<button
			ref={hoverRef}
			className={classnames(classes.root, className)}
			type={type}
			onClick={onClick}
		>
			{children}
			<Overlay active={isHovered} opacity={OVERLAY_OPACITY} />
			<Ripple />
		</button>
	);
};
