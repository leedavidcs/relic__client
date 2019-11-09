import { TextInput } from "@/components/input.component";
import { Toolbar } from "@/components/toolbar.component";
import { Tooltip } from "@/components/tooltip.component";
import { User } from "@/graphql";
import React, { FC, useCallback, useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { ProfileMenu } from "./profile-menu.component";
import { useStyles } from "./styles";

const FA_BARS_SIZE: number = 20;
const FA_USER_CIRCLE_SIZE: number = 32;

interface IProps {
	title: string;
	onClickSignIn?: () => void;
	onClickSignOut?: () => void;
	user: User | null;
}

export const AppBar: FC<IProps> = (props) => {
	const { onClickSignIn, onClickSignOut, title, user } = props;

	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);

	const onClickRightIcon = useCallback(
		(index: number) => () => {
			const newIndex: number = selectedIndex === index ? -1 : index;

			setSelectedIndex(newIndex);
		},
		[selectedIndex, setSelectedIndex]
	);

	const onClickOut = useCallback(() => setSelectedIndex(-1), [setSelectedIndex]);

	return (
		<Toolbar className={classes.root} stickTop={true}>
			<div className={classes.contentWrapper}>
				<div className={classes.menuBtnWrapper}>
					<FaBars size={FA_BARS_SIZE} />
				</div>
				<h6 className={classes.title}>{title}</h6>
				<div className={classes.searchWrapper}>
					<TextInput startIcon={<FaSearch />} label="Search" variant="outlined" />
				</div>
				<div>
					<Tooltip
						active={selectedIndex === 0}
						direction={"left-start"}
						onClick={onClickRightIcon(0)}
						onClickOut={onClickOut}
						tooltip={
							<ProfileMenu
								onClickSignIn={onClickSignIn}
								onClickSignOut={onClickSignOut}
								user={user}
							/>
						}
					>
						<FaUserCircle className={classes.profileIcon} size={FA_USER_CIRCLE_SIZE} />
					</Tooltip>
				</div>
			</div>
		</Toolbar>
	);
};
