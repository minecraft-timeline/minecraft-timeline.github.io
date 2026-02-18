import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "First Drop 2026",
    subtitle: "26.10",
    possibleDate: "Presumed Early 2026",
    type: "drop",
    icon: "/bedrock/version_26_1.png",
    learnMore: "@First_Drop_2026",
    mainFeatures: [
      { text: "Unique new models for baby mobs and rabbit" },
      { text: "Name Tags are now craftable" },
      { text: "Golden dandelion to pause the growth of baby animals." }
    ],
    minorFeatures: [
      { text: "Trumpet instrument in note block with copper blocks" },
      { text: "New sound variants for some animals" }
    ]
  }
] as const;
