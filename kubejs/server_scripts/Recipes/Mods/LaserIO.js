ServerEvents.recipes(event => {
    event.remove({mod: 'laserio'})
    event.shaped('laserio:laser_connector', [
        ' T ',
        'RRR',
        'SSS'
    ], {
        T: 'gtceu:glass_tube',
        R: 'gtceu:red_alloy_plate',
        S: 'gtceu:steel_plate'
    })
    event.recipes.gtceu.assembler('laser_node_assembler')
        .itemInputs('1x laserio:laser_connector', '4x gtceu:iron_plate')
        .inputFluids(Fluid.of('gtceu:glass', 144))
        .itemOutputs('2x laserio:laser_node')
        .duration(100)
        .EUt(24)
    event.recipes.gtceu.assembler('laser_node_advanced_assembler')
        .itemInputs('1x laserio:laser_connector', '3x gtceu:rose_gold_plate', '2x gtceu:ender_pearl_plate', '1x gtceu:hv_electric_motor')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('2x laserio:laser_connector_advanced')
        .duration(300)
        .EUt(500)
    event.shaped('laserio:card_holder', [
        'P P',
        'CLC',
        'P P'
    ], {
        P: 'gtceu:steel_plate',
        C: 'gtceu:steel_crate',
        L: '#gtceu:circuits/ulv'
    })
    event.shaped('laserio:card_cloner', [
        'P P',
        'ELS',
        'P P'
    ], {
        P: 'gtceu:steel_plate',
        E: 'gtceu:lv_emitter',
        S: 'gtceu:lv_sensor',
        L: '#gtceu:circuits/lv'
    })

    const Cards = [
        ["item", "gtceu:terrasteel_plate"],
        ["fluid", "gtceu:manasteel_plate"],
        ["energy", "gtceu:gold_plate"],
        ["redstone", "gtceu:red_alloy_plate"]
    ]

        // Cards
        Cards.forEach(card => {
            event.shaped(`laserio:card_${card[0]}`, [
                "TNT",
                "TCT",
                "GGG"
            ], {
                N: card[1],
                C: '#gtceu:circuits/lv',
                G: "minecraft:gold_nugget",
                T: "gtceu:tin_plate"
            }).id(`laserio:card_${card[0]}`)
        })

        // Overclockers
        event.remove({ output: ["laserio:overclocker_card", "laserio:overclocker_node"] })
        event.shaped("laserio:overclocker_card", [
            "E",
            "P",
            "A"
        ], {
            E: "#forge:double_plates/electrical_steel",
            P: "#forge:plates/electrum",
            A: "ae2:basic_card"
        })
        event.shaped("laserio:overclocker_node", [
            "E",
            "P",
            "A"
        ], {
            E: "#forge:double_plates/electrical_steel",
            P: "enderio:pulsating_crystal",
            A: "ae2:advanced_card"
        })
        //Wrench
        event.shaped('laserio:laser_wrench', [
        ' RR',
        'WSU',
        'SH '
    ], {
        R: 'gtceu:red_alloy_plate',
        W: '#forge:tools/wrenches',
        S: 'gtceu:steel_rod',
        U: '#gtceu:circuits/ulv',
        H: '#forge:tools/hammers'
    })

})
ServerEvents.tags('item', event => {
  console.log('[2] - [3] - TAG-WATCHER')
  event.remove('forge:wrenches', 'laserio:laser_wrench')
  event.remove('forge:tools/wrench', 'laserio:laser_wrench')
})