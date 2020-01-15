import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button } from ".";

export default { title: "input/button", component: Button };

const SPACING: number = 8;

export const standard = () => {
	const onClick = action("onClick");

	const colors = [
		"primary",
		"primaryVariant",
		"secondary",
		"secondaryVariant",
		"error",
		"warning"
	] as const;
	const sizes = ["small", "medium", "large"] as const;

	return (
		<Background>
			<Paper>
				{colors.map((color) => (
					<div key={color} style={{ margin: SPACING }}>
						Color: {color.toUpperCase()}
						<br />
						<br />
						{sizes.map((size) => (
							<span key={`${color}_${size}`} style={{ margin: SPACING }}>
								<Button color={color} size={size} onClick={onClick}>
									{size.toUpperCase()}
								</Button>
							</span>
						))}
					</div>
				))}
			</Paper>
		</Background>
	);
};
