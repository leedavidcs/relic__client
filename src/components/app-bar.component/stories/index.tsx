import { AppBar } from "@/components/app-bar.component";
import { StandardStory } from "./standard.story";
import { WithUserStory } from "./with-user.story";

export default { title: "general/app-bar", component: AppBar };

export const standard = StandardStory;
export const withUser = WithUserStory;
