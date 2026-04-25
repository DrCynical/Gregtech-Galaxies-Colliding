ServerEvents.recipes(event => {

    event.shaped(
        Item.of('ae2:controller', 1), 
        [
            'CDC',
            'DAD', 
            'CDC'
        ],
        {
            A: 'gtceu:ev_machine_hull',
            C: 'gtceu:titanium_plate',
            D: 'ae2:engineering_processor'
        }
    )

    event.shaped(
        Item.of('ae2:drive', 1), 
        [
            'CDC',
            'BAB', 
            'CDC'
        ],
        {
            A: 'gtceu:titanium_frame',
            B: 'ae2:engineering_processor',
            C: 'gtceu:titanium_plate',
            D: 'ae2:fluix_glass_cable'
        }
    )

    event.recipes.gtceu
        .wiremill('kubejs:quartz_fiber') 
        .itemInputs('gtceu:nether_quartz_dust')
        .itemOutputs('1x ae2:quartz_fiber')
        .duration(20)                                 
        .EUt(32)

    event.recipes.gtceu
        .wiremill('kubejs:cable_anchor') 
        .itemInputs('gtceu:iron_plate')
        .itemOutputs('8x ae2:cable_anchor')
        .duration(20)                                 
        .EUt(32)

    event.recipes.gtceu
        .assembler('kubejs:fluix_cable') 
        .itemInputs('ae2:quartz_fiber', '2x ae2:fluix_crystal')
        .itemOutputs('2x ae2:fluix_glass_cable')
        .duration(100)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:rubber 288')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable_scr') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_cable_sbr') 
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:styrene_butadiene_rubber 36')
        .itemOutputs('1x ae2:fluix_covered_cable')
        .duration(50)                                 
        .EUt(480)

    //

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:rubber 576')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable_scr') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:silicone_rubber 144')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_covered_dense_cable_sbr') 
        .itemInputs('4x ae2:fluix_covered_cable')
        .inputFluids('gtceu:styrene_butadiene_rubber 72')
        .itemOutputs('1x ae2:fluix_covered_dense_cable')
        .duration(50)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_smart_cable') 
        .itemInputs('8x ae2:fluix_covered_cable', '#gtceu:circuits/mv')
        .itemOutputs('8x ae2:fluix_smart_cable')
        .duration(200)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:fluix_smart_dense_cable') 
        .itemInputs('3x ae2:fluix_covered_dense_cable', '2x #gtceu:circuits/hv')
        .itemOutputs('3x ae2:fluix_smart_dense_cable')
        .duration(200)                                 
        .EUt(480)

    event.shaped(
        Item.of('ae2:interface', 1), 
        [
            ' D ',
            'BAC', 
            ' E '
        ],
        {
            A: 'gtceu:titanium_frame',
            B: 'ae2:formation_core',
            C: 'ae2:annihilation_core',
            D: 'gtceu:ev_electric_pump',
            E: 'gtceu:ev_electric_piston'
        }
    )

    event.shaped(
        Item.of('ae2:me_p2p_tunnel', 2), 
        [
            ' A ',
            'ABA', 
            'CCC'
        ],
        {
            A: 'gtceu:titanium_plate',
            B: 'ae2:engineering_processor',
            C: 'ae2:fluix_crystal',
        }
    )


    event.recipes.gtceu
        .assembler('kubejs:storage_bus') 
        .itemInputs('ae2:interface', 'gtceu:ev_conveyor_module', 'minecraft:chest')
        .itemOutputs('ae2:storage_bus')
        .duration(100)                                 
        .EUt(30)

    event.shaped(
        Item.of('ae2:energy_acceptor', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'gtceu:ev_machine_hull',
            B: 'gtceu:ev_voltage_coil',
            E: 'ae2:fluix_glass_cable'
        }
    )

    event.shaped(
        Item.of('ae2:import_bus', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'ae2:annihilation_core',
            B: 'gtceu:ev_electric_piston',
            E: 'gtceu:ev_electric_pump'
        }
    )

    event.shaped(
        Item.of('ae2:export_bus', 1), 
        [
            ' B ',
            ' A ', 
            ' E '
        ],
        {
            A: 'ae2:formation_core',
            B: 'gtceu:ev_electric_piston',
            E: 'gtceu:ev_electric_pump'
        }
    )

    event.shapeless(
        Item.of('ae2:cable_interface', 1),
        [
            'ae2:interface',
            'ae2:cable_anchor'
        ]
    )

    event.shapeless(
        Item.of('ae2:toggle_bus', 1),
        [
            'ae2:cable_anchor',
            'ae2:level_emitter',
            'ae2:calculation_processor'
        ]
    )
    event.shapeless(
        Item.of('ae2:inverted_toggle_bus', 1),
        [
            'ae2:toggle_bus',
        ]
    )

    event.shapeless(
        Item.of('ae2:level_emitter', 1),
        [
            'minecraft:redstone_torch',
            'ae2:calculation_processor'
        ]
    )

    event.shapeless(
        Item.of('ae2:energy_level_emitter', 1),
        [
            'ae2:fluix_crystal',
            'ae2:level_emitter'
        ]
    )

});

ServerEvents.recipes(event => {

    event.remove({mod: 'ae2'})


    function make_base_circuit(name, mat, foil_mat)
    {
        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:plastic_printed_circuit_board', '8x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480) 

        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_epoxy')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:epoxy_printed_circuit_board', '4x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('2x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480) 

        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_fiber')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:fiber_reinforced_printed_circuit_board', '2x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('4x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(480)
            
        event.recipes.gtceu
            .forming_press('kubejs:' + name + 'circuit_multifiber')   // recipe ID
            .itemInputs('gtceu:' + mat + '_plate', 'gtceu:multilayer_fiber_reinforced_printed_circuit_board', '1x gtceu:'+ foil_mat + '_foil')
            .itemOutputs('8x ae2:' + name)
            .duration(150)                                 // in ticks
            .EUt(4096)
    }

    function make_processor(name, circuit_tier, bolt_mat)
    {
        event.recipes.gtceu.circuit_assembler("kubejs:" + name)
            .itemInputs("2x ae2:printed_" + name, "1x #gtceu:circuits/" + circuit_tier, "4x gtceu:ram_chip", '4x gtceu:' + bolt_mat + '_bolt', 'ae2:printed_silicon')
            .itemOutputs("2x ae2:" + name)
            .inputFluids("#forge:soldering_alloy 144")
            .duration(20*10) 
            .EUt(480)
            .cleanroom(CleanroomType.CLEANROOM)
    }

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon')   
            .itemInputs('gtceu:silicon_plate' , '16x gtceu:copper_foil', 'gtceu:plastic_printed_circuit_board')
            .itemOutputs('ae2:printed_silicon')
            .duration(50)                              
            .EUt(480) 

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_epoxy')  
            .itemInputs('gtceu:silicon_plate' , '8x gtceu:copper_foil', 'gtceu:epoxy_printed_circuit_board')
            .itemOutputs('2x ae2:printed_silicon')
            .duration(50)                              
            .EUt(480) 

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_fiber') 
            .itemInputs('gtceu:silicon_plate' , '4x gtceu:copper_foil', 'gtceu:fiber_reinforced_printed_circuit_board')
            .itemOutputs('4x ae2:printed_silicon')
            .duration(50)                                 
            .EUt(480)

    event.recipes.gtceu
            .forming_press('kubejs:printed_silicon_multifiber')  
            .itemInputs('gtceu:silicon_plate' , '2x gtceu:copper_foil', 'gtceu:multilayer_fiber_reinforced_printed_circuit_board')
            .itemOutputs('8x ae2:printed_silicon')
            .duration(50)                                 
            .EUt(4096)

    event.recipes.gtceu
        .autoclave('kubejs:fluix')  
        .itemInputs('ae2:fluix_dust')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('ae2:fluix_crystal')
        .duration(20 * 25)                                 
        .EUt(480)

    event.recipes.gtceu
        .autoclave('kubejs:fluix_merc')  
        .itemInputs('ae2:fluix_dust')
        .inputFluids('gtceu:mercury 250')
        .itemOutputs('1x ae2:fluix_crystal')
        .duration(20 * 5)                                 
        .EUt(400)

    event.recipes.gtceu
        .macerator('kubejs:fluix_crush')  
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('1x ae2:fluix_dust')
        .duration(20)                                 
        .EUt(8)

    make_base_circuit('printed_calculation_processor', 'certus_quartz', 'signalum')
    make_base_circuit('printed_logic_processor', 'cobalt_brass', 'lumium')
    make_base_circuit('printed_engineering_processor', 'blue_steel', 'enderium')

    make_processor('calculation_processor', 'mv', 'manalium')
    make_processor('logic_processor', 'hv', 'stainless_steel') 
    make_processor('engineering_processor', 'ev', 'titanium')

    event.shaped(
        Item.of('ae2:formation_core', 2), 
        [
            ' D ',
            'BAC',
            ' D '
        ],
        {
            A: 'ae2:logic_processor',
            B: 'gtceu:glowstone_plate',  
            C: 'ae2:fluix_dust',
            D: 'gtceu:certus_quartz_plate'
        }
    )

    event.shaped(
        Item.of('ae2:annihilation_core', 2), 
        [
            ' D ',
            'BAC', 
            ' D '
        ],
        {
            A: 'ae2:logic_processor',
            B: 'gtceu:redstone_plate', 
            C: 'ae2:fluix_dust',
            D: 'gtceu:nether_quartz_plate'
        }
    )

    event.shaped(
        Item.of('ae2:item_cell_housing', 1), 
        [
            'CDC',
            'DAD', 
            '   '
        ],
        {
            A: 'ae2:fluix_crystal',
            C: 'ae2:quartz_glass',
            D: 'gtceu:titanium_plate'
        }
    )

    event.shaped(
        Item.of('ae2:fluid_cell_housing', 1), 
        [
            'CDC',
            'DAD', 
            '   '
        ],
        {
            A: 'ae2:fluix_crystal',
            C: 'ae2:quartz_glass',
            D: 'gtceu:polyvinyl_chloride_plate'
        }
    )

    event.shaped(
        Item.of('ae2:basic_card', 1), 
        [
            'CD ',
            'BAD', 
            'CD '
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'gtceu:fine_red_alloy_wire',
            C: 'gtceu:fine_gold_wire',
            D: 'gtceu:aluminium_plate'
        }
    )

    event.shapeless(
        Item.of('ae2:redstone_card', 1),
        [
            'ae2:basic_card',
            'gtceu:redstone_plate'
        ]
    )

    event.shapeless(
        Item.of('ae2:capacity_card', 1),
        [
            'ae2:basic_card',
            'gtceu:ram_chip'
        ]
    )

    event.shapeless(
        Item.of('ae2:void_card', 1),
        [
            'ae2:basic_card',
            'gtceu:obsidian_plate',
            'ae2:calculation_processor'
        ]
    )

    event.shapeless(
        Item.of('ae2:fuzzy_card', 1),
        [
            'ae2:advanced_card',
            'gtceu:lv_robot_arm',
        ]
    )

    event.shapeless(
        Item.of('ae2:inverter_card', 1),
        [
            'ae2:advanced_card',
            'minecraft:redstone_torch',
        ]
    )

    event.recipes.gtceu
        .assembler('kubejs:acceleration_card')  
        .itemInputs('2x ae2:advanced_card', 'ae2:calculation_processor', 'ae2:fluix_crystal')
        .itemOutputs('2x ae2:speed_card')
        .duration(40)                                 
        .EUt(1925)

    event.recipes.gtceu
        .assembler('kubejs:crafting_card')  
        .itemInputs('2x ae2:advanced_card', '2x ae2:engineering_processor', 'ae2:fluix_crystal', '4x gtceu:ram_chip')
        .itemOutputs('ae2:crafting_card')
        .duration(200)                                 
        .EUt(8192)

    event.recipes.gtceu
        .assembler('kubejs:equal_distribution_card')  
        .itemInputs('1x ae2:advanced_card', '1x ae2:logic_processor')
        .itemOutputs('ae2:equal_distribution_card')
        .duration(40)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:energy_card')  
        .itemInputs('1x ae2:advanced_card', '1x ae2:dense_energy_cell')
        .itemOutputs('ae2:energy_card')
        .duration(40)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:energy_cell')  
        .itemInputs('1x ae2:calculation_processor', '8x ae2:fluix_dust', 'gtceu:ev_machine_casing')
        .itemOutputs('ae2:energy_cell')
        .duration(40)                                 
        .EUt(1920)

    event.recipes.gtceu
        .assembler('kubejs:dense_energy_cell')  
        .itemInputs('1x ae2:engineering_processor', '8x ae2:energy_cell', 'gtceu:iv_machine_casing')
        .itemOutputs('ae2:dense_energy_cell')
        .duration(40)                                 
        .EUt(1920)

    event.shaped(
        Item.of('ae2:advanced_card', 1), 
        [
            'CD ',
            'BAD', 
            'CD '
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'gtceu:fine_red_alloy_wire',
            C: 'gtceu:fine_lumium_wire',
            D: 'gtceu:aluminium_plate'
        }
    )


    event.recipes.gtceu
        .assembler('kubejs:1k_component')  
        .itemInputs('ae2:calculation_processor', '8x gtceu:fine_ambrosalloy_wire', '3x ae2:quartz_glass', '2x #gtceu:circuits/lv')
        .itemOutputs('1x ae2:cell_component_1k')
        .duration(100)                                 
        .EUt(30)

    event.recipes.gtceu
        .assembler('kubejs:4k_component')  
        .itemInputs('ae2:logic_processor', '8x gtceu:fine_ambrosalloy_wire', '3x ae2:cell_component_1k', '2x #gtceu:circuits/mv')
        .itemOutputs('1x ae2:cell_component_4k')
        .duration(300)                                 
        .EUt(120)

    event.recipes.gtceu
        .assembler('kubejs:16k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_lumium_wire', '3x ae2:cell_component_4k', '2x #gtceu:circuits/hv')
        .itemOutputs('1x ae2:cell_component_16k')
        .duration(300)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:64k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_lumium_wire', '3x ae2:cell_component_16k', '2x #gtceu:circuits/ev')
        .itemOutputs('1x ae2:cell_component_64k')
        .duration(300)                                 
        .EUt(480)

    event.recipes.gtceu
        .assembler('kubejs:256k_component')  
        .itemInputs('ae2:engineering_processor', '8x gtceu:fine_enderium_wire', '3x ae2:cell_component_64k', '2x #gtceu:circuits/iv')
        .itemOutputs('1x ae2:cell_component_64k')
        .duration(800)                                 
        .EUt(8000)

    event.recipes.gtceu
        .canner('kubejs:1k_cell')  
        .itemInputs('ae2:cell_component_1k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_1k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:4k_cell')  
        .itemInputs('ae2:cell_component_4k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_4k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:16k_cell')  
        .itemInputs('ae2:cell_component_16k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_16k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:64k_cell')  
        .itemInputs('ae2:cell_component_64k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_64k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:256k_cell')  
        .itemInputs('ae2:cell_component_256k', 'ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_256k')
        .duration(100)                                 
        .EUt(120)

     event.recipes.gtceu
        .canner('kubejs:1k_cell_fluid')  
        .itemInputs('ae2:cell_component_1k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_1k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:4k_cell_fluid')  
        .itemInputs('ae2:cell_component_4k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_4k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:16k_cell_fluid')  
        .itemInputs('ae2:cell_component_16k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_16k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:64k_cell_fluid')  
        .itemInputs('ae2:cell_component_64k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_64k')
        .duration(100)                                 
        .EUt(120)

    event.recipes.gtceu
        .canner('kubejs:256k_cell_fluid')  
        .itemInputs('ae2:cell_component_256k', 'ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_256k')
        .duration(100)                                 
        .EUt(120)


});