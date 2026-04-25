const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');

const $Collections = Java.loadClass('java.util.Collections');
const $Object2IntOpenCustomHashMap = Java.loadClass('it.unimi.dsi.fastutil.objects.Object2IntOpenCustomHashMap');
const $Objects = Java.loadClass('java.util.Objects');

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("improved_primitive_blast_furnace", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes("improved_primitive_blast_furnace")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])

        // base block appearance
        .appearanceBlock(() => new Block.getBlock('kubejs:high_steam_machine_casing'))

        .pattern(definition => FactoryBlockPattern.start()

            .aisle("FFF", "CCC", "CCC", " C ", " A ")
            .aisle("FFF", "C C", "C C", "CMC", "A A")
            .aisle("FFF", "C@C", "CCC", " C ", " A ")


            .where("@", Predicates.controller(Predicates.blocks(definition.get())))

            .where("A", Predicates.blocks("gtceu:steel_machine_casing")) // make sure this is inside the .where, otherwise it will break shit

            .where("F", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("C", Predicates.blocks("kubejs:high_steam_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
            )
            .where("M", Predicates.blocks("gtceu:lv_muffler_hatch"))
            .where(" ", Predicates.air())

            .build())

            .workableCasingModel(
            "kubejs:block/high_steam_machine_casing",
            "kubejs:block/primitive_blast_furnace"
        )

});