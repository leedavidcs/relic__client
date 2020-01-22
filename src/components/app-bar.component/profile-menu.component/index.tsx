import { List, ListItem, ListItemIcon, ListItemText } from "@/components/list.component";
import { User } from "@/graphql";
import React, { FC } from "react";
import { FaBacon } from "react-icons/fa";

interface IProps {
	onClickSignIn?: () => void;
	onClickSignOut?: () => void;
	user: User | null;
}

export const ProfileMenu: FC<IProps> = ({
	onClickSignIn = () => undefined,
	onClickSignOut = () => undefined,
	user
}) => {
	const onClickAuthOption: () => void = user ? onClickSignOut : onClickSignIn;

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
