import { ITooltipLocation } from "@/hooks";
import { makeConcurrentFunc } from "@/utils";
import { uniqueId } from "lodash";
import React, { FC, ReactNode, useCallback, useMemo, useRef } from "react";
import { ContextMenuContext, IContextMenuRegisterHandlers } from "./context-menu.context";

export * from "./context-menu.context";

interface IHandlerDict {
	[id: string]: IContextMenuRegisterHandlers;
}

interface IProps {
	children: ReactNode;
}

export const ContextMenuProvider: FC<IProps> = ({ children }) => {
	const dictRef = useRef<IHandlerDict>({});

	const register = useCallback((handlers: IContextMenuRegisterHandlers) => {
		const newId: string = uniqueId("context_menu__");

		dictRef.current = { ...dictRef.current, [newId]: handlers };

		return newId;
	}, []);

	const unregister = useCallback((id: string) => {
		const { [id]: toUnregister, ...dictWithoutId } = dictRef.current;

		dictRef.current = dictWithoutId;
	}, []);

	const close = useCallback((id?: string) => {
		const dict = dictRef.current;

		if (id) {
			return dict[id]?.close();
		}

		const funcs: ReadonlyArray<() => void> = Object.values(dict).map(({ close: f }) => f);

		const closeAll = makeConcurrentFunc(funcs);

		closeAll();
	}, []);

	const open = useCallback((id: string, location: ITooltipLocation) => {
		const dict = dictRef.current;
		const { [id]: toOpen, ...toClose } = dict;

		const funcs: ReadonlyArray<() => void> = Object.values(toClose).map(({ close: f }) => f);

		const closeOthers = makeConcurrentFunc(funcs);

		closeOthers();
		toOpen?.open(location);
	}, []);

	const value = useMemo(() => ({ close, open, register, unregister }), [
		close,
		open,
		register,
		unregister
	]);

	return <ContextMenuContext.Provider value={value}>{children}</ContextMenuContext.Provider>;
};
