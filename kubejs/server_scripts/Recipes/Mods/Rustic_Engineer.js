ServerEvents.recipes(event => {
    event.remove({output:'rustic_engineer:wooden_cube_sleep'})
    event.remove({output:'rustic_engineer:spider_mech_item'})
    event.remove({output:'rustic_engineer:air_ship_item'})
    event.remove({output:'rustic_engineer:dragonfly_item'})
    event.remove({output:'rustic_engineer:abyssal_submarine_item'})
    event.remove({output:'rustic_engineer:repair_tool'})
    event.remove({output:'rustic_engineer:clock_key'})
    event.remove({output:'rustic_engineer:gear'})
    event.remove({output:'rustic_engineer:movable_parts'})
    event.remove({output:'rustic_engineer:engine'})
    event.remove({output:'rustic_engineer:iron_pieces'})
    event.remove({output:'rustic_engineer:iron_plate'})
    event.remove({output:'rustic_engineer:rustic_hammer'})
    event.remove({output:'rustic_engineer:wooden_box'})
    event.remove({output:'rustic_engineer:rustic_glider_chestplate'})
    event.remove({output:'rustic_engineer:speed_booster'})
    event.remove({output:'rustic_engineer:rustic_glider_speed_chestplate'})
    event.remove({output:'rustic_engineer:rustic_goggles_helmet'})
    event.remove({output:'rustic_engineer:hammerer'})
})
let yeet = (itemName) => {
ServerEvents.tags('item', event => {
    console.log('[2] - [1] - TAG-WATCHER')
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}
yeet('rustic_engineer:rustic_hammer')
yeet('rustic_engineer:rustic_goggles_helmet')
yeet('rustic_engineer:hammerer')
yeet('rustic_engineer:iron_plate')
yeet('rustic_engineer:iron_pieces')
yeet('rustic_engineer:gear')
yeet('rustic_engineer:repair_tool')
yeet('rustic_engineer:movable_parts')
yeet('rustic_engineer:engine')

ServerEvents.recipes(event => {
    event.shaped('rustic_engineer:wooden_cube_sleep', [
        'PUP',
        'WGH',
        'PSP'
    ],{
        P: 'gtceu:wood_plate',
        U: 'gtceu:vacuum_tube',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers',
        G: 'gtceu:iron_gear',
        S: 'gtceu:iron_screw',
    })

    event.shaped('rustic_engineer:spider_mech_item', [
        'PLP',
        'WBH',
        'AAA'
    ],{
        P: 'gtceu:steel_plate',
        L: 'gtceu:vacuum_tube',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers',
        B: 'rustic_engineer:book_spidermech',
        A: 'gtceu:lv_robot_arm',
    })

    event.shaped('rustic_engineer:air_ship_item', [
        'SUS',
        'WBH',
        'PPP'
    ],{
        P: 'gtceu:steel_plate',
        U: 'gtceu:vacuum_tube',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers',
        B: 'rustic_engineer:book_airship',
        S: 'minecraft:paper',
    })

    event.shaped('rustic_engineer:dragonfly_item', [
        'PLP',
        'WBH',
        'SMS'
    ],{
        P: 'gtceu:steel_plate',
        L: 'gtceu:vacuum_tube',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers',
        B: 'rustic_engineer:book_dragon_fly',
        S: 'minecraft:paper',
        M: 'gtceu:lv_electric_motor'
    })

    event.shaped('rustic_engineer:abyssal_submarine_item', [
        'GGG',
        'WBH',
        'PMP'
    ],{
        P: 'gtceu:steel_plate',
        G: '#forge:glass',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers',
        B: 'rustic_engineer:book_abyssal_submarine',
        M: 'gtceu:lv_electric_motor',
    })

    event.shaped('rustic_engineer:clock_key', [
        'PGP',
        'WRS',
        ' R '
    ],{
        P: 'gtceu:iron_plate',
        G: 'gtceu:small_iron_gear',
        W: '#forge:tools/wrenches',
        S: '#forge:tools/screwdrivers',
        R: 'gtceu:iron_rod',
    })

    event.shaped('rustic_engineer:wooden_box', [
        'SPS',
        'PPP',
        'SPS'
    ],{
        P: 'gtceu:wood_plate',
        S: 'gtceu:iron_screw',
    })

    event.shaped('rustic_engineer:rustic_glider_chestplate', [
        'WUW',
        'PGP',
        'SAS'
    ],{
        P: 'gtceu:wrought_iron_plate',
        W: '#minecraft:wool',
        G: 'gtceu:wrought_iron_gear',
        A: '#forge:tools/wrenches',
        S: 'gtceu:wrought_iron_screw',
        U: 'gtceu:vacuum_tube',
    })

    event.recipes.gtceu.assembler('speed_boost')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:steel_screw', '2x gtceu:lv_electric_motor', 'gtceu:basic_electronic_circuit')
        .inputFluids(Fluid.of('gtceu:gold', 144))
        .itemOutputs('1x rustic_engineer:speed_booster')
        .duration(500)
        .EUt(16)
    event.recipes.gtceu.assembler('glider_speed_boost')
        .itemInputs('4x rustic_engineer:speed_booster', '2x gtceu:source_imbued_steel_plate', '1x rustic_engineer:rustic_glider_chestplate')
        .itemOutputs('1x rustic_engineer:rustic_glider_speed_chestplate')
        .duration(700)
        .EUt(30)
})