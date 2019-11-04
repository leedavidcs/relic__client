import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../home-page.component";
import { NotFoundPage } from "../not-found-page.component";

export const AppRoutes: FC = () => (
	<Switch>
		<Route exact={true} path="/" component={HomePage} />
		<Route component={NotFoundPage} />
	</Switch>
);
