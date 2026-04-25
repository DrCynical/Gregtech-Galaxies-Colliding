GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("large_solar_boiler", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("large_solar_boiler")

        // base block appearance
        .appearanceBlock(() => new Block.getBlock('gtceu:steam_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("AAAAA", "AAAAA", "AAAAA", "CAAAA", "ACAAA", "AACAA", "AAACA", "AAAAC")
            .aisle("AFFFA", "AAAAA", "AAAAA", "CCAAA", "ASCAA", "AASCA", "AAASC", "AAAAC")
            .aisle("AFFFA", "AA@AA", "AACAA", "CCCAA", "ASCAA", "AASCA", "AAASC", "AAAAC")
            .aisle("AFFFA", "AAAAA", "AAAAA", "CCAAA", "ASCAA", "AASCA", "AAASC", "AAAAC")
            .aisle("AAAAA", "AAAAA", "AAAAA", "CAAAA", "ACAAA", "AACAA", "AAACA", "AAAAC")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("F", Predicates.blocks("gtceu:bronze_firebox_casing"))
            .where("C", Predicates.blocks("gtceu:steam_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
            )
            .where("S", Predicates.blocks(Block.getBlock("kubejs:solar_sheet_block")))
            .where("A", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/chemical_reactor"
        )

});