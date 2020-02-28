import React, { ReactElement, useCallback, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useSetUser } from "./use-set-user.hook";

type UseIsAuthorizedResult = [boolean, () => ReactElement];

export const useIsAuthorized = (userId?: string): UseIsAuthorizedResult => {
	const location = useLocation();
	const [setUser, { called, loading, user }] = useSetUser();

	useEffect(() => setUser(), [setUser]);

	const redirect = useCallback(
		() => (
			<Redirect
				to={{
					pathname: "/sign-in",
					state: { from: location }
				}}
			/>
		),
		[location]
	);

	if (!userId) {
		return [false, redirect];
	}

	const isAuthenticated: boolean = called && !loading && Boolean(user);

	if (!isAuthenticated) {
		return [false, redirect];
	}

	const isAuthorized: boolean = user?.id === userId;

	return [isAuthorized, redirect];
};
