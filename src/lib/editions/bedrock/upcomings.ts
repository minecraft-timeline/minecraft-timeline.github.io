import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Deep Freeze",
    subtitle: "26.70",
    description: "Ice Caves & Frostbites",
    possibleDate: "Q4 2026",
    type: "drop",
    icon: "/bedrock/version_26_70.png",
    funFact: "Did you know? The name of this drop was revealed during MC Championship: Absolute Zero on November 15, 2026.",
    learnMore: "@Bedrock_Edition_26.70",
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
    title: "First Drop 2027",
    subtitle: "27.10",
    possibleDate: "Q1 2027",
    type: "drop",
    icon: "/bedrock/version_27_10.png",
    learnMore: "@First_Drop_2027",
    mainFeatures: [
      { text: "Throwing Discs in Copper, Iron, Golden, Diamond and Netherite tiers" },
      { text: "Throwing Discs pierce entities, return like a boomerang and ricochet off surfaces" },
      { text: "Off-hand parity with Java Edition: any item can be held in the off-hand" }
    ],
    minorFeatures: [
      { text: "Off-hand slot visible on the HUD" },
      { text: "Shields are activated by using them instead of sneaking" }
    ]
  }
] as const;