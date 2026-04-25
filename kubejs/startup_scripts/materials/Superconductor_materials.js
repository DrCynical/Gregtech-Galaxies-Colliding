GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ambrosalloy')
        .ingot()
        .color(0x86940a)
        .iconSet(GTMaterialIconSet.SHINY)
        .components('2x invar', '1x ambrosium')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.VA[GTValues.LV], 4, 0, true)

    event.create('signalum')
        .ingot()
        .liquid()
        .color(0xff3300)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('1x silver', '3x copper', '2x redstone')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.MV], 16, 0, true)
        .blastTemp(1700, 'low', GTValues.VA[GTValues.MV], 800)

    event.create('lumium')
        .ingot()
        .liquid()
        .color(0xffffb3)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('1x silver', '3x tin', '2x glowstone')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.HV], 16, 0, true)
        .blastTemp(1700, 'low', GTValues.VA[GTValues.HV], 1000)

    event.create('enderium')
        .ingot()
        .liquid()
        .color(0x006666)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.EV], 32, 0, true)
        .blastTemp(3500, 'low', GTValues.VA[GTValues.EV], 1200)

    event.create('shellite')
        .ingot()
        .liquid()
        .color(0x9933ff)
        .iconSet(GTMaterialIconSet.SHINY)
        .components('1x black_bronze', '3x signalum')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.IV], 64, 0, true)
        .blastTemp(4400, 'mid', GTValues.VA[GTValues.IV], 1400)

    event.create('twinite')
        .ingot()
        .liquid()
        .color(0xf66999)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('3x manganese_phosphide', '2x amethyst', '1x lumium')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.LuV], 64, 0, true)
        .blastTemp(5300, 'mid', GTValues.VA[GTValues.LuV], 1600)

    event.create('dragonsteel')
        .ingot()
        .liquid()
        .color(0x3333cc)
        .iconSet(GTMaterialIconSet.SHINY)
        .components('4x tungsten', '8x magnesium_diboride', '2x cadmium')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
        .cableProperties(GTValues.V[GTValues.ZPM], 64, 0, true)
        .blastTemp(7100, 'high', GTValues.VA[GTValues.ZPM], 1800)
})