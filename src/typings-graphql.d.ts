declare module "*/login-local-user.mutation.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;
	export const LoginLocalUser: DocumentNode;

	export default defaultDocument;
}

declare module "*/refresh-access-token.mutation.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;
	export const RefreshAccessToken: DocumentNode;

	export default defaultDocument;
}

declare module "*/register-local-user.mutation.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;
	export const RegisterLocalUser: DocumentNode;

	export default defaultDocument;
}

declare module "*/get-user.query.graphql" {
	import { DocumentNode } from "graphql";
	const defaultDocument: DocumentNode;
	export const GetUser: DocumentNode;

	export default defaultDocument;
}
