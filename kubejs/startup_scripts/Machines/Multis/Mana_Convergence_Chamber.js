GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("mana_convergence_chamber", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("mana_generation")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK), GTRecipeModifiers.BATCH_MODE])

        // base block appearance
        .appearanceBlock(() => new Block.getBlock('kubejs:mana_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("FCCCF", "FAAAF", "FAAAF", "FAAAF", "FCCCF")
            .aisle("CCCCC", "AGGGA", "AGGGA", "AGGGA", "CCCCC")
            .aisle("CCCCC", "AGLGA", "AGLGA", "AGLGA", "CCCCC")
            .aisle("CCCCC", "AGGGA", "AGGGA", "AGGGA", "CCCCC")
            .aisle("FC@CF", "FAAAF", "FAAAF", "FAAAF", "FCCCF")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("F", Predicates.blocks("gtceu:manasteel_frame"))
            .where("C", Predicates.blocks(Block.getBlock("kubejs:mana_casing"))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where("L", Predicates.blocks(Block.getBlock("gtceu:blue_borderless_lamp")))
            .where("G", Predicates.blocks(Block.getBlock("botania:mana_glass")))
            .where("A", Predicates.air())

            .build())

            .workableCasingModel(
            "kubejs:block/mana_casing",
            "gtceu:block/machines/chemical_reactor"
        )

});