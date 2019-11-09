import { AppRoutes } from "@/app-routes";
import { AppBar, Background, Overlay } from "@/components";
import { IRootState } from "@/reducers";
import React from "react";
import { useSelector } from "react-redux";

const App: React.FC = () => {
	const backdropActive: boolean = useSelector<IRootState, boolean>(
		({ backdrop: { dependants } }) => dependants > 0
	);

	return (
		<Background>
			<AppBar title="TheBrand Inc." user={null} />
			<AppRoutes />
			<Overlay active={backdropActive} />
		</Background>
	);
};

export default App;
