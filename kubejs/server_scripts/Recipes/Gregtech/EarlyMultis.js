ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:improved_primitive_blast_furnace'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:steel_rod',
        S: 'gtceu:steel_screw',
        P: 'gtceu:steel_plate',
        B: 'kubejs:high_steam_machine_casing',
        F: '#forge:tools/screwdrivers'
    }).id('start:shaped/improved_primitive_blast_furnace');
    event.shaped(Item.of('gtceu:steam_squasher'), [
        'CGC',
        'CLC',
        'CGC'
    ], {
        G: 'gtceu:wrought_iron_gear',
        C: 'gtceu:steam_machine_casing',
        L: 'gtceu:hp_steam_forge_hammer'
    }).id('start:shaped/steam_squasher');
    event.shaped(Item.of('gtceu:steam_assembler'), [
        'CGC',
        'CLC',
        'CGC'
    ], {
        G: 'gtceu:steel_gear',
        C: 'kubejs:high_steam_machine_casing',
        L: '#gtceu:circuits/ulv'
    }).id('start:shaped/steam_assembler');

    const id = name => `galaxies:blast_furnace/${name}`
    const coalType = ['coal','charcoal']

    const ironType = (FeType, baseTime, cokeScaler) => {
        const naming = FeType.split(':')[1]
        coalType.forEach(coal => {
            event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_${coal}_to_steel_dust`))
                .itemInputs(`${FeType}_ingot`,`2x gtceu:${coal}_dust`)
                .itemOutputs('gtceu:steel_ingot',`gtceu:tiny_dark_ash_dust`)
                .duration(baseTime); 

            event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_${coal}_to_steel`))
                .itemInputs(`${FeType}_ingot`,`2x minecraft:${coal}`)
                .itemOutputs('gtceu:steel_ingot',`gtceu:tiny_dark_ash_dust`)
                .duration(baseTime);  
        })

        event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_coal_to_steel_block`))
            .itemInputs(`${FeType}_block`,`2x minecraft:coal_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:dark_ash_dust`)
            .duration(baseTime*9);

        event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_charcoal_to_steel_block`))
            .itemInputs(`${FeType}_block`,`2x gtceu:charcoal_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:dark_ash_dust`)
            .duration(baseTime*9);

        event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_coke_to_steel_block`))
            .itemInputs(`${FeType}_block`,`gtceu:coke_block`)
            .itemOutputs('gtceu:steel_block',`gtceu:ash_dust`)
            .duration(baseTime*9*cokeScaler);
            
        event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_coke_to_steel_dust`))
            .itemInputs(`${FeType}_ingot`,`gtceu:coke_dust`)
            .itemOutputs('gtceu:steel_ingot',`gtceu:ash_dust`)
            .duration(baseTime*cokeScaler);

        event.recipes.gtceu.improved_primitive_blast_furnace(id(`${naming}_coke_to_steel`))
            .itemInputs(`${FeType}_ingot`,`gtceu:coke_gem`)
            .itemOutputs('gtceu:steel_ingot',`gtceu:ash_dust`)
            .duration(baseTime*cokeScaler);

    }
    ironType('minecraft:iron', 720, 5/6)
    ironType('gtceu:wrought_iron', 320, 3/4)

    event.shaped('gtceu:large_solar_boiler', [
        'CCC',
        'LWL',
        'PHP'
    ], {
        W: '#forge:tools/wrenches',
        C: 'gtceu:steam_machine_casing',
        L: '#gtceu:circuits/lv',
        P: 'gtceu:lv_electric_pump',
        H: '#forge:tools/hammers'
    }).id('start:shaped/large_solar_boiler');

    event.recipes.gtceu.large_solar_boiler(id('large_solar_boiler'))
        .inputFluids(Fluid.of('minecraft:water', 2500))
        .outputFluids(Fluid.of('gtceu:steam', 2500))
        .daytime()
        .duration(20);

    event.shaped('gtceu:mana_matic', [
        'PMP',
        'LCL',
        'WLH'
    ], {
        P: 'gtceu:livingrock_plate',
        M: 'botania:mana_pool',
        L: '#gtceu:circuits/mv',
        C: 'kubejs:mana_casing',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers'
    }).id('start:shaped/mana_matic');

    //Manapool recipes
    event.recipes.gtceu.mana_matic(id('mana_matic_manasteel'))
        .itemInputs('1x gtceu:steel_ingot')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:manasteel_ingot')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_powder'))
        .itemInputs('1x minecraft:glowstone_dust')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:mana_powder')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_pearl'))
        .itemInputs('1x minecraft:ender_pearl')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:mana_pearl')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_diamond'))
        .itemInputs('1x minecraft:diamond')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:mana_diamond')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_string'))
        .itemInputs('1x minecraft:string')
        .inputFluids(Fluid.of('blasmatech:mana', 72))
        .itemOutputs('1x botania:mana_string')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_quartz'))
        .itemInputs('1x minecraft:quartz')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:mana_quartz')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.mana_matic(id('mana_matic_mana_glass'))
        .itemInputs('1x minecraft:glass')
        .inputFluids(Fluid.of('blasmatech:mana', 144))
        .itemOutputs('1x botania:mana_glass')
        .duration(80)
        .EUt(16)
    //Mana Generattion
    event.shaped('gtceu:mana_convergence_chamber', [
        'PLP',
        'LUL',
        'SMS'
    ], {
        P: 'gtceu:manasteel_plate',
        L: '#gtceu:circuits/mv',
        U: 'botania:pump',
        S: 'botania:mana_spreader',
        M: 'gtceu:mv_electric_motor'
    }).id('start:shaped/mana_convergence_chamber')

    const leaveType = ['oak_leaves', 'spruce_leaves', 'birch_leaves', 'acacia_leaves', 'dark_oak_leaves', 'jungle_leaves', 'cherry_leaves', 'azalea_leaves']

    coalType.forEach(coal =>
    event.recipes.gtceu.mana_generation(id(`mana_generation_endoflame_${coal}`))
        .notConsumable('botania:endoflame')
        .itemInputs(`minecraft:${coal}`)
        .outputFluids(Fluid.of('blasmatech:mana', 144))
        .duration(40)
        .EUt(16)
    )
    event.recipes.gtceu.mana_generation(id('mana_generation_thermalily'))
        .notConsumable('botania:thermalily')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .outputFluids(Fluid.of('blasmatech:mana', 1000))
        .duration(200)
        .EUt(16)
    leaveType.forEach(leave =>
    event.recipes.gtceu.mana_generation(id(`mana_generation_munchdew_${leave}`))
        .notConsumable('botania:munchdew')
        .itemInputs(`minecraft:${leave}`)
        .outputFluids(Fluid.of('blasmatech:mana', 16))
        .duration(10)
        .EUt(16)
    )
});