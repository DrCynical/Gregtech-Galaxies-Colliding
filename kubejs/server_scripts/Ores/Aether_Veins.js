GTCEuServerEvents.oreVeins(event => {

    //Zanite
    event.add('kubejs:zanite_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(25)
        vein.clusterSize(25)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zanite')).size(2, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Malachite).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Malachite)
            .density(0.2)
            .radius(4)
        )
    })

    // Ambrosium
    event.add('kubejs:ambrosium_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.30)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ambrosium')).size(2, 5))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Grossular).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Grossular)
            .density(0.2)
            .radius(4)
        )
    })

    // Tetrahedrite
    event.add('kubejs:tetrahedrite_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(40)
        vein.clusterSize(35)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(1)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tetrahedrite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Copper).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Stibnite).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .density(0.2)
            .radius(4))
    })

    // Bauxite
     event.add('kubejs:bauxite_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(15)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Aluminium).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Cinnabar).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Aluminium)
            .density(0.2)
            .radius(4)
        )
    })

    // Nickel
    event.remove("gtceu:nickel_vein_ow")
    event.add('kubejs:nickel_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(40)
        vein.clusterSize(60)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Garnierite)
            .density(0.2)
            .radius(4))
    })

    // Magic Earth
    event.add('kubejs:magic_earth_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('terra')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get('elementium')).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('source_gem')).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Garnierite)
            .density(0.2)
            .radius(4))
    })

    //Silver Lead
    event.remove("gtceu:galena_vein_ow")
    event.add('kubejs:galena_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(40)
        vein.clusterSize(60)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Lead).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .density(0.2)
            .radius(4))
    })
})