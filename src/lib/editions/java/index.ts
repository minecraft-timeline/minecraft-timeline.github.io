import type { Edition } from "..";
import { majors } from "./majors";
import { minors } from "./minors";
import { drops } from "./drops";
import { events } from "./events";
import { upcomings } from "./upcomings";

export const java: Edition = {
    id: "java",
    title: "Java Edition",
    firstMessage: "Minecraft is born",
    versions: [...majors, ...minors, ...drops, ...events],
    upcomings
} as const;