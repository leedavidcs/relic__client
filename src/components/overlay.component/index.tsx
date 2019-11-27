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

// !Important: Parent must have position: "relative"
export const Overlay: FC<IProps> = (props) => {
	const { active, className } = props;

	const classes = useStyles(props);
	const elemRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const elem: HTMLDivElement = elemRef.current!;

		toggleClass(elem, classes.active, active);
	}, [active, elemRef, classes.active]);

	const classNames = classnames(classes.root, className);

	return <div className={classNames} ref={elemRef} />;
};

Overlay.defaultProps = {
	active: false,
	animate: true,
	clickThrough: false,
	opacity: 0.6
};
