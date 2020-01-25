import { AppRoutes } from "@/app-routes";
import { AppBar } from "@/components";
import { useAuth, useSetUser } from "@/hooks";
import React, { Fragment, useCallback, useEffect, useState } from "react";

export const App: React.FC = () => {
	const { logout } = useAuth();
	const [setUser, { called, loading, user }] = useSetUser();

	const [loaded, setLoaded] = useState<boolean>(false);

	const onClickSignOut = useCallback(() => {
		logout();
		setUser();
	}, [logout, setUser]);

	useEffect(() => setUser(), [setUser]);

	useEffect(() => {
		if (called && !loading) {
			setLoaded(true);
		}
	}, [called, loading, setLoaded]);

	return loaded ? (
		<Fragment>
			<AppBar title="TheBrand Inc." user={user} onClickSignOut={onClickSignOut} />
			<AppRoutes />
		</Fragment>
	) : null;
};
