import { Modal, ModalContext } from "@/components/modal.component";
import { Overlay } from "@/components/overlay.component";
import { GetModal, Mutations, Queries, ToggleModal, ToggleModalVariables } from "@/graphql";
import React, { FC, ReactNode, useCallback, useState } from "react";
import { useMutation, useQuery } from "react-apollo";

export const ModalProvider: FC = ({ children }) => {
	const { data } = useQuery<GetModal>(Queries.GetModal);
	const [toggleModal] = useMutation<ToggleModal, ToggleModalVariables>(Mutations.ToggleModal);

	const [content, setContent] = useState<{ title: string; body: ReactNode } | null>(null);

	const { title, body } = content || { title: "", body: null };
	const active: boolean = data ? data.modal : false;

	const toggle = useCallback(
		(force?: boolean): void => {
			toggleModal({ variables: { force } });
		},
		[toggleModal]
	);

	const onClose = useCallback(() => {
		setContent(null);
		toggle(false);
	}, [setContent, toggle]);

	return (
		<ModalContext.Provider value={{ active, setContent, toggle }}>
			{children}
			<Overlay active={active} clickThrough={false} />
			<Modal active={active} onClose={onClose} onClickOutside={onClose} title={title}>
				{body}
			</Modal>
		</ModalContext.Provider>
	);
};
