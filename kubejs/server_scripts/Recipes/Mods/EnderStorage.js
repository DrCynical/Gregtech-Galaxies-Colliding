ServerEvents.recipes( event =>{
    event.remove({ output: 'enderstorage:ender_tank' })
    event.recipes.gtceu.assembler('assembler_ender_tank')
    .itemInputs(['2x #gtceu:circuits/hv', '4x gtceu:obsidian_plate', '1x gtceu:lv_super_tank', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 2304')
    .itemOutputs('enderstorage:ender_tank')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])

    event.remove({ output: 'enderstorage:ender_chest' })
    event.recipes.gtceu.assembler('assembler_enderchest')
    .itemInputs(['2x #gtceu:circuits/hv', '4x gtceu:obsidian_plate', '1x gtceu:lv_super_chest', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 2304')
    .itemOutputs('enderstorage:ender_chest')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])
 
    //lets you access the enderchests remotely
    event.remove({ output: 'enderstorage:ender_pouch' }) 
    event.recipes.gtceu.assembler('assembler_enderpouch')
    .itemInputs(['2x #gtceu:circuits/mv', '4x minecraft:leather', 'minecraft:ender_chest', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 1152')
    .itemOutputs('enderstorage:ender_pouch')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])

})