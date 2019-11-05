const XS: number = 600;
const SM: number = 980;
const MD: number = 1280;
const LG: number = 1920;

const BreakpointKeyMap = {
	xs: [0, XS],
	sm: [XS, SM],
	md: [SM, MD],
	lg: [MD, LG],
	xl: [LG]
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
