import { AppRoutes } from "@/app-routes";
import { AppBar, Background } from "@/components";
import { SignInForm, SignUpForm } from "@/forms";
import React, { Fragment, useCallback } from "react";
import { useModal, useSetUser } from "./hooks";

const App: React.FC = () => {
	const { setContent, toggle } = useModal();
	const [user, doneFetchingUser] = useSetUser();

	const onClickSignUp = useCallback(() => {
		setContent({
			title: "Sign up",
			body: <SignUpForm />
		});

		toggle(true);
	}, [setContent, toggle]);

	const onClickSignIn = useCallback(() => {
		setContent({
			title: "Sign in",
			body: <SignInForm />
		});

		toggle(true);
	}, [setContent, toggle]);

	const onClickSignOut = useCallback(() => {
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
	}, []);

	return (
		<Background>
			{doneFetchingUser ? (
				<Fragment>
					<AppBar
						title="TheBrand Inc."
						user={user}
						onClickSignIn={onClickSignIn}
						onClickSignOut={onClickSignOut}
						onClickSignUp={onClickSignUp}
					/>
					<AppRoutes />
				</Fragment>
			) : null}
		</Background>
	);
};

export default App;
