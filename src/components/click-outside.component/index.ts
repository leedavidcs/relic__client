import {
	Children,
	cloneElement,
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	ReactElement,
	useCallback,
	useEffect,
	useRef
} from "react";

interface IProps {
	children: ReactElement<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;
	onClickOut: (event: MouseEvent | TouchEvent) => void;
}

export const ClickOutside: FC<IProps> = ({ children, onClickOut }) => {
	const didClickInside = useRef<boolean>(false);

	const listener = useCallback(
		(event: MouseEvent | TouchEvent) => {
			if (didClickInside.current) {
				didClickInside.current = false;

				return;
			}

			onClickOut(event);
		},
		[onClickOut]
	);

	useEffect(() => {
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [listener]);

	const onClickCapture = useCallback(() => {
		didClickInside.current = true;
	}, []);

	return cloneElement(Children.only(children), { onClickCapture });
};
