ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('lv_loot_bag')
        .itemInputs('4x kubejs:ulv_loot_bag')
        .itemOutputs('kubejs:lv_loot_bag')
        .duration(200)
        .EUt(24);

    event.recipes.gtceu.assembler('mv_loot_bag')
        .itemInputs('4x kubejs:lv_loot_bag')
        .itemOutputs('kubejs:mv_loot_bag')
        .duration(200)
        .EUt(100);

    event.recipes.gtceu.assembler('hv_loot_bag')
        .itemInputs('4x kubejs:mv_loot_bag')
        .itemOutputs('kubejs:hv_loot_bag')
        .duration(200)
        .EUt(400);
})