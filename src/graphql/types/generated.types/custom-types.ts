export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Cursor: any;
	EmailAddress: any;
	JSON: any;
	UserPassword: any;
	BigInt: any;
	DateTime: any;
	GUID: any;
	Hexadecimal: any;
	HexColorCode: any;
	HSL: any;
	HSLA: any;
	IPv4: any;
	IPv6: any;
	IBAN: any;
	ISBN: any;
	JSONObject: any;
	Long: any;
	MAC: any;
	NegativeFloat: any;
	NegativeInt: any;
	NonNegativeFloat: any;
	NonNegativeInt: any;
	NonPositiveFloat: any;
	NonPositiveInt: any;
	PhoneNumber: any;
	Port: any;
	PositiveFloat: any;
	PositiveInt: any;
	PostalCode: any;
	RegularExpression: any;
	RGB: any;
	RGBA: any;
	URL: any;
	USCurrency: any;
	UnsignedFloat: any;
	UnsignedInt: any;
};

export type ConnectionInput = {
	someOf?: Maybe<Array<Scalars["ID"]>>;
	allOf?: Maybe<Array<Scalars["ID"]>>;
	size?: Maybe<Scalars["Int"]>;
	empty?: Maybe<Scalars["Boolean"]>;
};

export type CreateStockPortfolioInput = {
	name?: Maybe<Scalars["String"]>;
};

export type CreateStockPortfolioPayload = {
	__typename?: "CreateStockPortfolioPayload";
	stockPortfolio: StockPortfolio;
};

export enum DataKey {
	IexCompanySymbol = "IEX_COMPANY__SYMBOL",
	IexCompanyCompanyName = "IEX_COMPANY__COMPANY_NAME",
	IexCompanyCeo = "IEX_COMPANY__CEO",
	IexCompanyExchange = "IEX_COMPANY__EXCHANGE",
	IexCompanyIndustry = "IEX_COMPANY__INDUSTRY",
	IexCompanyWebsite = "IEX_COMPANY__WEBSITE",
	IexCompanyDescription = "IEX_COMPANY__DESCRIPTION",
	IexCompanyIssueType = "IEX_COMPANY__ISSUE_TYPE",
	IexCompanySector = "IEX_COMPANY__SECTOR",
	IexCompanySecurityName = "IEX_COMPANY__SECURITY_NAME",
	IexCompanyTags = "IEX_COMPANY__TAGS",
	IexCompanyEmployees = "IEX_COMPANY__EMPLOYEES",
	IexKeyStatsCompanyName = "IEX_KEY_STATS__COMPANY_NAME",
	IexKeyStatsMarketCap = "IEX_KEY_STATS__MARKET_CAP",
	IexKeyStatsWeek_52High = "IEX_KEY_STATS__WEEK_52_HIGH",
	IexKeyStatsWeek_52Low = "IEX_KEY_STATS__WEEK_52_LOW",
	IexKeyStatsWeek_52Change = "IEX_KEY_STATS__WEEK_52_CHANGE",
	IexKeyStatsSharesOutstanding = "IEX_KEY_STATS__SHARES_OUTSTANDING",
	IexKeyStatsFloat = "IEX_KEY_STATS__FLOAT",
	IexKeyStatsSymbol = "IEX_KEY_STATS__SYMBOL",
	IexKeyStatsAvg_10Volume = "IEX_KEY_STATS__AVG_10_VOLUME",
	IexKeyStatsAvg_30Volume = "IEX_KEY_STATS__AVG_30_VOLUME",
	IexKeyStatsDay_200Movingavg = "IEX_KEY_STATS__DAY_200_MOVINGAVG",
	IexKeyStatsDay_50Movingavg = "IEX_KEY_STATS__DAY_50_MOVINGAVG",
	IexKeyStatsEmployees = "IEX_KEY_STATS__EMPLOYEES",
	IexKeyStatsTtmEps = "IEX_KEY_STATS__TTM_EPS",
	IexKeyStatsTtmDividendRate = "IEX_KEY_STATS__TTM_DIVIDEND_RATE",
	IexKeyStatsDividendYield = "IEX_KEY_STATS__DIVIDEND_YIELD",
	IexKeyStatsNextDividendDate = "IEX_KEY_STATS__NEXT_DIVIDEND_DATE",
	IexKeyStatsExDividendDate = "IEX_KEY_STATS__EX_DIVIDEND_DATE",
	IexKeyStatsNextEarningsDate = "IEX_KEY_STATS__NEXT_EARNINGS_DATE",
	IexKeyStatsPeRatio = "IEX_KEY_STATS__PE_RATIO",
	IexKeyStatsBeta = "IEX_KEY_STATS__BETA",
	IexKeyStatsMaxChangePercent = "IEX_KEY_STATS__MAX_CHANGE_PERCENT",
	IexKeyStatsYear_5ChangePercent = "IEX_KEY_STATS__YEAR_5_CHANGE_PERCENT",
	IexKeyStatsYear_2ChangePercent = "IEX_KEY_STATS__YEAR_2_CHANGE_PERCENT",
	IexKeyStatsYear_1ChangePercent = "IEX_KEY_STATS__YEAR_1_CHANGE_PERCENT",
	IexKeyStatsYtdChangePercent = "IEX_KEY_STATS__YTD_CHANGE_PERCENT",
	IexKeyStatsMonth_6ChangePercent = "IEX_KEY_STATS__MONTH_6_CHANGE_PERCENT",
	IexKeyStatsMonth_3ChangePercent = "IEX_KEY_STATS__MONTH_3_CHANGE_PERCENT",
	IexKeyStatsMonth_1ChangePercent = "IEX_KEY_STATS__MONTH_1_CHANGE_PERCENT",
	IexKeyStatsDay_30ChangePercent = "IEX_KEY_STATS__DAY_30_CHANGE_PERCENT",
	IexKeyStatsDay_5ChangePercent = "IEX_KEY_STATS__DAY_5_CHANGE_PERCENT",
	IexPreviousDayPriceSymbol = "IEX_PREVIOUS_DAY_PRICE__SYMBOL",
	IexPreviousDayPriceDate = "IEX_PREVIOUS_DAY_PRICE__DATE",
	IexPreviousDayPriceOpen = "IEX_PREVIOUS_DAY_PRICE__OPEN",
	IexPreviousDayPriceHigh = "IEX_PREVIOUS_DAY_PRICE__HIGH",
	IexPreviousDayPriceLow = "IEX_PREVIOUS_DAY_PRICE__LOW",
	IexPreviousDayPriceClose = "IEX_PREVIOUS_DAY_PRICE__CLOSE",
	IexPreviousDayPriceVolume = "IEX_PREVIOUS_DAY_PRICE__VOLUME",
	IexPreviousDayPriceUnadjustedVolume = "IEX_PREVIOUS_DAY_PRICE__UNADJUSTED_VOLUME",
	IexPreviousDayPriceChange = "IEX_PREVIOUS_DAY_PRICE__CHANGE",
	IexPreviousDayPriceChangePercent = "IEX_PREVIOUS_DAY_PRICE__CHANGE_PERCENT",
	IexQuoteSymbol = "IEX_QUOTE__SYMBOL",
	IexQuoteCompanyName = "IEX_QUOTE__COMPANY_NAME",
	IexQuoteCalculationPrice = "IEX_QUOTE__CALCULATION_PRICE",
	IexQuoteOpen = "IEX_QUOTE__OPEN",
	IexQuoteOpenTime = "IEX_QUOTE__OPEN_TIME",
	IexQuoteClose = "IEX_QUOTE__CLOSE",
	IexQuoteCloseTime = "IEX_QUOTE__CLOSE_TIME",
	IexQuoteHigh = "IEX_QUOTE__HIGH",
	IexQuoteLow = "IEX_QUOTE__LOW",
	IexQuoteLatestPrice = "IEX_QUOTE__LATEST_PRICE",
	IexQuoteLatestSource = "IEX_QUOTE__LATEST_SOURCE",
	IexQuoteLatestTime = "IEX_QUOTE__LATEST_TIME",
	IexQuoteLatestUpdate = "IEX_QUOTE__LATEST_UPDATE",
	IexQuoteLatestVolume = "IEX_QUOTE__LATEST_VOLUME",
	IexQuoteIexRealTimePrice = "IEX_QUOTE__IEX_REAL_TIME_PRICE",
	IexQuoteIexRealTimeSize = "IEX_QUOTE__IEX_REAL_TIME_SIZE",
	IexQuoteIexLastUpdated = "IEX_QUOTE__IEX_LAST_UPDATED",
	IexQuoteDelayedPrice = "IEX_QUOTE__DELAYED_PRICE",
	IexQuoteDelayedPriceTime = "IEX_QUOTE__DELAYED_PRICE_TIME",
	IexQuoteExtendedPrice = "IEX_QUOTE__EXTENDED_PRICE",
	IexQuoteExtendedChange = "IEX_QUOTE__EXTENDED_CHANGE",
	IexQuoteExtendedChangePercent = "IEX_QUOTE__EXTENDED_CHANGE_PERCENT",
	IexQuoteExtendedPriceTime = "IEX_QUOTE__EXTENDED_PRICE_TIME",
	IexQuotePreviousClose = "IEX_QUOTE__PREVIOUS_CLOSE",
	IexQuoteChange = "IEX_QUOTE__CHANGE",
	IexQuoteChangePercent = "IEX_QUOTE__CHANGE_PERCENT",
	IexQuoteIexMarketPercent = "IEX_QUOTE__IEX_MARKET_PERCENT",
	IexQuoteIexVolume = "IEX_QUOTE__IEX_VOLUME",
	IexQuoteAvgTotalVolume = "IEX_QUOTE__AVG_TOTAL_VOLUME",
	IexQuoteIexBidPrice = "IEX_QUOTE__IEX_BID_PRICE",
	IexQuoteIexBidSize = "IEX_QUOTE__IEX_BID_SIZE",
	IexQuoteIexAskPrice = "IEX_QUOTE__IEX_ASK_PRICE",
	IexQuoteIexAskSize = "IEX_QUOTE__IEX_ASK_SIZE",
	IexQuoteMarketCap = "IEX_QUOTE__MARKET_CAP",
	IexQuoteWeek_52High = "IEX_QUOTE__WEEK_52_HIGH",
	IexQuoteWeek_52Low = "IEX_QUOTE__WEEK_52_LOW",
	IexQuoteYtdChange = "IEX_QUOTE__YTD_CHANGE"
}

export enum DataKey_Provider {
	IexCloud = "IEX_CLOUD"
}

export type DataKeyOption = {
	__typename?: "DataKeyOption";
	name: Scalars["String"];
	dataKey: DataKey;
	description: Scalars["String"];
	provider: DataKey_Provider;
};

export type DateTimeInput = {
	milliseconds?: Maybe<Scalars["Int"]>;
	seconds?: Maybe<Scalars["Int"]>;
	minutes?: Maybe<Scalars["Int"]>;
	hours?: Maybe<Scalars["Int"]>;
	day?: Maybe<Scalars["Int"]>;
	month?: Maybe<Scalars["Int"]>;
	year: Scalars["Int"];
};

export type DeleteStockPortfolioInput = {
	id: Scalars["ID"];
};

export type DeleteStockPortfolioPayload = {
	__typename?: "DeleteStockPortfolioPayload";
	stockPortfolio: StockPortfolio;
};

export type LoginLocalUserInput = {
	userIdentifier: Scalars["String"];
	password: Scalars["String"];
};

export type Mutation = {
	__typename?: "Mutation";
	createStockPortfolio?: Maybe<CreateStockPortfolioPayload>;
	deleteStockPortfolio?: Maybe<DeleteStockPortfolioPayload>;
	loginLocalUser?: Maybe<TokenPayload>;
	refreshAccessToken?: Maybe<TokenPayload>;
	registerLocalUser?: Maybe<RegisterLocalUserPayload>;
	resendVerifyEmail: Scalars["Boolean"];
	setUser?: Maybe<User>;
	toggleModal: Scalars["Boolean"];
	updateStockPortfolio?: Maybe<UpdateStockPortfolioPayload>;
	viewer?: Maybe<Viewer>;
};

export type MutationCreateStockPortfolioArgs = {
	input: CreateStockPortfolioInput;
};

export type MutationDeleteStockPortfolioArgs = {
	input: DeleteStockPortfolioInput;
};

export type MutationLoginLocalUserArgs = {
	input: LoginLocalUserInput;
};

export type MutationRefreshAccessTokenArgs = {
	input: RefreshAccessTokenInput;
};

export type MutationRegisterLocalUserArgs = {
	input: RegisterLocalUserInput;
};

export type MutationSetUserArgs = {
	user?: Maybe<UserInput>;
};

export type MutationToggleModalArgs = {
	force?: Maybe<Scalars["Boolean"]>;
};

export type MutationUpdateStockPortfolioArgs = {
	input: UpdateStockPortfolioInput;
};

export type PageInfo = {
	__typename?: "PageInfo";
	hasNextPage: Scalars["Boolean"];
	hasPreviousPage: Scalars["Boolean"];
	count: Scalars["Int"];
	startCursor?: Maybe<Scalars["Cursor"]>;
	endCursor?: Maybe<Scalars["Cursor"]>;
};

export type Query = {
	__typename?: "Query";
	dataKeyOptions: Array<DataKeyOption>;
	modal: Scalars["Boolean"];
	stockPortfolios: StockPortfolioConnection;
	user?: Maybe<User>;
	viewer?: Maybe<Viewer>;
};

export type QueryDataKeyOptionsArgs = {
	name?: Maybe<Scalars["String"]>;
	dataKey?: Maybe<DataKey>;
	provider?: Maybe<DataKey_Provider>;
};

export type QueryStockPortfoliosArgs = {
	first?: Maybe<Scalars["Int"]>;
	last?: Maybe<Scalars["Int"]>;
	before?: Maybe<Scalars["Cursor"]>;
	after?: Maybe<Scalars["Cursor"]>;
};

export type RefreshAccessTokenInput = {
	refreshToken: Scalars["String"];
};

export type RegisterLocalUserInput = {
	email: Scalars["EmailAddress"];
	password: Scalars["UserPassword"];
	username: Scalars["String"];
};

export type RegisterLocalUserPayload = {
	__typename?: "RegisterLocalUserPayload";
	success: Scalars["Boolean"];
	error?: Maybe<Scalars["String"]>;
	user?: Maybe<User>;
};

export type StockPortfolio = {
	__typename?: "StockPortfolio";
	id: Scalars["ID"];
	user: User;
	name: Scalars["String"];
	headers: Array<StockPortfolioHeader>;
	tickers: Array<Scalars["String"]>;
	data: Scalars["JSON"];
};

export type StockPortfolioConnection = {
	__typename?: "StockPortfolioConnection";
	edges: Array<StockPortfolioEdge>;
	nodes: Array<StockPortfolio>;
	pageInfo: PageInfo;
};

export type StockPortfolioEdge = {
	__typename?: "StockPortfolioEdge";
	cursor: Scalars["Cursor"];
	node: StockPortfolio;
};

export type StockPortfolioHeader = {
	__typename?: "StockPortfolioHeader";
	name: Scalars["String"];
	dataKey?: Maybe<DataKey>;
	width: Scalars["Int"];
	frozen: Scalars["Boolean"];
	resizable: Scalars["Boolean"];
};

export type StockPortfolioHeaderInput = {
	name: Scalars["String"];
	dataKey: Scalars["String"];
	width: Scalars["Int"];
	tickers: Array<Scalars["String"]>;
};

export type TokenPayload = {
	__typename?: "TokenPayload";
	token: Scalars["String"];
	refreshToken: Scalars["String"];
};

export type UpdateStockPortfolioInput = {
	id: Scalars["ID"];
	headers?: Maybe<Array<StockPortfolioHeaderInput>>;
	tickers?: Maybe<Array<Scalars["String"]>>;
};

export type UpdateStockPortfolioPayload = {
	__typename?: "UpdateStockPortfolioPayload";
	stockPortfolio: StockPortfolio;
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	email: Scalars["EmailAddress"];
	emailVerified: Scalars["Boolean"];
	username: Scalars["String"];
};

export type UserInput = {
	/** The id of the user */
	id: Scalars["ID"];
	/** The user's email */
	email: Scalars["EmailAddress"];
	/** Whether the user verified their email address */
	emailVerified: Scalars["Boolean"];
	/** The user's encoded password */
	username: Scalars["String"];
};

export type VariableDateTimeInput = {
	before?: Maybe<DateTimeInput>;
	after?: Maybe<DateTimeInput>;
	equal?: Maybe<DateTimeInput>;
};

export type Viewer = {
	__typename?: "Viewer";
	id: Scalars["ID"];
	email: Scalars["String"];
	emailVerified: Scalars["Boolean"];
	username: Scalars["String"];
};
