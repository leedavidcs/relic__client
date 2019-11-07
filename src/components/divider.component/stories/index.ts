import { Divider } from "..";
import { InsetStory } from "./inset.story";
import { MiddleStory } from "./middle.story";
import { StandardStory } from "./standard.story";

export default { title: "divider", component: Divider };

export const standard = StandardStory;
export const middle = MiddleStory;
export const inset = InsetStory;
