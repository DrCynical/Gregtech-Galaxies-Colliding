GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('dehydration_chamber', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Dehydration Chamber")
                .recipeType('dehydration_chamber')
                .workableTieredHullModel('gtceu:block/machines/dehydration_chamber')
    )
})