import { IKebabMenuOption, KebabMenu, List, ListItem, ListItemText } from "@/components";
import {
	DeleteStockPortfolio,
	GetStockPortfoliosForPreview,
	GetStockPortfoliosForPreviewVariables,
	Mutations,
	Queries
} from "@/graphql";
import { range } from "lodash";
import React, { FC, useCallback } from "react";
import { useMutation, useQuery } from "react-apollo";
import Skeleton from "react-loading-skeleton";

const LOADING_ELEMENTS = 3;

interface IProps {
	/** Variables to invoke the stockPortfolios query */
	variables?: GetStockPortfoliosForPreviewVariables;
	/** onClick listener, when a stock portfolio gets clicked on. Passes the id. */
	onClickOpen: (id: string) => void;
}

const useDeleteStockPortfolio = (onCompleted: () => any) => {
	const onDeleteCompleted = useCallback(() => {
		onCompleted();
	}, [onCompleted]);

	const [deleteStockPortfolios] = useMutation<DeleteStockPortfolio>(
		Mutations.DeleteStockPortfolio,
		{ onCompleted: onDeleteCompleted }
	);

	return [deleteStockPortfolios];
};

export const StockPortfolioList: FC<IProps> = ({ onClickOpen: propsOnClickOpen, variables }) => {
	const { data, loading, refetch } = useQuery<GetStockPortfoliosForPreview>(
		Queries.GetStockPortfoliosForPreview,
		{ variables }
	);

	const [deleteStockPortfolios] = useDeleteStockPortfolio(refetch);

	const onClickOpen = useCallback((id: string) => () => propsOnClickOpen(id), [propsOnClickOpen]);

	const onClickDeleteOption = useCallback(
		(id: string) => () => {
			deleteStockPortfolios({ variables: { id } });
		},
		[deleteStockPortfolios]
	);

	const kebabOptions = useCallback(
		(id: string): readonly IKebabMenuOption[] => [
			{ text: "Delete", onClick: onClickDeleteOption(id) }
		],
		[onClickDeleteOption]
	);

	if (loading || !data) {
		return (
			<List divider="full">
				{range(LOADING_ELEMENTS).map((__, i) => (
					<ListItem key={i}>
						<ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
					</ListItem>
				))}
			</List>
		);
	}

	return (
		<List divider="full">
			{data.stockPortfolios.map(({ id, name, updatedAt }, i) => (
				<ListItem key={id} onClick={onClickOpen(id)} selected={false}>
					<ListItemText primary={name} secondary={`Updated at: ${updatedAt}`} />
					<KebabMenu options={kebabOptions(id)} />
				</ListItem>
			))}
		</List>
	);
};
