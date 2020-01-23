import { Divider } from "@/components/divider.component";
import { ListContext } from "@/components/list.component";
import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import { useHover, useIsLastChild } from "@/hooks";
import classnames from "classnames";
import memoizeOne from "memoize-one";
import React, {
	FC,
	Fragment,
	MouseEvent,
	ReactElement,
	ReactNode,
	useCallback,
	useContext,
	useMemo
} from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export * from "./list-item-icon.component";
export * from "./list-item-text.component";

const OVERLAY_HOVER_OPACITY = 0.04;
const OVERLAY_FOCUS_OPACITY = 0.1;

interface IChildrenProps {
	deferred: (element: ReactElement) => ReactElement;
}

interface IProps {
	children?: ReactNode | FC<IChildrenProps>;
	className?: string;
	href?: string;
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	selected?: boolean;
}

const isDeferred = memoizeOne((value: any): value is FC<IChildrenProps> => {
	return typeof value === "function";
});

export const ListItem: FC<IProps> = ({ children, className, href, onClick, selected }) => {
	const classes = useStyles({ href, selected });

	const { divider } = useContext(ListContext);

	const [hovered, listItemRef] = useHover<HTMLLIElement>(false);
	const [isLastItem] = useIsLastChild(listItemRef);

	const isSelectable: boolean = typeof selected === "boolean" || typeof href === "string";

	const withHref = useCallback(
		(content: ReactNode): ReactNode => {
			if (!href) {
				return content;
			}

			return (
				<Link className={classes.link} to={href}>
					{content}
				</Link>
			);
		},
		[classes.link, href]
	);

	const [innerHandlers, outerHandlers] = useMemo(() => {
		const handlers = { onClick };

		return isDeferred(children) ? [handlers, {}] : [{}, handlers];
	}, [children, onClick]);

	const overlayElem: ReactElement = useMemo(() => {
		const opacity: number = selected ? OVERLAY_FOCUS_OPACITY : OVERLAY_HOVER_OPACITY;

		return (
			<Overlay
				active={isSelectable && (hovered || selected)}
				clickThrough={true}
				opacity={opacity}
			/>
		);
	}, [isSelectable, hovered, selected]);

	const applyEffects = useCallback(
		(element: ReactNode) =>
			withHref(
				<Fragment>
					{element}
					{overlayElem}
					{isSelectable && <Ripple />}
				</Fragment>
			),
		[isSelectable, overlayElem, withHref]
	);

	const getDeferredElement = useCallback(
		(element: ReactElement) => (
			<div className={classnames(classes.root, classes.padded, className)} {...innerHandlers}>
				{applyEffects(element)}
			</div>
		),
		[applyEffects, className, innerHandlers, classes.root, classes.padded]
	);

	const childElement: ReactNode = useMemo(() => {
		return isDeferred(children)
			? children({ deferred: getDeferredElement })
			: applyEffects(children);
	}, [applyEffects, children, getDeferredElement]);

	return (
		<li
			ref={listItemRef}
			className={classnames(classes.root, {
				[classes.padded]: !isDeferred(children)
			})}
			{...outerHandlers}
		>
			{childElement}
			{divider && !isLastItem && <Divider className={classes.divider} variant={divider} />}
		</li>
	);
};
