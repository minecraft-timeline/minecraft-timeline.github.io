import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "First Drop 2026",
    subtitle: "26.1",
    possibleDate: "Presumed Early 2026",
    type: "drop",
    icon: "/java/version_26_1.png",
    funFact: "Did you know? This is the first version of the game to use a two-digit year in its versioning system, marking a new era for Minecraft updates.",
    learnMore: "@First_Drop_2026",
    mainFeatures: [
      { text: "Unique new models for baby animals" },
      { text: "Name Tags are now craftable" },
    ],
    minorFeatures: [
      { text: "Clicking with a Spawn Egg on an animal spawns a baby" }
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