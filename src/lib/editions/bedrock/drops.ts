import type { Version } from "..";

export const drops: Version[] = [
  {
    title: "Bats and Pots",
    subtitle: "1.20.50",
    description: "Better Decorated Pots & Bats",
    type: "drop",
    date: "2023-12-05",
    icon: "/bedrock/version_1_20_50.png",
    funFact: "Did you know? This minor update was retroactively labeled as a \"game drop\", making it the first of its kind.",
    learnMore: "@Bedrock_Edition_1.20.50",
    mainFeatures: [
      { text: "Decorated Pots can now hold items" },
      { text: "Decorated Pots now can be destroyed by projectiles" },
      { text: "Brand new model and texture for bats" },
    ],
    minorFeatures: [
      { text: "Improved mob attack reach calculation" }
    ]
  },

  {
    title: "Armored Paws",
    subtitle: "1.20.80",
    description: "Armadillos & Wolf Armor",
    type: "drop",
    date: "2024-04-23",
    icon: "/bedrock/version_1_20_80.png",
    learnMore: "@Bedrock_Edition_1.20.80",
    mainFeatures: [
      { text: "Armadillos" },
      { text: "Wolf Armor" },
      { text: "Wolf Variants" },
    ]
  },

  {
    title: "Bundles of Bravery",
    subtitle: "1.21.40",
    description: "Bundles & Hardcore Mode",
    type: "drop",
    date: "2024-10-22",
    icon: "/bedrock/version_1_21_40.png",
    funFact: "Did you know? Bundles were originally planned for the Caves & Cliffs update (in 2021), but were delayed several times. They went through an extensive experimental phase before finally being added, 3 years later.",
    learnMore: "@Bedrock_Edition_1.21.40",
    mainFeatures: [
      { text: "Bundles" },
      { text: "Hardcore Mode" }
    ]
  },

  {
    title: "The Garden Awakens",
    subtitle: "1.21.50",
    description: "The Pale Garden & Creaking",
    type: "drop",
    date: "2024-12-03",
    icon: "/bedrock/version_1_21_50.png",
    learnMore: "@Bedrock_Edition_1.21.50",
    mainFeatures: [
      { text: "The Pale Garden Biome" },
      { text: "The Creaking Mob" },
      { text: "Pale Oak" },
      { text: "Eyeblossom Flowers" },
      { text: "Resin" }
    ],
    minorFeatures: [
      { text: "The Bedrock Editor tool released" }
    ]
  },

  {
    title: "Spring To Life",
    subtitle: "1.21.70",
    type: "drop",
    date: "2025-03-25",
    icon: "/bedrock/version_1_21_70.png",
    learnMore: "@Bedrock_Edition_1.21.70",
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
      { text: "Ability to pause the game" }
    ]
  },

  {
    title: "Chase the Skies",
    subtitle: "1.21.90",
    type: "drop",
    date: "2025-06-17",
    icon: "/bedrock/version_1_21_90.png",
    learnMore: "@Bedrock_Edition_1.21.90",
    funFact: "Did you know? Only Bedrock Edition received the new Vibrant Visuals in this drop.",
    mainFeatures: [
      { text: "Dried Ghasts" },
      { text: "Ghastlings" },
      { text: "Rideable, Happy Ghasts" },
      { text: "Vibrant Visuals: a major visual overhaul" },
      { text: "Directional Lights with Pixel-aligned shadows" },
      { text: "Specular highlights" },
      { text: "Emissive texures" },
      { text: "Water Reflections" },
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
    subtitle: "1.21.110",
    date: "2025-09-30",
    type: "drop",
    icon: "/bedrock/version_1_21_110.png",
    funFact: "Did you know? The Copper Golem was a candidate in the Minecraft Live 2021 Mob Vote, finishing in second place with 45.7% of votes. The winner was the Allay, having 54.7% of the votes.",
    learnMore: "@Bedrock_Edition_1.21.110",
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
] as const;