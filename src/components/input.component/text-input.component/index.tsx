import { useFocus } from "@/hooks";
import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, {
	CSSProperties,
	FC,
	FormEvent,
	KeyboardEvent,
	MouseEvent,
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
	/** Label to be placed on the text input. Acts as a placeholder as well */
	label: string;
	/** HTMLInputElement onChange event */
	onChange?: (event: FormEvent<HTMLInputElement>) => void;
	/** HTMLInputElement onClick event */
	onClick?: (event: MouseEvent<HTMLInputElement>) => void;
	/** HTMLInputElement onInput event */
	onInput?: (event: FormEvent<HTMLInputElement>) => void;
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
	/**
	 * Validator.
	 *
	 * If a string is passed, and there is no input, and the input is dirty, this will emit the
	 * string as an error message.
	 *
	 * If null is passed, there is no validation
	 *
	 * If a function is passed, it will emit an error message if a string is returned.
	 */
	validator?: string | null | ((value: string) => string | null);
	/** Controlled value of the input */
	value: string;
	/** Stylistic variations for the element. See story */
	variant?: TextInputVariant;
}

export const TextInput: FC<IProps> = ({
	className,
	disabled = false,
	label,
	onChange,
	onClick,
	onInput: propsOnInput,
	onKeyDown,
	password = false,
	spellCheck = false,
	startIcon: propsStartIcon,
	style,
	value,
	validator = () => null,
	variant = "underlined"
}) => {
	const classes = useStyles({ variant });

	const [dirty, setDirty] = useState<boolean>(false);
	const [hasInput, setHasInput] = useState<boolean>(false);
	const [isValidInput, setIsValidInput] = useState<boolean>(true);
	const [labelText, setLabelText] = useState<string>(label);

	const rootRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const labelRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const [isFocused] = useFocus(false, inputRef);

	const onInput = useCallback(
		(event: FormEvent<HTMLInputElement>): void => {
			if (propsOnInput) {
				propsOnInput(event);
			}

			setDirty(true);
		},
		[propsOnInput, setDirty]
	);

	useEffect(() => {
		if (!dirty) {
			return;
		}

		const validatorMessage: string | null =
			typeof validator === "function" ? validator(value) : validator;
		const isValid: boolean = validatorMessage === null;

		setLabelText(validatorMessage === null ? label : validatorMessage);

		setIsValidInput(isValid);
		setHasInput(value.length > 0);
	}, [dirty, validator, setLabelText, label, value]);

	useEffect(() => {
		const labelDiv: HTMLDivElement | null = labelRef.current;

		if (labelDiv === null) {
			return;
		}

		labelDiv.className = classnames(classes.label, {
			[classes.labelActive]: hasInput,
			[classes.invalid]: !isValidInput
		});
	}, [hasInput, isValidInput, classes.labelActive, classes.invalid, classes.label]);

	useEffect(() => {
		const rootDiv: HTMLDivElement | null = rootRef.current;

		if (rootDiv === null) {
			return;
		}

		toggleClass(rootDiv, classes.focused, isFocused);
	}, [classes.focused, isFocused]);

	const startIcon = useMemo(
		() =>
			propsStartIcon ? (
				<div className={classes.startIconWrapper}>{propsStartIcon}</div>
			) : null,
		[classes, propsStartIcon]
	);

	return (
		<div
			ref={rootRef}
			className={classnames(classes.root, className, {
				[classes.invalid]: !isValidInput
			})}
			style={style}
		>
			{startIcon}
			<div className={classes.textInputWrapper}>
				<div
					ref={labelRef}
					className={classnames(classes.label, {
						[classes.invalid]: !isValidInput
					})}
				>
					<div>{labelText}</div>
				</div>
				<input
					ref={inputRef}
					className={classnames(classes.textInput, {
						[classes.invalid]: !isValidInput
					})}
					type={password ? "password" : "text"}
					disabled={disabled}
					onChange={onChange}
					onClick={onClick}
					onInput={onInput}
					onKeyDown={onKeyDown}
					spellCheck={spellCheck}
					value={value}
				/>
				<div />
			</div>
		</div>
	);
};
