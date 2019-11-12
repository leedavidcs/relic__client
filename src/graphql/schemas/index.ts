import { DocumentNode } from "apollo-boost";
import DirectivesSchema from "./directives.schema.graphql";
import ModalSchema from "./modal.schema.graphql";
import UserSchema from "./user.schema.graphql";

export const typeDefs: DocumentNode[] = [DirectivesSchema, ModalSchema, UserSchema];
