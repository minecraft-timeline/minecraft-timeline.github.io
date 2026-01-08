import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
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