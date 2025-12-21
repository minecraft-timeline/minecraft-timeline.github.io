import type { Edition } from "./edition.ts";
const EDITIONS: Edition[] = [
  {
    id: "java",
    title: "Java Edition",
    firstMessage: "Minecraft is born",

    versions: [
      {
        subtitle: "Cave Game",
        description: "Cobble & Grass",
        type: "major",
        date: "2009-05-10",
        icon: "/java/version_cave_game.png",
        learnMore: "@Cave_game_tech_test",
        mainFeatures: [
          { text: "Cobblestone" },
          { text: "Grass Block" }
        ],
        minorFeatures: [
          { text: "Physics" },
          { text: "The player" },
          { text: "Basic caves" }
        ]
      },

      {
        subtitle: "Early Classic Creative",
        description: "Trees & Ores",
        type: "major",
        date: "2009-05-16",
        icon: "/java/version_early_classic.png",
        learnMore: "@Early_Classic_Creative",
        mainFeatures: [
          { text: "Trees" },
          { text: "Coal, iron and gold ores" }
        ],
        minorFeatures: [
          { text: "Bedrock" },
          { text: "Sand" },
          { text: "Gravel" }
        ]
      },

      {
        subtitle: "Multiplayer Test",
        description: "Flowers & Glass",
        type: "major",
        date: "2009-05-31",
        icon: "/java/version_multiplayer_test.png",
        learnMore: "@Multiplayer_Test",
        mainFeatures: [
          { text: "Flowers" },
          { text: "Glass" },
          { text: "Wool" }
        ],
        minorFeatures: [
          { text: "Multiplayer" },
          { text: "Commands" },
          { text: "Mushrooms" }
        ]
      },

      {
        subtitle: "Survival Test",
        description: "Health & Creepers",
        type: "major",
        date: "2009-09-01",
        icon: "/java/version_survival_test.png",
        funFact: "Did you know? Creepers were originally broken Pigs.",
        learnMore: "@Survival_Test",
        mainFeatures: [
          { text: "Health" },
          { text: "Creepers" },
          { text: "Sheeps" },
          { text: "Pigs" }
        ],
        minorFeatures: [
          { text: "Zombies" },
          { text: "Skeletons" },
          { text: "Spiders" }
        ]
      },

      {
        subtitle: "Late Classic Creative",
        description: "Block Placement Controls",
        type: "major",
        date: "2009-10-27",
        icon: "/java/version_late_classic.png",
        funFact: "Did you know? This update overlapped with \"Survival Test\".",
        learnMore: "@Late_Classic_Creative",
        mainFeatures: [{ text: "Block Placement Controls" }]
      },

      {
        subtitle: "Indev 0.31",
        description: "Crafting Tables, Tools & Diamonds",
        type: "major",
        date: "2009-12-23",
        icon: "/java/version_indev_0_31.png",
        funFact: "Did you know? Notch released 24 updates under this name.",
        learnMore: "@Indev_0.31",
        mainFeatures: [
          { text: "Crafting Tables" },
          { text: "Chests" },
          { text: "Diamonds" },
          { text: "Tools " },
          { text: "Survival Mode" }
        ],
        minorFeatures: [
          { text: "Apples" },
          { text: "Fire" },
          { text: "Torches" }
        ]
      },

      {
        subtitle: "Minecraft Indev",
        description: "Farming & Armor",
        type: "major",
        date: "2010-02-06",
        icon: "/java/version_indev.png",
        learnMore: "@Minecraft_Indev",
        mainFeatures: [
          { text: "Farming" },
          { text: "Armor" },
          { text: "Furnace" },
          { text: "Day-night cycle" }
        ],
        minorFeatures: [
          { text: "Bread" },
          { text: "Paintings" },
          { text: "Mob drops" }
        ]
      },

      {
        subtitle: "Minecraft Infdev",
        description: "Dungeons, Rails & Infinite World",
        type: "major",
        date: "2010-02-27",
        icon: "/java/version_infdev.png",
        funFact: "Did you know? \"Infdev\" stands for \"Infinite Development\".",
        learnMore: "@Minecraft_Infdev",
        mainFeatures: [
          { text: "Dungeons" },
          { text: "Rails" },
          { text: "Infinite World" }
        ],
        minorFeatures: [
          { text: "Arrows" },
          { text: "Doors" },
          { text: "Buckets" },
          { text: "Golden Apples" }
        ]
      },

      {
        subtitle: "Alpha 1.0",
        description: "Redstone",
        type: "major",
        date: "2010-07-03",
        icon: "/java/version_alpha_1_0.png",
        learnMore: "@Java_Edition_Alpha_v1.0.1",
        mainFeatures: [
          { text: "Redstone Dust" },
          { text: "Redstone Torch" },
          { text: "Levers" },
          { text: "Buttons" },
          { text: "Pressure Plates" },
          { text: "Iron Doors" }
        ],
        minorFeatures: [{ text: "Redstone Ore" }]
      },

      {
        subtitle: "Alpha 1.1",
        description: "Compasses",
        type: "major",
        date: "2010-09-10",
        icon: "/java/version_alpha_1_1.png",
        learnMore: "@Java_Edition_Alpha_v1.1.0",
        mainFeatures: [{ text: "Compasses" }],
        minorFeatures: [{ text: "Lava buckets as furnace fuel" }]
      },

      {
        title: "Halloween Update",
        subtitle: "Alpha 1.2",
        description: "The Nether",
        type: "major",
        date: "2010-10-30",
        icon: "/java/version_alpha_1_2.png",
        learnMore: "@Halloween_Update",
        mainFeatures: [
          { text: "The Nether" },
          { text: "Nether Portal" },
          { text: "Pumpkins" }
        ],
        minorFeatures: [{ text: "Biomes" }, { text: "Fishing" }]
      },

      {
        subtitle: "Beta 1.0",
        description: "Eggs",
        type: "major",
        date: "2010-12-20",
        icon: "/java/version_beta_1_0.png",
        learnMore: "@Java_Edition_Beta_1.0",
        mainFeatures: [{ text: "Throwable Eggs" }]
      },

      {
        subtitle: "Beta 1.1",
        description: "Leaf Decay",
        type: "major",
        date: "2010-12-22",
        icon: "/java/version_beta_1_1.png",
        learnMore: "@Java_Edition_Beta_1.1",
        mainFeatures: [{ text: "Better Leaf Decay" }]
      },

      {
        subtitle: "Beta 1.2",
        description: "Note Blocks & Cakes",
        type: "major",
        date: "2011-01-13",
        icon: "/java/version_beta_1_2.png",
        learnMore: "@Java_Edition_Beta_1.2",
        mainFeatures: [
          { text: "Note Blocks" },
          { text: "Cakes" },
          { text: "Dispensers" },
          { text: "Lapis Lazuli" }
        ],
        minorFeatures: [
          { text: "Squids" },
          { text: "Sugar" },
          { text: "Sandstone" },
          { text: "Wool Dyes" }
        ]
      },

      {
        subtitle: "Beta 1.3",
        description: "Beds & Repeaters",
        type: "major",
        date: "2011-02-22",
        icon: "/java/version_beta_1_3.png",
        learnMore: "@Java_Edition_Beta_1.3",
        mainFeatures: [{ text: "Beds" }, { text: "Repeaters" }],
        minorFeatures: [{ text: "Graphics Settings" }]
      },

      {
        subtitle: "Beta 1.4",
        description: "Wolves & New Logo",
        type: "major",
        date: "2011-03-31",
        icon: "/java/version_beta_1_4.png",
        funFact: "Did you know? The mod \"Better than Wolves\" was created because its creator disliked this update.",
        learnMore: "@Java_Edition_Beta_1.4",
        mainFeatures: [{ text: "Wolves" }, { text: "New Logo" }],
        minorFeatures: [{ text: "Cookies" }]
      },

      {
        subtitle: "Beta 1.5",
        description: "Achievements & Powered Rails",
        type: "major",
        date: "2011-04-19",
        icon: "/java/version_beta_1_5.png",
        learnMore: "@Java_Edition_Beta_1.5",
        mainFeatures: [
          { text: "Achievements" },
          { text: "Powered Rails" },
          { text: "Rain, snow and thunderstorms" }
        ],
        minorFeatures: [{ text: "More saplings" }]
      },

      {
        subtitle: "Beta 1.6",
        description: "Maps & Trapdoors",
        type: "major",
        date: "2011-05-26",
        icon: "/java/version_beta_1_6.png",
        learnMore: "@Java_Edition_Beta_1.6",
        mainFeatures: [
          { text: "Maps" },
          { text: "Trapdoors" },
          { text: "Grass" }
        ],
        minorFeatures: [{ text: "Dead Bushes" }]
      },

      {
        subtitle: "Beta 1.7",
        description: "Pistons",
        type: "major",
        date: "2011-06-30",
        icon: "/java/version_beta_1_7.png",
        funFact: "Did you know? Pistons were originally a mod.",
        learnMore: "@Java_Edition_Beta_1.7",
        mainFeatures: [
          { text: "Pistons" },
          { text: "Sticky Pistons" },
          { text: "Grass" }
        ],
        minorFeatures: [{ text: "Shears" }]
      },

      {
        title: "Adventure Update 1",
        subtitle: "Beta 1.8",
        description: "Endermen & Hunger",
        type: "major",
        date: "2011-09-14",
        icon: "/java/version_beta_1_8.png",
        funFact: "Did you know? The hunger system was somewhat controversial.",
        learnMore: "@Java_Edition_Beta_1.8",
        mainFeatures: [
          { text: "Endermen" },
          { text: "Hunger" },
          { text: "Creative Mode" },
          { text: "Villages" },
          { text: "Strongholds" }
        ],
        minorFeatures: [
          { text: "Melons" },
          { text: "Cave Spiders" },
          { text: "Swamps" },
          { text: "More world structures" },
          { text: "Far Lands" }
        ]
      },

      {
        title: "Adventure Update 2",
        subtitle: "1.0",
        description: "The End & Enchanting",
        type: "major",
        date: "2011-11-18",
        icon: "/java/version_1_0.png",
        funFact: "Did you know? The game was fully released during Minecon 2011.",
        learnMore: "@Java_Edition_1.0.0",
        mainFeatures: [
          { text: "The End" },
          { text: "Enchanting" },
          { text: "Potions" },
          { text: "Breeding" }
        ],
        minorFeatures: [
          { text: "Villagers" },
          { text: "Mushroom Islands" },
          { text: "Nether Fortresses" },
          { text: "More Nether mobs" },
          { text: "Snow golems" },
          { text: "Hardcore Mode" }
        ]
      },

      {
        subtitle: "1.1",
        description: "Spawn Eggs",
        type: "major",
        date: "2012-01-12",
        icon: "/java/version_1_1.png",
        learnMore: "@Java_Edition_1.1",
        mainFeatures: [{ text: "Spawn Eggs" }],
        minorFeatures: [
          { text: "Superflat worlds" },
          { text: "Beaches" }
        ]
      },

      {
        subtitle: "1.2",
        description: "Jungles & Iron Golems",
        type: "major",
        date: "2012-03-01",
        icon: "/java/version_1_2.png",
        learnMore: "@Java_Edition_1.2.1",
        mainFeatures: [
          { text: "Jungles" },
          { text: "Iron Golems" },
          { text: "Ocelots" },
          { text: "Redstone Lamps" }
        ],
        minorFeatures: [
          { text: "Bottles o' Enchanting" },
          { text: "Abandoned Mineshafts" },
          { text: "Zombie Sieges" }
        ]
      },

      {
        subtitle: "1.3",
        description: "Trading & Temples",
        type: "major",
        date: "2012-08-01",
        icon: "/java/version_1_3.png",
        learnMore: "@Java_Edition_1.3.1",
        mainFeatures: [
          { text: "Villager Trading" },
          { text: "Desert Temples" },
          { text: "Jungle Temples" },
          { text: "Emeralds" },
          { text: "Ender Chests" }
        ],
        minorFeatures: [
          { text: "Tripwire Hooks" },
          { text: "Writable Books" },
          { text: "Enchanted Golden Apples" },
          { text: "Adventure Mode" }
        ]
      },

      {
        title: "Pretty Scary Update",
        subtitle: "1.4",
        description: "Withers, Anvils & Cmd. Blocks",
        type: "major",
        date: "2012-10-25",
        icon: "/java/version_1_4.png",
        learnMore: "@Pretty_Scary_Update",
        mainFeatures: [
          { text: "Withers" },
          { text: "Anvils" },
          { text: "Command Blocks" },
          { text: "Beacons" },
          { text: "Bats" }
        ],
        minorFeatures: [
          { text: "Carrots" },
          { text: "Potatoes" },
          { text: "Pumpkin Pies" },
          { text: "Item Frames" },
          { text: "Flower Pots" }
        ]
      },

      {
        title: "Redstone Update",
        subtitle: "1.5",
        description: "More Redstone components & Quartz",
        type: "major",
        date: "2013-03-13",
        icon: "/java/version_1_5.png",
        learnMore: "@Redstone_Update",
        mainFeatures: [
          { text: "Hopper" },
          { text: "Block of Redstone" },
          { text: "Daylight Sensor" },
          { text: "Redstone Comparator" },
          { text: "Trapped Chest" },
          { text: "Nether Quartz" }
        ],
        minorFeatures: [
          { text: "Weighted Pressure Plates" },
          { text: "Better Lighting" }
        ]
      },

      {
        title: "Horse Update",
        subtitle: "1.6",
        description: "Horses",
        type: "major",
        date: "2013-07-01",
        icon: "/java/version_1_6.png",
        funFact: "Did you know? Horses were originally from the mod \"Mo' Creatures.\"",
        learnMore: "@Horse_Update",
        mainFeatures: [{ text: "Horses" }],
        minorFeatures: [
          { text: "Leads" },
          { text: "Coal Blocks" },
          { text: "Carpets" },
          { text: "Horses" }
        ]
      },

      {
        title: "The Update that Changed the World",
        subtitle: "1.7",
        description: "New Biomes & World Generator",
        type: "major",
        date: "2013-10-25",
        icon: "/java/version_1_7.png",
        learnMore: "@The_Update_that_Changed_the_World",
        mainFeatures: [
          { text: "11 new Biomes such as Mesas and Mega Taigas" },
          { text: "New world generator" },
          { text: "Stained Glass" }
        ],
        minorFeatures: [{ text: "Custom Nether Portals" }]
      },

      {
        title: "Bountiful Update",
        subtitle: "1.8",
        description: "Ocean Monuments & Slime Blocks",
        type: "major",
        date: "2014-09-02",
        icon: "/java/version_1_8.png",
        learnMore: "@Bountiful_Update",
        mainFeatures: [
          { text: "Ocean Monuments" },
          { text: "Slime Blocks" },
          { text: "Granite, Andesite and Diorite" },
          { text: "Rabbits" },
          { text: "Endermites" }
        ],
        minorFeatures: [
          { text: "Sheep Mutton" },
          { text: "Armor Stands" },
          { text: "Coarse Dirt" },
          { text: "Iron Trapdoors" },
          { text: "Banners" },
          { text: "Enchanting requires Lapis Lazuli" }
        ]
      },

      {
        title: "The Combat Update",
        subtitle: "1.9",
        description: "End Cities, Elytra Wings & Combat Changes",
        type: "major",
        date: "2016-02-29",
        icon: "/java/version_1_9.png",
        funFact: "Did you know? This update is considered the most controversial one so far, due to the combat changes.",
        learnMore: "@Combat_Update",
        mainFeatures: [
          { text: "End Cities" },
          { text: "Elytra Wings" },
          { text: "Combat Changes" },
          { text: "Outer End Islands" },
          { text: "Shulkers" },
          { text: "Shields" }
        ],
        minorFeatures: [
          { text: "Subtitles" },
          { text: "Igloos" },
          { text: "New arrows" },
          { text: "Revamped Ender Dragon fight" },
          { text: "Ability to use your second hand" },
          { text: "Removed Enchanted Golden Apple Recipe" },
          { text: "Better Command Blocks" }
        ]
      },

      {
        title: "Frostburn Update",
        subtitle: "1.10",
        description: "Polar Bears & Magma Blocks",
        type: "major",
        date: "2016-06-08",
        icon: "/java/version_1_10.png",
        learnMore: "@Frostburn_Update",
        mainFeatures: [
          { text: "Polar Bears" },
          { text: "Magma Blocks" },
          { text: "Strays" },
          { text: "Husks" }
        ],
        minorFeatures: [
          { text: "Bone Blocks" },
          { text: "Nether Wart Blocks" },
          { text: "Red Nether Bricks" }
        ]
      },

      {
        title: "Exploration Update",
        subtitle: "1.11",
        description: "Woodland Mansions & Shulker Boxes",
        type: "major",
        date: "2016-11-14",
        icon: "/java/version_1_11.png",
        learnMore: "@Exploration_Update",
        mainFeatures: [
          { text: "Woodland Mansions" },
          { text: "Shulker Boxes" },
          { text: "Totems of Undying" },
          { text: "Llamas" }
        ],
        minorFeatures: [{ text: "Nitwit and Cartographer Villagers" }]
      },

      {
        title: "World of Color Update",
        subtitle: "1.12",
        description: "Colorful Blocks & Parrots",
        type: "major",
        date: "2017-06-07",
        icon: "/java/version_1_12.png",
        funFact: "Did you know? Originally parrots were tamed using cookies, until Mojang discovered that in real life they are poisonous to them. Now, cookies instantly kill parrots. Tame them with seeds instead.",
        learnMore: "@World_of_Color_Update",
        mainFeatures: [
          { text: "Colored Concrete" },
          { text: "Colored Concrete Powder" },
          { text: "Glazed Terracotta" },
          { text: "Parrots" }
        ],
        minorFeatures: [
          { text: "Improved wool colors" },
          { text: "Dyeable beds" },
          { text: "Replaced Achievements with Advancements" },
          { text: "Functions" }
        ]
      },

      {
        title: "Update Aquatic",
        subtitle: "1.13",
        description: "Ocean Overhaul & Phantoms",
        type: "major",
        date: "2018-07-18",
        icon: "/java/version_1_13.png",
        funFact: "Did you know? The name of this update is a reference to the movie \"The Life Aquatic\".",
        learnMore: "@Update_Aquatic",
        mainFeatures: [
          { text: "Kelp and Seagrass" },
          { text: "Fish mobs" },
          { text: "Dolphins" },
          { text: "Turtles" },
          { text: "The Drowned" },
          { text: "Tridents" },
          { text: "Coral Reefs" },
          { text: "Phantoms" },
          { text: "Conduits" }
        ],
        minorFeatures: [
          { text: "Submerged Caves" },
          { text: "Swimming" },
          { text: "Shipwrecks" },
          { text: "Treasure Maps" },
          { text: "Icebergs" },
          { text: "Bubble Columns" },
          { text: "New water physics" }
        ]
      },

      {
        title: "Village & Pillage",
        subtitle: "1.14",
        description: "Village Overhaul, New Textures & Bamboo Forests",
        type: "major",
        date: "2019-04-23",
        icon: "/java/version_1_14.png",
        learnMore: "@Village_%26_Pillage",
        mainFeatures: [
          { text: "Village overhaul" },
          { text: "Pillagers" },
          { text: "Raids" },
          { text: "Updated all textures of the game" },
          { text: "Foxes" },
          { text: "Pandas" },
          { text: "Bamboo forests" }
        ],
        minorFeatures: [{ text: "New crafting stations" }]
      },

      {
        title: "Buzzy Bees",
        subtitle: "1.15",
        description: "Bees & Bug Fixes",
        type: "major",
        date: "2019-12-10",
        icon: "/java/version_1_15.png",
        funFact: "Did you know? This was the first major update with bug fixes and performance improvements as one of its main points. 1.13 was originally supposed to be this, before they added the aquatic features.",
        learnMore: "@Buzzy_Bees",
        mainFeatures: [
          { text: "Bees" },
          { text: "Beehives" },
          { text: "Bee nests" },
          { text: "Honey bottles" },
          { text: "Honey blocks" },
          { text: "Honeycomb blocks" },
          { text: "Loads of bug fixes" }
        ],
        minorFeatures: [{ text: "A lot of rendering code rewritten" }]
      },

      {
        title: "Nether Update",
        subtitle: "1.16",
        description: "Nether Overhaul & Netherite",
        type: "major",
        date: "2020-06-23",
        icon: "/java/version_1_16.png",
        funFact: "Did you know? Netherite is the first new tool tier since diamonds (added over 10 years ago).",
        learnMore: "@Nether_Update",
        mainFeatures: [
          { text: "Warped Forests" },
          { text: "Crimson Forests" },
          { text: "Soulsand Valleys" },
          { text: "Piglins" },
          { text: "Hoglins" },
          { text: "Striders" },
          { text: "Many new Nether blocks" },
          { text: "Netherite" },
          { text: "Netherite tools & armor" }
        ],
        minorFeatures: [
          { text: "Zombie Pigmen are now Zombified Piglins" }
        ]
      },

      {
        title: "Caves & Cliffs pt. 1",
        subtitle: "1.17",
        description: "New Cave Blocks & Mobs",
        type: "major",
        date: "2021-06-08",
        icon: "/java/version_1_17.png",
        funFact: "Did you know? Goats will target and ram all other mobs, including armor stands!",
        learnMore: "@Java_Edition_1.17",
        mainFeatures: [
          { text: "Various cave plants" },
          { text: "Axolotls" },
          { text: "Glow squids" },
          { text: "Goats" },
          { text: "Copper" },
          { text: "Amethyst geodes" },
          { text: "Raw ore" },
          { text: "Candles" },
          { text: "More stone blocks" }
        ],
        minorFeatures: [
          { text: "Improved various textures" },
          { text: "Light block" },
          { text: "Powdered snow" }
        ]
      },

      {
        title: "Caves & Cliffs pt. 2",
        subtitle: "1.18",
        description: "Complete World Generation Overhaul",
        type: "major",
        date: "2021-11-30",
        icon: "/java/version_1_18.png",
        funFact: "Did you know? This was the first major world generation update since 1.7 (over 7 years ago)!\nCaves & Cliffs was split into two updates mainly due to the 2020 COVID-19 Pandemic.",
        learnMore: "@Java_Edition_1.18",
        mainFeatures: [
          { text: "Completely overhauled world generation" },
          { text: "Added huge and complex cave systems" },
          { text: "Much more varied and extreme terrain generation" },
          { text: "Radically changed ore distribution" },
          { text: "Increased Overworld height limit 64 blocks downwards" }
        ],
        minorFeatures: [
          { text: "New overworld music by Lena Raine" },
          { text: "New \"Otherside\" music disc by Lena Raine" },
          { text: "Mobs spawn only in complete darkness (light level 0)" }
        ]
      },

      {
        title: "The Wild Update",
        subtitle: "1.19",
        description: "The Deep Dark & Mangrove Swamps",
        type: "major",
        date: "2022-06-07",
        icon: "/java/version_1_19.png",
        funFact: "Did you know? The Deep Dark was meant to come during Caves & Cliffs, but Mojang couldn't finish it in time.",
        learnMore: "@Java_Edition_1.19",
        mainFeatures: [
          { text: "The Deep Dark" },
          { text: "Ancient Cities" },
          { text: "The Warden" },
          { text: "Skulk Blocks" },
          { text: "Mangrove Swamps" },
          { text: "Frogs" },
          { text: "Allays" }
        ],
        minorFeatures: [
          { text: "Recovery Compasses" },
          { text: "Boats with Chests" }
        ]
      },

      {
        title: "Trails & Tales",
        subtitle: "1.20",
        description: "Archeology, Cherry Trees & Storytelling",
        type: "major",
        date: "2023-06-07",
        icon: "/java/version_1_20.png",
        funFact: "Did you know? This update didn't get its name and theme revealed until well into the snapshots.\nFun fact: This update brings the first change to desert wells since they were added, over 11 years ago!",
        learnMore: "@Java_Edition_1.20",
        mainFeatures: [
          { text: "Archeology Features" },
          { text: "Brushes and Suspicious Sand" },
          { text: "Ancient seeds and plants" },
          { text: "Pottery" },
          { text: "Camels" },
          { text: "Sniffers" },
          { text: "Cherry Trees" },
          { text: "Armor Trims" }
        ],
        minorFeatures: [
          { text: "More bamboo blocks and items" },
          { text: "Hanging Signs" }
        ]
      },

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
        title: "Tricky Trials",
        subtitle: "1.21",
        description: "Trial Chambers & Auto Crafting",
        type: "major",
        date: "2024-06-13",
        icon: "/java/version_1_21.png",
        learnMore: "@Java_Edition_1.21",
        mainFeatures: [
          { text: "Trial Chambers" },
          { text: "Auto Crafter Block" },
          { text: "Many New Copper Blocks" },
          { text: "The Breeze & Breeze Rods" },
          { text: "Mace Weapon" }
        ],
        minorFeatures: [
          { text: "Twenty new original paintings" },
          { text: "Six new Potion Effects" },
          { text: "Bogged Skeletons" },
          { text: "Ominous Bottles" }
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
        subtitle: "1.21.8",
        type: "minor",
        date: "2025-07-17",
        learnMore: "@Java_Edition_1.21.8",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.21.7",
        type: "minor",
        date: "2025-06-30",
        learnMore: "@Java_Edition_1.21.7",
        mainFeatures: [
          { text: "A new music disc and painting referencing A Minecraft Movie" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.21.3",
        type: "minor",
        date: "2024-10-23",
        learnMore: "@Java_Edition_1.21.3",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.21.1",
        type: "minor",
        date: "2024-08-08",
        learnMore: "@Java_Edition_1.21.1",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.20.6",
        type: "minor",
        date: "2024-04-29",
        learnMore: "@Java_Edition_1.20.6",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.20.4",
        type: "minor",
        date: "2023-12-07",
        learnMore: "@Java_Edition_1.20.4",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.20.2",
        type: "minor",
        date: "2023-09-21",
        learnMore: "@Java_Edition_1.20.2",
        mainFeatures: [
          { text: "Added /random command" },
          { text: "Added experimental Villager Trade Rebalancing" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.20.1",
        type: "minor",
        date: "2023-06-12",
        learnMore: "@Java_Edition_1.20.1",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.19.4",
        type: "minor",
        date: "2023-03-14",
        learnMore: "@Java_Edition_1.19.4",
        mainFeatures: [
          { text: "Added /ride and /damage commands" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.19.3",
        type: "minor",
        date: "2022-12-07",
        learnMore: "@Java_Edition_1.19.3",
        mainFeatures: [
          { text: "Creative Mode inventory overhaul" },
          { text: "Many new spawn eggs" },
          { text: "Added /fillbiome command to change biomes" },
          { text: "Added many new game rules" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.19.2",
        type: "minor",
        date: "2022-08-05",
        learnMore: "@Java_Edition_1.19.2",
        mainFeatures: [
          { text: "Critical Bug Fixes" }
        ]
      },

      {
        subtitle: "1.19.1",
        type: "minor",
        date: "2022-07-27",
        learnMore: "@Java_Edition_1.19.1",
        mainFeatures: [
          { text: "Allay Duplication" },
          { text: "Player Chat reporting" },
          { text: "Chat security indicators" },
          { text: "Bug Fixes" }
        ]
      },

      {
        subtitle: "1.18.2",
        type: "minor",
        date: "2022-02-28",
        learnMore: "@Java_Edition_1.18.2",
        mainFeatures: [
          { text: "Added the /placefeature command" },
          { text: "Small Changes to custom world generation and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.18.1",
        type: "minor",
        date: "2021-12-10",
        learnMore: "@Java_Edition_1.18.1",
        mainFeatures: [
          { text: "Fixed various bugs and tweaked fog" },
          { text: "Fixed a severe vulnerability in the Log4j logging library, that affected many Java programs worldwide" }
        ]
      },

      {
        subtitle: "1.17.1",
        type: "minor",
        date: "2021-07-06",
        learnMore: "@Java_Edition_1.17.1",
        mainFeatures: [
          { text: "Fixed various bugs and tweaked game mechanics" }
        ]
      },

      {
        subtitle: "1.16.5",
        type: "minor",
        date: "2021-01-15",
        learnMore: "@Java_Edition_1.16.5",
        mainFeatures: [
          { text: "Fixed various bugs including major stability issues" }
        ]
      },

      {
        subtitle: "1.16.4",
        type: "minor",
        date: "2020-11-02",
        learnMore: "@Java_Edition_1.16.4",
        mainFeatures: [
          { text: "Changed worn netherite leggings model" },
          {
            text: "Added and improved functionality for blocking and hiding players"
          },
          {
            text: "Improved error messages before connecting to servers and multiplayer"
          },
          { text: "Added BLM and anti-racism text to the splash screen!" },
          {
            text: "Fixed various crashes and visual glitches"
          }
        ]
      },

      {
        subtitle: "1.16.3",
        type: "minor",
        date: "2020-09-10",
        learnMore: "@Java_Edition_1.16.3",
        mainFeatures: [
          {
            text: "Improved piglin, piglin brutes, hoglins, and zoglins pathfinding"
          },
          { text: "Baby piglins no longer dupe items" }
        ]
      },

      {
        subtitle: "1.16.2",
        description: "Piglin Brutes",
        type: "minor",
        date: "2020-08-11T10:13:46",
        learnMore: "@Java_Edition_1.16.2",
        mainFeatures: [
          { text: "Piglin Brutes" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.16.1",
        type: "minor",
        date: "2020-06-24T10:31:40",
        learnMore: "@Java_Edition_1.16.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.15.2",
        type: "minor",
        date: "2020-01-17T10:03:52",
        learnMore: "@Java_Edition_1.15.2",
        mainFeatures: [
          { text: "Added some gamerules" },
          {
            text: "Added a disclaimer that informs that online play is not age rated"
          },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.15.1",
        type: "minor",
        date: "2019-12-16T10:29:47",
        learnMore: "@Java_Edition_1.15.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.4",
        type: "minor",
        date: "2019-07-19T09:25:47",
        learnMore: "@Java_Edition_1.14.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.3",
        type: "minor",
        date: "2019-06-24T12:52:52",
        learnMore: "@Java_Edition_1.14.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.2",
        type: "minor",
        date: "2019-05-27T11:48:25",
        learnMore: "@Java_Edition_1.14.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.1",
        type: "minor",
        date: "2019-05-13T11:10:12",
        learnMore: "@Java_Edition_1.14.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.13.2",
        type: "minor",
        date: "2018-10-22T11:41:07",
        learnMore: "@Java_Edition_1.13.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.13.1",
        type: "minor",
        date: "2018-08-22T14:03:42",
        learnMore: "@Java_Edition_1.13.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.12.2",
        type: "minor",
        description: "Renamed game",
        date: "2017-09-18T08:39:46",
        icon: "/java/version_1_12_2.png",
        learnMore: "@Java_Edition_1.12.2",
        mainFeatures: [
          {
            text: "Renamed game from \"Minecraft\" to \"Minecraft: Java Edition\""
          },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.12.1",
        type: "minor",
        date: "2017-08-03T12:40:39",
        learnMore: "@Java_Edition_1.12.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.2",
        type: "minor",
        date: "2016-12-21T09:29:12",
        learnMore: "@Java_Edition_1.11.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.1",
        type: "minor",
        description: "Rocket Powered Elytras",
        date: "2016-12-20T14:05:34",
        icon: "/java/version_1_11_1.png",
        learnMore: "@Java_Edition_1.11.1",
        funFact: "Did you know? Rocket Elytras were suggested by a player. Despite being included in a minor update, this was a game changer.",
        mainFeatures: [
          { text: "Rocket Powered Elytras" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.10.2",
        type: "minor",
        date: "2016-06-23T09:17:32",
        learnMore: "@Java_Edition_1.10.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.10.1",
        type: "minor",
        date: "2016-06-22T10:13:22",
        learnMore: "@Java_Edition_1.10.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.9.4",
        type: "minor",
        date: "2016-05-10T10:17:16",
        learnMore: "@Java_Edition_1.9.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.9.3",
        type: "minor",
        date: "2016-05-10T08:33:35",
        learnMore: "@Java_Edition_1.9.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.9.2",
        type: "minor",
        date: "2016-03-30T15:23:55",
        learnMore: "@Java_Edition_1.9.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.9.1",
        type: "minor",
        date: "2016-03-30T13:43:07",
        learnMore: "@Java_Edition_1.9.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.9",
        type: "minor",
        date: "2015-12-03T09:24:39",
        learnMore: "@Java_Edition_1.8.9",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.8",
        type: "minor",
        date: "2015-07-27T10:31:28",
        learnMore: "@Java_Edition_1.8.8",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.7",
        type: "minor",
        date: "2015-06-05T10:10:44",
        learnMore: "@Java_Edition_1.8.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.6",
        type: "minor",
        date: "2015-05-25T10:31:19",
        learnMore: "@Java_Edition_1.8.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.5",
        type: "minor",
        date: "2015-05-22T11:15:28",
        learnMore: "@Java_Edition_1.8.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.4",
        type: "minor",
        date: "2015-04-17T11:37:50",
        learnMore: "@Java_Edition_1.8.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.3",
        type: "minor",
        date: "2015-02-20T14:00:09",
        learnMore: "@Java_Edition_1.8.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.2",
        type: "minor",
        date: "2015-02-19T15:47:29",
        learnMore: "@Java_Edition_1.8.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.1",
        type: "minor",
        date: "2014-11-24T14:13:31",
        learnMore: "@Java_Edition_1.8.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.10",
        type: "minor",
        date: "2014-05-14T17:29:23",
        learnMore: "@Java_Edition_1.7.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.9",
        type: "minor",
        date: "2014-04-14T13:29:23",
        learnMore: "@Java_Edition_1.7.9",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.8",
        type: "minor",
        date: "2014-04-09T07:58:16",
        learnMore: "@Java_Edition_1.7.8",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.7",
        type: "minor",
        date: "2014-04-09T07:52:16",
        learnMore: "@Java_Edition_1.7.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.6",
        type: "minor",
        date: "2014-04-09T07:52:06",
        learnMore: "@Java_Edition_1.7.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.5",
        type: "minor",
        date: "2014-02-26T09:22:17",
        learnMore: "@Java_Edition_1.7.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.4",
        type: "minor",
        date: "2013-12-09T12:28:10",
        learnMore: "@Java_Edition_1.7.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.3",
        type: "minor",
        date: "2013-12-06T13:55:34",
        learnMore: "@Java_Edition_1.7.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.2",
        type: "minor",
        date: "2013-10-25T13:00:00",
        learnMore: "@Java_Edition_1.7.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.6.4",
        type: "minor",
        date: "2013-09-19T15:52:37",
        learnMore: "@Java_Edition_1.6.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.6.2",
        type: "minor",
        date: "2013-07-05T13:09:02",
        learnMore: "@Java_Edition_1.6.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.6.1",
        type: "minor",
        date: "2013-06-28T14:48:41",
        learnMore: "@Java_Edition_1.6.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.5.2",
        type: "minor",
        date: "2013-04-25T15:45:00",
        learnMore: "@Java_Edition_1.5.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.5.1",
        type: "minor",
        date: "2013-03-20T10:00:00",
        learnMore: "@Java_Edition_1.5.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.7",
        type: "minor",
        date: "2012-12-27T22:00:00",
        learnMore: "@Java_Edition_1.4.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.5",
        type: "minor",
        date: "2012-12-19T22:00:00",
        learnMore: "@Java_Edition_1.4.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.6",
        type: "minor",
        date: "2012-12-19T22:00:00",
        learnMore: "@Java_Edition_1.4.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.4",
        type: "minor",
        date: "2012-12-13T22:00:00",
        learnMore: "@Java_Edition_1.4.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.2",
        type: "minor",
        date: "2012-11-24T22:00:00",
        learnMore: "@Java_Edition_1.4.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.3.2",
        type: "minor",
        date: "2012-08-15T22:00:00",
        learnMore: "@Java_Edition_1.3.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.3.1",
        type: "minor",
        date: "2012-07-31T22:00:00",
        learnMore: "@Java_Edition_1.3.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.5",
        type: "minor",
        date: "2012-03-29T22:00:00",
        learnMore: "@Java_Edition_1.2.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.4",
        type: "minor",
        date: "2012-03-21T22:00:00",
        learnMore: "@Java_Edition_1.2.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.3",
        type: "minor",
        date: "2012-03-01T22:00:00",
        learnMore: "@Java_Edition_1.2.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.2",
        type: "minor",
        date: "2012-02-29T22:00:01",
        learnMore: "@Java_Edition_1.2.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.1",
        type: "minor",
        date: "2012-02-29T22:00:00",
        learnMore: "@Java_Edition_1.2.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.8.1",
        type: "minor",
        date: "2011-09-18T22:00:00",
        learnMore: "@Java_Edition_Beta_1.8.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.7.3",
        type: "minor",
        date: "2011-07-07T22:00:00",
        learnMore: "@Java_Edition_Beta_1.7.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.7.2",
        type: "minor",
        date: "2011-06-30T22:00:00",
        learnMore: "@Java_Edition_Beta_1.7.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.6",
        type: "minor",
        date: "2011-05-30T22:00:00",
        learnMore: "@Java_Edition_Beta_1.6.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.5",
        type: "minor",
        date: "2011-05-27T22:00:00",
        learnMore: "@Java_Edition_Beta_1.6.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.4",
        type: "minor",
        date: "2011-05-25T22:00:04",
        learnMore: "@Java_Edition_Beta_1.6.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.3",
        type: "minor",
        date: "2011-05-25T22:00:03",
        learnMore: "@Java_Edition_Beta_1.6.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.2",
        type: "minor",
        date: "2011-05-25T22:00:02",
        learnMore: "@Java_Edition_Beta_1.6.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.6.1",
        type: "minor",
        date: "2011-05-25T22:00:01",
        learnMore: "@Java_Edition_Beta_1.6.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.5_01",
        type: "minor",
        date: "2011-04-19T22:00:00",
        learnMore: "@Java_Edition_Beta_1.5_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.4_01",
        type: "minor",
        date: "2011-04-04T22:00:00",
        learnMore: "@Java_Edition_Beta_1.4_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.3_01",
        type: "minor",
        date: "2011-02-22T22:00:00",
        learnMore: "@Java_Edition_Beta_1.3_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.3b",
        type: "minor",
        date: "2011-02-21T22:00:00",
        learnMore: "@Java_Edition_Beta_1.3b",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.2_02",
        type: "minor",
        date: "2011-01-20T22:00:00",
        learnMore: "@Java_Edition_Beta_1.2_02",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.2_01",
        type: "minor",
        date: "2011-01-13T22:00:00",
        learnMore: "@Java_Edition_Beta_1.2_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.1_02",
        type: "minor",
        date: "2010-12-21T22:00:01",
        learnMore: "@Java_Edition_Beta_1.1_02",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.1_01",
        type: "minor",
        date: "2010-12-21T22:00:00",
        learnMore: "@Java_Edition_Beta_1.1_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.0.2",
        type: "minor",
        date: "2010-12-20T22:00:00",
        learnMore: "@Java_Edition_Beta_1.0.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Beta 1.0_01",
        type: "minor",
        date: "2010-12-19T22:00:01",
        learnMore: "@Java_Edition_Beta_1.0_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.6",
        type: "minor",
        date: "2010-12-02T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.5",
        type: "minor",
        date: "2010-11-30T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.4_01",
        type: "minor",
        date: "2010-11-29T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.4_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.3_04",
        type: "minor",
        date: "2010-11-25T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.3_04",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.3_02",
        type: "minor",
        date: "2010-11-24T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.3_02",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.3_01",
        type: "minor",
        date: "2010-11-23T22:00:01",
        learnMore: "@Java_Edition_Alpha_v1.2.3_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.3",
        type: "minor",
        date: "2010-11-23T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.2b",
        type: "minor",
        date: "2010-11-09T22:00:01",
        learnMore: "@Java_Edition_Alpha_v1.2.2b",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.2a",
        type: "minor",
        date: "2010-11-09T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.2a",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.1_01",
        type: "minor",
        date: "2010-11-04T22:00:01",
        learnMore: "@Java_Edition_Alpha_v1.2.1_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.1",
        type: "minor",
        date: "2010-11-04T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.0_02",
        type: "minor",
        date: "2010-11-03T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.0_02",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.2.0_01",
        type: "minor",
        date: "2010-10-30T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.2.0_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.1.2_01",
        type: "minor",
        date: "2010-09-22T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.1.2_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.1.2",
        type: "minor",
        date: "2010-09-19T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.1.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.17_04",
        type: "minor",
        date: "2010-08-22T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.17_04",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.17_02",
        type: "minor",
        date: "2010-08-19T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.17_02",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.16",
        type: "minor",
        date: "2010-08-11T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.16",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.15",
        type: "minor",
        date: "2010-08-03T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.15",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.14",
        type: "minor",
        description: "Chickens & Jukeboxes",
        date: "2010-07-29T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.14",
        mainFeatures: [{ text: "Chickens" }, { text: "Jukeboxes" }]
      },

      {
        subtitle: "Alpha 1.0.11",
        type: "minor",
        date: "2010-07-22T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.11",
        mainFeatures: [{ text: "Sugar Canes" }, { text: "Clay" }]
      },

      {
        subtitle: "Alpha 1.0.5_01",
        type: "minor",
        date: "2010-07-12T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.5_01",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "Alpha 1.0.4",
        type: "minor",
        date: "2010-07-08T22:00:00",
        learnMore: "@Java_Edition_Alpha_v1.0.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        title: "Game bought by Microsoft",
        type: "event",
        date: "2014-11-06",
        icon: "/event_microsoft.png",
        learnMore: "https://web.archive.org/web/20140915195135/https://mojang.com/2014/09/yes-were-being-bought-by-microsoft/",
        longDescription: [
          "On November of 2014, all of Mojang was acquired by Microsoft for $2.5 billion. This included Minecraft, of course.",
          "The process began a few months earlier. Many suspected this acquisition was happening, but Mojang only confirmed it on September.",
          "According to Notch, he sold Mojang because he didn't want the responsibility of owning a company of such global significance.",
          "As soon as Mojang was sold, Notch and the other two founders (Carl and Jakob) left the company."
        ]
      },
      {
        title: "Mounts of Mayhem",
        subtitle: "1.21.11",
        date: "Winter 2025",
        type: "drop",
        icon: "/java/version_mounts_of_mayhem.png",
        funFact: "Did you know? The Zombie Horse was added in the game back in 2013 in java snapshot 13w16a.",
        learnMore: "@Mounts_of_Mayhem",
        mainFeatures: [
          { text: "Camel Horse" },
          { text: "Nautilus" },
          { text: "Parched" },
          { text: "Spear" },
          { text: "Zombie Nautilus" },
        ],
        minorFeatures: [
          { text: "Breath of the Nautilus" },
          { text: "Zombie Horse can now naturally spawn in survival" },
          { text: "Horses, Donkeys, Mules, Camels, Llamas and Trader Llamas no longer sinks in water while beeing riden."}
        ]
      }
    ],

    upcomings: [
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
    ]
  },

  {
    id: "bedrock",
    title: "Bedrock Edition",
    firstMessage: "Bedrock Edition is born",

    versions: [
      {
        subtitle: "Pocket Edition Pre-Release",
        description: "Grass & Wool",
        type: "major",
        date: "2011-07-01",
        possibleDate: "Late 2011",
        icon: "/bedrock/version_pe_pre_release.png",
        funFact: "Not much is known about this version, as it was never publicly released.",
        learnMore: "@Pocket_Edition_Pre-release",
        mainFeatures: [{ text: "Grass Block" }, { text: "Wool" }],
        minorFeatures: [{ text: "The Player" }]
      },

      {
        subtitle: "PE Alpha 0.1",
        description: "Random Worlds & Multiplayer",
        type: "major",
        date: "2011-08-16",
        icon: "/bedrock/version_pe_alpha_0_1.png",
        funFact: "Did you know? This update added many blocks, being close to Java Edition Infdev.",
        learnMore: "@Pocket_Edition_Alpha_0.1.0",
        mainFeatures: [
          { text: "Random Worlds with Biomes" },
          { text: "Multiplayer" }
        ],
        minorFeatures: [
          { text: "Flowers and Mushrooms" },
          { text: "Trees" },
          { text: "Cobblestone, Stone and Obsidian" },
          { text: "Wooden blocks" },
          { text: "Ore blocks" },
          { text: "Water and Lava" }
        ]
      },

      {
        subtitle: "PE Alpha 0.2",
        description: "Survival Mode & Mobs",
        type: "major",
        date: "2012-02-11",
        icon: "/bedrock/version_pe_alpha_0_2.png",
        learnMore: "@Pocket_Edition_Alpha_0.2.0",
        mainFeatures: [
          { text: "Survival Mode" },
          { text: "Pigs" },
          { text: "Sheep" },
          { text: "Zombies" }
        ],
        minorFeatures: [
          { text: "True Creative Mode" },
          { text: "Stone Tools" },
          { text: "Fences" },
          { text: "Day-Night cycle" }
        ]
      },

      {
        subtitle: "PE Alpha 0.3",
        description: "Crafting Table & Furnaces",
        type: "major",
        date: "2012-04-24",
        icon: "/bedrock/version_pe_alpha_0_3.png",
        learnMore: "@Pocket_Edition_Alpha_0.3.0",
        mainFeatures: [
          { text: "Crafting Tables" },
          { text: "Furnaces" },
          { text: "Wooden Tools" },
          { text: "Iron, Gold, Diamonds and their tools" },
          { text: "Spiders" },
          { text: "Skeletons" },
          { text: "Cows" },
          { text: "Chickens" },
          { text: "Coal" }
        ],
        minorFeatures: [
          { text: "Bow and arrows" },
          { text: "Sticks" },
          { text: "Books and Bookshelves" },
          { text: "Saplings" },
          { text: "Sugar" }
        ]
      },

      {
        subtitle: "PE Alpha 0.4",
        description: "Creepers & Chests",
        type: "major",
        date: "2012-09-06",
        icon: "/bedrock/version_pe_alpha_0_4.png",
        learnMore: "@Pocket_Edition_Alpha_0.4.0",
        mainFeatures: [
          { text: "Creepers" },
          { text: "Chests" },
          { text: "Beds" },
          { text: "Farming" },
          { text: "TNT" }
        ],
        minorFeatures: [
          { text: "Flint and Steel" },
          { text: "Many food items" },
          { text: "Dyes" },
          { text: "Gunpowder" }
        ]
      },

      {
        subtitle: "PE Alpha 0.5",
        description: "Nether Reactor & Melons",
        type: "major",
        date: "2012-11-15",
        icon: "/bedrock/version_pe_alpha_0_5.png",
        learnMore: "@Pocket_Edition_Alpha_0.5.0",
        mainFeatures: [
          { text: "Nether Reactor" },
          { text: "Melons" },
          { text: "Zombie Pigmen" },
          { text: "Glowstone" }
        ],
        minorFeatures: [{ text: "Cobwebs" }, { text: "Paintings" }]
      },

      {
        subtitle: "PE Alpha 0.6",
        description: "Netherrack & Stonecutter",
        type: "major",
        date: "2013-01-30",
        icon: "/bedrock/version_pe_alpha_0_6.png",
        learnMore: "@Pocket_Edition_Alpha_0.6.0",
        mainFeatures: [
          { text: "Netherrack" },
          { text: "Stonecutter" },
          { text: "Nether Quartz" },
          { text: "Nether Bricks" },
          { text: "Signs" }
        ],
        minorFeatures: [
          { text: "Baby Animals" },
          { text: "Sky and Clouds" },
          { text: "Armor" },
          { text: "Sand and Gravel physics" }
        ]
      },

      {
        subtitle: "PE Alpha 0.7",
        description: "Buckets, Spawn Eggs & Sky features",
        type: "major",
        date: "2013-06-05",
        icon: "/bedrock/version_pe_alpha_0_7.png",
        learnMore: "@Pocket_Edition_Alpha_0.7.0",
        mainFeatures: [
          { text: "Buckets" },
          { text: "Spawn Eggs" },
          { text: "Sun" },
          { text: "Moon" },
          { text: "Stars" }
        ],
        minorFeatures: [
          { text: "Fire" },
          { text: "Eggs" },
          { text: "Cakes" }
        ]
      },

      {
        subtitle: "PE Alpha 0.8",
        description: "Rails & Beetroots",
        type: "major",
        date: "2013-12-12",
        icon: "/bedrock/version_pe_alpha_0_8.png",
        learnMore: "@Pocket_Edition_Alpha_0.8.0",
        mainFeatures: [
          { text: "Rails" },
          { text: "Powered Rails" },
          { text: "Beetroots, Carrots and Potatoes" },
          { text: "Pumpkins" },
          { text: "Carpets" }
        ],
        minorFeatures: [
          { text: "Clocks" },
          { text: "Compasses" },
          { text: "Breeding" }
        ]
      },

      {
        subtitle: "PE Alpha 0.9",
        description: "Infinite Worlds & Endermen",
        type: "major",
        date: "2014-07-10",
        icon: "/bedrock/version_pe_alpha_0_9.png",
        funFact: "Did you know? This huge update made the game almost equivalent to Java Edition 1.8.",
        learnMore: "@Pocket_Edition_Alpha_0.9.0",
        mainFeatures: [
          { text: "Infinite Worlds" },
          { text: "All Biomes from Java Edition 1.7" },
          { text: "Endermen" },
          { text: "Wolves" },
          { text: "Silverfish" },
          { text: "Slimes" },
          { text: "Villages with Villagers" }
        ],
        minorFeatures: [
          { text: "Granite, Andesite and Diorite" },
          { text: "Many new structures" },
          { text: "Emeralds" }
        ]
      },

      {
        subtitle: "PE Alpha 0.10",
        description: "Creative Day-Night Cycle & More Fences",
        type: "major",
        date: "2014-11-18",
        icon: "/bedrock/version_pe_alpha_0_10.png",
        learnMore: "@Pocket_Edition_Alpha_0.10.0",
        mainFeatures: [
          { text: "Day-Night Cycle for Creative Mode" },
          { text: "Fences and Gates for each wood type" }
        ],
        minorFeatures: [
          { text: "Mineshafts in Mesas" },
          { text: "Suspended Sand and Gravel particles" }
        ]
      },

      {
        subtitle: "PE Alpha 0.11",
        description: "Boats & Skins",
        type: "major",
        date: "2015-06-04",
        icon: "/bedrock/version_pe_alpha_0_11.png",
        learnMore: "@Pocket_Edition_Alpha_0.11.0",
        mainFeatures: [
          { text: "Boats" },
          { text: "Skins" },
          { text: "Fishing" },
          { text: "Block of Redstone" },
          { text: "Grass Paths" }
        ],
        minorFeatures: [
          { text: "Squids" },
          { text: "Baby Zombies" },
          { text: "Cave Spiders" },
          { text: "Bats" },
          { text: "Ghasts" },
          { text: "Magma Cubes" }
        ]
      },

      {
        subtitle: "PE Alpha 0.12",
        description: "The Nether, Enchanting & Anvils",
        type: "major",
        date: "2015-07-29",
        icon: "/bedrock/version_pe_alpha_0_12.png",
        funFact: "Did you know? This was the first version of the Windows 10 Edition.",
        learnMore: "@Pocket_Edition_Alpha_0.12.0",
        mainFeatures: [
          { text: "The Nether" },
          { text: "Enchanting Tables" },
          { text: "Anvils" },
          { text: "Hunger" },
          { text: "Potions" },
          { text: "Weather" }
        ],
        minorFeatures: [
          { text: "Iron Golems" },
          { text: "Snow Golems" },
          { text: "Ocelots" },
          { text: "Blazes" },
          { text: "Removed Nether Reactors" }
        ]
      },

      {
        subtitle: "PE Alpha 0.13",
        description: "Redstone",
        type: "major",
        date: "2015-11-19",
        icon: "/bedrock/version_pe_alpha_0_13.png",
        learnMore: "@Pocket_Edition_Alpha_0.13.0",
        mainFeatures: [
          { text: "Redstone" },
          { text: "Redstone Torches" },
          { text: "Redstone Lamps" },
          { text: "Levers" },
          { text: "Tripwire Hooks" },
          { text: "Daylight Sensors" },
          { text: "Pressure Plates" },
          { text: "Buttons" }
        ],
        minorFeatures: [
          { text: "Activator Rails" },
          { text: "Detector Rails" },
          { text: "Trapped Chests" },
          { text: "Rabbits" }
        ]
      },

      {
        title: "Overworld Update",
        subtitle: "PE Alpha 0.14",
        description: "More Redstone Components, Witches & Maps",
        type: "major",
        date: "2016-02-18",
        icon: "/bedrock/version_pe_alpha_0_14.png",
        learnMore: "@Overworld_Update",
        mainFeatures: [
          { text: "Dispensers" },
          { text: "Droppers" },
          { text: "Comparators" },
          { text: "Hoppers" },
          { text: "Witches" },
          { text: "Maps" },
          { text: "Ender Pearls" }
        ],
        minorFeatures: [
          { text: "Cauldrons" },
          { text: "Item Frames" },
          { text: "Slime Blocks" }
        ]
      },

      {
        title: "Friendly Update",
        subtitle: "PE Alpha 0.15",
        description: "Realms, Pistons & Horses",
        type: "major",
        date: "2016-06-10",
        icon: "/bedrock/version_pe_alpha_0_15.png",
        learnMore: "@Friendly_Update",
        mainFeatures: [
          { text: "Realms" },
          { text: "Pistons" },
          { text: "Sticky Pistons" },
          { text: "Horses" },
          { text: "Observer" }
        ],
        minorFeatures: [
          { text: "Name Tags" },
          { text: "Leads" },
          { text: "Pig Riding" }
        ]
      },

      {
        title: "Boss Update",
        subtitle: "PE Alpha 0.16",
        description: "Ocean Monuments & Withers",
        type: "major",
        date: "2016-10-21",
        icon: "/bedrock/version_pe_alpha_0_16.png",
        learnMore: "@Boss_Update",
        mainFeatures: [
          { text: "Ocean Monuments" },
          { text: "Withers" }
        ],
        minorFeatures: [{ text: "Commands" }, { text: "Add-ons" }]
      },

      {
        title: "Ender Update",
        subtitle: "PE 1.0",
        description: "The End",
        type: "major",
        date: "2016-12-19",
        icon: "/bedrock/version_pe_1_0.png",
        funFact: "This update is equivalent to Java Edition 1.9, without combat changes.",
        learnMore: "@Ender_Update",
        mainFeatures: [
          { text: "The End" },
          { text: "Ender Dragon" },
          { text: "End Cities" },
          { text: "Ender Chests" },
          { text: "Elytra Wings" }
        ],
        minorFeatures: [
          { text: "Stained Glass" },
          { text: "Igloos" },
          { text: "Pandas" },
          { text: "Endermites" },
          { text: "Increased Overworld height limit" }
        ]
      },

      {
        title: "Discovery Update",
        subtitle: "PE 1.1",
        description: "Woodland Mansions & The Marketplace",
        type: "major",
        date: "2017-06-01",
        icon: "/bedrock/version_pe_1_1.png",
        funFact: "This update is equivalent to Java Edition 1.11.",
        learnMore: "@Discovery_Update",
        mainFeatures: [
          { text: "Woodland Mansions" },
          { text: "Minecraft Marketplace" },
          { text: "Shulker Boxes" },
          { text: "Colored Concrete" },
          { text: "Colored Concrete Powder" },
          { text: "Glazed Terracotta" }
        ],
        minorFeatures: [{ text: "Llamas" }]
      },

      {
        title: "Better Together Update",
        subtitle: "1.2",
        description: "Merged Pocket Edition with Console Edition",
        type: "major",
        date: "2017-09-20",
        icon: "/bedrock/version_1_2.png",
        funFact: "Did you know? The PS4 did not receive this update because Sony didn't allow the game to have cross-play.",
        learnMore: "@Better_Together_Update",
        mainFeatures: [
          { text: "Merged Pocket Edition with Console Edition" },
          { text: "Added Cross-Play between all platforms" },
          { text: "Renamed the game to just \"Minecraft\"" },
          { text: "Named the engine \"Bedrock\"" }
        ],
        minorFeatures: [
          { text: "Banners" },
          { text: "Jukeboxes" },
          { text: "Parrots" },
          { text: "Java Edition-like Crafting" },
          { text: "Recipe Book" }
        ]
      },

      {
        title: "Update Aquatic 1",
        subtitle: "1.4",
        description: "Ocean Overhaul",
        type: "major",
        date: "2018-05-16",
        icon: "/bedrock/version_1_4.png",
        learnMore: "@Bedrock_Edition_1.4.0",
        mainFeatures: [
          { text: "Kelp and Seagrass" },
          { text: "Fish mobs" },
          { text: "Dolphins" },
          { text: "The Drowned" },
          { text: "Tridents" },
          { text: "Coral Reefs" }
        ],
        minorFeatures: [
          { text: "Submerged Caves" },
          { text: "Swimming" },
          { text: "Shipwrecks" },
          { text: "Treasure Maps" },
          { text: "Icebergs" },
          { text: "New water physics" }
        ]
      },

      {
        title: "Update Aquatic 2",
        subtitle: "1.5",
        description: "Turtles & Conduits",
        type: "major",
        date: "2018-07-10",
        icon: "/bedrock/version_1_5.png",
        learnMore: "@Bedrock_Edition_1.5.0",
        mainFeatures: [
          { text: "Turtles" },
          { text: "Conduits" },
          { text: "Bubble Columns" }
        ]
      },

      {
        subtitle: "1.6",
        description: "Phantoms & Barriers",
        type: "major",
        date: "2018-08-28",
        icon: "/bedrock/version_1_6.png",
        learnMore: "@Bedrock_Edition_1.6.0",
        mainFeatures: [{ text: "Phantoms" }, { text: "Barriers" }],
        minorFeatures: [{ text: "Potions of Slow Falling" }]
      },

      {
        subtitle: "1.7",
        description: "/scoreboard Command",
        type: "major",
        date: "2018-10-15",
        icon: "/bedrock/version_1_7.png",
        funFact: "Did you know? This is the major update with the least amount of content in Minecraft history.",
        learnMore: "@Bedrock_Edition_1.7.0",
        mainFeatures: [{ text: "/scoreboard Command" }],
        minorFeatures: [
          {
            text: "Ability to eat food in Creative Mode and in Peaceful Difficulty"
          }
        ]
      },

      {
        subtitle: "1.8",
        description: "Pandas & Scaffolding",
        type: "major",
        date: "2018-12-11",
        icon: "/bedrock/version_1_8.png",
        learnMore: "@Bedrock_Edition_1.8.0",
        mainFeatures: [
          { text: "Pandas" },
          { text: "Scaffolding" },
          { text: "Bamboo" }
        ],
        minorFeatures: [
          { text: "Separated Cats from Ocelots" },
          { text: "More dyes" }
        ]
      },

      {
        subtitle: "1.9",
        description: "Many Walls, Slabs & Stairs",
        type: "major",
        date: "2019-02-05",
        icon: "/bedrock/version_1_9.png",
        learnMore: "@Bedrock_Edition_1.9.0",
        mainFeatures: [
          { text: "Walls, Slabs and Stairs of most rock types" },
          { text: "Signs of all wood types" },
          { text: "Added many Village & Pillage features as experimental" }
        ]
      },

      {
        subtitle: "1.10",
        description: "Looms, Lecterns & Shields",
        type: "major",
        date: "2019-03-19",
        icon: "/bedrock/version_1_10.png",
        learnMore: "@Bedrock_Edition_1.10.0",
        mainFeatures: [
          { text: "Looms" },
          { text: "Lecterns" },
          { text: "Shields" }
        ],
        minorFeatures: [
          { text: "Bark Blocks and Stripped Bark Blocks" },
          { text: "Added many Village & Pillage features as experimental" }
        ]
      },

      {
        title: "Village & Pillage",
        subtitle: "1.11",
        description: "Village Overhaul, New Textures & Bamboo Forests",
        type: "major",
        date: "2019-04-23",
        icon: "/bedrock/version_1_11.png",
        learnMore: "@Village_%26_Pillage",
        mainFeatures: [
          { text: "Village overhaul" },
          { text: "Pillagers" },
          { text: "Raids" },
          { text: "Updated all textures of the game" },
          { text: "Foxes" },
          { text: "Bamboo forests" }
        ],
        minorFeatures: [{ text: "New crafting stations" }]
      },

      {
        subtitle: "1.12",
        description: "Cameras Re-added",
        type: "major",
        date: "2019-07-09",
        icon: "/bedrock/version_1_12.png",
        learnMore: "@Bedrock_Edition_1.12.0",
        mainFeatures: [
          { text: "Cameras re-added" },
          { text: "New gamerules" }
        ],
        minorFeatures: [{ text: "Expanded addon functionality" }]
      },

      {
        subtitle: "1.13",
        description: "Foxes, Light Blocks & Character Creator",
        type: "major",
        date: "2019-10-29",
        icon: "/bedrock/version_1_13.png",
        learnMore: "@Bedrock_Edition_1.13.0",
        mainFeatures: [
          { text: "Foxes" },
          { text: "Brown mooshrooms" },
          { text: "Suspicious stew" },
          { text: "Wither roses" },
          { text: "Light blocks" },
          { text: "Character Creator" }
        ],
        minorFeatures: [
          { text: "Structure void" },
          { text: "Abandoned villages" },
          { text: "Game credits" }
        ]
      },

      {
        title: "Buzzy Bees",
        subtitle: "1.14",
        description: "Bees & PS4 Support",
        type: "major",
        date: "2019-12-10",
        icon: "/bedrock/version_1_14.png",
        learnMore: "@Buzzy_Bees",
        mainFeatures: [
          { text: "Bees" },
          { text: "Beehives" },
          { text: "Bee nests" },
          { text: "Honey bottles" },
          { text: "Honey blocks" },
          { text: "Honeycomb blocks" }
        ],
        minorFeatures: [
          { text: "The arrival of Bedrock Edition to the PS4" }
        ]
      },

      {
        title: "Nether Update",
        subtitle: "1.16",
        description: "Nether Overhaul & Netherite",
        type: "major",
        date: "2020-06-23",
        icon: "/bedrock/version_1_16.png",
        funFact: "Did you know? Netherite is the first new tool tier since diamonds (added 8 years ago).",
        learnMore: "@Nether_Update",
        mainFeatures: [
          { text: "Warped Forests" },
          { text: "Crimsom Forests" },
          { text: "Soulsand Valleys" },
          { text: "Piglins" },
          { text: "Hoglins" },
          { text: "Striders" },
          { text: "Many new Nether blocks" },
          { text: "Netherite" },
          { text: "Netherite tools & armor" }
        ],
        minorFeatures: [
          { text: "Zombie Pigmen are now Zombified Piglins" }
        ]
      },

      {
        title: "Caves & Cliffs pt. 1",
        subtitle: "1.17",
        description: "New Cave Blocks & Mobs",
        type: "major",
        date: "2021-06-08",
        icon: "/bedrock/version_1_17.png",
        funFact: "Did you know? Goats will target and ram all other mobs, including armor stands!",
        learnMore: "@Bedrock_Edition_1.17.0",
        mainFeatures: [
          { text: "Various cave plants" },
          { text: "Axolotls" },
          { text: "Glow squids" },
          { text: "Goats" },
          { text: "Copper" },
          { text: "Amethyst geodes" },
          { text: "Raw ore" },
          { text: "Candles" },
          { text: "More stone blocks" }
        ],
        minorFeatures: [
          { text: "Improved various textures" },
          { text: "Light block" },
          { text: "Powdered snow" }
        ]
      },

      {
        title: "Caves & Cliffs pt. 2",
        subtitle: "1.18",
        description: "Complete World Generation Overhaul",
        type: "major",
        date: "2021-11-30",
        icon: "/bedrock/version_1_18.png",
        funFact: "Did you know? For the first time, a Java Edition world seed generates the same world in Bedrock!\nCaves & Cliffs was split into two updates mainly due to the 2020 COVID-19 Pandemic.",
        learnMore: "@Bedrock_Edition_1.18.0",
        mainFeatures: [
          { text: "Completely overhauled world generation" },
          { text: "Added huge and complex cave systems" },
          { text: "Much more varied and extreme terrain generation" },
          { text: "Radically changed ore distribution" },
          { text: "Increased Overworld height limit 64 blocks downwards" }
        ],
        minorFeatures: [
          { text: "New overworld music by Lena Raine" },
          { text: "New \"Otherside\" music disc by Lena Raine" },
          { text: "Mobs spawn only in complete darkness (light level 0)" }
        ]
      },

      {
        title: "The Wild Update",
        subtitle: "1.19",
        description: "The Deep Dark & Mangrove Swamps",
        type: "major",
        date: "2022-06-07",
        icon: "/bedrock/version_1_19.png",
        funFact: "Did you know? The Deep Dark was meant to come during Caves & Cliffs, but Mojang couldn't finish it in time.",
        learnMore: "@Bedrock_Edition_1.19.0",
        mainFeatures: [
          { text: "The Deep Dark" },
          { text: "Ancient Cities" },
          { text: "The Warden" },
          { text: "Skulk Blocks" },
          { text: "Mangrove Swamps" },
          { text: "Frogs" },
          { text: "Allays" }
        ],
        minorFeatures: [
          { text: "Recovery Compasses" },
          { text: "Boats with Chests" }
        ]
      },

      {
        title: "Trails & Tales",
        subtitle: "1.20",
        description: "Archeology, Cherry Trees & Storytelling",
        type: "major",
        date: "2023-06-07",
        icon: "/bedrock/version_1_20.png",
        funFact: "Did you know? This update didn't get its name and theme revealed until well into the snapshots.",
        learnMore: "@Bedrock_Edition_1.20.0",
        mainFeatures: [
          { text: "Archeology Features" },
          { text: "Brushes and Suspicious Sand" },
          { text: "Ancient seeds and plants" },
          { text: "Pottery" },
          { text: "Camels" },
          { text: "Sniffers" },
          { text: "Cherry Trees" },
          { text: "Armor Trims" }
        ],
        minorFeatures: [
          { text: "More bamboo blocks and items" },
          { text: "Hanging Signs" }
        ]
      },

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
        title: "Tricky Trials",
        subtitle: "1.21.0",
        description: "Trial Chambers & Auto Crafting",
        type: "major",
        date: "2024-06-13",
        icon: "/bedrock/version_1_21.png",
        learnMore: "@Bedrock_Edition_1.21.0",
        mainFeatures: [
          { text: "Trial Chambers" },
          { text: "Auto Crafter Block" },
          { text: "Many New Copper Blocks" },
          { text: "The Breeze & Breeze Rods" },
          { text: "Mace Weapon" }
        ],
        minorFeatures: [
          { text: "Twenty new original paintings" },
          { text: "Six new Potion Effects" },
          { text: "Bogged Skeletons" },
          { text: "Ominous Bottles" }
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

      {
        subtitle: "1.21.101",
        type: "minor",
        date: "2025-08-13",
        learnMore: "@Bedrock_Edition_1.21.101",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.100",
        type: "minor",
        date: "2025-08-05",
        learnMore: "@Bedrock_Edition_1.21.100",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" },
          { text: "'The void' flat world preset" },
          { text: "Experimental features for The Copper Age game drop" },
        ]
      },

      {
        subtitle: "1.21.94",
        type: "minor",
        date: "2025-07-14",
        learnMore: "@Bedrock_Edition_1.21.94",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.93",
        type: "minor",
        date: "2025-07-03",
        learnMore: "@Bedrock_Edition_1.21.93",
        mainFeatures: [
          { text: "Small Changes and Bug Fixes" },
          { text: "A new music disc referencing A Minecraft Movie" },
        ]
      },

      {
        subtitle: "1.21.92",
        type: "minor",
        date: "2025-06-19",
        learnMore: "@Bedrock_Edition_1.21.92",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.91",
        type: "minor",
        date: "2025-06-18",
        learnMore: "@Bedrock_Edition_1.21.91",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.84",
        type: "minor",
        date: "2025-06-05",
        learnMore: "@Bedrock_Edition_1.21.84",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.82",
        type: "minor",
        date: "2025-05-19",
        learnMore: "@Bedrock_Edition_1.21.82",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.81",
        type: "minor",
        date: "2025-05-14",
        learnMore: "@Bedrock_Edition_1.21.81",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.80",
        type: "minor",
        date: "2025-05-06",
        learnMore: "@Bedrock_Edition_1.21.80",
        mainFeatures: [
          { text: "Flat world presets" },
          { text: "Experimental Vibrant Visuals" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.21.73",
        type: "minor",
        date: "2025-04-11",
        learnMore: "@Bedrock_Edition_1.21.73",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.72",
        type: "minor",
        date: "2025-04-08",
        learnMore: "@Bedrock_Edition_1.21.72",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.71",
        type: "minor",
        date: "2025-03-28",
        learnMore: "@Bedrock_Edition_1.21.71",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.62",
        type: "minor",
        date: "2025-02-25",
        learnMore: "@Bedrock_Edition_1.21.62",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.61",
        type: "minor",
        date: "2025-02-19",
        learnMore: "@Bedrock_Edition_1.21.61",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.60",
        type: "minor",
        date: "2025-02-11",
        learnMore: "@Bedrock_Edition_1.21.60",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.51",
        type: "minor",
        date: "2024-12-09",
        learnMore: "@Bedrock_Edition_1.21.51",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.44",
        type: "minor",
        date: "2024-10-31",
        learnMore: "@Bedrock_Edition_1.21.44",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.43",
        type: "minor",
        date: "2024-10-25",
        learnMore: "@Bedrock_Edition_1.21.43",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.42",
        type: "minor",
        date: "2024-10-23",
        learnMore: "@Bedrock_Edition_1.21.42",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.41",
        type: "minor",
        date: "2024-10-22",
        learnMore: "@Bedrock_Edition_1.21.41",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.31",
        type: "minor",
        date: "2024-09-30",
        learnMore: "@Bedrock_Edition_1.21.31",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.30",
        type: "minor",
        date: "2024-09-17",
        learnMore: "@Bedrock_Edition_1.21.30",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.23",
        type: "minor",
        date: "2024-09-03",
        learnMore: "@Bedrock_Edition_1.21.23",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.22",
        type: "minor",
        date: "2024-08-27",
        learnMore: "@Bedrock_Edition_1.21.22",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.21",
        type: "minor",
        date: "2024-08-20",
        learnMore: "@Bedrock_Edition_1.21.21",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.20",
        type: "minor",
        date: "2024-08-13",
        learnMore: "@Bedrock_Edition_1.21.20",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.3",
        type: "minor",
        date: "2024-07-15",
        learnMore: "@Bedrock_Edition_1.21.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.2",
        type: "minor",
        date: "2024-07-09",
        learnMore: "@Bedrock_Edition_1.21.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.21.1",
        type: "minor",
        date: "2024-06-20",
        learnMore: "@Bedrock_Edition_1.21.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.81",
        type: "minor",
        date: "2024-04-29",
        learnMore: "@Bedrock_Edition_1.20.81",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.73",
        type: "minor",
        date: "2024-04-01",
        learnMore: "@Bedrock_Edition_1.20.73",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.72",
        type: "minor",
        date: "2024-03-19",
        learnMore: "@Bedrock_Edition_1.20.72",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.71",
        type: "minor",
        date: "2024-03-12",
        learnMore: "@Bedrock_Edition_1.20.71",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.70",
        type: "minor",
        date: "2024-03-12",
        learnMore: "@Bedrock_Edition_1.20.70",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.62",
        type: "minor",
        date: "2024-02-15",
        learnMore: "@Bedrock_Edition_1.20.62",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.60",
        type: "minor",
        date: "2024-02-06",
        learnMore: "@Bedrock_Edition_1.20.60",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.51",
        type: "minor",
        date: "2023-12-14",
        learnMore: "@Bedrock_Edition_1.20.51",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.41",
        type: "minor",
        date: "2023-11-02",
        learnMore: "@Bedrock_Edition_1.20.41",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.40",
        type: "minor",
        date: "2023-10-24",
        learnMore: "@Bedrock_Edition_1.20.40",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.32",
        type: "minor",
        date: "2023-10-05",
        learnMore: "@Bedrock_Edition_1.20.32",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.31",
        type: "minor",
        date: "2023-09-26",
        learnMore: "@Bedrock_Edition_1.20.31",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.30",
        type: "minor",
        date: "2023-09-19",
        learnMore: "@Bedrock_Edition_1.20.30",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.15",
        type: "minor",
        date: "2023-08-16",
        learnMore: "@Bedrock_Edition_1.20.15",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.14",
        type: "minor",
        date: "2023-08-08",
        learnMore: "@Bedrock_Edition_1.20.14",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.13",
        type: "minor",
        date: "2023-07-24",
        learnMore: "@Bedrock_Edition_1.20.13",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.12",
        type: "minor",
        date: "2023-06-18",
        learnMore: "@Bedrock_Edition_1.20.12",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.10",
        type: "minor",
        date: "2023-07-11",
        learnMore: "@Bedrock_Edition_1.20.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.20.1",
        type: "minor",
        date: "2023-06-21",
        learnMore: "@Bedrock_Edition_1.20.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.83",
        type: "minor",
        date: "2023-05-17",
        learnMore: "@Bedrock_Edition_1.19.83",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.81",
        type: "minor",
        date: "2023-04-27",
        learnMore: "@Bedrock_Edition_1.19.81",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.80",
        type: "minor",
        date: "2023-04-26",
        learnMore: "@Bedrock_Edition_1.19.80",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.73",
        type: "minor",
        date: "2023-03-29",
        learnMore: "@Bedrock_Edition_1.19.73",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.72",
        type: "minor",
        date: "2023-03-20",
        learnMore: "@Bedrock_Edition_1.19.72",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.71",
        type: "minor",
        date: "2023-03-17",
        learnMore: "@Bedrock_Edition_1.19.71",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.70",
        type: "minor",
        date: "2023-03-14",
        learnMore: "@Bedrock_Edition_1.19.70",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.63",
        type: "minor",
        date: "2023-02-24",
        learnMore: "@Bedrock_Edition_1.19.63",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.62",
        type: "minor",
        date: "2023-02-16",
        learnMore: "@Bedrock_Edition_1.19.62",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.60",
        type: "minor",
        date: "2023-02-07",
        learnMore: "@Bedrock_Edition_1.19.60",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.51",
        type: "minor",
        date: "2022-12-13",
        learnMore: "@Bedrock_Edition_1.19.51",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.50",
        type: "minor",
        date: "2022-11-29",
        learnMore: "@Bedrock_Edition_1.19.50",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.41",
        type: "minor",
        date: "2022-11-03",
        learnMore: "@Bedrock_Edition_1.19.41",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.40",
        type: "minor",
        date: "2022-10-25",
        learnMore: "@Bedrock_Edition_1.19.40",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.31",
        type: "minor",
        date: "2022-10-04",
        learnMore: "@Bedrock_Edition_1.19.31",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.30",
        type: "minor",
        date: "2022-09-20",
        learnMore: "@Bedrock_Edition_1.19.30",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.22",
        type: "minor",
        date: "2022-09-01",
        learnMore: "@Bedrock_Edition_1.19.22",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.21",
        type: "minor",
        date: "2022-08-23",
        learnMore: "@Bedrock_Edition_1.19.21",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.20",
        type: "minor",
        date: "2022-08-09",
        learnMore: "@Bedrock_Edition_1.19.20",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.11",
        type: "minor",
        date: "2022-07-26",
        learnMore: "@Bedrock_Edition_1.19.11",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.10",
        type: "minor",
        date: "2022-07-12",
        learnMore: "@Bedrock_Edition_1.19.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.19.2",
        type: "minor",
        date: "2022-06-22",
        learnMore: "@Bedrock_Edition_1.19.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.33",
        type: "minor",
        date: "2022-05-13",
        learnMore: "@Bedrock_Edition_1.18.33",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.32",
        type: "minor",
        date: "2022-05-05",
        learnMore: "@Bedrock_Edition_1.18.32",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.31",
        type: "minor",
        date: "2022-04-27",
        learnMore: "@Bedrock_Edition_1.18.31",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.30",
        type: "minor",
        date: "2022-04-19",
        learnMore: "@Bedrock_Edition_1.18.30",
        mainFeatures: [
          { text: "Spectator mode" },
          { text: "Bigger world seeds" },
          { text: "Hunger, damage and armor fixes and rebalancing" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.18.12",
        type: "minor",
        date: "2022-02-16",
        learnMore: "@Bedrock_Edition_1.18.12",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.11",
        type: "minor",
        date: "2022-02-11",
        learnMore: "@Bedrock_Edition_1.18.11",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.10",
        type: "minor",
        date: "2022-02-08",
        learnMore: "@Bedrock_Edition_1.18.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.2",
        type: "minor",
        date: "2021-12-09",
        learnMore: "@Bedrock_Edition_1.18.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.18.1",
        type: "minor",
        date: "2021-12-02",
        learnMore: "@Bedrock_Edition_1.18.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.41",
        type: "minor",
        date: "2021-10-27",
        learnMore: "@Bedrock_Edition_1.17.41",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.40",
        type: "minor",
        date: "2021-10-19",
        learnMore: "@Bedrock_Edition_1.17.40",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.34",
        type: "minor",
        date: "2021-10-05",
        learnMore: "@Bedrock_Edition_1.17.34",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.33",
        type: "minor",
        date: "2021-10-04",
        learnMore: "@Bedrock_Edition_1.17.33",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.30",
        type: "minor",
        date: "2021-09-21",
        learnMore: "@Bedrock_Edition_1.17.30",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.11",
        type: "minor",
        date: "2021-08-09",
        learnMore: "@Bedrock_Edition_1.17.11",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.10",
        type: "minor",
        date: "2021-07-13",
        learnMore: "@Bedrock_Edition_1.17.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.2",
        type: "minor",
        date: "2021-06-22",
        learnMore: "@Bedrock_Edition_1.17.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.17.1",
        type: "minor",
        date: "2021-06-14",
        learnMore: "@Bedrock_Edition_1.17.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.221",
        type: "minor",
        funFact: "Did you know? This update marks the end of support for the Fire TV.",
        date: "2021-04-22",
        learnMore: "@Bedrock_Edition_1.16.221",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.220",
        type: "minor",
        date: "2021-04-06",
        learnMore: "@Bedrock_Edition_1.16.220",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.210",
        type: "minor",
        date: "2021-03-09",
        learnMore: "@Bedrock_Edition_1.16.210",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.201",
        type: "minor",
        funFact: "Did you know? This update marks the end of support for the Fire Phone.",
        date: "2020-12-15",
        learnMore: "@Bedrock_Edition_1.16.201",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.200",
        description: "Ray Tracing",
        type: "minor",
        date: "2020-12-08",
        learnMore: "@Bedrock_Edition_1.16.200",
        mainFeatures: [
          { text: "RenderDragon on Windows 10" },
          { text: "Ray tracing features on Windows 10" },
          { text: "Removed support for third-party shader packs" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.16.101",
        type: "minor",
        date: "2020-11-23",
        learnMore: "@Bedrock_Edition_1.16.101",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.100",
        description: "Many new commands",
        type: "minor",
        date: "2020-11-16",
        learnMore: "@Bedrock_Edition_1.16.100",
        mainFeatures: [
          { text: "Many new commands" },
          { text: "More parity with Java Edition" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.16.61",
        type: "minor",
        date: "2020-09-25",
        learnMore: "@Bedrock_Edition_1.16.61",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.60",
        type: "minor",
        date: "2020-09-23",
        learnMore: "@Bedrock_Edition_1.16.60",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.50",
        type: "minor",
        date: "2020-09-22T00:00:01",
        learnMore: "@Bedrock_Edition_1.16.50",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.42",
        type: "minor",
        date: "2020-09-22T00:00:00",
        learnMore: "@Bedrock_Edition_1.16.42",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.40",
        type: "minor",
        date: "2020-09-03",
        learnMore: "@Bedrock_Edition_1.16.40",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.21",
        type: "minor",
        date: "2020-08-20",
        learnMore: "@Bedrock_Edition_1.16.21",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.20",
        description: "Piglin Brutes",
        type: "minor",
        date: "2020-08-11",
        learnMore: "@Bedrock_Edition_1.16.20",
        mainFeatures: [
          { text: "Piglin Brutes" },
          { text: "Small Changes and Bug Fixes" }
        ]
      },

      {
        subtitle: "1.16.10",
        type: "minor",
        date: "2020-07-21",
        learnMore: "@Bedrock_Edition_1.16.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.1.04",
        type: "minor",
        date: "2020-07-16",
        learnMore: "@Bedrock_Edition_1.16.1.04",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.1.03",
        type: "minor",
        date: "2020-07-08",
        learnMore: "@Bedrock_Edition_1.16.1.03",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.16.1",
        type: "minor",
        date: "2020-06-29",
        learnMore: "@Bedrock_Edition_1.16.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.60",
        type: "minor",
        date: "2020-04-15",
        learnMore: "@Bedrock_Edition_1.14.60",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.41",
        type: "minor",
        date: "2020-03-03",
        learnMore: "@Bedrock_Edition_1.14.41",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.30",
        type: "minor",
        date: "2020-02-11",
        learnMore: "@Bedrock_Edition_1.14.30",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.20",
        type: "minor",
        date: "2020-01-28",
        learnMore: "@Bedrock_Edition_1.14.20",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.1",
        type: "minor",
        date: "2019-12-18",
        learnMore: "@Bedrock_Edition_1.14.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.14.0.12",
        type: "minor",
        date: "2019-12-13",
        learnMore: "@Bedrock_Edition_1.14.0.12",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.13.3",
        type: "minor",
        date: "2019-11-20",
        learnMore: "@Bedrock_Edition_1.13.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.13.2",
        type: "minor",
        date: "2019-11-14",
        learnMore: "@Bedrock_Edition_1.13.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.13.1",
        type: "minor",
        date: "2019-11-12",
        learnMore: "@Bedrock_Edition_1.13.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.12.1",
        type: "minor",
        date: "2019-09-02",
        learnMore: "@Bedrock_Edition_1.12.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.4",
        type: "minor",
        date: "2019-05-23",
        learnMore: "@Bedrock_Edition_1.11.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.3",
        type: "minor",
        date: "2019-05-17",
        learnMore: "@Bedrock_Edition_1.11.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.2",
        type: "minor",
        date: "2019-05-02",
        learnMore: "@Bedrock_Edition_1.11.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.11.1",
        type: "minor",
        date: "2019-04-26",
        learnMore: "@Bedrock_Edition_1.11.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.10.1",
        type: "minor",
        date: "2019-03-27",
        learnMore: "@Bedrock_Edition_1.10.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.8.1",
        type: "minor",
        date: "2019-01-08",
        learnMore: "@Bedrock_Edition_1.8.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.7.1",
        type: "minor",
        date: "2018-11-07",
        learnMore: "@Bedrock_Edition_1.7.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.6.2",
        type: "minor",
        date: "2018-10-01",
        learnMore: "@Bedrock_Edition_1.6.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.6.1",
        type: "minor",
        date: "2018-09-17",
        learnMore: "@Bedrock_Edition_1.6.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.5.3",
        type: "minor",
        date: "2018-08-07",
        learnMore: "@Bedrock_Edition_1.5.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.5.2",
        type: "minor",
        date: "2018-07-24",
        learnMore: "@Bedrock_Edition_1.5.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.5.1",
        type: "minor",
        date: "2018-07-20",
        learnMore: "@Bedrock_Edition_1.5.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.4",
        type: "minor",
        date: "2018-06-07",
        learnMore: "@Bedrock_Edition_1.4.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.3",
        type: "minor",
        date: "2018-06-05",
        learnMore: "@Bedrock_Edition_1.4.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.2",
        type: "minor",
        date: "2018-05-23",
        learnMore: "@Bedrock_Edition_1.4.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.4.1",
        type: "minor",
        date: "2018-05-17",
        learnMore: "@Bedrock_Edition_1.4.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.16",
        type: "minor",
        date: "2018-04-20",
        learnMore: "@Bedrock_Edition_1.2.16",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.15",
        type: "minor",
        date: "2018-04-12",
        learnMore: "@Bedrock_Edition_1.2.15",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.14",
        type: "minor",
        date: "2018-04-04",
        learnMore: "@Bedrock_Edition_1.2.14",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.13",
        type: "minor",
        date: "2018-04-03",
        learnMore: "@Bedrock_Edition_1.2.13",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.11",
        type: "minor",
        date: "2018-03-09",
        learnMore: "@Bedrock_Edition_1.2.11",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.10",
        type: "minor",
        date: "2018-02-07",
        learnMore: "@Bedrock_Edition_1.2.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.9",
        type: "minor",
        date: "2018-01-16",
        learnMore: "@Bedrock_Edition_1.2.9",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.8",
        type: "minor",
        date: "2017-12-18",
        learnMore: "@Bedrock_Edition_1.2.8",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.7",
        type: "minor",
        date: "2017-12-14",
        learnMore: "@Bedrock_Edition_1.2.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.6.1",
        type: "minor",
        date: "2017-12-07",
        learnMore: "@Bedrock_Edition_1.2.6.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.6",
        type: "minor",
        date: "2017-12-06",
        learnMore: "@Bedrock_Edition_1.2.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.5",
        type: "minor",
        date: "2017-11-21",
        learnMore: "@Bedrock_Edition_1.2.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.3",
        type: "minor",
        date: "2017-10-18",
        learnMore: "@Bedrock_Edition_1.2.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.2",
        type: "minor",
        date: "2017-10-04",
        learnMore: "@Bedrock_Edition_1.2.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "1.2.1",
        type: "minor",
        date: "2017-09-26",
        learnMore: "@Bedrock_Edition_1.2.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.7",
        type: "minor",
        date: "2017-09-15",
        learnMore: "@Pocket_Edition_1.1.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.5",
        type: "minor",
        date: "2017-08-03",
        learnMore: "@Pocket_Edition_1.1.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.4",
        type: "minor",
        date: "2017-07-19",
        learnMore: "@Pocket_Edition_1.1.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.3",
        type: "minor",
        date: "2017-07-06",
        learnMore: "@Pocket_Edition_1.1.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.2",
        type: "minor",
        date: "2017-06-23",
        learnMore: "@Pocket_Edition_1.1.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.1.1",
        type: "minor",
        date: "2017-06-20",
        learnMore: "@Pocket_Edition_1.1.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.9",
        type: "minor",
        date: "2017-05-18",
        learnMore: "@Pocket_Edition_1.0.9",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.8",
        type: "minor",
        date: "2017-05-04",
        learnMore: "@Pocket_Edition_1.0.8",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.7",
        type: "minor",
        date: "2017-04-20",
        learnMore: "@Pocket_Edition_1.0.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.6",
        type: "minor",
        date: "2017-04-11",
        learnMore: "@Pocket_Edition_1.0.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.5",
        type: "minor",
        date: "2017-03-28",
        learnMore: "@Pocket_Edition_1.0.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.4",
        type: "minor",
        date: "2017-03-09",
        learnMore: "@Pocket_Edition_1.0.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.3",
        type: "minor",
        date: "2017-02-08",
        learnMore: "@Pocket_Edition_1.0.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.2",
        type: "minor",
        date: "2017-01-19",
        learnMore: "@Pocket_Edition_1.0.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE 1.0.1",
        type: "minor",
        date: "2017-01-06",
        learnMore: "@Pocket_Edition_1.0.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.16.2",
        type: "minor",
        date: "2016-11-17",
        learnMore: "@Pocket_Edition_Alpha_0.16.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.16.1",
        type: "minor",
        date: "2016-11-05",
        learnMore: "@Pocket_Edition_Alpha_0.16.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.10",
        type: "minor",
        date: "2016-10-03",
        learnMore: "@Pocket_Edition_Alpha_0.15.10",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.9",
        type: "minor",
        date: "2016-09-22",
        learnMore: "@Pocket_Edition_Alpha_0.15.9",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.8",
        type: "minor",
        date: "2016-09-15",
        learnMore: "@Pocket_Edition_Alpha_0.15.8",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.7",
        type: "minor",
        date: "2016-08-31",
        learnMore: "@Pocket_Edition_Alpha_0.15.7",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.6",
        type: "minor",
        date: "2016-08-10",
        learnMore: "@Pocket_Edition_Alpha_0.15.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.4",
        type: "minor",
        date: "2016-07-28",
        learnMore: "@Pocket_Edition_Alpha_0.15.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.3",
        type: "minor",
        date: "2016-07-19",
        learnMore: "@Pocket_Edition_Alpha_0.15.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.2",
        type: "minor",
        date: "2016-07-07",
        learnMore: "@Pocket_Edition_Alpha_0.15.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.15.1",
        type: "minor",
        date: "2016-06-26",
        learnMore: "@Pocket_Edition_Alpha_0.15.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.14.3",
        type: "minor",
        date: "2016-05-18",
        learnMore: "@Pocket_Edition_Alpha_0.14.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.14.2",
        type: "minor",
        date: "2016-04-26",
        learnMore: "@Pocket_Edition_Alpha_0.14.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.14.1",
        type: "minor",
        date: "2016-04-05",
        learnMore: "@Pocket_Edition_Alpha_0.14.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.13.2",
        type: "minor",
        date: "2016-02-03",
        learnMore: "@Pocket_Edition_Alpha_0.13.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.13.1",
        type: "minor",
        date: "2015-12-16",
        learnMore: "@Pocket_Edition_Alpha_0.13.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.12.3",
        type: "minor",
        date: "2015-10-22",
        learnMore: "@Pocket_Edition_Alpha_0.12.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.12.2",
        type: "minor",
        date: "2015-10-11",
        learnMore: "@Pocket_Edition_Alpha_0.12.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.12.1",
        type: "minor",
        date: "2015-09-09",
        learnMore: "@Pocket_Edition_Alpha_0.12.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.12.0.1",
        type: "minor",
        date: "2015-08-11",
        learnMore: "@Pocket_Edition_Alpha_0.12.0.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.11.2",
        type: "minor",
        date: "2015-06-05",
        learnMore: "@Pocket_Edition_Alpha_0.11.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.11.1",
        type: "minor",
        date: "2015-06-04",
        learnMore: "@Pocket_Edition_Alpha_0.11.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.10.5",
        type: "minor",
        date: "2015-01-12",
        learnMore: "@Pocket_Edition_Alpha_0.10.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.10.4",
        type: "minor",
        date: "2014-11-24",
        learnMore: "@Pocket_Edition_Alpha_0.10.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.10.3",
        type: "minor",
        date: "2014-11-21",
        learnMore: "@Pocket_Edition_Alpha_0.10.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.10.2",
        type: "minor",
        date: "2014-11-20",
        learnMore: "@Pocket_Edition_Alpha_0.10.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.10.1",
        type: "minor",
        date: "2014-11-19",
        learnMore: "@Pocket_Edition_Alpha_0.10.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.9.5",
        type: "minor",
        date: "2014-07-24",
        learnMore: "@Pocket_Edition_Alpha_0.9.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.9.4",
        type: "minor",
        date: "2014-07-17",
        learnMore: "@Pocket_Edition_Alpha_0.9.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.9.3",
        type: "minor",
        date: "2014-07-16",
        learnMore: "@Pocket_Edition_Alpha_0.9.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.9.2",
        type: "minor",
        date: "2014-07-15",
        learnMore: "@Pocket_Edition_Alpha_0.9.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.9.1",
        type: "minor",
        date: "2014-07-11",
        learnMore: "@Pocket_Edition_Alpha_0.9.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.8.2",
        type: "minor",
        date: "2014-04-02",
        learnMore: "@Pocket_Edition_Alpha_0.8.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.8.1",
        type: "minor",
        date: "2013-12-19",
        learnMore: "@Pocket_Edition_Alpha_0.8.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.6",
        type: "minor",
        date: "2013-10-11",
        learnMore: "@Pocket_Edition_Alpha_0.7.6",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.5",
        type: "minor",
        date: "2013-09-04",
        learnMore: "@Pocket_Edition_Alpha_0.7.5",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.4",
        type: "minor",
        date: "2013-09-02",
        learnMore: "@Pocket_Edition_Alpha_0.7.4",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.3",
        type: "minor",
        date: "2013-08-15",
        learnMore: "@Pocket_Edition_Alpha_0.7.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.2",
        type: "minor",
        date: "2013-07-04",
        learnMore: "@Pocket_Edition_Alpha_0.7.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.7.1",
        type: "minor",
        date: "2013-06-07",
        learnMore: "@Pocket_Edition_Alpha_0.7.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.6.1",
        type: "minor",
        date: "2013-01-31",
        learnMore: "@Pocket_Edition_Alpha_0.6.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.4.0 rev 2",
        type: "minor",
        date: "2012-09-14",
        learnMore: "@Pocket_Edition_Alpha_0.4.0_rev_2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.3.3",
        type: "minor",
        date: "2012-08-09",
        learnMore: "@Pocket_Edition_Alpha_0.3.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.3.2",
        type: "minor",
        date: "2012-07-16",
        learnMore: "@Pocket_Edition_Alpha_0.3.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.2.2",
        type: "minor",
        date: "2012-03-18",
        learnMore: "@Pocket_Edition_Alpha_0.2.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.2.1 alpha 2",
        type: "minor",
        date: "2012-03-17",
        learnMore: "@Pocket_Edition_Alpha_0.2.1_alpha_2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.2.1",
        type: "minor",
        date: "2012-03-14",
        learnMore: "@Pocket_Edition_Alpha_0.2.1",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.1.3",
        type: "minor",
        date: "2011-12-03",
        learnMore: "@Pocket_Edition_Alpha_0.1.3",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.1.2",
        type: "minor",
        date: "2011-10-13",
        learnMore: "@Pocket_Edition_Alpha_0.1.2",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },

      {
        subtitle: "PE Alpha 0.1.1j",
        type: "minor",
        date: "2011-10-07",
        learnMore: "@Pocket_Edition_Alpha_0.1.1j",
        mainFeatures: [{ text: "Small Changes and Bug Fixes" }]
      },
      
      {
        title: "Mounts of Mayhem",
        subtitle: "1.21.130",
        date: "2025-12-09",
        type: "drop",
        icon: "/java/version_mounts_of_mayhem.png",
        funFact: "Did you know? The Zombie Horse was added in the game back in 2013 in java snapshot 13w16a.",
        learnMore: "@Mounts_of_Mayhem",
        mainFeatures: [
          { text: "Camel Horse" },
          { text: "Nautilus" },
          { text: "Parched" },
          { text: "Spear" },
          { text: "Zombie Nautilus" },
        ],
        minorFeatures: [
          { text: "Breath of the Nautilus" },
          { text: "Zombie Horse can now naturally spawn in survival" },
          { text: "Horses, Donkeys, Mules, Camels, Llamas and Trader Llamas no longer sinks in water while beeing riden."}
        ]
      }
    ],

    upcomings: [
    ]
  }
];
export default EDITIONS
