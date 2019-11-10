declare module "*.svg" {
	const content: any;
	export default content;
}

declare module "*.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;

	export default defaultDocument;
}

declare interface IAction {
	type: string;
	payload?: any;
	meta?: any;
}

declare type LocalResolver<TSource, TContext, TArgs = Record<string, any>> = (
	rootValue: TSource,
	args: TArgs,
	context: TContext,
	info?: any
) => any;
