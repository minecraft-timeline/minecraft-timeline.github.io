import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Third Drop 2026",
    subtitle: "26.3",
    possibleDate: "Presumed Q3 2026",
    type: "drop",
    icon: "/java/version_26_3.png",
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
  },
  {
    title: "Vibrant Visuals",
    type: "minor",
    possibleDate: "Future",
    icon: "/java/version_vibrant_visuals.png",
    funFact: "Did you know? A similar update, the \"Super Duper Graphics Pack\" was announced in 2017, but was cancelled in 2019 due to technical limitations.\n\nThis update has already been released for the Bedrock Edition of the game, as part of the Chase the Skies game drop.",
    learnMore: "@Vibrant_Visuals",
    mainFeatures: [
      { text: "Major visual overhaul" },
      { text: "Directional Lights with Pixel-aligned shadows" },
      { text: "Specular highlights" },
      { text: "Emissive texures" },
      { text: "Water Reflections" },
    ]
  }
] as const;
