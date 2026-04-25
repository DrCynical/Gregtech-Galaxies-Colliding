ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('menril_infused_alloy_dust_in_mixer')
       .itemInputs('gtceu:tin_dust', 'gtceu:gold_dust')
       .inputFluids(Fluid.of('integrateddynamics:menril_resin', 144))
       .itemOutputs('3x gtceu:menril_infused_alloy_dust')
       .duration(200)
       .EUt(24);


    event.remove({output: "integrateddynamics:drying_basin"})
    event.remove({output: "integrateddynamics:squeezer"})
    event.remove({output: "integrateddynamics:mechanical_drying_basin"})
    event.remove({output: "integrateddynamics:mechanical_squeezer"})
    event.remove({output: "integrateddynamics:crystalized_menril_chunk"})
    event.remove({output: "integrateddynamics:menril_resin"})
    event.remove({output: "integratedterminals:terminal_storage_portable"})
    event.remove({output: "integratedterminals:part_terminal_crafting_job"})
    event.recipes.gtceu.extractor('extract_menril_resin')
        .itemInputs('integrateddynamics:menril_log')
        .outputFluids(Fluid.of('integrateddynamics:menril_resin', 1000))
        .duration(100)
        .EUt(24);

    event.remove({output: "integratedterminals:menril_glass"})
    event.recipes.gtceu.fluid_solidifier('solidify_menril_glass')
        .itemInputs('minecraft:glass')
        .inputFluids(Fluid.of('integrateddynamics:menril_resin', 1000))
        .itemOutputs('integratedterminals:menril_glass')
        .duration(200)
        .EUt(17);

    event.remove({output: "integrateddynamics:crystalized_menril_block"})
    event.recipes.gtceu.fluid_solidifier('solidify_menril_block')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids(Fluid.of('integrateddynamics:menril_resin', 1000))
        .itemOutputs('integrateddynamics:crystalized_menril_block')
        .duration(200)
        .EUt(17);

    event.remove({output: "integratedterminals:part_terminal_storage"})
    event.recipes.gtceu.assembler('integratedterminals:part_terminal_storage_from_assembler')
        .itemInputs('3x gtceu:menril_infused_alloy_plate', '1x integrateddynamics:part_display_panel', '1x integratedterminals:menril_glass', '1x integrateddynamics:variable_transformer_output', '1x integrateddynamics:variable_transformer_input', '1x #gtceu:circuits/mv')
        .itemOutputs('integratedterminals:part_terminal_storage')
        .duration(300)
        .EUt(30);

    event.remove({output: "integrateddynamics:part_display_panel"})
    event.recipes.gtceu.assembler('integrateddynamics:part_display_panel_from_assembler')
        .itemInputs('2x gtceu:menril_infused_alloy_plate', '2x integrateddynamics:part_static_light_panel', '1x integrateddynamics:variable_transformer_output', '1x integrateddynamics:variable_transformer_input')
        .itemOutputs('1x integrateddynamics:part_display_panel')
        .duration(100)
        .EUt(12);

    event.remove({output: "integrateddynamics:part_static_light_panel"})
    event.recipes.gtceu.assembler('integrateddynamics:part_static_light_panel_from_assembler')
        .itemInputs('3x gtceu:menril_infused_alloy_plate', '1x integrateddynamics:variable_transformer_output')
        .inputFluids(Fluid.of('gtceu:red_alloy', 16))
        .itemOutputs('2x integrateddynamics:part_static_light_panel')
        .duration(100)
        .EUt(12);

    event.remove({output: "integrateddynamics:variable_transformer_input"})
    event.recipes.gtceu.assembler('integrateddynamics:variable_transformer_input_from_assembler')
        .itemInputs('2x gtceu:menril_infused_alloy_plate', '1x minecraft:piston', '2x integrateddynamics:variable')
        .itemOutputs('4x integrateddynamics:variable_transformer_input')
        .duration(100)
        .EUt(24);

    event.remove({output: "integrateddynamics:variable_transformer_output"})
    event.recipes.gtceu.assembler('integrateddynamics:variable_transformer_output_from_assembler')
        .itemInputs('2x gtceu:menril_infused_alloy_plate', '1x minecraft:sticky_piston', '2x integrateddynamics:variable')
        .itemOutputs('4x integrateddynamics:variable_transformer_output')
        .duration(100)
        .EUt(24);

    event.remove({output: "integrateddynamics:variable"})
    event.shaped('integrateddynamics:variable', [
        ' R ',
        'RCR', 
        ' R '
    ], {
        R: 'gtceu:menril_infused_alloy_rod',
        C: 'minecraft:paper'
    });

    event.remove({output: "integrateddynamics:cable"})
    event.shaped('integrateddynamics:cable', [
        'CCC',
        'WUH',
        '   '
    ], {
        C: 'gtceu:menril_infused_alloy_plate',
        U: 'gtceu:menril_infused_alloy_rod',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    })
    event.recipes.gtceu.assembler('integrateddynamics:cable_from_assembler')
        .itemInputs('3x gtceu:menril_infused_alloy_plate', '1x gtceu:menril_infused_alloy_rod')
        .itemOutputs('2x integrateddynamics:cable')
        .duration(100)
        .EUt(24);

    event.remove({output: "integratedtunnels:part_interface_item"})
    event.recipes.gtceu.assembler('integratedtunnels:part_interface_item_from_assembler')
        .itemInputs('3x gtceu:menril_infused_alloy_plate', '2x gtceu:menril_infused_alloy_rod', '1x gtceu:vacuum_tube')
        .itemOutputs('2x integratedtunnels:part_interface_item')
        .duration(140)
        .EUt(64);
    event.shaped('integratedtunnels:part_interface_item', [
        'RUR',
        'CAC',
        'WCH'
    ], {
        C: 'gtceu:menril_infused_alloy_plate',
        R: 'gtceu:menril_infused_alloy_rod',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches',
        A: '#forge:chests/wooden',
        U: '#gtceu:circuits/ulv'
    })
})