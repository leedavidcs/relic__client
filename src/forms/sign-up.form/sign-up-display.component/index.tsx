import { Anchor, Button, PasswordStrength, TextInput } from "@/components";
import { RegisterLocalUserVariables } from "@/graphql";
import { useModal } from "@/hooks";
import { onInputValueChanged } from "@/utils";
import React, { FC, lazy, useCallback, useState } from "react";
import Validator from "validator";
import { useStyles } from "./styles";

const SignInModal = lazy(() => import("@/modals/sign-in.modal"));

interface IProps {
	/** Action to take when the user clicks to resend account validation email */
	onClickResend: () => void;
	/** Action for when the user submits the form */
	onSubmit: (
		variables: RegisterLocalUserVariables
	) => Promise<{ success: boolean; error: string | null }>;
}

export const SignUpDisplay: FC<IProps> = ({ onSubmit: propsOnSubmit }) => {
	const classes = useStyles();

	const { setContent, toggle } = useModal();

	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
	const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const onChangeUsername = useCallback(onInputValueChanged(setUsername), [setUsername]);

	const onChangeEmail = useCallback(onInputValueChanged(setEmail), [setEmail]);

	const onChangePassword = useCallback(onInputValueChanged(setPassword), [setPassword]);

	const onChangeConfirmPassword = useCallback(onInputValueChanged(setConfirmPassword), [
		setConfirmPassword
	]);

	const onSubmit = useCallback(() => {
		if (!isValidUsername || !isValidEmail || !isValidPassword || !isValidConfirmPassword) {
			return;
		}

		propsOnSubmit({ email, password, username }).then((result) => {
			setError(result.error);
		});
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

	const validateUsername = useCallback(
		(value: string): string | null => {
			const isValid: boolean = value.length > 0;

			setIsValidUsername(isValid);

			return isValid ? null : "Username is required";
		},
		[setIsValidUsername]
	);

	const validateEmail = useCallback(
		(value: string): string | null => {
			if (value.length === 0) {
				setIsValidEmail(false);

				return "Email is required";
			}

			const isValid: boolean = Validator.isEmail(value);

			setIsValidEmail(isValid);

			return isValid ? null : "Email is not valid";
		},
		[setIsValidEmail]
	);

	const validatePassword = useCallback(
		(value: string): string | null => {
			const isValid: boolean = value.length > 0;

			setIsValidPassword(isValid);

			return isValid ? null : "Password is required";
		},
		[setIsValidPassword]
	);

	const validateConfirmPassword = useCallback(
		(value): string | null => {
			const isValid: boolean = value === password;

			setIsValidConfirmPassword(isValid);

			return isValid ? null : "Passwords do not match";
		},
		[password, setIsValidConfirmPassword]
	);

	const onClickSignIn = useCallback(() => {
		setContent({ title: "Sign in", body: <SignInModal /> });

		toggle(true);
	}, [setContent, toggle]);

	return (
		<div className={classes.root}>
			<div className={classes.formWrapper}>
				<TextInput
					className={classes.textInput}
					label="Username"
					onChange={onChangeUsername}
					validator={validateUsername}
					variant="outlined"
					value={username}
				/>
				<TextInput
					className={classes.textInput}
					label="Email"
					onChange={onChangeEmail}
					validator={validateEmail}
					variant="outlined"
					value={email}
				/>
				<TextInput
					className={classes.textInput}
					label="Password"
					password={true}
					onChange={onChangePassword}
					validator={validatePassword}
					variant="outlined"
					value={password}
				/>
				<PasswordStrength className={classes.passwordStrength} password={password} />
				<TextInput
					className={classes.textInput}
					label="Confirm password"
					password={true}
					onChange={onChangeConfirmPassword}
					validator={validateConfirmPassword}
					variant="outlined"
					value={confirmPassword}
				/>
				<div className={classes.btnContainer}>
					<Button className={classes.signUpBtn} onClick={onSubmit}>
						SIGN UP
					</Button>
				</div>
			</div>
			{error ? <div className={classes.error}>{error}</div> : null}
			<div className={classes.signInWrapper}>
				Already a member? {<Anchor value="SIGN IN" onClick={onClickSignIn} />}
			</div>
		</div>
	);
};
