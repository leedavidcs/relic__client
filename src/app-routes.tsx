import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthenticatedRoute } from "./components";

const HomePage = lazy(() => import("@/pages/home.page"));
const NotFoundPage = lazy(() => import("@/pages/not-found.page"));
const SignInPage = lazy(() => import("@/pages/sign-in.page"));
const User__StockPortfoliosPage = lazy(() => import("@/pages/user__stock-portfolios.page"));

export const AppRoutes: FC = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route path="/sign-in" component={SignInPage} />
				<AuthenticatedRoute
					path="/user/:userId/stock-portfolios"
					component={User__StockPortfoliosPage}
				/>
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);
