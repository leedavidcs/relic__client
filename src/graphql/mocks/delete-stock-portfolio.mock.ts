import * as Mutations from "@/graphql/mutations";
import { MockedResponse } from "@apollo/react-testing";
import Faker from "faker";

export const DeleteStockPortfolioMock: MockedResponse = {
	request: {
		query: Mutations.DeleteStockPortfolio,
		variables: { id: "" }
	},
	result: {
		data: {
			deleteOneStockPortfolio: {
				id: "",
				name: Faker.lorem.word()
			}
		}
	}
};
