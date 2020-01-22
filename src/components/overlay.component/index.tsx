import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, { FC, RefObject, useEffect, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	animate?: boolean;
	className?: string;
	clickThrough?: boolean;
	opacity?: number;
}

export const Overlay: FC<IProps> = ({ active, animate, className, clickThrough, opacity }) => {
	const classes = useStyles({ animate, clickThrough, opacity });
	const elemRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const elem: HTMLDivElement | null = elemRef.current;

		if (!elem) {
			return;
		}

		toggleClass(elem, classes.active, active);
	}, [active, elemRef, classes.active]);

	return <div className={classnames(classes.root, className)} ref={elemRef} />;
};

Overlay.defaultProps = {
	active: false,
	animate: true,
	clickThrough: false,
	opacity: 0.6
};
