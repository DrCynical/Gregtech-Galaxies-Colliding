ServerEvents.recipes(event => {
    event.remove({output: "minecraft:wooden_sword"})
    event.remove({output: "minecraft:wooden_shovel"})
    event.remove({output: "minecraft:wooden_pickaxe"})
    event.remove({output: "minecraft:wooden_axe"})
    event.remove({output: "minecraft:wooden_hoe"})
    event.remove({output: "minecraft:stone_sword"})
    event.remove({output: "minecraft:stone_shovel"})
    event.remove({output: "minecraft:stone_pickaxe"})
    event.remove({output: "minecraft:stone_axe"})
    event.remove({output: "minecraft:stone_hoe"})
    event.remove({output: "minecraft:paper"})
    event.remove({mod: 'quark', output: "minecraft:furnace"})
    event.remove({mod: 'quark', output: "minecraft:chest"})
    event.remove({input: "aether:skyroot_planks"})
    event.remove({output: "minecraft:barrel"})
    event.remove({output: "#minecraft:signs"})
    event.remove({output: "quark:blackstone_furnace"})
    event.remove({output: "quark:deepslate_furnace"})
    event.remove({mod: 'quark', output: "minecraft:blast_furnace"})
    event.remove({output: "nethersdelight:blackstone_furnace"})
    event.remove({output: "nethersdelight:blackstone_blast_furnace"})
    event.remove({output: "nethersdelight:nether_brick_smoker"})
    event.remove({output: "ad_astra:etrionic_blast_furnace"})
    event.remove({output: "ad_astra:steel_ingot"})
    event.remove({output: "ad_astra:steel_block"})
    event.remove({output: "ad_astra:steel_nugget"})
    event.remove({output: "ad_astra:steel_rod"})
    event.remove({output: "ad_astra:steel_plate"})
    event.remove({output: "ad_astra:steel_cable"})
    event.remove({id: "terralith:dispenser_alt"})
    event.remove({id: "terralith:dropper_alt"})
    event.remove({id: "terralith:observer_alt"})
    event.remove({id: "terralith:piston_alt"})
    event.remove({id: "quark:tweaks/crafting/utility/misc/easy_hopper"})
    event.remove({output: "ad_astra:iron_plate"})
    event.remove({output: "ad_astra:iron_rod"})
    event.remove({output: "ad_astra:desh_ingot"})
    event.remove({output: "twilightforest:uncrafting_table"})
    event.remove({id: "quark:tweaks/crafting/utility/misc/repeater"})
    event.remove({id: "tcintegrations:bronze_ingots_from_block"})
    event.remove({id: "tcintegrations:bronze_nuggets_from_ingot"})
    event.remove({id: "tcintegrations:bronze_ingot_from_nuggets"})
})

let DONOTEXIST = ['minecraft:wooden_sword', 'minecraft:wooden_shovel', 'minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_hoe',
    'minecraft:stone_sword', 'minecraft:stone_shovel', 'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_hoe', 'netherdelight:blackstone_furnace', 'nethersdelight:blackstone_blast_furnace', 'nethersdelight:nether_brick_smoker', 'ad_astra:etrionic_blast_furnace',
    'ad_astra:steel_ingot', 'ad_astra:steel_block', 'ad_astra:steel_nugget', 'ad_astra:steel_rod', 'ad_astra:steel_plate', 'ad_astra:steel_cable', 'ad_astra:iron_plate', 'ad_astra:iron_rod', 'twilightforest:uncrafting_table', 'quark:blackstone_furnace', 'quark:deepslate_furnace',
    'integrateddynamics:squeezer', 'integrateddynamics:drying_basin', 'integrateddynamics:mechanical_squeezer', 'integrateddynamics:mechanical_drying_basin', 'tcintegrations:bronze_ingot', 'tcintegrations:bronze_block', 'forestry:resource_storage_bronze',
    'tcintegrations:bronze_nugget'
];

ServerEvents.tags('item', event => {
  console.log('[16] - [1] - TAG-WATCHER')
  event.add('forge:viewers/hidden_from_recipe', DONOTEXIST)
  event.add('c:hidden_from_recipe_viewers', DONOTEXIST)
});