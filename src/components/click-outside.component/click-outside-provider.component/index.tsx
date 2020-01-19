import { useDictionary } from "@/hooks";
import { makeConcurrentFunc } from "@/utils";
import React, { FC, MouseEvent, MouseEventHandler, useCallback, useMemo } from "react";
import { ClickOutsideContext } from "./click-outside.context";
import { useStyles } from "./styles";

export * from "./click-outside.context";

/**
 * @description Creates a wrapper `div` that can be targetted as a global click event in place of
 *     `document`. The reason why `document` should not be used, is that it fails when detecting
 *     outside clicks on a ReactNode that contains a portal, since portals are detached from the
 *     native DOM element that we are binding the `onClickOut` listener to.
 *
 *     Portals still respect the React tree when it comes to event bubbling. This allows filtering
 *     which events to run by marking ReactNodes that have been clicked inside, before invoking the
 *     parent `onClick`.
 *
 *     `document` is problematic to add the `click` event listener to, because `document` listeners
 *     will always trigger before any React event handlers.
 * @see {@link https://reactjs.org/docs/portals.html#event-bubbling-through-portals} for
 *     information on React portals and event bubbling
 * @see {@link https://github.com/facebook/react/issues/7094#issuecomment-228931737} for
 *     Dan Abramov's explanation on event delegation.
 * @author David Lee
 * @date January 16, 2020
 */
export const ClickOutsideProvider: FC = ({ children }) => {
	const classes = useStyles();

	const { dictRef, register, unregister } = useDictionary<MouseEventHandler<HTMLDivElement>>({
		prefix: "click_outside__"
	});

	const onClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			const dict = dictRef.current;

			const handlers: ReadonlyArray<MouseEventHandler<HTMLDivElement>> = Object.values(dict);

			const concurrentFunc = makeConcurrentFunc(handlers);

			concurrentFunc(event);
		},
		[dictRef]
	);

	const value = useMemo(() => ({ register, unregister }), [register, unregister]);

	return (
		<ClickOutsideContext.Provider value={value}>
			<div className={classes.root} onClick={onClick}>
				{children}
			</div>
		</ClickOutsideContext.Provider>
	);
};
