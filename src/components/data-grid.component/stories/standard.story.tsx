import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import Faker from "faker";
import { uniq } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { DataGrid } from "..";
import { IHeaderConfig } from "..";

const MAX_DATA_SIZE: number = 100;
const MAX_COLUMN_WIDTH: number = 80;
const MIN_COLUMN_WIDTH: number = 30;
const NUMBER_FROZEN_COLUMNS: number = 5;

export const StandardStory = () => {
	Faker.seed(1);

	const MOCK_HEADER_NAMES: string[] = useMemo(
		() => uniq([...Array(MAX_DATA_SIZE)].map(() => Faker.lorem.word())),
		[]
	);

	const reducedSize: number = MOCK_HEADER_NAMES.length;

	const MOCK_DATA: Array<{ [key: string]: number }> = useMemo(
		() =>
			[...Array(reducedSize)].map((x, i) => {
				const datum: { [key: string]: any } = {};

				MOCK_HEADER_NAMES.forEach((name, j) => (datum[name] = j * reducedSize + i));

				return datum;
			}),
		[MOCK_HEADER_NAMES, reducedSize]
	);

	const MOCK_HEADERS: ReadonlyArray<IHeaderConfig> = useMemo(
		() =>
			MOCK_HEADER_NAMES.map((label, i) => ({
				label,
				value: label,
				frozen: i < NUMBER_FROZEN_COLUMNS,
				options: [{ label, value: label }],
				resizable: true,
				width: Faker.random.number({
					max: MAX_COLUMN_WIDTH,
					min: MIN_COLUMN_WIDTH
				})
			})),
		[MOCK_HEADER_NAMES]
	);

	const [data, setData] = useState<ReadonlyArray<{ [key: string]: any }>>(MOCK_DATA);
	const [headers, setHeaders] = useState<ReadonlyArray<IHeaderConfig>>(MOCK_HEADERS);

	const onDataChange = useCallback(
		(value: ReadonlyArray<{ [key: string]: any }>) => setData(value),
		[setData]
	);

	const onHeadersChange = useCallback(
		(value: ReadonlyArray<IHeaderConfig>) => setHeaders(value),
		[setHeaders]
	);

	return (
		<Background>
			<Paper>
				<div style={{ height: 500 }}>
					<DataGrid
						data={data}
						headers={headers}
						onDataChange={onDataChange}
						onHeadersChange={onHeadersChange}
					/>
				</div>
			</Paper>
		</Background>
	);
};
