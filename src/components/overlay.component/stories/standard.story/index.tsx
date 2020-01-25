import { Overlay } from "@/components/overlay.component";
import { Paper } from "@/components/paper.component";
import { boolean } from "@storybook/addon-knobs";
import React from "react";
import { useStyles } from "./styles";

export const StandardStory = () => {
	const classes = useStyles();

	const active: boolean = boolean("active", true);

	return (
		<Paper>
			<div className={classes.backgroundElem} />
			<Overlay active={active} relative={false} />
		</Paper>
	);
};
