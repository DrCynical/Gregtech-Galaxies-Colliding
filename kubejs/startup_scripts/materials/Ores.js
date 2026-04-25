GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('terra')
    .ore(3,2)
    .dust()
    .color(0x71c74a).iconSet(GTMaterialIconSet.METALLIC)

    event.create('source_gem')
    .gem()
    .ore(4,1)
    .color(0xb41fc4).iconSet(GTMaterialIconSet.CERTUS)

})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('source_gem'), () => Item.getItem('ars_nouveau:source_gem'))

})