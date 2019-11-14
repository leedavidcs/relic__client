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

const variants = ["underlined", "outlined"] as const;

interface IProps {
	className?: string;
	disabled?: boolean;
	label: string;
	onBlur?: (event: FormEvent<HTMLInputElement>) => void;
	onChange?: (event: FormEvent<HTMLInputElement>) => void;
	onClick?: (event: MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: FormEvent<HTMLInputElement>) => void;
	onInput?: (event: FormEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
	password?: boolean;
	placeholder?: string;
	spellCheck?: boolean;
	startIcon?: ReactElement;
	style?: CSSProperties;
	validator?: string | null | ((value: string) => string | null);
	value: string;
	variant?: typeof variants[number];
}

export const TextInput: FC<IProps> = (props) => {
	const {
		className,
		disabled = false,
		label,
		onBlur,
		onChange,
		onClick,
		onFocus,
		onInput: propsOnInput,
		onKeyDown,
		password = false,
		placeholder = "",
		spellCheck = false,
		startIcon: propsStartIcon,
		style,
		value,
		validator = () => null
	} = props;

	const classes = useStyles(props);

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
					placeholder={placeholder}
					disabled={disabled}
					onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
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

TextInput.defaultProps = {
	variant: "underlined"
};
