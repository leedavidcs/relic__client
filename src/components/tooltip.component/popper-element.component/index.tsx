import React, { FC, Fragment, ReactNode, useEffect } from "react";

interface IProps {
	active?: boolean;
	children: ReactNode;
	scheduleUpdate: () => void;
}

export const PopperElement: FC<IProps> = ({ active, children, scheduleUpdate }) => {
	useEffect(() => scheduleUpdate(), [active, scheduleUpdate]);

	return <Fragment>{children}</Fragment>;
};
