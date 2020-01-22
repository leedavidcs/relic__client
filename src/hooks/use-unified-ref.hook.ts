import { MutableRefObject, Ref, useEffect, useRef } from "react";

export const useUnifiedRef = <T>(...refs: readonly Ref<T>[]): MutableRefObject<T | null> => {
	const finalRef: MutableRefObject<T | null> = useRef<T>(null);

	useEffect(() => {
		refs.forEach((ref) => {
			if (!ref) {
				return;
			}

			if (typeof ref === "function") {
				return ref(finalRef.current || null);
			}

			(ref as MutableRefObject<T | null>).current = finalRef.current;
		});
	}, [refs]);

	return finalRef;
};
