import { GetUser, GetViewer, Mutations, Queries, SetUserVariables, User, Viewer } from "@/graphql";
import { useEffect, useMemo } from "react";
import { useMutation, useQuery } from "react-apollo";

export const useSetUser = (): [User | null, boolean] => {
	const [setUser, { called, loading: userLoading, data: userData }] = useMutation<
		GetUser,
		SetUserVariables
	>(Mutations.SetUser);
	const { error, loading: viewerLoading, data: viewerData } = useQuery<GetViewer>(
		Queries.GetViewer,
		{ skip: Boolean(userData) }
	);

	const doneFetchingViewer: boolean = Boolean(error) || !viewerLoading;

	const finalViewer: Viewer | null = useMemo(() => {
		if (!doneFetchingViewer) {
			return null;
		}

		return (viewerData && viewerData.viewer) || null;
	}, [doneFetchingViewer, viewerData]);

	const doneFetchingUser: boolean =
		(doneFetchingViewer && !finalViewer) || (called && !userLoading);

	const finalUser: User | null = useMemo(() => {
		if (!doneFetchingUser) {
			return null;
		}

		return (userData && userData.user) || null;
	}, [doneFetchingUser, userData]);

	useEffect(() => {
		if (!finalViewer) {
			return;
		}

		setUser({ variables: { user: finalViewer } });
	}, [finalViewer, setUser]);

	useEffect(() => {
		if (!error) {
			return;
		}

		/* tslint:disable:no-console */
		console.error("Could not get user information. Please login again.", error);
		/* tslint:enable:no-console */
	}, [error]);

	return [finalUser, doneFetchingUser];
};
