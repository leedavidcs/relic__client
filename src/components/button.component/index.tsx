import React, { FC, MouseEvent } from "react";
import { useStyles } from "./styles";

export enum ButtonSize {
	Small = "Small",
	Medium = "Medium",
	Large = "Large"
}

export enum ButtonType {
	Primary = "Primary",
	PrimaryVariant = "PrimaryVariant",
	Secondary = "Secondary",
	SecondaryVariant = "SecondaryVariant",
	Error = "Error",
	Warning = "Warning",
	Transparent = "Transparent"
}

interface IProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	size?: ButtonSize;
	type?: ButtonType;
}

export const Button: FC<IProps> = (props) => {
	const { children, onClick } = props;

	const classes = useStyles(props);

	return (
		<button className={classes.root} onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	size: ButtonSize.Medium,
	type: ButtonType.Primary
};
