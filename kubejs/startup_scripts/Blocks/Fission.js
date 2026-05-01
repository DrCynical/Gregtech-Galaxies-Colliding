StartupEvents.registry("block", event => {
    //Advanced Cooler, Sodium Potassium
    event.create('advanced_cooler', 'phoenix_fission:fission_cooler')
        .displayName('Advanced Cooler')
        .coolerTemperature(700) //Cooling power in HU/t
        .coolantUsagePerTick(10) //Amount of Coolant Per Tick
        .tier(2)
        .requiredCoolantMaterialId('gtce:sodium_potassium')
        .outputCoolantFluidId('phoenix_fission:hot_sodium_potassium')
        .coolerMaterial(() => GTMaterials.get('titanium'))
        .texture('kubejs:block/fission/advanced_cooler')

    //Aether Flow Cooler, Frost
    event.create('aether_flow_cooler', 'phoenix_fission:fission_cooler')
        .displayName('Aether Flow Cooler')
        .coolerTemperature(1025) //Cooling power in HU/t
        .coolantUsagePerTick(10) //Amount of Coolant Per Tick
        .tier(3)
        .requiredCoolantMaterialId('phoenix_fission:frost')
        .outputCoolantFluidId('gtceu:warm_frost')
        .coolerMaterial(() => GTMaterials.get('tugnsten_steel'))
        .texture('kubejs:block/fission/aether_flow_cooler')

    //uran 235 Fuel Rod
    event.create('u235_fuel_rod', 'phoenix_fission:fission_fuel_rod')
        .displayName('Uranium 235 Fuel Rod')
        .baseHeatProduction(100)
        .durationTicks(1000)
        .amountPerCycle(1)
        .neutronBias(1)
        .tier(2)
        .fuelKey('gtceu:uranium_235_nugget')
        .outputKey('gtceu:spent_uranium_235_nugget')
        .rodMaterial(() => GTMaterials.get('stainless_steel'))
        .texture('kubejs:block/fission/u235_fuel_rod')

    //Pluto 241 Fuel Rod
    event.create('pluto241_fuel_rod', 'phoenix_fission:fission_fuel_rod')
        .displayName('Plutonium 241 Fuel Rod')
        .baseHeatProduction(80)
        .durationTicks(1500)
        .amountPerCycle(1)
        .neutronBias(1)
        .tier(3)
        .fuelKey('gtceu:plutonium_241_nugget')
        .outputKey('gtceu:depleted_plutonium_241_nugget')
        .rodMaterial(() => GTMaterials.get('titanium'))
        .texture('kubejs:block/fission/pluto241_fuel_rod')

    /*//Thorium Blanket Rod
    event.create('thorium_blanket_rod', 'phoenix_fission:fission_blanket_rod')
        .displayName('Thorium Blanket Rod')
        .tier(2)
        .durationTicks(2400)
        .amountPerCycle(1)
        .inputKey('gtceu:thorium_nugget')
        .outputs('gtceu:irradiated_thorium_nugget', 70, 1)
        .outputs('gtceu:spent_uranium_nugget', 40, 3)
        .outputs('gtceu:spent_uranium_235_nugget', 20, 4)
        .blanketMaterial(() => GTMaterials.get('thorium'))
        .texture('kubejs:block/fission/thorium_blanket_rod')

    //Uran 236 Blanket Rod
    event.create('u236_blanket_rod', 'phoenix_fission:fission_blanket_rod')
        .displayName('Uranium 236 Blanket Rod')
        .tier(2)
        .durationTicks(2400)
        .amountPerCycle(1)
        .inputKey('gtceu:uranium_236_nugget')
        .outputs('gtceu:irradiated_uranium_236_nugget', 70, 1)
        .outputs('gtceu:spent_uranium_235_nugget', 40, 3)
        .outputs('gtceu:depleted_plutonium_241_nugget', 20, 4)
        .blanketMaterial(() => GTMaterials.get('uranium_236'))
        .texture('kubejs:block/fission/u236_blanket_rod')
        */

})