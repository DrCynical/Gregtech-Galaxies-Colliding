ServerEvents.recipes(event => {
    event.shaped('2x kubejs:high_steam_machine_casing', [
        'PHP',
        'PBP',
        'PWP'
    ], {
        P: 'gtceu:steel_plate',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches',
        B: 'gtceu:firebricks'
    }).id('start:shaped/high_steam_machine_casing');

    event.shaped('2x kubejs:mana_casing', [
        'PHP',
        'PBP',
        'PWP'
    ], {
        P: 'gtceu:manasteel_plate',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches',
        B: 'gtceu:steel_frame'
    }).id('start:shaped/mana_casing');
}) 