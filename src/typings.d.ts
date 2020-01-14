declare module "*.svg" {
	const content: any;
	export default content;
}

declare module "*.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;

	export default defaultDocument;
}

declare type Action<T extends { [key: string]: Function }> = ReturnType<T[keyof T]>;

declare type Payload<T extends { [key: string]: Function }, K extends keyof T> = ReturnType<
	T[K]
>["payload"];

declare type LocalResolver<TSource, TContext, TArgs = Record<string, any>> = (
	rootValue: TSource,
	args: TArgs,
	context: TContext,
	info?: any
) => any;
