import { Button, ButtonSize } from "@/components/button.component";
import { Toolbar } from "@/components/toolbar.component";
import React, { FC } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useStyles } from "./styles";

const FA_BARS_SIZE: number = 20;
const FA_USER_CIRCLE_SIZE: number = 20;

interface IProps {
	title: string;
}

export const AppBar: FC<IProps> = ({ title }) => {
	const classes = useStyles();

	return (
		<Toolbar className={classes.root}>
			<div className={classes.contentWrapper}>
				<div className={classes.menuBtnWrapper}>
					<FaBars size={FA_BARS_SIZE} />
				</div>
				<h6 className={classes.title}>{title}</h6>
				<Button size={ButtonSize.Large}>
					<FaUserCircle className={classes.profileIcon} size={FA_USER_CIRCLE_SIZE} />
					<span>Sign in</span>
				</Button>
			</div>
		</Toolbar>
	);
};
