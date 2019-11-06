import { Background } from "@/components/background.component";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import React from "react";
import { SignUpModal } from ".";

export default { title: "sign-up-modal", component: SignUpModal };

export const standard = () => {
	const onClickOutside = action("onClickOutside");
	const onClose = action("onClose");
	const onSubmit = action("onSubmit");

	const active: boolean = boolean("active", true);

	return (
		<Background>
			<SignUpModal
				active={active}
				onClickOutside={onClickOutside}
				onClose={onClose}
				onSubmit={onSubmit}
			/>
		</Background>
	);
};
