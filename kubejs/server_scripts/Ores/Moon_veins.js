GTCEuServerEvents.oreVeins(event => {
    // Mars Phosphor - Shell (layered materials, phosphate core)
    event.add('kubejs:phosphor_vein_mars', vein => {
        vein.weight(30).clusterSize(30).density(0.2)
        vein.layer('moon_stone')
        vein.heightRangeUniform(35, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrochlore).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Apatite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pyrochlore)
            .density(0.2)
            .radius(4))
    })

    // Desh Vein - Branching (uranium/desh tendrils)
    event.add('kubejs:desh_vein_moon', vein => {
        vein.layer('moon_stone')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(-50, 64)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('desh')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Cobalt).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .density(0.15)
            .radius(4)
        )
    })

    // Lunar Rutile - Shell (bauxite/ilmenite layers)
    event.add('kubejs:rutile_vein_moon', vein => {
        vein.weight(30).clusterSize(30).density(0.2)
        vein.layer('moon_stone')
        vein.heightRangeUniform(35, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .density(0.2)
            .radius(4))
    })

    // Lunar Diamond - Shell (precious core)
    event.add('kubejs:diamond_pure_mana_vein_moon', vein => {
        vein.weight(30).clusterSize(30).density(0.2)
        vein.layer('moon_stone')
        vein.heightRangeUniform(35, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Diamond).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Graphite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .density(0.2)
            .radius(4))
    })

    // Lunar Manganese - Branching
    event.add('kubejs:manganese_vein_moon', vein => {
        vein.weight(30).clusterSize(30).density(0.2)
        vein.layer('moon_stone')
        vein.heightRangeUniform(20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tantalite)
            .density(0.2)
            .radius(4))
    })

    // End Tungsten - Stringer (tendrils of tungsten ores)
    event.add('kubejs:tungsten_vein_moon', vein => {
        vein.weight(30).clusterSize(35).density(0.2)
        vein.layer('moon_stone')
        vein.heightRangeUniform(15, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('scheelite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('tungstate')).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('lithium')).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lithium)
            .density(0.2)
            .radius(4))
    })

    // End Pitchblende - Fracture (shattered radioactive geode)
    event.add('kubejs:pitchblende_vein_moon', vein => {
        vein.weight(50).clusterSize(60).density(0.5)
        vein.layer('moon_stone')
        vein.heightRangeUniform(15, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Pitchblende).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lithium)
            .density(0.2)
            .radius(4))
    })

    // AA Pure Chromite - Shell
    event.add('kubejs:pure_chromite_vein_moon', vein => {
        vein.layer('moon_stone')
        vein.weight(20)
        vein.clusterSize(35)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(5, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
    })
})
