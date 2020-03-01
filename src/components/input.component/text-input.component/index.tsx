import { useFocus } from "@/hooks";
import composeRefs from "@seznam/compose-react-refs";
import classnames from "classnames";
import React, {
	CSSProperties,
	FormEvent,
	forwardRef,
	KeyboardEvent,
	MutableRefObject,
	ReactElement,
	useEffect,
	useRef,
	useState
} from "react";
import { useStyles } from "./styles";

export type TextInputVariant = "underlined" | "outlined";

type InputErrorProp = null | boolean | string;

interface IProps {
	/** Optional classes to pass the outermost `div` */
	className?: string;
	/** Whether the text-input should be disabled */
	disabled?: boolean;
	/**
	 * Error
	 *
	 * @default null
	 */
	error?: InputErrorProp;
	/** Label to be placed on the text input. Acts as a placeholder as well */
	label: string;
	max?: number;
	min?: number;
	/** Name given to the text input (for submitting a form) */
	name?: string;
	/** HTMLInputElement onChange event */
	onChange?: (event: FormEvent<HTMLInputElement>) => void;
	/** HTMLInputElement onKeyDown event */
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
	/** Whether this should censor inputs (as a password input) */
	password?: boolean;
	/** Whether this should spellcheck (red-squiggle) */
	spellCheck?: boolean;
	/** Add an icon to the left-side of the text input */
	startIcon?: ReactElement;
	/**
	 * Optional styles to pass to the outermost `div`
	 *
	 * @default null
	 */
	style?: CSSProperties;
	/** Type to assign to the input element */
	type?: "number" | "password" | "text";
	/** Controlled value of the input */
	value?: string;
	/**
	 * Stylistic variations for the element. See story
	 *
	 * @default "underlined"
	 */
	variant?: TextInputVariant;
}

const getErrorMessage = (
	label: string,
	error: null | boolean | string,
	fallback = label
): string => {
	switch (typeof error) {
		case "boolean":
			// Error message is not provided. Use fallback if error
			return error ? fallback : label;
		case "string":
			// Error message is provided (is string). Use error
			return error;
		default:
			// Error is null: There is no error, use label
			return label;
	}
};

const useCoalescedValue = (
	inputRef: MutableRefObject<HTMLInputElement | null>,
	fallback?: string
): string | undefined => inputRef.current?.value || fallback;

const useLabelText = ({ error = null, label }: IProps): string => {
	const [labelText, setLabelText] = useState<string>(label);

	useEffect(() => setLabelText(getErrorMessage(label, error)), [error, setLabelText, label]);

	return labelText;
};

const useLabelEffect = (
	{ error = null, type, value }: IProps,
	classes: ReturnType<typeof useStyles>,
	labelRef: MutableRefObject<HTMLDivElement | null>
): MutableRefObject<HTMLInputElement | null> => {
	const inputRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);

	const coalescedValue: string | undefined = useCoalescedValue(inputRef, value);

	useEffect(() => {
		const labelDiv: HTMLDivElement | null = labelRef.current;

		if (labelDiv === null) {
			return;
		}

		const isActive = type !== "number" && Boolean(coalescedValue);
		const isEmptyNumber: boolean = type === "number" && !isNaN(parseInt(coalescedValue || ""));

		labelDiv.className = classnames(classes.label, {
			[classes.labelActive]: isActive || isEmptyNumber,
			[classes.invalid]: Boolean(error)
		});
	}, [
		error,
		labelRef,
		coalescedValue,
		type,
		classes.labelActive,
		classes.invalid,
		classes.label
	]);

	return inputRef;
};

const useRootEffect = (
	{ className, error = null }: IProps,
	classes: ReturnType<typeof useStyles>,
	inputRef: MutableRefObject<HTMLInputElement | null>
): MutableRefObject<HTMLDivElement | null> => {
	const rootRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

	const [isFocused] = useFocus(false, inputRef);

	useEffect(() => {
		const rootDiv: HTMLDivElement | null = rootRef.current;

		if (rootDiv === null) {
			return;
		}

		rootDiv.className = classnames(classes.root, className, {
			[classes.focused]: isFocused,
			[classes.invalid]: Boolean(error)
		});
	}, [className, error, isFocused, rootRef, classes.focused, classes.invalid, classes.root]);

	return rootRef;
};

export const TextInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
	const { error, startIcon, style, variant = "underlined", ...restProps } = props;

	const classes = useStyles({ variant });

	const labelRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

	const inputRef = useLabelEffect(props, classes, labelRef);
	const rootRef = useRootEffect(props, classes, inputRef);

	const labelText: string = useLabelText(props);

	return (
		<div ref={rootRef} style={style}>
			{startIcon && <div className={classes.startIconWrapper}>{startIcon}</div>}
			<div className={classes.textInputWrapper}>
				<div ref={labelRef}>
					<div>{labelText}</div>
				</div>
				<input
					ref={composeRefs(ref, inputRef)}
					className={classnames(classes.textInput, {
						[classes.invalid]: Boolean(error)
					})}
					{...restProps}
				/>
				<div />
			</div>
		</div>
	);
});

TextInput.displayName = "TextInput";
