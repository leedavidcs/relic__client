import { useTheme } from "@/hooks";
import classnames from "classnames";
import React, { cloneElement, FC, ReactElement, useMemo } from "react";
import { IconContext } from "react-icons/lib/cjs";
import { SkeletonTheme } from "react-loading-skeleton";
import { useStyles } from "./styles";

interface IProps {
	children: ReactElement;
}

export const GlobalStyles: FC<IProps> = ({ children }) => {
	const classes = useStyles();
	const { theme } = useTheme();

	const iconContextValue = useMemo(() => ({ color: theme.onSurface }), [theme.onSurface]);

	return cloneElement(children, {
		className: classnames(classes.root, children.props.className),
		children: (
			<SkeletonTheme
				color={theme.surfaceLoading}
				highlightColor={theme.surfaceLoadingHighlight}
			>
				<IconContext.Provider value={iconContextValue}>
					{children.props.children}
				</IconContext.Provider>
			</SkeletonTheme>
		)
	});
};
