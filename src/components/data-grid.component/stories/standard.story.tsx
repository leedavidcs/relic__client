import { Background } from "@/components/background.component";
import { Paper } from "@/components/paper.component";
import Faker from "faker";
import { uniq } from "lodash";
import React, { useMemo, useCallback, useState } from "react";
import { DataGrid } from "..";
import { IHeaderConfig } from "..";

const MAX_DATA_SIZE: number = 100;
const MAX_COLUMN_WIDTH: number = 80;
const MIN_COLUMN_WIDTH: number = 30;

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
				const data: { [key: string]: any } = {};

				MOCK_HEADER_NAMES.forEach((name, j) => (data[name] = j * reducedSize + i));

				return data;
			}),
		[MOCK_HEADER_NAMES, reducedSize]
	);

	const MOCK_HEADERS: ReadonlyArray<IHeaderConfig> = useMemo(
		() =>
			MOCK_HEADER_NAMES.map((label) => ({
				label,
				value: label,
				options: null,
				resizable: false,
				sortable: false,
				width: Faker.random.number({
					max: MAX_COLUMN_WIDTH,
					min: MIN_COLUMN_WIDTH
				})
			})),
		[MOCK_HEADER_NAMES]
	);

	const [headers, setHeaders] = useState<ReadonlyArray<IHeaderConfig>>(MOCK_HEADERS);

	const onHeadersChange = useCallback(
		(value: ReadonlyArray<IHeaderConfig>) => setHeaders(headers),
		[setHeaders]
	);

	return (
		<Background>
			<Paper>
				<div style={{ height: 500 }}>
					<DataGrid
						data={MOCK_DATA}
						headers={MOCK_HEADERS}
						onHeadersChange={onHeadersChange}
					/>
				</div>
			</Paper>
		</Background>
	);
};