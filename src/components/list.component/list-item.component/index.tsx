import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import { useHover } from "@/hooks";
import classnames from "classnames";
import { memoize } from "lodash";
import React, { FC, Fragment, MouseEvent, ReactElement, useCallback } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export * from "./list-item-icon.component";
export * from "./list-item-text.component";

const OVERLAY_HOVER_OPACITY = 0.04;
const OVERLAY_FOCUS_OPACITY = 0.1;

interface IProps {
	className?: string;
	href?: string;
	onClick?: (event: MouseEvent<HTMLLIElement>) => void;
	selected?: boolean;
}

export const ListItem: FC<IProps> = ({ children, className, href, onClick, selected }) => {
	const classes = useStyles({ selected });
	const [isHovered, hoverRef] = useHover<HTMLLIElement>(false);

	const isSelectable: boolean = typeof selected === "boolean";

	const withHref = useCallback(
		memoize(
			(content: ReactElement): ReactElement => {
				return href ? (
					<Link className={classes.link} to={href}>
						{content}
					</Link>
				) : (
					content
				);
			}
		),
		[classes.link, href]
	);

	return (
		<li ref={hoverRef} className={classnames(classes.root, className)} onClick={onClick}>
			{withHref(
				<Fragment>
					{children}
					<Overlay
						active={isSelectable && (isHovered || selected)}
						opacity={selected ? OVERLAY_FOCUS_OPACITY : OVERLAY_HOVER_OPACITY}
					/>
					{isSelectable && <Ripple />}
				</Fragment>
			)}
		</li>
	);
};
