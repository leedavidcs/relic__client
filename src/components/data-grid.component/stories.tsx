import { storiesOf } from "@storybook/react";
import Faker from "faker";
import _ from "lodash";
import React from "react";
import { DataGrid } from ".";
import { IHeaderConfig } from "./inner-element.component";

Faker.seed(1);

const MAX_DATA_SIZE: number = 30;
const MAX_COLUMN_WIDTH: number = 80;
const MIN_COLUMN_WIDTH: number = 30;

const MOCK_HEADER_NAMES: string[] = _.uniq([...Array(MAX_DATA_SIZE)].map(() => Faker.lorem.word()));

const reducedSize: number = MOCK_HEADER_NAMES.length;

const MOCK_DATA: Array<{ [key: string]: number }> = [...Array(reducedSize)].map((x, i) => {
	const data: { [key: string]: any } = {};

	MOCK_HEADER_NAMES.forEach((name, j) => (data[name] = j * reducedSize + i));

	return data;
});

const MOCK_HEADERS: IHeaderConfig[] = MOCK_HEADER_NAMES.map((name) => ({
	name,
	resizable: false,
	sortable: false,
	width: Faker.random.number({
		max: MAX_COLUMN_WIDTH,
		min: MIN_COLUMN_WIDTH
	})
}));

storiesOf("data-grid", module).add("default", () => {
	return (
		<div
			style={{
				height: 500,
				width: 500
			}}
		>
			<DataGrid data={MOCK_DATA} headers={MOCK_HEADERS} />
		</div>
	);
});
