import { Anchor } from "@/components";
import React, { FC } from "react";
import { useStyles } from "./styles";

interface IProps {
	email: string;
	onClickResend: () => void;
}

export const VerifyEmail: FC<IProps> = ({ email, onClickResend }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<p>
				A confirmation email has been sent to{" "}
				{<strong className={classes.email}>{email}</strong>}.
			</p>
			<p>
				If you don't see a message in your inbox, make sure that the email address above is
				correct, and check your spam folder.
			</p>
			<p>
				Click <Anchor className={classes.resendBtn} value="HERE" onClick={onClickResend} />{" "}
				to resend the email.
			</p>
		</div>
	);
};
