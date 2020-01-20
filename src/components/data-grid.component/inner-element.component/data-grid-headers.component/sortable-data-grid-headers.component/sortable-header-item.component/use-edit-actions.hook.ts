import { HeadersContext, LabelEditContext } from "@/components/data-grid.component";
import { useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";

export const useEditActions = (index: number) => {
	const { headers, setHeaderLabel } = useContext(HeadersContext);
	const { editing, setEditing } = useContext(LabelEditContext);

	const { label } = headers[index];

	const [value, setValue] = useState<string>("");

	const updateLabel = useCallback(() => setHeaderLabel(value, index), [
		index,
		setHeaderLabel,
		value
	]);

	const stopEditing = useCallback(() => {
		const isEditing: boolean = index === editing;

		if (!isEditing) {
			return;
		}

		setEditing(null);
	}, [editing, index, setEditing]);

	const startEditing = useCallback(() => setEditing(index), [index, setEditing]);

	useLayoutEffect(() => setValue(label), [index, label, setValue]);

	return useMemo(
		() => ({
			inputValue: value,
			isEditing: editing === index,
			setInputValue: setValue,
			startEditing,
			stopEditing,
			updateLabel
		}),
		[editing, index, setValue, startEditing, stopEditing, updateLabel, value]
	);
};
