import { ClickOutside } from "@/components/click-outside.component";
import { Paper } from "@/components/paper.component";
import React, { FC, RefObject, useCallback, useEffect, useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useStyles } from "./styles";

export * from "./modal-provider.component";

const DEFAULT_TRANSITION_MS = 200;

interface IProps {
	active: boolean;
	onClose?: () => void;
	onClickOutside?: () => void;
	title?: string;
	transition?: number;
}

export const Modal: FC<IProps> = ({
	active,
	children,
	onClickOutside: propsOnClickOutside = () => undefined,
	onClose: propsOnClose = () => undefined,
	title = "",
	transition = DEFAULT_TRANSITION_MS
}) => {
	const classes = useStyles({ active, transition });
	const paperRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const onClose = useCallback((): void => {
		propsOnClose();
	}, [propsOnClose]);

	const onClickOutside = useCallback((): void => {
		if (!active) {
			return;
		}

		propsOnClickOutside();
	}, [active, propsOnClickOutside]);

	useEffect(() => {
		const paperDiv: HTMLDivElement | null = paperRef.current;

		paperDiv?.classList.toggle(classes.active, active);
	}, [active, classes.active]);

	return (
		<ClickOutside onClick={onClickOutside}>
			<Paper className={classes.root} ref={paperRef}>
				<div className={classes.title}>
					{title}
					<div className={classes.closeBtn} onClick={onClose}>
						<FaRegWindowClose />
					</div>
				</div>
				<div className={classes.content}>{children}</div>
			</Paper>
		</ClickOutside>
	);
};
