import { DocumentNode } from "apollo-boost";
import DirectivesSchema from "./directives.schema.graphql";
import UserSchema from "./user.schema.graphql";

export const typeDefs: DocumentNode[] = [DirectivesSchema, UserSchema];
