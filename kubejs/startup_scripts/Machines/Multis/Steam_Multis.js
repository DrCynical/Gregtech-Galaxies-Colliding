const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("steam_squasher", "multiblock")
        .machine((holder) => new $SteamMulti(holder, 4))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("forge_hammer")
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        // base block appearance
        .appearanceBlock(() => new Block.getBlock('gtceu:steam_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("ACCCA", "AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA")
            .aisle("CCCCC", "ACCCA", "AAAAA", "AAAAA", "AAAAA", "ACCCA", "AAAAA")
            .aisle("CCCCC", "CCACC", "CAAAC", "CAWAC", "CAWAC", "CCWCC", "AAFAA")
            .aisle("CCCCC", "AC@CA", "AAAAA", "AAAAA", "AAAAA", "ACCCA", "AAAAA")
            .aisle("ACCCA", "AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("F", Predicates.blocks("gtceu:bronze_firebox_casing"))
            .where("C", Predicates.blocks("gtceu:steam_machine_casing")
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            )
            .where("W", Predicates.blocks(Block.getBlock("gtceu:wrought_iron_block")))
            .where("A", Predicates.air())

            .build())

            .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/forge_hammer"
        )

    event.create("steam_assembler", "multiblock")
        .machine((holder) => new $SteamMulti(holder, 4))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("assembler")
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        // base block appearance
        .appearanceBlock(() => new Block.getBlock('kubejs:high_steam_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("FFF", "CCC", "CCC")
            .aisle("FFF", "CAC", "CCC")
            .aisle("FFF", "C@C", "CCC")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("F", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("C", Predicates.blocks("kubejs:high_steam_machine_casing")
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            )
            .where("A", Predicates.air())

            .build())

            .workableCasingModel(
            "kubejs:block/high_steam_machine_casing",
            "gtceu:block/machines/assembler"
        )

});