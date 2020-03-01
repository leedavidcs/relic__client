interface IGetPageCountArgs {
	count: number;
	first: number;
}

interface IGetCurrentPageArgs {
	first: number;
	skip: number;
}

export const getPageCount = ({ count, first }: IGetPageCountArgs): number => {
	return Math.floor(count / first);
};

export const getCurrentPage = ({ first, skip }: IGetCurrentPageArgs): number => {
	return Math.floor(skip / first);
};

export const getSkipFromPage = (page: number, first: number): number => {
	return page * first;
};
