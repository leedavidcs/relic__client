import classnames from "classnames";
import React, {
	FC,
	FormEvent,
	MouseEvent,
	RefObject,
	useCallback,
	useEffect,
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
		validator = () => null
	} = props;

	const classes = useStyles(props);
	const [hasInput, setHasInput] = useState<boolean>(false);
	const [isValidInput, setIsValidInput] = useState<boolean>(true);
	const [labelText, setLabelText] = useState<string>(label);
	const labelRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

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
		const labelDiv: HTMLDivElement = labelRef.current!;

		labelDiv.className = classnames(classes.label, {
			[classes.labelActive]: hasInput,
			[classes.invalid]: !isValidInput
		});
	}, [hasInput, isValidInput, classes.labelActive, classes.invalid, classes.label]);

	return (
		<div className={classes.root}>
			<div
				className={classnames(classes.label, {
					[classes.invalid]: !isValidInput
				})}
				ref={labelRef}
			>
				<div>{labelText}</div>
			</div>
			<input
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
	);
};

TextInput.defaultProps = {
	variant: "underlined"
};
