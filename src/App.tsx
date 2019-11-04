import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { AppRoutes } from "./components/app-routes.component";
import { Backdrop } from "./components/backdrop.component";
import { IRootState } from "./reducers";

const App: React.FC = () => {
	const backdropActive: boolean = useSelector<IRootState, boolean>(
		({ backdrop: { dependants } }) => dependants > 0
	);

	return (
		<div className="App">
			<AppRoutes />
			<Backdrop active={backdropActive} />
		</div>
	);
};

export default App;
