import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, {
	FC,
	ReactNode,
	useLayoutEffect,
	useRef,
	useEffect,
	useState,
	useCallback
} from "react";
import { useStyles } from "./styles";

interface IProps {
	active: boolean;
	header: ReactNode;
	children: ReactNode;
	className?: string;
	onClick?: (active: boolean) => void;
}

export const ExpansionPanel: FC<IProps> = ({
	active,
	header,
	children,
	className,
	onClick: propsOnClick
}) => {
	const [height, setHeight] = useState<number>(0);

	const classes = useStyles({ active, height });

	const containerRef = useRef<HTMLDivElement | null>(null);

	// Add expansion class to container before render
	useLayoutEffect(() => {
		const containerElem: HTMLDivElement | null = containerRef.current;

		if (!containerElem) {
			return;
		}

		toggleClass(containerElem, classes.expansion, true);
	}, [active, classes.expansion]);

	// Add transition after initial render
	useEffect(() => {
		containerRef.current?.classList.add(classes.transition);
	}, [classes.transition]);

	// Compute content height for expansion
	useEffect(() => {
		const contentElem = containerRef.current?.firstElementChild;

		if (!contentElem) {
			return;
		}

		const contentHeight: number = contentElem.clientHeight;

		setHeight(contentHeight);
	}, [setHeight]);

	const onClick = useCallback(() => propsOnClick?.(active), [active, propsOnClick]);

	return (
		<div className={classnames(classes.root, className)}>
			<div className={classes.header} onClick={onClick}>
				{header}
			</div>
			<div ref={containerRef} className={classes.content}>
				{children}
			</div>
		</div>
	);
};
