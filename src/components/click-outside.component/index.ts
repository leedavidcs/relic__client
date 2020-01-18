import {
	Children,
	cloneElement,
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	MouseEvent,
	ReactElement,
	useCallback,
	useContext,
	useEffect,
	useRef
} from "react";
import { ClickOutsideContext } from "./click-outside-provider.component";

export * from "./click-outside-provider.component";

interface IProps {
	/**
	 * Children must be an HTMLElement, so that onClickCapture can be provided. Typescript does not
	 * validate that the Children of ClickOutside has valid props when it is used.
	 */
	children: ReactElement<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;
	/** Function to be invoked when the ReactNode is clicked outside of */
	onClickOut: (event: MouseEvent<HTMLDivElement>) => void;
}

export const ClickOutside: FC<IProps> = ({ children, onClickOut }) => {
	const didClickInside = useRef<boolean>(false);

	const { register, unregister } = useContext(ClickOutsideContext);

	const onClickCapture = useCallback(
		(event: MouseEvent<HTMLElement>) => {
			didClickInside.current = true;

			Children.only(children).props.onClickCapture?.(event);
		},
		[children]
	);

	const listener = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (didClickInside.current) {
				didClickInside.current = false;

				return;
			}

			onClickOut(event);
		},
		[onClickOut]
	);

	useEffect(() => {
		const eventId: string = register(listener);

		return () => unregister(eventId);
	}, [listener, register, unregister]);

	return cloneElement(Children.only(children), { onClickCapture });
};
