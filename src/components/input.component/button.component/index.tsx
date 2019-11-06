import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import React, { ButtonHTMLAttributes, FC, MouseEvent, useCallback, useState } from "react";
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

	const [hovered, setHovered] = useState<boolean>(false);

	const onMouseOver = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			setHovered(true);
		},
		[setHovered]
	);

	const onMouseOut = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			setHovered(false);
		},
		[setHovered]
	);

	return (
		<button
			className={classes.root}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onClick={onClick}
		>
			{children}
			<Overlay active={hovered} opacity={OVERLAY_OPACITY} />
			<Ripple />
		</button>
	);
};

Button.defaultProps = {
	color: "primary",
	size: "medium"
};
