import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import { User } from "@/graphql";
import React, { FC, useCallback } from "react";
import { FaBacon } from "react-icons/fa";

interface IProps {
	onClickSignIn?: () => void;
	onClickSignOut?: () => void;
	user: User | null;
}

export const ProfileMenu: FC<IProps> = ({
	onClickSignIn = () => void 0,
	onClickSignOut = () => void 0,
	user
}) => {
	const onClickAuthOption = useCallback(() => {
		user ? onClickSignOut() : onClickSignIn();
	}, [user, onClickSignIn, onClickSignOut]);

	return (
		<List>
			<ListItem selected={false}>
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary="Your profile" />
			</ListItem>
			<ListItem selected={false} onClick={onClickAuthOption}>
				<ListItemIcon>
					<FaBacon />
				</ListItemIcon>
				<ListItemText primary={user ? "Sign out" : "Sign in"} />
			</ListItem>
		</List>
	);
};
