import { MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from "react";

export const useHover = <T extends Element = Element>(
	initial: boolean,
	ref?: MutableRefObject<T | null>
): [boolean, MutableRefObject<T | null>] => {
	const [isHovered, setIsHovered] = useState<boolean>(initial);

	const createdRef: RefObject<T> = useRef<T>(null);
	const hoverRef: MutableRefObject<T | null> = ref || createdRef;

	const onMouseOver = useCallback(() => setIsHovered(true), [setIsHovered]);
	const onMouseOut = useCallback(() => setIsHovered(false), [setIsHovered]);

	useEffect(() => {
		const elem: T | null = hoverRef.current;

		if (!elem) {
			return;
		}

		elem.addEventListener("mouseover", onMouseOver);
		elem.addEventListener("mouseout", onMouseOut);

		return () => {
			elem.removeEventListener("mouseover", onMouseOver);
			elem.removeEventListener("mouseout", onMouseOut);
		};
	}, [hoverRef, onMouseOver, onMouseOut]);

	return [isHovered, hoverRef];
};
