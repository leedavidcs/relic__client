const BreakpointKeyMap = {
	xs: [0, 600],
	sm: [600, 980],
	md: [980, 1280],
	lg: [1280, 1920],
	xl: [1920]
};

const getMediaPx = (width?: number): string => (width === undefined ? "none" : `${width}px`);

export const breakpoints = {
	up: (key: keyof typeof BreakpointKeyMap): string => {
		const minWidth: number = BreakpointKeyMap[key][0];

		return `@media screen and (min-width: ${getMediaPx(minWidth)})`;
	},
	down: (key: keyof typeof BreakpointKeyMap): string => {
		const maxWidth: number | undefined = BreakpointKeyMap[key][1];

		return `@media screen and (max-width: ${getMediaPx(maxWidth)})`;
	},
	only: (key: keyof typeof BreakpointKeyMap): string => {
		const minWidth: number = BreakpointKeyMap[key][0];
		const maxWidth: number | undefined = BreakpointKeyMap[key][1];

		return `@media screen and (min-width: ${getMediaPx(minWidth)}) and (max-width: ${getMediaPx(
			maxWidth
		)})`;
	},
	between: (start: keyof typeof BreakpointKeyMap, end: keyof typeof BreakpointKeyMap): string => {
		const minWidth: number = BreakpointKeyMap[start][0];
		const maxWidth: number | undefined = BreakpointKeyMap[end][1];

		return `@media screen and (min-width: ${getMediaPx(minWidth)}) and (max-width: ${getMediaPx(
			maxWidth
		)})`;
	}
};
