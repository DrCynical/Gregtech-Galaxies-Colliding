ServerEvents.recipes(event => {
   let machineTier = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv'
  ]
  let tierQuadWire = [
    'copper',
    'cupronickel',
    'kanthal',
    'nichrome',
    'tungsten_steel',
    'hssg',
    'naquadah',
    'naquadah_alloy'
  ]
  let tierCable = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
  ]
  let tierSpring = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'hsla_steel',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
  ]
  let coilTier = [
    'cupronickel',
    'kanthal',
    'nichrome',
    'tungstensteel',
    'hssg',
    'naquadah',
    'trinium',
    'tritanium'
  ]
  let laminatorTier = [
    'cupronickel',
    'aluminium',
    'nichrome',
    'tungstensteel',
    'hssg',
    'naquadah',
    'trinium',
    'tritanium'
  ]
    machineTier.forEach((tier, index) => {
    let cableMaterial = tierQuadWire[index]
    let cableType = tierCable[index]
    let springType = tierSpring[index]
    let coilType = coilTier[index]
    let lamType = laminatorTier[index]

    event.shaped(`gtceu:${tier}_dehydration_chamber`, [
      'CAC',
      'BHB',
      'ZPZ'
    ], {
      A: `gtceu:${cableMaterial}_spring`,
      B: `gtceu:${tier}_electric_motor`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_pump`
       })
    })
})