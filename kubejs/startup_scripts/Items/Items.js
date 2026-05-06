StartupEvents.registry('item', event => {
    //Seared Brick
    event.create('unfired_seared_brick')
    .displayName('Unfired Seared Brick')
    event.create('nether_portal_prototype')
    .displayName('Nether Portal Starter Prototype')

    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    function register_universal_circuit(energy_tier)
    {
        event.create(energy_tier + '_universal_circuit').texture('kubejs:item/' + energy_tier + '_universal_circuit').displayName(energy_tier.toUpperCase() + ' Universal Circuit')
    }

    function register_loot_bag(energy_tier)
    {
        event.create(energy_tier + '_loot_bag').texture('kubejs:item/' + energy_tier + '_loot_bag').tooltip('Right click to open me! Will contain ' + energy_tier + ' level rewards').displayName(energy_tier.toUpperCase() + ' Loot Bag')
    }
    
    tiers.forEach(tier => register_loot_bag(tier));
    tiers.forEach(tier => register_universal_circuit(tier));
})

StartupEvents.registry('item', event => {

    event.create('t1_rocket_plating')
    event.create('welded_rocket_plating')
    event.create('hsse_nose_cone')
    event.create('hsse_fin')
    event.create('hsse_engine')
    event.create('trinavine_tank')
    event.create('trinavine_nose_cone')
    event.create('trinavine_fin')
    event.create('trinavine_engine')
    event.create('osmiridium_nose_cone')
    event.create('osmiridium_fin')
    event.create('osmiridium_engine')
    event.create('americium_nose_cone')
    event.create('americium_fin')
    event.create('americium_engine')
    event.create('t2_rocket_plating')
    event.create('welded_rocket_plating_mk2').displayName('Welded Rocket Plating Mk.2')
    event.create('solar_sheet').displayName('Solar Sheet')
    event.create('thorium_fuel_rod').displayName('Thorium Fuel Rod')
    event.create('enriched_uranium_fuel_rod').displayName('Enriched Uranium Fuel Rod')
    event.create('poor_uranium_fuel_rod').displayName('Poor Uranium Fuel Rod')
    event.create('depleted_thorium_fuel_rod').displayName('Depleted Thorium Fuel Rod')
    event.create('depleted_enriched_uranium_fuel_rod').displayName('Depleted Enriched Uranium Fuel Rod')
    event.create('depleted_poor_uranium_fuel_rod').displayName('Depleted Poor Uranium Fuel Rod')
})