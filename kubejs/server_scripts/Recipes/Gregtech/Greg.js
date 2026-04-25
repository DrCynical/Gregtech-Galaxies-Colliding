ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:firebrick' })
    event.recipes.gtceu.alloy_smelter('firebrick_masonry')
        .itemInputs('gtceu:compressed_fireclay')
        .itemInputs('gtceu:coal_dust')
        .itemOutputs('gtceu:firebrick')
        .duration(10)
        .EUt(8);
    event.recipes.gtceu.alloy_smelter('firebrick_masonry_ch')
        .itemInputs('gtceu:compressed_fireclay')
        .itemInputs('gtceu:charcoal_dust')
        .itemOutputs('gtceu:firebrick')
        .duration(10)
        .EUt(8);

    //LV Machine Casing
    event.remove({ output: 'gtceu:lv_machine_casing' })
    event.shaped('gtceu:lv_machine_casing', [
        'PSP',
        'SHS',
        'PSP'
    ], {
        P: 'gtceu:steel_plate',
        S: 'gtceu:source_imbued_steel_plate',
        H: '#forge:tools/hammers'
    });
    event.recipes.gtceu.assembler('gtceu:lv_machine_casing')
        .itemInputs('4x gtceu:steel_plate')
        .itemInputs('4x gtceu:source_imbued_steel_plate')
        .itemOutputs('gtceu:lv_machine_casing')
        .duration(50)
        .EUt(12);
    event.replaceInput({id:'gtceu:shaped/lv_machine_hull'}, 'gtceu:steel_plate', 'gtceu:source_imbued_steel_plate')
    //MV Machine Casing
    event.remove({ output: 'gtceu:mv_machine_casing' })
    event.shaped('gtceu:mv_machine_casing', [
        'PSP',
        'SHS',
        'PSP'
    ], {
        P: 'gtceu:aluminium_plate',
        S: 'gtceu:manalium_plate',
        H: '#forge:tools/hammers'
    });
    event.recipes.gtceu.assembler('gtceu:mv_machine_casing')
        .itemInputs('4x gtceu:aluminium_plate')
        .itemInputs('4x gtceu:manalium_plate')
        .itemOutputs('gtceu:mv_machine_casing')
        .duration(50)
        .EUt(16);
    event.replaceInput({id:'gtceu:shaped/mv_machine_hull'}, 'gtceu:aluminium_plate', 'gtceu:manalium_plate')

    event.recipes.gtceu.assembler('kubejs:solar_sheet_block')
        .itemInputs('9x kubejs:solar_sheet')
        .inputFluids(Fluid.of('gtceu:tin', 1296))
        .itemOutputs('kubejs:solar_sheet_block')
        .duration(300)
        .EUt(8);
    event.recipes.gtceu.assembler('kubejs:solar_sheet')
        .itemInputs('3x gtceu:double_silver_plate')
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('kubejs:solar_sheet')
        .duration(100)
        .EUt(4);
     
})