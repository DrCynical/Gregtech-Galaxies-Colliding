let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        console.log('[9] - [1] - TAG-WATCHER')
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.remove('forge:tools/knives', itemName)
        event.remove('forge:tools/scavenging', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)

    })
}
//Delightful Knives
yeet(/^(?!gtceu:)^(?!ae2:)([^:]+):(.*)knife$/);

//End Stove duplicate
yeet('ends_delight:end_stove');
ServerEvents.tags('item', event => {
    console.log('[9] - [2] - TAG-WATCHER')
    event.add('nethersdelight:tools/hunting_tools', /gtceu:(.*)knife$/)
    event.add('occultism:tools/knives', /gtceu:(.*)knife$/)
    event.add('farmersdelight:tools/knives', /gtceu:(.*)knife$/)
    event.add('forge:doughs', ['create:dough', 'delightful:nut_dough', 'farmersdelight:wheat_dough', 'festive_delight:gingerbread_dough'])
})

ServerEvents.recipes(event => {
    //Farmer's Delight

    event.remove({ id: 'jei:/moredelight/farmersdelight/cutting/bread_slice' })
    event.remove({ id: 'moredelight:farmersdelight/cutting/bread_slice' })
    event.remove({ output: 'farmersdelight:stove' })
    event.shaped('farmersdelight:stove', [
        'IGI',
        'BHB',
        'BCB'
    ], {
        I: 'gtceu:iron_plate',
        G: 'minecraft:iron_bars',
        B: 'gtceu:coke_oven_bricks',
        C: 'minecraft:campfire',
        H: '#forge:tools/hammers'
    })
    event.remove({ output: 'farmersdelight:cooking_pot' })
    event.shaped('farmersdelight:cooking_pot', [
        'BSB',
        'PHP',
        'PPP'
    ], {
        B: 'betterend:leather_wrapped_stick',
        S: 'minecraft:wooden_shovel',
        P: 'gtceu:iron_plate',
        H: '#forge:tools/hammers'
    })
    event.remove({ output: 'farmersdelight:skillet' })
    event.shaped('farmersdelight:skillet', [
        'HPP',
        'SPP',
        'BSD'
    ], {
        P: 'gtceu:iron_plate',
        B: 'gtceu:treated_wood_rod',
        S: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers',
        H: '#forge:tools/hammers'
    })
    event.remove({ output: 'farmersdelight:cutting_board' })
    event.shaped('farmersdelight:cutting_board', [
        'KS ',
        'PP ',
        '   '
    ], {
        K: '#forge:tools/knives',
        S: '#forge:tools/mallets',
        P: '#minecraft:wooden_slabs'
    })
    //Nether's Delight
    event.remove({ output: 'nethersdelight:blackstone_stove' })
    event.shaped('nethersdelight:blackstone_stove', [
        'IGI',
        'BHB',
        'BCB'
    ], {
        I: 'gtceu:iron_plate',
        G: 'minecraft:iron_bars',
        C: 'minecraft:soul_campfire',
        H: '#forge:tools/hammers',
        B: 'minecraft:polished_blackstone_bricks'
    })
    event.remove({ output: 'nethersdelight:blackstone_furnace' })
    event.shaped('nethersdelight:blackstone_furnace', [
        'BBB',
        'FFF',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        F: 'minecraft:flint'
    })
    event.remove({ output: 'nethersdelight:blackstone_blast_furnace' })
    event.shaped('nethersdelight:blackstone_blast_furnace', [
        'WFD',
        'PBP',
        'SPS'
    ], {
        P: '#forge:plates/iron',
        B: 'nethersdelight:blackstone_furnace',
        S: '#forge:screws/iron',
        W: '#forge:tools/wrenches',
        F: '#forge:tools/files',
        D: '#forge:tools/screwdrivers'
    })
})
    

//Cabinets, starting with the cabinet function
ServerEvents.recipes(event => {
    let cabinet = (outputCabinet, woodTrapdoor, woodSlab) => {
        event.remove({ output: outputCabinet })
        event.shaped(outputCabinet, [
            'SCS',
            'TDT',
            'SCS'
        ], {
            S: woodSlab,
            T: woodTrapdoor,
            C: 'gtceu:iron_screw',
            D: '#forge:tools/screwdrivers'
        })
    }

    cabinet('farmersdelight:oak_cabinet', 'minecraft:oak_trapdoor', 'minecraft:oak_slab')
    cabinet('farmersdelight:spruce_cabinet', 'minecraft:spruce_trapdoor', 'minecraft:spruce_slab')
    cabinet('farmersdelight:birch_cabinet', 'minecraft:birch_trapdoor', 'minecraft:birch_slab')
    cabinet('farmersdelight:jungle_cabinet', 'minecraft:jungle_trapdoor', 'minecraft:jungle_slab')
    cabinet('farmersdelight:acacia_cabinet', 'minecraft:acacia_trapdoor', 'minecraft:acacia_slab')
    cabinet('farmersdelight:dark_oak_cabinet', 'minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_slab')
    cabinet('farmersdelight:mangrove_cabinet', 'minecraft:mangrove_trapdoor', 'minecraft:mangrove_slab')
    cabinet('farmersdelight:cherry_cabinet', 'minecraft:cherry_trapdoor', 'minecraft:cherry_slab')
    cabinet('farmersdelight:bamboo_cabinet', 'minecraft:bamboo_trapdoor', 'minecraft:bamboo_slab')
    cabinet('farmersdelight:crimson_cabinet', 'minecraft:crimson_trapdoor', 'minecraft:crimson_slab')
    cabinet('farmersdelight:warped_cabinet', 'minecraft:warped_trapdoor', 'minecraft:warped_slab')

    event.remove({ output: 'delightful:quartz_cabinet' })
    event.shaped('delightful:quartz_cabinet', [
        'BHB',
        'QCQ',
        'QQQ'
    ], {
        B: 'minecraft:polished_blackstone_slab',
        C: '#farmersdelight:cabinets/wooden',
        H: '#forge:tools/hammers',
        Q: 'gtceu:nether_quartz_plate'
    })
    event.remove({ output: 'delightful:basalt_cabinet' })
    event.shaped('delightful:basalt_cabinet', [
        'BHB',
        'SCS',
        'SSS'
    ], {
        B: 'minecraft:polished_blackstone_slab',
        C: '#farmersdelight:cabinets/wooden',
        H: '#forge:tools/hammers',
        S: 'minecraft:basalt'
    })
})

ServerEvents.recipes(event => {
    event.remove({ output: '#nethersdelight:tools/machetes' })
    event.shaped('nethersdelight:iron_machete', [
        '  I',
        'FI ',
        'SH '
    ], {
        I: 'gtceu:iron_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.shaped('nethersdelight:golden_machete', [
        '  G',
        'FG ',
        'SH '
    ], {
        G: 'gtceu:gold_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.shaped('nethersdelight:diamond_machete', [
        '  D',
        'FD ',
        'SH '
    ], {
        D: 'gtceu:diamond_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        S: 'minecraft:stick'
    })
    event.smithing(
        'nethersdelight:netherite_machete',
        'minecraft:netherite_upgrade_smithing_template',
        'nethersdelight:diamond_machete',
        'minecraft:netherite_ingot'
    )
})

ServerEvents.recipes(event => {
    event.remove({ id: 'farmersdelight:canvas' })
    event.recipes.gtceu.compressor('gtceu:canvas_compress')
        .itemInputs('4x farmersdelight:straw')
        .itemOutputs('farmersdelight:canvas')
        .duration(50)
        .EUt(8)
})
ServerEvents.recipes(event => {
    event.remove({ id: 'farmersdelight:paper_from_tree_bark' })
    event.remove({ id: 'farmersdelight:painting_from_canvas' })
    event.remove({ id: 'farmersdelight:book_from_canvas' })

    event.remove({ id: 'create:campfire_cooking/bread' })
    event.remove({ id: 'create:crafting/curiosities/cake' })
    event.remove({ id: 'farmersdelight:cutting/pufferfish' })
})

// Misc food-related recipes
ServerEvents.recipes(event => {
    event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'crabbersdelight:shrimp' }
		],
		tool: { tag: 'forge:tools/knives' },
		result: [
		  { item: 'oceanic_delight:shrimp_slices', count: 2 }
		]
	}).id('galaxies:shrimp_cutting')
})