import { debounce } from "lodash";
import React, { CSSProperties, FC, MouseEvent, useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";

const CLEAN_UP_DEBOUNCE: number = 2000;

export const Ripple: FC<{}> = () => {
	const classes = useStyles();

	const [styles, setStyles] = useState<{ [key: string]: CSSProperties }>({});
	const [count, setCount] = useState<number>(0);

	const onMouseDown = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			const container = event.currentTarget;

			const size = container.offsetWidth;
			const position = container.getBoundingClientRect() as DOMRect;

			const x = event.pageX - position.x - size / 2;
			const y = event.pageY - position.y - size / 2;

			const rippleStyle: CSSProperties = {
				top: y,
				left: x,
				height: size,
				width: size
			};

			setStyles({ ...styles, [count]: rippleStyle });
			setCount(count + 1);
		},
		[styles, setStyles, count, setCount]
	);

	const onMouseUp = useCallback(
		debounce(() => {
			setStyles({});
			setCount(0);
		}, CLEAN_UP_DEBOUNCE),
		[setStyles, setCount]
	);

	useEffect(() => () => onMouseUp.cancel(), [onMouseUp]);

	return (
		<div className={classes.root} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
			{Object.keys(styles).map((key) => (
				<span className={classes.ripple} key={key} style={styles[key]} />
			))}
		</div>
	);
};
