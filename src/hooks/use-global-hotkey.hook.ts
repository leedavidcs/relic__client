import { useEffect } from "react";

export const useGlobalHotkey = (keyCode: number, handler: () => void) => {
	useEffect(() => {
		document.addEventListener("keydown", handler);

		return () => document.removeEventListener("keydown", handler);
	}, [keyCode, handler]);
};
