import { SignUpDisplay } from "..";
import { StandardStory } from "./standard.story";
import { WithErrorStory } from "./with-error.story";

export default { title: "form-display/sign-up", component: SignUpDisplay };

export const Standard = StandardStory;
export const WithError = WithErrorStory;
