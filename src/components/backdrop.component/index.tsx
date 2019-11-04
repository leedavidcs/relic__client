import React, { FC, RefObject, useEffect, useRef } from "react";
import { useStyles } from "./styles";

interface IProps {
	active: boolean;
}

export const Backdrop: FC<IProps> = ({ active = false }) => {
	const classes = useStyles();
	const elemRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const elem: HTMLDivElement = elemRef.current!;

		elem.classList.toggle(classes.active, active);
	}, [active, elemRef, classes.active]);

	return <div className={classes.root} ref={elemRef} />;
};
