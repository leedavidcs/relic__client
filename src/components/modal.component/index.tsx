import { Paper } from "@/components/paper.component";
import React, { FC, RefObject, useCallback, useEffect, useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useStyles } from "./styles";

interface IProps {
	active: boolean;
	onClose?: () => void;
	onClickOutside?: () => void;
	title?: string;
}

export const Modal: FC<IProps> = ({
	active,
	children,
	onClickOutside: propsOnClickOutside = () => {
		return;
	},
	onClose: propsOnClose = () => {
		return;
	},
	title = ""
}) => {
	const classes = useStyles();
	const paperRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const onClose = useCallback((): void => {
		propsOnClose();
	}, [propsOnClose]);

	const onClickOutside = useCallback(
		({ target }: MouseEvent): void => {
			const paperDiv: HTMLDivElement = paperRef.current!;

			if (paperDiv.contains(target as HTMLElement)) {
				return;
			}

			propsOnClickOutside();
		},
		[propsOnClickOutside]
	);

	useEffect(() => {
		window.addEventListener("click", onClickOutside);

		return () => {
			window.removeEventListener("click", onClickOutside);
		};
	});

	useEffect(() => {
		const paperDiv: HTMLDivElement = paperRef.current!;

		paperDiv.classList.toggle(classes.active, active);
	}, [active, classes.active]);

	return (
		<Paper className={classes.root} ref={paperRef}>
			<div className={classes.title}>
				{title}
				<div className={classes.closeBtn} onClick={onClose}>
					<FaRegWindowClose />
				</div>
			</div>
			{children}
		</Paper>
	);
};
