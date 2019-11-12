import { AppRoutes } from "@/app-routes";
import { AppBar, Background } from "@/components";
import { SignInForm } from "@/forms";
import React, { Fragment, useCallback } from "react";
import { useModal, useSetUser } from "./hooks";

const App: React.FC = () => {
	const { setContent, toggle } = useModal();
	const [user, doneFetchingUser] = useSetUser();

	const onClickSignIn = useCallback(() => {
		setContent({
			title: "Sign in",
			body: <SignInForm />
		});

		toggle(true);
	}, [setContent, toggle]);

	const onClickSignOut = useCallback(() => void 0, []);

	return (
		<Background>
			{doneFetchingUser ? (
				<Fragment>
					<AppBar
						title="TheBrand Inc."
						user={user}
						onClickSignIn={onClickSignIn}
						onClickSignOut={onClickSignOut}
					/>
					<AppRoutes />
				</Fragment>
			) : null}
		</Background>
	);
};

export default App;
