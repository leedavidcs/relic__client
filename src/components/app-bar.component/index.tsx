import { Button, TextInput } from "@/components/input.component";
import { Toolbar } from "@/components/toolbar.component";
import { Tooltip } from "@/components/tooltip.component";
import { User } from "@/graphql";
import { useModal } from "@/hooks";
import { SignInModal, SignUpModal } from "@/modals";
import { onInputValueChanged } from "@/utils";
import React, { FC, useCallback, useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { ProfileMenu } from "./profile-menu.component";
import { useStyles } from "./styles";

const FA_BARS_SIZE: number = 20;
const FA_USER_CIRCLE_SIZE: number = 32;

interface IProps {
	title: string;
	onClickSignOut?: () => void;
	onSearch?: (text: string) => void;
	user: User | null;
}

export const AppBar: FC<IProps> = ({
	onClickSignOut: propsOnClickSignOut = () => void 0,
	onSearch: propsOnSearch = () => void 0,
	title,
	user
}) => {
	const classes = useStyles();

	const { setContent, toggle } = useModal();

	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const [searchText, setSearchText] = useState<string>("");

	const onClickSignIn = useCallback(() => {
		setContent({ title: "Sign in", body: <SignInModal /> });
		toggle(true);
	}, [setContent, toggle]);

	const onClickSignUp = useCallback(() => {
		setContent({ title: "Sign up", body: <SignUpModal /> });
		toggle(true);
	}, [setContent, toggle]);

	const onClickRightIcon = useCallback(
		(index: number) => () => {
			const newIndex: number = selectedIndex === index ? -1 : index;

			setSelectedIndex(newIndex);
		},
		[selectedIndex, setSelectedIndex]
	);

	const onClickOut = useCallback(() => setSelectedIndex(-1), [setSelectedIndex]);

	const onSearch = useCallback(
		onInputValueChanged((value) => {
			propsOnSearch(value);

			setSearchText(value);
		}),
		[propsOnSearch, setSearchText]
	);

	const onClickSignOut = useCallback(() => {
		propsOnClickSignOut();

		setSelectedIndex(-1);
	}, [propsOnClickSignOut]);

	return (
		<Toolbar className={classes.root} stickTop={true}>
			<div className={classes.contentWrapper}>
				<div className={classes.menuBtnWrapper}>
					<FaBars size={FA_BARS_SIZE} />
				</div>
				<h6 className={classes.title}>{title}</h6>
				<div className={classes.searchWrapper}>
					<TextInput
						startIcon={<FaSearch />}
						label="Search"
						onChange={onSearch}
						variant="outlined"
						value={searchText}
					/>
				</div>
				{user ? null : (
					<div className={classes.authBtnWrapper}>
						<Button
							className={classes.authBtn}
							onClick={onClickSignIn}
							color="transparent"
						>
							SIGN IN
						</Button>
						<Button className={classes.authBtn} onClick={onClickSignUp}>
							SIGN UP
						</Button>
					</div>
				)}
				<div className={classes.tooltipWrapper}>
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
