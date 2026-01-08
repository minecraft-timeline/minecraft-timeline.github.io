import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Mounts of Mayhem",
    subtitle: "1.21.X",
    possibleDate: "Winter 2025",
    type: "drop",
    icon: "/java/version_mounts_of_mayhem.png",
    funFact: "Did you know? The Zombie Horse was added in the game back in 2013 in java snapshot 13w16a.",
    learnMore: "@Mounts_of_Mayhem",
    mainFeatures: [
      { text: "Nautilus" },
      { text: "Spear" },
      { text: "Zombie Nautilus" },
    ],
    minorFeatures: [
      { text: "Breath of the Nautilus" },
      { text: "Zombie Horse can now naturally spawn in survival" }
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