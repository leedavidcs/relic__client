import { useFocus, useUnifiedRef } from "@/hooks";
import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, {
	CSSProperties,
	FormEvent,
	forwardRef,
	KeyboardEvent,
	ReactElement,
	RefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from "react";
import { useStyles } from "./styles";

export type TextInputVariant = "underlined" | "outlined";

interface IProps {
	/** Optional classes to pass the outermost `div` */
	className?: string;
	/** Whether the text-input should be disabled */
	disabled?: boolean;
	/** Error  */
	error?: null | boolean | string;
	/** Label to be placed on the text input. Acts as a placeholder as well */
	label: string;
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
	/** Optional styles to pass to the outermost `div` */
	style?: CSSProperties;
	/** Controlled value of the input */
	value?: string;
	/** Stylistic variations for the element. See story */
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

export const TextInput = forwardRef<HTMLInputElement, IProps>(
	(
		{
			className,
			disabled = false,
			error = null,
			label,
			name,
			onChange: propsOnChange,
			onKeyDown,
			password = false,
			spellCheck = false,
			startIcon: propsStartIcon = null,
			style,
			value,
			variant = "underlined"
		},
		ref
	) => {
		const classes = useStyles({ variant });

		const [hasInput, setHasInput] = useState<boolean>(false);
		const [labelText, setLabelText] = useState<string>(label);

		const rootRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
		const labelRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
		const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
		const unifiedRef = useUnifiedRef<HTMLInputElement>(ref, inputRef);

		const [isFocused] = useFocus(false, inputRef);

		const hasError: boolean =
			typeof error === "string" || (typeof error === "boolean" && error);

		const onChange = useCallback(
			(event: FormEvent<HTMLInputElement>) => {
				propsOnChange?.(event);
				setHasInput(Boolean(event.currentTarget.value));
			},
			[propsOnChange]
		);

		useEffect(() => setLabelText(getErrorMessage(label, error)), [error, setLabelText, label]);

		useEffect(() => {
			const labelDiv: HTMLDivElement | null = labelRef.current;

			if (labelDiv === null) {
				return;
			}

			labelDiv.className = classnames(classes.label, {
				[classes.labelActive]: hasInput,
				[classes.invalid]: Boolean(error)
			});
		}, [error, hasInput, classes.labelActive, classes.invalid, classes.label]);

		useEffect(() => {
			const rootDiv: HTMLDivElement | null = rootRef.current;

			if (rootDiv === null) {
				return;
			}

			toggleClass(rootDiv, classes.focused, isFocused);
		}, [classes.focused, isFocused]);

		const startIcon = useMemo(
			() =>
				propsStartIcon && <div className={classes.startIconWrapper}>{propsStartIcon}</div>,
			[classes, propsStartIcon]
		);

		return (
			<div
				ref={rootRef}
				className={classnames(classes.root, className, {
					[classes.invalid]: hasError
				})}
				style={style}
			>
				{startIcon}
				<div className={classes.textInputWrapper}>
					<div
						ref={labelRef}
						className={classnames(classes.label, {
							[classes.invalid]: hasError
						})}
					>
						<div>{labelText}</div>
					</div>
					<input
						ref={unifiedRef}
						className={classnames(classes.textInput, {
							[classes.invalid]: hasError
						})}
						type={password ? "password" : "text"}
						disabled={disabled}
						name={name}
						onChange={onChange}
						onKeyDown={onKeyDown}
						spellCheck={spellCheck}
						value={value}
					/>
					<div />
				</div>
			</div>
		);
	}
);

TextInput.displayName = "TextInput";
