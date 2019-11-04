import { Button } from "@/components/button.component";
import { TextInput } from "@/components/form.component";
import { Modal } from "@/components/modal.component";
import { RegisterLocalUserVariables } from "@/graphql";
import React, { FC, FormEvent, useCallback, useState } from "react";
import { isEmail } from "validator";
import { useStyles } from "./styles";

interface IProps {
	active: boolean;
	onClickOutside?: () => void;
	onClose: () => void;
	onSubmit: (variables: RegisterLocalUserVariables) => void;
}

export const SignUpModal: FC<IProps> = ({
	active,
	onClickOutside,
	onClose,
	onSubmit: propsOnSubmit
}) => {
	const classes = useStyles();
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
	const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<boolean>(false);

	const onInputValueChanged = useCallback((callback: (value: string) => void) => {
		return ({ currentTarget: { value } }: FormEvent<HTMLInputElement>): void => {
			callback(value);
		};
	}, []);

	const onChangeUsername = useCallback(onInputValueChanged(setUsername), [setUsername]);

	const onChangeEmail = useCallback(onInputValueChanged(setEmail), [setEmail]);

	const onChangePassword = useCallback(onInputValueChanged(setPassword), [setPassword]);

	const onSubmit = useCallback(() => {
		if (!isValidUsername || !isValidEmail || !isValidPassword || !isValidConfirmPassword) {
			return;
		}

		propsOnSubmit({ email, password, username });
	}, [
		propsOnSubmit,
		email,
		password,
		username,
		isValidUsername,
		isValidEmail,
		isValidPassword,
		isValidConfirmPassword
	]);

	const validateUsername = useCallback((value: string): string | null => {
		const isValid: boolean = value.length > 0;

		setIsValidUsername(isValid);

		return isValid ? null : "Username is required";
	}, []);

	const validateEmail = useCallback((value: string): string | null => {
		if (value.length === 0) {
			setIsValidEmail(false);

			return "Email is required";
		}

		const isValid: boolean = isEmail(value);

		setIsValidEmail(isValid);

		return isValid ? null : "Email is not valid";
	}, []);

	const validatePassword = useCallback((value: string): string | null => {
		const isValid: boolean = value.length > 0;

		setIsValidPassword(isValid);

		return isValid ? null : "Password is required";
	}, []);

	const validateConfirmPassword = useCallback(
		(value): string | null => {
			const isValid: boolean = value === password;

			setIsValidConfirmPassword(isValid);

			return isValid ? null : "Passwords do not match";
		},
		[password, setIsValidConfirmPassword]
	);

	return (
		<Modal title="Sign up" active={active} onClickOutside={onClickOutside} onClose={onClose}>
			<div className={classes.formWrapper}>
				<TextInput
					label="Username"
					onChange={onChangeUsername}
					validator={validateUsername}
				/>
				<TextInput label="Email" onChange={onChangeEmail} validator={validateEmail} />
				<TextInput
					label="Password"
					password={true}
					onChange={onChangePassword}
					validator={validatePassword}
				/>
				<TextInput
					label="Confirm password"
					password={true}
					validator={validateConfirmPassword}
				/>
				<div className={classes.btnContainer}>
					<Button onClick={onSubmit}>Submit</Button>
				</div>
			</div>
		</Modal>
	);
};
