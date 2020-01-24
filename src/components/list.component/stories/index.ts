import { List } from "@/components/list.component";
import { SelectableStory } from "./selectable.story";
import { StandardStory } from "./standard.story";
import { WithHrefStory } from "./with-href.story";

export default { title: "list", component: List };

export const Standard = StandardStory;
export const Selectable = SelectableStory;
export const WithHref = WithHrefStory;
