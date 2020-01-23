import { DividerVariant } from "@/components/divider.component";
import classnames from "classnames";
import React, { FC, useMemo } from "react";
import { ListContext } from "./list.context";
import { useStyles } from "./styles";

export * from "./list.context";
export * from "./list-item.component";

interface IProps {
	className?: string;
	divider?: DividerVariant | null;
}

export const List: FC<IProps> = ({ children, divider = null, className }) => {
	const classes = useStyles();

	const value = useMemo(() => ({ divider }), [divider]);

	return (
		<ListContext.Provider value={value}>
			<ul className={classnames(classes.root, className)}>{children}</ul>
		</ListContext.Provider>
	);
};
