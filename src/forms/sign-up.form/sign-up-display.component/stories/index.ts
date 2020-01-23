import { SignUpDisplay } from "@/forms/sign-up.form/sign-up-display.component";
import { StandardStory } from "./standard.story";
import { WithErrorStory } from "./with-error.story";

export default { title: "form-display/sign-up", component: SignUpDisplay };

export const Standard = StandardStory;
export const WithError = WithErrorStory;
