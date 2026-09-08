import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Wilderness Bound",
    subtitle: "26.50",
    type: "drop",
    possibleDate: "Someday September",
    funFact: "Did you know? This is the first time that Steve can sit!",
    learnMore: "@Bedrock_Edition_26.50",
    icon: "/bedrock/version_26_50.png",
    mainFeatures: [
      { text: "Dappled forest" },
      { text: "Poplar trees" },
      { text: "Poplar wood set" },
      { text: "Shelf mushroom" },
      { text: "Wool and concrete stairs and slabs " },
      { text: "Cushions" },
      { text: "Abandoned campsites" },
      { text: "Straw bed" }
    ],
    minorFeatures: [
      { text: "Faster world generation" },
      { text: "New map textures" },
      { text: "New explorer maps" },
      { text: "Slightly changed haybale texture" }
    ]
  }
] as const;
