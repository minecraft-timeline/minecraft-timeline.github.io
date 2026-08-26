import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Third Drop 2026",
    subtitle: "26.50",
    possibleDate: "Presumed Q3 2026",
    type: "drop",
    icon: "/bedrock/version_26_50.png",
    funFact: "Did you know? This drop was announced at Minecraft Live in May 2026 without a final name, being referred to internally as \"Drop 3 of 2026\".",
    learnMore: "@Third_Drop_2026",
    mainFeatures: [
      { text: "Dappled Forests" },
      { text: "Poplar Trees, in red, orange and yellow" },
      { text: "Abandoned Camps" },
      { text: "Cushions" }
    ],
    minorFeatures: [
      { text: "Stairs and Slabs for all Wool and Concrete colors" },
      { text: "Straw Beds" },
      { text: "Red Shrubs and Shelf Mushrooms" }
    ]
  }
] as const;
