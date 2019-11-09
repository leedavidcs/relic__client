import { useFocus } from "@/hooks";
import { toggleClass } from "@/utils";
import classnames from "classnames";
import React, {
	CSSProperties,
	FC,
	FormEvent,
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
	disabled?: boolean;
	label: string;
	onBlur?: (event: FormEvent<HTMLInputElement>) => void;
	onChange?: (event: FormEvent<HTMLInputElement>) => void;
	onClick?: (event: MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: FormEvent<HTMLInputElement>) => void;
	onInput?: (event: FormEvent<HTMLInputElement>) => void;
	password?: boolean;
	placeholder?: string;
	spellCheck?: boolean;
	startIcon?: ReactElement;
	style?: CSSProperties;
	validator?: (value: string) => string | null;
	variant?: typeof variants[number];
}

export const TextInput: FC<IProps> = (props) => {
	const {
		disabled = false,
		label,
		onBlur,
		onChange,
		onClick,
		onFocus,
		onInput: propsOnInput,
		password = false,
		placeholder = "",
		spellCheck = false,
		startIcon: propsStartIcon,
		style,
		validator = () => null
	} = props;

	const classes = useStyles(props);

	const [hasInput, setHasInput] = useState<boolean>(false);
	const [isValidInput, setIsValidInput] = useState<boolean>(true);
	const [labelText, setLabelText] = useState<string>(label);

	const rootRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const labelRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const [isFocused] = useFocus(false, inputRef);

	const onInput = useCallback(
		(event: FormEvent<HTMLInputElement>): void => {
			const { value } = event.currentTarget;
			const validatorMessage: string | null = validator(value);
			const isValid: boolean = validatorMessage === null;

			setLabelText(validatorMessage === null ? label : validatorMessage);

			setIsValidInput(isValid);
			setHasInput(value.length > 0);

			if (propsOnInput) {
				propsOnInput(event);
			}
		},
		[propsOnInput, validator, setLabelText, label]
	);

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
			className={classnames(classes.root, {
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
					spellCheck={spellCheck}
				/>
				<div />
			</div>
		</div>
	);
};

TextInput.defaultProps = {
	variant: "underlined"
};
