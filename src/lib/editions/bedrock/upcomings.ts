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
  }
] as const;