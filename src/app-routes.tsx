import React, { FC, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home.page"));
const NotFoundPage = lazy(() => import("@/pages/not-found.page"));

export const AppRoutes: FC = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route exact={true} path="/" component={HomePage} />
			<Route component={NotFoundPage} />
		</Switch>
	</Suspense>
);
