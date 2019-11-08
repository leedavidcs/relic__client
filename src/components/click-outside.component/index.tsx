import { useUnifiedRef } from "@/hooks";
import React, {
	DetailedHTMLProps,
	forwardRef,
	ForwardRefExoticComponent,
	HTMLAttributes,
	MutableRefObject,
	Ref,
	RefAttributes,
	useEffect,
	useRef
} from "react";

interface IProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onClick"> {
	onClick?: (event: MouseEvent | TouchEvent, key?: string | number) => void;
	onClickOut: (event: MouseEvent | TouchEvent, key?: string | number) => void;
}

const defaultFunc = () => {
	return;
};

export const ClickOutside: ForwardRefExoticComponent<
	IProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, IProps>(
	({ children, onClick = defaultFunc, onClickOut, ...divProps }, ref: Ref<HTMLDivElement>) => {
		const innerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
		const unifiedRef: MutableRefObject<HTMLDivElement | null> = useUnifiedRef(ref, innerRef);

		useEffect(() => {
			const elem: HTMLDivElement | null = unifiedRef.current;

			const listener = (event: MouseEvent | TouchEvent) => {
				if (elem === null || elem.contains(event.target as Node | null)) {
					onClick(event);

					event.stopPropagation();

					return;
				}

				onClickOut(event);
			};

			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);

			return () => {
				document.removeEventListener("mousedown", listener);
				document.removeEventListener("touchstart", listener);
			};
		}, [unifiedRef, onClick, onClickOut]);

		return <div {...{ ...divProps, ref: unifiedRef }}>{children}</div>;
	}
);
