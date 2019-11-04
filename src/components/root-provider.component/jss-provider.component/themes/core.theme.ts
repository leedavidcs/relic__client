export interface ICoreTheme {
	zIndices: string[];
}

export const coreTheme: ICoreTheme = {
	zIndices: ["data-grid-content", "data-grid-header"]
};

export const getZIndex = (name: string): number => {
	const index: number = coreTheme.zIndices.findIndex((componentName) => componentName === name);

	if (index === -1) {
		throw new Error(`${name} is not a valid name for deriving z-index`);
	}

	return index;
};
