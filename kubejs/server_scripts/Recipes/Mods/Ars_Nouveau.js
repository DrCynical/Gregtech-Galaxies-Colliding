ServerEvents.recipes(event => {
  
    event.remove({id:'delightful:integration/ars_nouveau/cutting/magebloom'})
    event.remove({ output: 'ars_nouveau:archwood_chest' })
    event.remove({ output: 'arseng:source_cell_housing' })

    event.shaped('ars_nouveau:archwood_chest', [
        'ABA',
        'BRB',
        'ABA'
    ],
        {
            A: '#forge:logs/archwood',
            B: '#forge:planks/archwood',
            R: 'minecraft:flint',
        }
    )

    //LV Material
    event.recipes.ars_nouveau.imbuement(
        'gtceu:steel_ingot',
        'gtceu:source_imbued_steel_ingot',
        1000,
        []
    )

    //Sourcestone
    event.remove({ output: 'ars_nouveau:sourcestone' })
    event.recipes.gtceu.assembler('ars_nouveau:sourcestone')
        .itemInputs('1x ars_nouveau:source_gem')
        .itemInputs('8x minecraft:stone')
        .itemOutputs('8x ars_nouveau:sourcestone')
        .duration(120)
        .EUt(20);

    
    //Fiber Recipes
    event.remove({ id: 'ars_nouveau:magebloom_fiber' })
    event.recipes.gtceu.wiremill('ars_nouveau:magebloom_fiber')
        .itemInputs('ars_nouveau:magebloom')
        .itemOutputs('ars_nouveau:magebloom_fiber')
        .duration(60)
        .EUt(4);
    //Spooling Recipes

    event.remove({ output: 'ars_nouveau:blank_thread' })
    event.recipes.gtceu.assembler('ars_nouveau:blank_thread')
        .itemInputs('4x ars_nouveau:magebloom_fiber')
        .itemInputs('gtceu:gold_rod')
        .itemOutputs('ars_nouveau:blank_thread')
        .duration(120)
        .EUt(4);

    //Magic Stations
    event.remove({ id: 'ars_nouveau:arcane_core' })
    event.shaped('ars_nouveau:arcane_core', [
        'ACA',
        'BDB',
        'AAA'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:infused_gold_plate',
            C: 'gtceu:infused_gold_rod',
            D: 'ars_nouveau:source_gem',
        }
    )
    event.remove({ id: 'ars_nouveau:wilden_summon_alt' })
    event.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    event.recipes.gtceu.assembler('ars_nouveau:enchanting_apparatus')
        .itemInputs('2x ars_nouveau:sourcestone', '4x gtceu:infused_gold_nugget', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:enchanting_apparatus')
        .duration(600)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:agronomic_sourcelink' })
    event.recipes.gtceu.assembler('ars_nouveau:agronomic_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', '1x minecraft:wheat', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:agronomic_sourcelink')
        .duration(300)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:volcanic_sourcelink' })
    event.recipes.gtceu.assembler('ars_nouveau:volcanic_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', '2x gtceu:infused_gold_plate')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .itemOutputs('ars_nouveau:volcanic_sourcelink')
        .duration(300)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:alchemical_sourcelink' })
    event.recipes.gtceu.assembler('ars_nouveau:alchemical_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', '1x minecraft:brewing_stand', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:alchemical_sourcelink')
        .duration(300)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:vitalic_sourcelink' })
    event.recipes.gtceu.assembler('ars_nouveau:vitalic_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', '1x minecraft:glistering_melon_slice', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:vitalic_sourcelink')
        .duration(300)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:mycelial_sourcelink' })
    event.recipes.gtceu.assembler('ars_nouveau:mycelial_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', '1x minecraft:mushroom_stew', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:mycelial_sourcelink')
        .duration(300)
        .EUt(4);
    
    event.remove({ id: 'ars_nouveau:ritual_brazier' })
    event.recipes.gtceu.assembler('ars_nouveau:ritual_brazier')
        .itemInputs('2x ars_nouveau:source_gem', '1x ars_nouveau:arcane_pedestal', '2x gtceu:infused_gold_plate')
        .itemOutputs('ars_nouveau:ritual_brazier')
        .duration(300)
        .EUt(4);

    event.remove({ id: 'ars_nouveau:arcane_pedestal' })
    event.shaped('ars_nouveau:arcane_pedestal', [
        'BAB',
        'CBC',
        'CBC'
    ],
        {
            A: 'ars_nouveau:source_gem',
            C: 'gtceu:infused_gold_nugget',
            B: 'ars_nouveau:sourcestone',
        }
    )
    event.remove({ id: 'ars_nouveau:basic_spell_turret' })
    event.shaped('ars_nouveau:basic_spell_turret', [
        'BCB',
        'CAC',
        'BCB'
    ],
        {
            A: 'minecraft:redstone_block',
            C: 'gtceu:infused_gold_plate',
            B: 'ars_nouveau:source_gem',
        }
    )
    event.remove({ id: 'ars_nouveau:spell_prism' })
    event.shaped('ars_nouveau:spell_prism', [
        'BCB',
        'CAC',
        'BCB'
    ],
        {
            A: '#forge:storage_blocks/quartz',
            C: 'ars_nouveau:archwood_planks',
            B: 'gtceu:infused_gold_plate',
        }
    )
    event.remove({ id: 'ars_nouveau:magelight_torch' })
    event.shaped('ars_nouveau:magelight_torch', [
        'BCB',
        ' B ',
        '   '
    ],
        {
            C: 'ars_nouveau:source_gem',
            B: 'gtceu:infused_gold_nugget',
        }
    )
    event.remove({ id: 'ars_nouveau:redstone_relay' })
    event.shaped('ars_nouveau:redstone_relay', [
        'BCB',
        'BAB',
        'BCB'
    ],
        {
            A: 'ars_nouveau:source_gem_block',
            C: 'minecraft:redstone',
            B: 'gtceu:infused_gold_plate',
        }
    )
    event.remove({ id: 'ars_nouveau:scribes_table' })
    event.shaped('ars_nouveau:scribes_table', [
        'AAA',
        'C C',
        'B B'
    ],
        {
            A: 'ars_nouveau:archwood_slab',
            C: 'gtceu:infused_gold_nugget',
            B: '#forge:logs/archwood',
        }
    )
    event.remove({ id: 'ars_nouveau:source_jar' })
    event.shaped('ars_nouveau:source_jar', [
        'CBC',
        'A A',
        'CCC'
    ],
        {
            A: '#forge:glass',
            B: 'gtceu:infused_gold_plate',
            C: 'ars_nouveau:archwood_slab',
        }
    )
    event.remove({ id: 'ars_nouveau:relay' })
    event.shaped('ars_nouveau:relay', [
        'A A',
        'ABA',
        'A A'
    ],
        {
            A: 'gtceu:infused_gold_rod',
            B: 'ars_nouveau:source_gem_block',
        }
    )
    event.shaped('ars_nouveau:relay_splitter', [
        'AGA',
        'ABA',
        'AGA'
    ],
        {
            A: 'gtceu:infused_gold_rod',
            B: 'ars_nouveau:source_gem_block',
            G: 'gtceu:glass_plate'
        }
    )
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.shaped('ars_nouveau:imbuement_chamber', [
        'ARA',
        'A A',
        'ARA'
    ], {
        A: 'ars_nouveau:archwood_planks',
        R: 'gtceu:infused_gold_plate'
    }
    )

    event.remove({ output: 'ars_nouveau:void_jar' })
    event.shaped('ars_nouveau:void_jar', [
        'PHP',
        'GLG',
        'EGE'
    ], {
        P: 'gtceu:steel_plate',
        H: '#forge:tools/hammers',
        G: '#forge:glass',
        L: 'minecraft:lava_bucket',
        E: '#forge:ender_pearls'
    })

    event.replaceOutput({mod: 'gtceu'}, 'gtceu:source_gem', 'ars_nouveau:source_gem')
})