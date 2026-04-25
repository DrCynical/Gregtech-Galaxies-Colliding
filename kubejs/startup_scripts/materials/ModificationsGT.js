GTCEuStartupEvents.materialModification(event => {
    GTMaterials.get('manasteel').setFormula('MaFe₂C')
    GTMaterials.get('terrasteel').setFormula('TrMaFe₂C')
    GTMaterials.get('elementium').setFormula('ElFe₂C')
    GTMaterials.get('alfsteel').setFormula('AlFe₂C')
})