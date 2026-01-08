import type { Version } from "..";

export const drops: Version[] = [
  {
    title: "Bats and Pots",
    subtitle: "1.20.3",
    description: "Better Decorated Pots & Bats",
    type: "drop",
    date: "2023-12-05",
    icon: "/java/version_1_20_3.png",
    funFact: "Did you know? This minor update was retroactively labeled as a \"game drop\", making it the first of its kind.",
    learnMore: "@Java_Edition_1.20.3",
    mainFeatures: [
      { text: "Decorated Pots can now hold items" },
      { text: "Decorated Pots now can be destroyed by projectiles" },
      { text: "Brand new model and texture for bats" },
    ],
    minorFeatures: [
      { text: "Shields now can rotate vertically" }
    ]
  },

  {
    title: "Armored Paws",
    subtitle: "1.20.5",
    description: "Armadillos & Wolf Armor",
    type: "drop",
    date: "2024-04-23",
    icon: "/java/version_1_20_5.png",
    learnMore: "@Java_Edition_1.20.5",
    mainFeatures: [
      { text: "Armadillos" },
      { text: "Wolf Armor" },
      { text: "Wolf Variants" },
    ],
    minorFeatures: [
      { text: "Added /transfer command" }
    ]
  },

  {
    title: "Bundles of Bravery",
    subtitle: "1.21.2",
    description: "Bundles",
    type: "drop",
    date: "2024-10-22",
    icon: "/java/version_1_21_2.png",
    funFact: "Did you know? Bundles were originally planned for the Caves & Cliffs update (in 2021), but were delayed several times. They went through an extensive experimental phase before finally being added, 3 years later.",
    learnMore: "@Java_Edition_1.21.2",
    mainFeatures: [
      { text: "Bundles" },
    ],
    minorFeatures: [
      { text: "Ender Pearls are now Chunk Loaders" }
    ]
  },

  {
    title: "The Garden Awakens",
    subtitle: "1.21.4",
    description: "The Pale Garden & Creaking",
    type: "drop",
    date: "2024-12-03",
    icon: "/java/version_1_21_4.png",
    learnMore: "@Java_Edition_1.21.4",
    mainFeatures: [
      { text: "The Pale Garden Biome" },
      { text: "The Creaking Mob" },
      { text: "Pale Oak" },
      { text: "Eyeblossom Flowers" },
      { text: "Resin" }
    ],
    minorFeatures: [
      { text: "Experience Orbs are now bouncy" }
    ]
  },

  {
    title: "Spring To Life",
    subtitle: "1.21.5",
    type: "drop",
    date: "2025-03-25",
    icon: "/java/version_1_21_5.png",
    funFact: "Did you know? This version's number was not revealed until the pre-releases.",
    learnMore: "@Java_Edition_1.21.5",
    mainFeatures: [
      { text: "Pig, Cow and Chicken Variants" },
      { text: "Unique Textures for every Spawn Egg" },
      { text: "Leaf Litter in forests" },
      { text: "Wildflowers" },
      { text: "Firefly Bushes" },
      { text: "Cactus Flowers" },
    ],
    minorFeatures: [
      { text: "Falling Leaves" },
      { text: "Bushes" },
      { text: "Dry Grass" },
      { text: "Village Maps" },
      { text: "Cheaper Lodestone Recipe" },
      { text: "Some Bedrock-exclusive features" },
    ]
  },

  {
    title: "Chase the Skies",
    subtitle: "1.21.6",
    type: "drop",
    date: "2025-06-17",
    icon: "/java/version_1_21_6.png",
    learnMore: "@Java_Edition_1.21.6",
    mainFeatures: [
      { text: "Dried Ghasts" },
      { text: "Ghastlings" },
      { text: "Rideable, Happy Ghasts" }
    ],
    minorFeatures: [
      { text: "Player Locator Bar" },
      { text: "A new music disc by Amos Roddy" },
      { text: "The dialog command" },
      { text: "The waypoint command" }
    ]
  },

  {
    title: "The Copper Age",
    subtitle: "1.21.9",
    date: "2025-09-30",
    type: "drop",
    icon: "/java/version_1_21_9.png",
    funFact: "Did you know? The Copper Golem was a candidate in the Minecraft Live 2021 Mob Vote, finishing in second place with 45.7% of votes. The winner was the Allay, having 54.7% of the votes.",
    learnMore: "@Java_Edition_1.21.9",
    mainFeatures: [
      { text: "Copper Golem" },
      { text: "Copper Chest" },
      { text: "Copper Tools & Armor" },
      { text: "New Copper Building Blocks" },
      { text: "Shelves" }
    ],
    minorFeatures: [
      { text: "Mannequins" },
      { text: "Hanging Signs" },
      { text: "Debug Screen (F3) Customization" },
      { text: "End Flashes" }
    ]
  },

  {
    title: "Mounts of Mayhem",
    subtitle: "1.21.11",
    date: "2025-12-09",
    type: "drop",
    icon: "/java/version_1_21_11.png",
    funFact: "Did you know? The Zombie Horse was originally added in the game back in 2013 (12 years prior) in java snapshot 13w16a, but was unobtainable in survival mode.",
    learnMore: "@Java_Edition_1.21.11",
    mainFeatures: [
      { text: "Spear" },
      { text: "Nautilus" },
      { text: "Zombie Nautilus" },
      { text: "Camel Husks" },
      { text: "Parched (Desert Skeletons)" },
    ],
    minorFeatures: [
      { text: "Zombies riding Zombie Horses" },
      { text: "Drowned riding Zombie Nautilus" },
      { text: "Husks riding Camel Husks" },
      { text: "Netherite Horse Armor" }
    ]
  },
] as const;