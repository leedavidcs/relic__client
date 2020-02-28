import { GetStockPortfoliosForPreviewVariables } from "@/graphql";
import { useIsAuthorized } from "@/hooks";
import React, { FC, useCallback, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { StockPortfolioList } from "./stock-portfolio-list.component";
import { useStyles } from "./styles";

export const User__StockPortfoliosPage: FC = () => {
	const classes = useStyles();
	const history = useHistory();
	const { userId } = useParams();

	const [isAuthorized, redirect] = useIsAuthorized(userId);

	const onClickOpen = useCallback(
		(stockPortfolioId: string) => history.push(`/${stockPortfolioId}`),
		[history]
	);

	const variables: GetStockPortfoliosForPreviewVariables = useMemo(() => ({}), []);

	if (!isAuthorized) {
		return redirect();
	}

	return (
		<div className={classes.root}>
			<StockPortfolioList onClickOpen={onClickOpen} variables={variables} />
		</div>
	);
};

export default User__StockPortfoliosPage;
