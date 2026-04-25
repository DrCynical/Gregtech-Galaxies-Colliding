GTCEuStartupEvents.registry('gtceu:material', event => {
        
    event.create('fluix')
        .gem()
        .dust()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .color(0x7921c2).iconSet(GTMaterialIconSet.DIAMOND)

    event.create('zanite')
        .gem()
        .ore()
        .element(GTElements.get('zanite'))
        .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_PLATE)
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)

    event.create('ambrosium')
        .gem()
        .ore()
        .element(GTElements.get('ambrosium'))
        .color(0xfbff00).iconSet(GTMaterialIconSet.CERTUS)

    event.create('aether_air')
        .liquid()
        .color(0x75bfff)

    event.create('liquid_aether_air')
        .liquid()
        .color(0x75bfff)

    event.create('desh')
        .color(0xeb9b34)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .iconSet(GTMaterialIconSet.getByName('utherium'))
        .ingot()
        .ore()
        .dust()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_ORE_SMELTING
        )
        .element(GTElements.get('desh'))
        .iconSet(GTMaterialIconSet.getByName('starry'))

    event.create('soul_stained_steel')
        .color(0xdb3dff).secondaryColor(0xe683fc)
        .ingot()
        .liquid()
        .cableProperties(GTValues.V[GTValues.MV], 2, 2, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('source_imbued_steel')
        .color(0x5c0d63).secondaryColor(0xee66fa)
        .ingot()
        .liquid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('manalium')
        .color(0x1b7bf7)
        .ingot()
        .liquid()
        .components('1x mana', '2x aluminium')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )
        .blastTemp(1700, 'low', GTValues.VA[GTValues.MV], 800)

    event.create('infused_gold')
        .color(0xe7fa16)
        .ingot()
        .components('1x mana', '1x gold')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME
        )

     event.create('menril_infused_alloy')
        .color(0x38b0d1)
        .ingot()
        //.components('1x mana', '1x gold')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL
        )
        .blastTemp(1700, 'low', GTValues.VA[GTValues.MV], 600)

    event.create('zanite_steel')
        .color(0x38054f)
        .ingot()
        .components('1x zanite', '1x steel')
        .iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.MV], 3, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('infinity')
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('infinity'))
        .color(0xffffff)
        .iconSet(GTMaterialIconSet.getByName('infinity'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .toolStats(
            ToolProperty.Builder.of(200, 99999, 99999999, 10)
            .unbreakable()
            .build()
        )

    event.create('unstable')
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('unstable'))
        .color(0xffffff)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .toolStats(
            ToolProperty.Builder.of(8, 12, 99999999, 6)
            .unbreakable()
            .build()
        ) 

})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:block_of_soul_stained_steel'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:soul_stained_steel_plating'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('soul_stained_steel'), () => Item.getItem('malum:soul_stained_steel_ingot'))
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ambrosium'), () => Item.getItem('aether:ambrosium_shard'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ambrosium'), () => Item.getItem('aether:ambrosium_block'))
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('zanite'), () => Item.getItem('aether:zanite_gemstone'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('zanite'), () => Item.getItem('aether:zanite_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('infinity'), () => Item.getItem('avaritia:infinity_block'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('infinity'), () => Item.getItem('avaritia:infinity_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('unstable'), () => Item.getItem('unstabletools:unstable_ingot'))
})