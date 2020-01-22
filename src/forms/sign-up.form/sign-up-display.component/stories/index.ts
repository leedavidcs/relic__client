import { StandardStory } from "./standard.story";
import { WithErrorStory } from "./with-error.story";
import { SignUpDisplay } from "..";

export default { title: "form-display/sign-up", component: SignUpDisplay };

export const Standard = StandardStory;
export const WithError = WithErrorStory;
