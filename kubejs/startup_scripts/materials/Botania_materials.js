Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
     event.create('livingrock')
        .color(0xd7d7c8)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        );

    event.create('livingwood')
        .color(0x34140c)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        );

    event.create('dreamwood')
        .color(0xb9ddd3)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        );

    event.create('alfsteel')
        .color(0xf0a80e)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .cableProperties(GTValues.V[GTValues.LuV], 6, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
        )
        .toolStats(new ToolProperty(28, 12, 24720, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ));

    event.create('manasteel')
        .color(0x6fb6ff).secondaryColor(0x1e1fff)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .ingot()
        .fluid()
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME
        )
        .toolStats(new ToolProperty(8, 5, 2048, 4,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ));

    event.create('terrasteel')
        .color(0x78ff62).secondaryColor(0x0e8f31)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .ingot()
        .fluid()
        .cableProperties(GTValues.V[GTValues.MV], 8, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME
        )
        .blastTemp(2600, 'low', GTValues.VA[GTValues.HV], 800)
        .toolStats(new ToolProperty(12, 7, 8072, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ));

    event.create('elementium')
        .color(0xff91b8).secondaryColor(0x5c0f7b)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .fluid()
        .ore(2,1)
        .cableProperties(GTValues.V[GTValues.EV], 3, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
        )
        .toolStats(new ToolProperty(20, 8, 16144, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ));

    

})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('alfsteel'), () => Item.getItem('mythicbotany:alfsteel_ingot'))
})
