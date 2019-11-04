import { Mutations, RegisterLocalUserVariables } from "@/graphql";
import React, { FC, useCallback } from "react";
import { useMutation } from "react-apollo";
import { SignUpModal } from "./sign-up-modal.component";

interface IProps {
	active: boolean;
	onClickOutside: () => void;
	onClose: () => void;
}

export const SignUpModalContainer: FC<IProps> = ({ active, onClickOutside, onClose }) => {
	const [registerUser] = useMutation(Mutations.RegisterLocalUser);

	const onSubmit = useCallback(
		(variables: RegisterLocalUserVariables) => {
			registerUser({ variables });
		},
		[registerUser]
	);

	return (
		<SignUpModal
			active={active}
			onClickOutside={onClickOutside}
			onClose={onClose}
			onSubmit={onSubmit}
		/>
	);
};
