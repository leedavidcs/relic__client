import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, { FC, useEffect, useRef, useLayoutEffect } from "react";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	animate?: boolean;
	className?: string;
	clickThrough?: boolean;
	opacity?: number;
	relative?: boolean;
}

export const Overlay: FC<IProps> = ({
	active,
	animate,
	className,
	clickThrough,
	opacity,
	relative = true
}) => {
	const classes = useStyles({ active, animate, clickThrough, opacity, relative });
	const elemRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const elem: HTMLDivElement | null = elemRef.current;

		if (!elem) {
			return;
		}

		toggleClass(elem, classes.active, true);
	}, [active, classes.active]);

	useEffect(() => {
		const elem: HTMLDivElement | null = elemRef.current;

		if (!elem) {
			return;
		}

		toggleClass(elem, classes.transition, true);
	}, [animate, classes.transition]);

	return <div className={classnames(classes.root, className)} ref={elemRef} />;
};

Overlay.defaultProps = {
	active: false,
	animate: true,
	clickThrough: false,
	opacity: 0.6
};
