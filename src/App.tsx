import { AppRoutes } from "@/app-routes";
import { AppBar, Background } from "@/components";
import React, { Fragment, useCallback } from "react";
import { useSetUser } from "./hooks";

const App: React.FC = () => {
	const [user, doneFetchingUser] = useSetUser();

	const onClickSignIn = useCallback(() => void 0, []);

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
