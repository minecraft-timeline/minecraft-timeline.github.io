import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "First Drop 2026",
    subtitle: "26.10",
    possibleDate: "Presumed Early 2026",
    type: "drop",
    icon: "/bedrock/version_26_1.png",
    funFact: "Did you know? This is the first version of the game to use a two-digit year in its versioning system, marking a new era for Minecraft updates.",
    learnMore: "@First_Drop_2026",
    mainFeatures: [
      { text: "Unique new models for baby animals" },
      { text: "Name Tags are now craftable" },
    ],
    minorFeatures: [
      { text: "Clicking with a Spawn Egg on an animal spawns a baby" }
    ]
  }
] as const;
