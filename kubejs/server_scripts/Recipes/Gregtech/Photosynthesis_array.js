ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('photosynthesis_array')
        .itemInputs(['gtceu:lv_machine_hull', '4x #gtceu:circuits/mv', '2x gtceu:lv_robot_arm', 'gtceu:lv_electric_pump', 'minecraft:redstone_lamp', '2x gtceu:manasteel_screw'])
        .itemOutputs('gtceu:photosynthesis_array')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    let TreesOW = [
        'minecraft:oak',
        'minecraft:spruce',
        'minecraft:birch',
        'minecraft:jungle',
        'minecraft:acacia',
        'minecraft:dark_oak',
        'minecraft:cherry',
        'occultism:otherworld',
    ]

    TreesOW.forEach(tree => {
        event.recipes.gtceu.pa_trees(`${tree}_improved`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable(`1x minecraft:dirt`)
            .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
            .itemOutputs(`12x ${tree}_log`, '3x minecraft:stick')
            .chancedOutput(`3x ${tree}_log`, 5000, 0)
            .chancedOutput('1x minecraft:stick', 5000, 0)
            .chancedOutput(`${tree}_sapling`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.pa_trees(`${tree}_growth_sol`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable(`1x minecraft:dirt`)
            .inputFluids(['minecraft:water 50'])
            .itemOutputs(`24x ${tree}_log`, '6x minecraft:stick')
            .chancedOutput(`12x ${tree}_log`, 5000, 0)
            .chancedOutput('4x minecraft:stick', 5000, 0)
            .chancedOutput(`4x ${tree}_sapling`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
    })

    event.recipes.gtceu.pa_trees(`mangrove_improved`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
        .itemOutputs(`12x minecraft:mangrove_log`, '3x minecraft:mangrove_roots', '3x minecraft:stick')
        .chancedOutput(`3x minecraft:mangrove_log`, 5000, 0)
        .chancedOutput(`1x minecraft:mangrove_roots`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`minecraft:mangrove_propagule`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`mangrove_growth_sol`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['minecraft:water 50'])
        .itemOutputs(`24x minecraft:mangrove_log`, '3x minecraft:mangrove_roots', '3x minecraft:stick')
        .chancedOutput(`12x minecraft:mangrove_log`, 5000, 0)
        .chancedOutput(`1x minecraft:mangrove_roots`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`minecraft:mangrove_propagule`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`rubber_improved`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
        .itemOutputs(`3x gtceu:rubber_log`, '3x gtceu:sticky_resin', '3x minecraft:stick')
        .chancedOutput(`1x gtceu:rubber_log`, 5000, 0)
        .chancedOutput(`1x gtceu:sticky_resin`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`1x gtceu:rubber_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.pa_trees(`rubber_growth_sol`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['minecraft:water 50'])
        .itemOutputs(`16x gtceu:rubber_log`, '3x gtceu:sticky_resin', '3x minecraft:stick')
        .chancedOutput(`8x gtceu:rubber_log`, 5000, 0)
        .chancedOutput(`4x gtceu:sticky_resin`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`4x gtceu:rubber_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`menril_improved`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
        .itemOutputs(`3x integrateddynamics:menril_log`, '3x integrateddynamics:menril_berries', '3x minecraft:stick')
        .chancedOutput(`1x integrateddynamics:menril_log`, 5000, 0)
        .chancedOutput(`1x integrateddynamics:menril_berries`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`1x integrateddynamics:menril_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`menril_growth_solution`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['minecraft:water 50'])
        .itemOutputs(`12x integrateddynamics:menril_log`, '3x integrateddynamics:menril_berries', '3x minecraft:stick')
        .chancedOutput(`4x integrateddynamics:menril_log`, 5000, 0)
        .chancedOutput(`4x integrateddynamics:menril_berries`, 5000, 0)
        .chancedOutput('4x minecraft:stick', 5000, 0)
        .chancedOutput(`4x integrateddynamics:menril_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

     event.recipes.gtceu.pa_trees(`runewood_improved`)
        .notConsumable(`1x malum:runewood_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
        .itemOutputs(`3x malum:runewood_log`, 'malum:exposed_runewood_log', '3x minecraft:stick')
        .chancedOutput(`1x malum:runewood_log`, 5000, 0)
        .chancedOutput(`1x malum:exposed_runewood_log`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`1x malum:runewood_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`runewood_growth_solution`)
        .notConsumable(`1x malum:runewood_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['minecraft:water 50'])
        .itemOutputs(`12x malum:runewood_log`, '2x malum:exposed_runewood_log', '3x minecraft:stick')
        .chancedOutput(`4x malum:runewood_log`, 5000, 0)
        .chancedOutput(`1x malum:exposed_runewood_log`, 5000, 0)
        .chancedOutput('4x minecraft:stick', 5000, 0)
        .chancedOutput(`4x malum:runewood_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`soulwood_improved`)
        .notConsumable(`1x malum:soulwood_growth`)
        .notConsumable(`1x malum:blighted_soil`)
        .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
        .itemOutputs(`3x malum:soulwood_log`, 'malum:exposed_soulwood_log', '3x minecraft:stick')
        .chancedOutput(`1x malum:soulwood_log`, 5000, 0)
        .chancedOutput(`1x malum:exposed_soulwood_log`, 5000, 0)
        .chancedOutput('1x minecraft:stick', 5000, 0)
        .chancedOutput(`1x malum:soulwood_growth`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.recipes.gtceu.pa_trees(`soulwood_growth_solution`)
        .notConsumable(`1x malum:soulwood_growth`)
        .notConsumable(`1x malum:blighted_soil`)
        .inputFluids(['minecraft:water 50'])
        .itemOutputs(`12x malum:soulwood_log`, '2x malum:exposed_soulwood_log', '3x minecraft:stick')
        .chancedOutput(`4x malum:soulwood_log`, 5000, 0)
        .chancedOutput(`1x malum:exposed_soulwood_log`, 5000, 0)
        .chancedOutput('4x minecraft:stick', 5000, 0)
        .chancedOutput(`4x malum:soulwood_growth`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    

    let TreesFruit = [
    ]

    TreesFruit.forEach(tree => {
        event.recipes.gtceu.pa_trees(`${tree}_improved`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable(`1x minecraft:dirt`)
            .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
            .itemOutputs('12x minecraft:oak_log', `3x ${tree}`, '3x minecraft:stick')
            .chancedOutput(`3x minecraft:oak_log`, 5000, 0)
            .chancedOutput(`1x ${tree}`, 5000, 0)
            .chancedOutput('1x minecraft:stick', 5000, 0)
            .chancedOutput(`${tree}_sapling`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
    })
    let TreesArs = [
        'ars_nouveau:green_archwood',
        'ars_nouveau:purple_archwood',
        'ars_nouveau:red_archwood',
        'ars_nouveau:blue_archwood',
    ]
    let FruitsArs = [
        'ars_nouveau:mendosteen_pod',
        'ars_nouveau:bastion_pod',
        'ars_nouveau:bombegranate_pod',
        'ars_nouveau:frostaya_pod',
    ]

    TreesArs.forEach((tree, index) => {
        let fruit = FruitsArs[index]
        event.recipes.gtceu.pa_trees(`${tree}_improved`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable(`1x minecraft:dirt`)
            .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
            .itemOutputs(`12x ${tree}_log`, `3x ${fruit}`, '3x minecraft:stick')
            .chancedOutput(`3x ${tree}_log`, 5000, 0)
            .chancedOutput(`1x ${fruit}`, 5000, 0)
            .chancedOutput('1x minecraft:stick', 5000, 0)
            .chancedOutput(`${tree}_sapling`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
        event.recipes.gtceu.pa_trees(`${tree}_growth_solution`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable(`1x minecraft:dirt`)
            .inputFluids(['minecraft:water 50'])
            .itemOutputs(`24x ${tree}_log`, `3x ${fruit}`, '3x minecraft:stick')
            .chancedOutput(`12x ${tree}_log`, 5000, 0)
            .chancedOutput(`1x ${fruit}`, 5000, 0)
            .chancedOutput('1x minecraft:stick', 5000, 0)
            .chancedOutput(`${tree}_sapling`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
    })

    let FungiNE = [
        'minecraft:warped',
        'minecraft:crimson'
    ]

    FungiNE.forEach(tree => {
        event.recipes.gtceu.pa_trees(`${tree}_improved`)
            .notConsumable(`1x ${tree}_fungus`)
            .notConsumable(`1x ${tree}_nylium`)
            .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
            .itemOutputs(`12x ${tree}_stem`, '3x minecraft:shroomlight')
            .chancedOutput(`3x ${tree}_stem`, 5000, 0)
            .chancedOutput(`1x minecraft:shroomlight`, 5000, 0)
            .chancedOutput(`${tree}_fungus`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)

        event.recipes.gtceu.pa_trees(`${tree}_growth_solution`)
            .notConsumable(`1x ${tree}_fungus`)
            .notConsumable(`1x ${tree}_nylium`)
            .inputFluids(['minecraft:water 50'])
            .itemOutputs(`24x ${tree}_stem`, '3x minecraft:shroomlight')
            .chancedOutput(`12x ${tree}_stem`, 5000, 0)
            .chancedOutput(`1x minecraft:shroomlight`, 5000, 0)
            .chancedOutput(`4x ${tree}_fungus`, 500, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV] / 2)
    })

    let TreesAE = [
        'aether:golden_oak',
        'aether:skyroot'
    ]

    TreesAE.forEach(tree => {
        if (tree == 'aether:golden_oak') {
            event.recipes.gtceu.pa_trees(`${tree}_improved`)
                .notConsumable(`1x ${tree}_sapling`)
                .notConsumable('1x aether:enchanted_aether_grass_block')
                .inputFluids(['gtceu:nitrogen 50', 'gtceu:air 100'])
                .itemOutputs(`12x ${tree}_log`, '3x aether:golden_amber', '3x minecraft:stick')
                .chancedOutput(`3x ${tree}_log`, 5000, 0)
                .chancedOutput(`1x aether:golden_amber`, 5000, 0)
                .chancedOutput('1x minecraft:stick', 5000, 0)
                .chancedOutput(`${tree}_sapling`, 1000, 0)
                .duration(100)
                .EUt(GTValues.VA[GTValues.MV] / 2)
        } else {
            event.recipes.gtceu.pa_trees(`${tree}_reg`)
                .notConsumable(`1x ${tree}_sapling`)
                .notConsumable('1x aether:aether_dirt')
                .inputFluids(['minecraft:water 50'])
                .itemOutputs(`12x ${tree}_log`, '3x minecraft:stick')
                .chancedOutput(`2x ${tree}_log`, 5000, 0)
                .chancedOutput('2x minecraft:stick', 5000, 0)
                .chancedOutput(`${tree}_sapling`, 1000, 0)
                .duration(100)
                .EUt(GTValues.VA[GTValues.MV] / 2)
        }
    })
})