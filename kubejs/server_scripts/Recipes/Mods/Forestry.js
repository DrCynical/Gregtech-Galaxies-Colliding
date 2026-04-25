ServerEvents.recipes(event => {
    event.replaceInput({id: 'forestry:miner_bag'}, 'minecraft:iron_ingot', 'gtceu:wrought_iron_plate')
    event.replaceInput({id: 'forestry:digger_bag'}, '#forge:chests/wooden', 'gtceu:wood_crate')
})

let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.remove('forge:tools/hammers', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

yeet('forestry:ingot_bronze')
yeet('forestry:ingot_tin')
yeet('forestry:apatite')
yeet('forestry:gear_copper')
yeet('forestry:gear_tin')
yeet('forestry:gear_bronze')
yeet('forestry:circuit_board_basic')
yeet('forestry:circuit_board_enhanced')
yeet('forestry:circuit_board_refined')
yeet('forestry:woven_silk')
yeet('forestry:charcoal')

//Machines
yeet('forestry:still')
yeet('forestry:engine_peat')
yeet('forestry:engine_biogas')
yeet('forestry:engine_clockwork')
yeet('forestry:bottler')
yeet('forestry:carpenter')
yeet('forestry:centrifuge')
yeet('forestry:fermenter')
yeet('forestry:moistener')
yeet('forestry:squeezer')
yeet('forestry:fabricator')

//Ores
yeet('forestry:tin_ore')
yeet('forestry:deepslate_tin_ore')
yeet('forestry:apatite_ore')
yeet('forestry:deepslate_apatite_ore')
yeet('forestry:raw_tin_block')
yeet('forestry:raw_tin')
yeet('forestry:resource_storage_tin')
yeet('forestry:resource_storage_apatite')
yeet('forestry:resource_storage_bronze')

//Tools
yeet('forestry:adventurer_bag')
yeet('forestry:adventurer_bag_woven')
yeet('forestry:broken_bronze_pickaxe')
yeet('forestry:broken_bronze_shovel')
yeet('forestry:bronze_pickaxe')
yeet('forestry:bronze_shovel')
yeet('forestry:kit_pickaxe')
yeet('forestry:kit_shovel')
yeet('forestry:wrench')
yeet('forestry:pipette')
yeet('forestry:carton')

//Crates
yeet('forestry:crate')
yeet(/forestry:crated_/) //all crated items

//Singleblock farms (both types)
yeet(/forestry:arboretum_/)
yeet(/forestry:peat_bog_/)
yeet(/forestry:farm_mushroom_/)
yeet(/forestry:farm_nether_/)
yeet(/forestry:farm_crops_/)
yeet(/forestry:farm_ender_/)
yeet(/forestry:farm_gourd_/)

//Casings
yeet('forestry:impregnated_casing') 
yeet('forestry:sturdy_machine')
yeet('forestry:hardened_machine')
yeet('forestry:flexible_casing')

//Buckets
yeet('forestry:bucket_seed_oil')
yeet('forestry:bucket_ice')
yeet('forestry:bucket_biomass')
yeet('forestry:bucket_bio_ethanol')
yeet('forestry:bucket_glass')
yeet('forestry:bucket_honey')
yeet('forestry:bucket_short_mead')
yeet('forestry:bucket_juice')

//A better Versionf YEET that will erase entire collections of blocks/items including any stray recipes or tags.

ServerEvents.tags('item', event => {
    event.remove('forge:raw_materials/tin', 'forestry:raw_tin')
    event.remove('forge:ingots/bronze', 'forestry:ingot_bronze')
    event.remove('forge:ingots/tin', 'forestry:ingot_tin')
    event.remove('forge:storage_blocks/tin', 'forestry:resource_storage_tin')
    event.remove('forge:storage_blocks/apatite', 'forestry:resource_storage_apatite')
    event.remove('forge:storage_blocks/bronze', 'forestry:resource_storage_bronze')
    event.remove('forge:gems/apatite', 'forestry:apatite')

    event.remove('forge:gears/copper', 'forestry:gear_copper')
    event.remove('forge:gears/tin', 'forestry:gear_tin')
    event.remove('forge:gears/bronze', 'forestry:gear_bronze')

    event.add('c:hidden_from_recipe_viewers', 'forestry:ingot_bronze')
    event.add('c:hidden_from_recipe_viewers', 'forestry:ingot_tin')
    event.add('c:hidden_from_recipe_viewers', 'forestry:apatite')

    event.add('c:hidden_from_recipe_viewers', 'forestry:can')
    event.add('c:hidden_from_recipe_viewers', 'forestry:capsule')
    event.add('c:hidden_from_recipe_viewers', 'forestry:refractory')

})

ServerEvents.tags('fluid', event => {
    //Forestry fluids
    event.add('c:hidden_from_recipe_viewers', 'forestry:seed_oil')
    event.add('c:hidden_from_recipe_viewers', 'forestry:ice')
    event.add('c:hidden_from_recipe_viewers', 'forestry:biomass')
    event.add('c:hidden_from_recipe_viewers', 'forestry:bio_ethanol')
    event.add('c:hidden_from_recipe_viewers', 'forestry:glass')
    event.add('c:hidden_from_recipe_viewers', 'forestry:honey')
    event.add('c:hidden_from_recipe_viewers', 'forestry:short_mead')
    event.add('c:hidden_from_recipe_viewers', 'forestry:juice')
})


ServerEvents.recipes(event => {

    event.remove({ type: 'forestry:still' })
    event.remove({ type: 'forestry:engine_peat' })
    event.remove({ type: 'forestry:engine_biogas' })
    event.remove({ type: 'forestry:engine_clockwork' })
    event.remove({ type: 'forestry:bottler' })
    event.remove({ type: 'forestry:carpenter' })
    event.remove({ type: 'forestry:fabricator' })
    event.remove({ type: 'forestry:centrifuge' })
    event.remove({ type: 'forestry:fermenter' })
    event.remove({ type: 'forestry:moistener' })
    event.remove({ type: 'forestry:squeezer' })
    event.remove({ mod: 'gendustry' })

    //Bee products

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_mellow')
        .itemInputs('forestry:bee_comb_mellow')
        .chancedOutput('forestry:honeydew', 6000, 0)
        .chancedOutput('minecraft:quartz', 2000, 0)
        .chancedOutput('forestry:beeswax', 3000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_regular_bee')
        .itemInputs('forestry:bee_comb_honey')
        .chancedOutput('forestry:beeswax', 10000, 0)
        .chancedOutput('forestry:honey_drop', 9000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_cocoa')
        .itemInputs('forestry:bee_comb_cocoa')
        .chancedOutput('forestry:beeswax', 10000, 0)
        .chancedOutput('minecraft:cocoa_beans', 5000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_simmering')
        .itemInputs('forestry:bee_comb_simmering')
        .itemOutputs('forestry:refractory_wax')
        .chancedOutput('forestry:honey_drop', 7000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_stringy')
        .itemInputs('forestry:bee_comb_stringy')
        .itemOutputs('forestry:propolis_normal')
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_frozen')
        .itemInputs('forestry:bee_comb_frozen')
        .chancedOutput('forestry:beeswax', 8000, 0)
        .chancedOutput('forestry:honey_drop', 7000, 0)
        .chancedOutput('minecraft:snowball', 4000, 0)
        .chancedOutput('forestry:pollen_cluster_crystalline', 2000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_dripping')
        .itemInputs('forestry:bee_comb_dripping')
        .itemOutputs('forestry:honeydew')
        .chancedOutput('forestry:honey_drop', 4000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.centrifuge('galaxies:comb_centrifuge_silky')
        .itemInputs('forestry:bee_comb_silky')
        .itemOutputs('forestry:honey_drop')
        .chancedOutput('forestry:propolis_silky', 8000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);
        
    event.recipes.gtceu.centrifuge('forestry:propolis_silky')
        .itemInputs('forestry:propolis_silky')
        .chancedOutput('forestry:silk_wisp', 6000, 0)
        .chancedOutput('forestry:propolis_normal', 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);
})
