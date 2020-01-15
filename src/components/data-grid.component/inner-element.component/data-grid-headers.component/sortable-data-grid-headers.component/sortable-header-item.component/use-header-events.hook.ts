import { ResizeContext } from "@/components/data-grid.component";
import { useDoubleClick } from "@/hooks";
import { useCallback, useContext, useEffect, useState } from "react";

interface IEventHandlers {
	onClick: (event: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
	onClickOut: () => void;
}

interface IData {
	isEditingLabel: boolean;
	isSelected: boolean;
}

export const useHeaderEvents = (asSelect: boolean): [IEventHandlers, IData] => {
	const { isResizing } = useContext(ResizeContext);

	const [isEditingLabel, setIsEditingLabel] = useState<boolean>(false);
	const [isSelected, setIsSelected] = useState<boolean>(false);

	const onClick = useCallback(() => {
		// Do not trigger click, on mouse-up from a resize event
		if (isResizing) {
			return;
		}

		setIsSelected(asSelect && !isSelected);
	}, [asSelect, isResizing, isSelected, setIsSelected]);

	const onDoubleClick = useCallback(() => {
		setIsEditingLabel(asSelect);
		setIsSelected(false);
	}, [asSelect, setIsEditingLabel, setIsSelected]);

	const onSimulatedDoubleClick = useDoubleClick({ onClick, onDoubleClick });

	const onClickOut = useCallback(() => {
		setIsEditingLabel(false);
		setIsSelected(false);
	}, [setIsEditingLabel, setIsSelected]);

	// Unselect when resizing
	useEffect(() => setIsSelected(!isResizing && isSelected), [isResizing, isSelected]);

	const eventHandlers = {
		onClick: onSimulatedDoubleClick,
		onClickOut
	};

	const data = { isEditingLabel, isSelected };

	return [eventHandlers, data];
};
