import { debounce } from "lodash";
import { MouseEvent, MutableRefObject, TouchEvent, useCallback, useRef } from "react";

const DOUBLE_CLICK_TIMEOUT: number = 200;

interface IOptions {
	onClick?: (event: MouseEvent | TouchEvent) => void;
	onDoubleClick?: (event: MouseEvent | TouchEvent) => void;
}

export const useDoubleClick = (options?: IOptions) => {
	const { onClick = () => void 0, onDoubleClick = () => void 0 } = options ?? {};

	const clickedRef: MutableRefObject<boolean> = useRef<boolean>(false);

	const cancelableOnClick = useCallback(
		debounce((event: MouseEvent | TouchEvent) => {
			onClick(event);
			clickedRef.current = false;
		}, DOUBLE_CLICK_TIMEOUT),
		[onClick]
	);

	const onSimulatedDoubleClick = useCallback(
		(event: MouseEvent | TouchEvent) => {
			const hasClicked: boolean = clickedRef.current;

			if (hasClicked) {
				onDoubleClick(event);

				cancelableOnClick.cancel();
				clickedRef.current = false;

				return;
			}

			cancelableOnClick(event);
			clickedRef.current = true;
		},
		[cancelableOnClick, onDoubleClick]
	);

	return onSimulatedDoubleClick;
};
