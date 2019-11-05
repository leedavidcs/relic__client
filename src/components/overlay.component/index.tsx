import classnames from "classnames";
import React, { FC, RefObject, useEffect, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	active?: boolean;
	className?: string;
	color?: string;
	clickThrough?: boolean;
	opacity?: number;
}

export const Overlay: FC<IProps> = (props) => {
	const { active, className } = props;

	const classes = useStyles(props);
	const elemRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const elem: HTMLDivElement = elemRef.current!;

		classes.active.split(" ").forEach((activeClass) => {
			elem.classList.toggle(activeClass, active);
		});
	}, [active, elemRef, classes.active]);

	const classNames = classnames(classes.root, className);

	return <div className={classNames} ref={elemRef} />;
};

Overlay.defaultProps = {
	active: false,
	clickThrough: false,
	opacity: 0.6
};
