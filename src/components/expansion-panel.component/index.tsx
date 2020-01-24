import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, {
	FC,
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from "react";
import { useStyles } from "./styles";

const DEFAULT_TRANSITION_MS = 200;

interface IProps {
	active: boolean;
	animate?: boolean;
	header: ReactNode;
	children: ReactNode;
	className?: string;
	onClick?: (active: boolean) => void;
	transition?: number;
}

export const ExpansionPanel: FC<IProps> = ({
	active,
	animate = true,
	header,
	children,
	className,
	onClick: propsOnClick,
	transition = DEFAULT_TRANSITION_MS
}) => {
	const [height, setHeight] = useState<number>(0);

	const classes = useStyles({ active, height, transition });

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
		const containerElem: HTMLDivElement | null = containerRef.current;

		if (!containerElem) {
			return;
		}

		setTimeout(() => toggleClass(containerElem, classes.transition, animate), transition);
	}, [animate, height, transition, classes.transition]);

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
