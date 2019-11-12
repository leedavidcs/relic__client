import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home.page"));
const NotFoundPage = lazy(() => import("@/pages/not-found.page"));
const SignInPage = lazy(() => import("@/pages/sign-in.page"));

export const AppRoutes: FC = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route exact={true} path="/sign-in" component={SignInPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);
