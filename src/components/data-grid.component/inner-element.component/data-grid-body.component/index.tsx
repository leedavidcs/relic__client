import React, { FC } from "react";
import { SortableContainer } from "react-sortable-hoc";
import { compose } from "redux";

interface IProps {
	className?: string;
}

export const BaseComponent: FC<IProps> = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

const enhance = compose(SortableContainer);

export const DataGridBody = enhance(BaseComponent);
