import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages";

export const AppRoutes: FC = () => (
	<Switch>
		<Route exact={true} path="/" component={HomePage} />
		<Route component={NotFoundPage} />
	</Switch>
);
