import { Button, TextInput } from "@/components";
import { LoginLocalUserVariables } from "@/graphql";
import { onInputValueChanged } from "@/utils";
import React, { FC, useCallback, useState } from "react";
import { useStyles } from "./styles";

interface IProps {
	/* Returns whether the operation was successful */
	onSubmit: (variables: LoginLocalUserVariables) => Promise<boolean> | boolean;
}

export const SignInDisplay: FC<IProps> = ({ onSubmit: propsOnSubmit }) => {
	const classes = useStyles();

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

	return (
		<div className={classes.root}>
			<TextInput
				className={classes.textInput}
				label="Username or Email"
				onChange={onChangeUserIdentifier}
				value={userIdentifier}
			/>
			<TextInput
				className={classes.textInput}
				label="Password"
				password={true}
				onChange={onChangePassword}
				validator={validatePassword}
				value={password}
			/>
			<div className={classes.btnContainer}>
				<Button onClick={onSubmit}>Sign in</Button>
			</div>
		</div>
	);
};
