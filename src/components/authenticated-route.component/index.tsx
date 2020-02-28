import { useSetUser } from "@/hooks";
import React, { ComponentType, createElement, FC, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
	component: ComponentType;
}

export const AuthenticatedRoute: FC<IProps> = ({ component, ...restProps }) => {
	const [setUser, { called, loading, user }] = useSetUser();

	useEffect(() => setUser(), [setUser]);

	const isAuthenticated: boolean = called && !loading && Boolean(user);

	return (
		<Route
			{...restProps}
			render={({ location }) => {
				return isAuthenticated ? (
					createElement(component)
				) : (
					<Redirect
						to={{
							pathname: "/sign-in",
							state: { from: location }
						}}
					/>
				);
			}}
		/>
	);
};
