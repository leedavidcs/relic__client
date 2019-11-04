import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { SignUpModal } from ".";

storiesOf("sign-up-modal", module).add("default", () => {
	const onClickOutside = action("onClickOutside");
	const onClose = action("onClose");
	const onSubmit = action("onSubmit");

	const active: boolean = boolean("active", true);

	return (
		<SignUpModal
			active={active}
			onClickOutside={onClickOutside}
			onClose={onClose}
			onSubmit={onSubmit}
		/>
	);
});
