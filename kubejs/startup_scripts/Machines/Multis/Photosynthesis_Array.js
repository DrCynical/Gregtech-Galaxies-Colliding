GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("photosynthesis_array", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("pa_trees", "pa_crops")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK), GTRecipeModifiers.BATCH_MODE])

        // base block appearance
        .appearanceBlock(() => new Block.getBlock('gtceu:solid_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("FCCCF", "FGGGF", "FGGGF", "FGGGF", "FCCCF", "AAAAA", "AAAAA")
            .aisle("CDDDC", "GAAAG", "GAAAG", "GALAG", "CAAAC", "ACCCA", "AAAAA")
            .aisle("CDDDC", "GAOAG", "GAOAG", "GLOLG", "CALAC", "ACWCA", "AACAA")
            .aisle("CDDDC", "GAAAG", "GAAAG", "GALAG", "CAAAC", "ACCCA", "AAAAA")
            .aisle("FC@CF", "FGGGF", "FGGGF", "FGGGF", "FCCCF", "AAAAA", "AAAAA")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("F", Predicates.blocks("gtceu:steel_frame"))
            .where("C", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where("D", Predicates.blocks(Block.getBlock("minecraft:dirt")))
            .where("O", Predicates.blocks(Block.getBlock("minecraft:oak_log")))
            .where("L", Predicates.blocks(Block.getBlock("minecraft:oak_leaves")))
            .where("G", Predicates.blocks(Block.getBlock("connectedglass:clear_glass")))
            .where("W", Predicates.blocks(Block.getBlock("gtceu:white_borderless_lamp")))
            .where("A", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/chemical_reactor"
        )

});