import { SignUpDisplay } from "..";
import { StandardStory } from "./standard.story";
import { VerifyEmailStory } from "./verify-email.story";
import { WithErrorStory } from "./with-error.story";

export default { title: "form|sign-up", component: SignUpDisplay };

export const Standard = StandardStory;
export const WithError = WithErrorStory;
export const VerifyEmail = VerifyEmailStory;
