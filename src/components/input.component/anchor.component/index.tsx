import { useHover } from "@/hooks";
import classnames from "classnames";
import React, { FC, useCallback, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	className?: string;
	href?: string;
	onClick?: () => void;
	value: string;
}

export const Anchor: FC<IProps> = ({
	className,
	href,
	onClick,
	value
}) => {
	const classes = useStyles();

	const ref = useRef(null);
	const [isHovered] = useHover(false, ref);

	const Wrapper = typeof href === "string" ? "a" : "button";

	return (
		<Wrapper
			ref={ref}
			href={href}
			className={classnames(classes.root, className, { [classes.focused]: isHovered })}
			onClick={onClick}
		>
			{value}
		</Wrapper>
	);
};
