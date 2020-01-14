import React, { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import { DataGridBody } from "./data-grid-body.component";
import { DataGridHeaders } from "./data-grid-headers.component";

export * from "./data-grid-body.component";
export * from "./data-grid-headers.component";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const InnerElement = forwardRef<HTMLDivElement, Props>(({ children, ...restProps }, ref) => {
	return (
		<div ref={ref} {...restProps}>
			<DataGridHeaders />
			<DataGridBody>{children}</DataGridBody>
		</div>
	);
});
