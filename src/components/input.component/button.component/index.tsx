import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import { useHover } from "@/hooks";
import React, { ButtonHTMLAttributes, FC } from "react";
import { useStyles } from "./styles";

const OVERLAY_OPACITY: number = 0.04;

const colors = [
	"primary",
	"primaryVariant",
	"secondary",
	"secondaryVariant",
	"error",
	"warning",
	"transparent"
] as const;
const sizes = ["small", "medium", "large"] as const;

interface IProps {
	color?: typeof colors[number];
	onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	size?: typeof sizes[number];
}

export const Button: FC<IProps> = (props) => {
	const { children, onClick } = props;

	const classes = useStyles(props);
	const [isHovered, hoverRef] = useHover<HTMLButtonElement>(false);

	return (
		<button ref={hoverRef} className={classes.root} onClick={onClick}>
			{children}
			<Overlay active={isHovered} opacity={OVERLAY_OPACITY} />
			<Ripple />
		</button>
	);
};

Button.defaultProps = {
	color: "primary",
	size: "medium"
};
