import { Overlay } from "@/components/overlay.component";
import { Ripple } from "@/components/ripple.component";
import { useHover } from "@/hooks";
import React, { FC, MouseEvent } from "react";
import { useStyles } from "./styles";

export * from "./list-item-icon.component";
export * from "./list-item-text.component";

const OVERLAY_HOVER_OPACITY: number = 0.04;
const OVERLAY_FOCUS_OPACITY: number = 0.1;

interface IProps {
	onClick?: (event: MouseEvent<HTMLLIElement>) => void;
	selected?: boolean;
}

export const ListItem: FC<IProps> = (props) => {
	const { children, onClick, selected } = props;

	const classes = useStyles(props);
	const [isHovered, hoverRef] = useHover<HTMLLIElement>();

	const isSelectable: boolean = typeof selected === "boolean";

	return (
		<li ref={hoverRef} className={classes.root} onClick={onClick}>
			{children}
			<Overlay
				active={isSelectable && (isHovered || selected)}
				opacity={selected ? OVERLAY_FOCUS_OPACITY : OVERLAY_HOVER_OPACITY}
			/>
			{isSelectable && <Ripple />}
		</li>
	);
};
