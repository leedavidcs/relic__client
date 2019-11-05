import React from "react";
import { useSelector } from "react-redux";
import { AppRoutes } from "./app-routes";
import { Overlay } from "./components/overlay.component";
import { IRootState } from "./reducers";

const App: React.FC = () => {
	const backdropActive: boolean = useSelector<IRootState, boolean>(
		({ backdrop: { dependants } }) => dependants > 0
	);

	return (
		<div className="App">
			<AppRoutes />
			<Overlay active={backdropActive} />
		</div>
	);
};

export default App;
