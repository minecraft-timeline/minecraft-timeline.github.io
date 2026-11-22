import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Deep Freeze",
    subtitle: "26.4",
    description: "Ice Caves & Frostbites",
    possibleDate: "Q4 2026",
    type: "drop",
    icon: "/java/version_26_4.png",
    funFact: "Did you know? The name of this drop was revealed during MC Championship: Absolute Zero on November 15, 2026.",
    learnMore: "@Java_Edition_26.4",
    mainFeatures: [
      { text: "Ice Caves" },
      { text: "Frostbites, Ice Balls and the Freezing effect" },
      { text: "Icicles, Ice Crystals and Brittle Ice" },
      { text: "Brick sets for Packed Ice, Snow and Calcite" },
      { text: "Jukebox playlists" }
    ],
    minorFeatures: [
      { text: "Cold Sulfur Cubes made with Blue Ice" },
      { text: "Music Disc \"Flurry\"" },
      { text: "Potions and Arrows of Freezing" }
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
