import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, { FC, memo, useEffect, useLayoutEffect, useRef } from "react";
import { useStyles } from "./styles";

const DEFAULT_OPACITY = 0.6;
const DEFAULT_TRANSITION_MS = 400;

interface IProps {
	active?: boolean;
	animate?: boolean;
	className?: string;
	clickThrough?: boolean;
	opacity?: number;
	relative?: boolean;
	transition?: number;
}

export const Overlay: FC<IProps> = memo(
	({
		active = false,
		animate = true,
		className,
		clickThrough = false,
		opacity = DEFAULT_OPACITY,
		relative = true,
		transition = DEFAULT_TRANSITION_MS
	}) => {
		const classes = useStyles({ active, animate, clickThrough, opacity, relative, transition });
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

			setTimeout(() => toggleClass(elem, classes.transition, true), transition);
		}, [animate, transition, classes.transition]);

		return <div className={classnames(classes.root, className)} ref={elemRef} />;
	}
);

Overlay.displayName = "Overlay";
