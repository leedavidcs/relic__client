import { Button, TextInput } from "@/components/input.component";
import { Toolbar } from "@/components/toolbar.component";
import { Tooltip } from "@/components/tooltip.component";
import { User } from "@/graphql";
import { useModal } from "@/hooks";
import { onInputValueChanged } from "@/utils";
import React, { FC, lazy, useCallback, useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { ProfileMenu } from "./profile-menu.component";
import { useStyles } from "./styles";

const SignInModal = lazy(() => import("@/modals/sign-in.modal"));
const SignUpModal = lazy(() => import("@/modals/sign-up.modal"));

const FA_BARS_SIZE = 20;
const FA_USER_CIRCLE_SIZE = 32;

interface IProps {
	/** Text to be used in the brand */
	title: string;
	/** Action for when the user clicks to sign out. Is only available on {user} !== null */
	onClickSignOut?: () => void;
	/** Invoked on search action from search bar. Passes search text */
	onSearch?: (text: string) => void;
	/** User object of currently logged-in user. Null if none is logged in */
	user: User | null;
}

export const AppBar: FC<IProps> = ({
	onClickSignOut: propsOnClickSignOut = () => undefined,
	onSearch: propsOnSearch = () => undefined,
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

	const closeMenus = useCallback(() => setSelectedIndex(-1), [setSelectedIndex]);

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
				{user && (
					<Tooltip
						active={selectedIndex === 0}
						direction="left-start"
						onMouseDownOut={closeMenus}
						tooltip={
							<ProfileMenu
								onClickSignIn={onClickSignIn}
								onClickSignOut={onClickSignOut}
								user={user}
							/>
						}
					>
						<FaUserCircle
							onClick={onClickRightIcon(0)}
							className={classes.profileIcon}
							size={FA_USER_CIRCLE_SIZE}
						/>
					</Tooltip>
				)}
			</div>
		</Toolbar>
	);
};
