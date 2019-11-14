import { Anchor, Button, TextInput } from "@/components";
import { LoginLocalUserVariables } from "@/graphql";
import { useModal } from "@/hooks";
import { SignUpModal } from "@/modals";
import { onInputValueChanged } from "@/utils";
import Keycode from "keycode";
import React, { FC, KeyboardEvent, useCallback, useLayoutEffect, useState } from "react";
import { useStyles } from "./styles";

const ON_SUCCESS_NAVIGATE_DELAY: number = 1000;

interface IProps {
	/* Returns whether the operation was successful */
	onSubmit: (variables: LoginLocalUserVariables) => Promise<boolean> | boolean;
}

export const SignInDisplay: FC<IProps> = ({ onSubmit: propsOnSubmit }) => {
	const classes = useStyles();

	const { setContent, toggle } = useModal();

	const [userIdentifier, setUserIdentifier] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [didSubmit, setDidSubmit] = useState<boolean>(false);
	const [didSucceed, setDidSucceed] = useState<boolean>(false);

	const onChangeUserIdentifier = useCallback(
		onInputValueChanged((value) => {
			setUserIdentifier(value);

			setDidSubmit(false);
		}),
		[setUserIdentifier, setDidSubmit]
	);

	const onChangePassword = useCallback(
		onInputValueChanged((value) => {
			setPassword(value);

			setDidSubmit(false);
		}),
		[password, setPassword, setDidSubmit]
	);

	const onSubmit = useCallback(async () => {
		const result: boolean = await propsOnSubmit({ userIdentifier, password });

		setDidSubmit(true);
		setDidSucceed(result);
	}, [propsOnSubmit, userIdentifier, password, setDidSubmit]);

	const validatePassword = useCallback((): string | null => {
		const isValid: boolean = !didSubmit || didSucceed;

		return isValid ? null : "Password is invalid";
	}, [didSubmit, didSucceed]);

	const onClickForgotPassword = useCallback(() => void 0, []);

	const onClickSignUp = useCallback(() => {
		setContent({
			title: "Sign up",
			body: <SignUpModal />
		});

		toggle(true);
	}, [setContent, toggle]);

	const onEnterKey = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			if (event.keyCode !== Keycode("Enter")) {
				return;
			}

			onSubmit();
		},
		[onSubmit]
	);

	useLayoutEffect(() => {
		if (!didSubmit || !didSucceed) {
			return;
		}

		setTimeout(() => void 0, ON_SUCCESS_NAVIGATE_DELAY);
	}, [didSubmit, didSucceed]);

	return (
		<div className={classes.root}>
			<div className={classes.formWrapper}>
				<TextInput
					className={classes.textInput}
					label="Username or Email"
					onChange={onChangeUserIdentifier}
					value={userIdentifier}
					variant="outlined"
				/>
				<TextInput
					className={classes.textInput}
					label="Password"
					password={true}
					onChange={onChangePassword}
					onKeyDown={onEnterKey}
					validator={validatePassword}
					value={password}
					variant="outlined"
				/>
				<div className={classes.btnContainer}>
					<Button className={classes.signInBtn} onClick={onSubmit}>
						SIGN IN
					</Button>
				</div>
			</div>
			{didSubmit && didSucceed ? (
				<div className={classes.successSignIn}>You are now logged in.</div>
			) : null}
			<Anchor
				className={classes.forgotPassword}
				value="Forgot password?"
				onClick={onClickForgotPassword}
			/>
			<div className={classes.signUpWrapper}>
				First time here? <Anchor value="SIGN UP" onClick={onClickSignUp} />
			</div>
		</div>
	);
};
