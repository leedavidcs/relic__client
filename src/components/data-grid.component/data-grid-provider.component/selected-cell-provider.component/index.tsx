import React, { FC, ReactNode, useState } from "react";
import { SelectedCellContext } from "./selected-cell.context";

export * from "./selected-cell.context";

interface IProps {
	children: ReactNode;
}

export const SelectedCellProvider: FC<IProps> = ({ children }) => {
	const [selectedCell, setSelectedCell] = useState<{ x: number; y: number } | null>(null);

	return (
		<SelectedCellContext.Provider value={{ selectedCell, setSelectedCell }}>
			{children}
		</SelectedCellContext.Provider>
	);
};
