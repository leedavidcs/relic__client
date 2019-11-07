import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export const useHover = <T extends Element = Element>(
	ref?: RefObject<T>
): [boolean, RefObject<T>] => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const createdRef: RefObject<T> = useRef<T>(null);
	const hoverRef: RefObject<T> = ref || createdRef;

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
