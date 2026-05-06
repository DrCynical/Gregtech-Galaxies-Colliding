ServerEvents.recipes(event => {

    //Aether Air
    event.recipes.gtceu.gas_collector('aether_air_collection')
        .outputFluids('gtceu:aether_air 10000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])
        .dimension('aether:the_aether')
    
    event.recipes.gtceu.vacuum_freezer('liquid_aether')
        .inputFluids('gtceu:aether_air 1000')
        .outputFluids('gtceu:liquid_aether_air 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])
    
})