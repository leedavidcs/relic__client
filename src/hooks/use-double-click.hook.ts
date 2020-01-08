import { debounce } from "lodash";
import { MouseEvent, MutableRefObject, TouchEvent, useCallback, useRef } from "react";

const DOUBLE_CLICK_TIMEOUT: number = 200;

interface IOptions {
	onClick?: (event: MouseEvent | TouchEvent) => void;
	onDoubleClick?: (event: MouseEvent | TouchEvent) => void;
}

export const useDoubleClick = (options?: IOptions) => {
	const { onClick = () => void 0, onDoubleClick = () => void 0 } = options ?? {};

	const hasClicked: MutableRefObject<boolean> = useRef<boolean>(false);

	const cancelableOnClick = useCallback(
		debounce((event: MouseEvent | TouchEvent) => {
			hasClicked.current = false;
			onClick(event);
		}, DOUBLE_CLICK_TIMEOUT),
		[onClick]
	);

	const onSimulatedDoubleClick = useCallback(
		(event: MouseEvent | TouchEvent) => {
			if (hasClicked.current) {
				hasClicked.current = false;

				onDoubleClick(event);

				cancelableOnClick.cancel();

				return;
			}

			cancelableOnClick(event);
			hasClicked.current = true;
		},
		[cancelableOnClick, onDoubleClick]
	);

	return onSimulatedDoubleClick;
};
