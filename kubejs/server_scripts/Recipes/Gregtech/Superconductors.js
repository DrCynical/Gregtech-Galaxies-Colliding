ServerEvents.recipes(event => {
    
    event.recipes.gtceu.alloy_smelter('ambrosalloy_ingot_from_alloy_smelter')
        .itemInputs('2x gtceu:ambrosium_dust', '2x gtceu:invar_ingot')
        .itemOutputs('gtceu:ambrosalloy_ingot')
        .duration(100)
        .EUt(4);

    event.recipes.gtceu.mixer('signalum_dust_from_mixer')
        .itemInputs('1x gtceu:silver_dust', '2x gtceu:copper_dust', '2x minecraft:redstone', '2x malum:infernal_spirit')
        .itemOutputs('9x gtceu:signalum_dust')
        .duration(240)
        .circuit(9)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer('lumium_dust_from_mixer')
        .itemInputs('1x gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:redstone', '1x minecraft:glowstone_dust', '2x gtceu:manasteel_dust')
        .itemOutputs('15x gtceu:lumium_dust')
        .duration(300)
        .circuit(8)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.mixer('enderium_dust_from_mixer')
        .itemInputs('3x gtceu:lead_dust', '1x gtceu:manalium_dust', '3x gtceu:ender_pearl_dust', '1x gtceu:source_imbued_steel_dust')
        .itemOutputs('9x gtceu:enderium_dust')
        .duration(500)
        .circuit(7)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.mixer('shellite_dust_from_mixer')
        .itemInputs('1x gtceu:black_bronze_dust', '3x gtceu:signalum_dust', '2x gtceu:terrasteel_dust')
        .itemOutputs('7x gtceu:shellite_dust')
        .duration(500)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('twinite_dust_from_mixer')
        .itemInputs('3x gtceu:manganese_phosphide_dust', '2x gtceu:amethyst_dust', '1x gtceu:lumium_dust')
        .itemOutputs('9x gtceu:twinite_dust')
        .duration(700)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.mixer('dragonsteel_dust_from_mixer')
        .itemInputs('4x gtceu:tungsten_dust', '8x gtceu:magnesium_diboride_dust', '2x gtceu:cadmium_dust')
        .itemOutputs('7x gtceu:dragonsteel_dust')
        .duration(800)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LuV])

})