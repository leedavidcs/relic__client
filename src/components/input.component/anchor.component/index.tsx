import { useHover } from "@/hooks";
import classnames from "classnames";
import React, { FC, useCallback, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	className?: string;
	href?: string;
	onClick?: (value: string) => void;
	value: string;
}

export const Anchor: FC<IProps> = ({
	className,
	href,
	onClick: propsOnClick = () => void 0,
	value
}) => {
	const classes = useStyles();

	const ref = useRef(null);
	const [isHovered] = useHover(false, ref);

	const onClick = useCallback(() => propsOnClick(value), [propsOnClick, value]);

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
