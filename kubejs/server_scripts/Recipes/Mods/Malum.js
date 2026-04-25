console.log('[Malum.js loading]')
let massHideMalum = ['malum:belt_of_the_prospector', 'malum:brilliant_stone', 'malum:natural_quartz_ore', 'malum:natural_quartz', 'malum:cthonic_gold_ore', 'malum:deepslate_soulstone_ore', 'malum:soulstone_ore', 'malum:brilliant_deepslate', 'malum:deepslate_quartz_ore', 'malum:blazing_quartz_ore', /malum:(.*)_impetus/, /malum:(.*)_node/, 'malum:spirit_crucible', 'malum:spirit_catalyzer',]

ServerEvents.tags('item', event => {
  console.log('[14] - [1] - TAG-WATCHER')
  event.add('c:hidden_from_recipe_viewers', massHideMalum)
  event.remove('forge:gems/quartz', 'malum:natural_quartz_ore')
  event.remove('forge:gems/quartz', 'malum:deepslate_quartz_ore')
})

//removing malum logs from the burnable logs tag so they can be turned into arcane charcoal in the coke oven without recipe conflict
ServerEvents.tags('item', event => {
  console.log('[14] - [3] - TAG-WATCHER')
  event.remove('minecraft:logs_that_burn', ['#malum:soulwood_logs', '#malum:runewood_logs'])
})

ServerEvents.recipes(event => {
  let massRemovalMalum = ['malum:brilliant_stone', 'malum:natural_quartz_ore', 'malum:natural_quartz', 'malum:cthonic_gold_ore', 'malum:deepslate_soulstone_ore', 'malum:soulstone_ore', 'malum:brilliant_deepslate', 'malum:deepslate_quartz_ore', 'malum:blazing_quartz_ore']

  massRemovalMalum.forEach(yeetus => {
    event.remove({ output: `${yeetus}` })
    event.remove({ input: `${yeetus}` })
  })
  event.remove({ id: 'malum:void_favor/raw_soulstone' })
  event.remove({ id: 'malum:arcane_charcoal_from_runewood' })
  event.remove({ id: 'malum:arcane_charcoal_from_soulwood' })
  event.remove({ id: 'malum:spirit_infusion/belt_of_the_prospector' })

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking')
    .itemInputs('#malum:soulwood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking2')
    .itemInputs('#malum:runewood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)

    event.remove({ output: 'malum:crude_scythe' })
  event.shaped('malum:crude_scythe', [
    'AAG',
    ' SA',
    'S  '
  ], {
    A: 'gtceu:iron_plate',
    G: 'minecraft:iron_ingot',
    S: 'minecraft:stick',
  })

  event.remove({ id: 'malum:spirit_infusion/soul_stained_steel_ingot' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 2,
          "item": "ars_nouveau:source_gem"
        },
        {
          "count": 1,
          "item": "malum:processed_soulstone"
        },
        {
          "count": 1,
          "item": "malum:arcane_charcoal"
        }
      ],
      "input": {
        "count": 2,
        "item": "gtceu:wrought_iron_ingot"
      },
      "output": {
        "count": 4,
        "item": "malum:soul_stained_steel_ingot"
      },
      "spirits": [
        {
          "type": "wicked",
          "count": 3
        },
        {
          "type": "arcane",
          "count": 2
        },
        {
          "type": "earthen",
          "count": 1
        },
      ]
    }
  ).id("malum:spirit_infusion.steel_stained_soul")

  event.remove({ id: 'malum:block_of_soul_stained_steel' })
  event.remove({ id: 'malum:soul_stained_steel_from_block' })
  event.recipes.gtceu.arc_furnace('galaxies:soul_stained_ingot_from_dust')
    .itemInputs('gtceu:soul_stained_steel_dust')
    .inputFluids('gtceu:oxygen 56')
    .itemOutputs(['malum:soul_stained_steel_ingot'])
    .duration(50)
    .EUt(24,);

  event.remove({ id: 'malum:spirit_infusion/necklace_of_the_mystic_mirror' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 8,
          "item": "malum:runewood_planks"
        },
        {
          "count": 1,
          "item": "malum:spectral_optic"
        },
        {
          "count": 1,
          "item": "botania:mana_pearl"
        },
      ],
      "input": {
        "count": 1,
        "item": "malum:ornate_necklace"
      },
      "output": {
        "count": 1,
        "item": "malum:necklace_of_the_mystic_mirror"
      },
      "spirits": [
        {
          "type": "sacred",
          "count": 24
        },
      ]
    }
  )

  //cthonic gold
  event.remove({ id: 'malum:create/crushing/crush_rare_earths' })
  event.recipes.occultism.ritual(
    '16x malum:cthonic_gold_fragment',
    ['malum:infernal_spirit',
      'malum:raw_soulstone',
      'gtceu:crushed_lead_ore',
      'gtceu:crushed_gold_ore',],
    'malum:hallowed_gold_ingot',
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:galaxies.cthonic_gold_ritual")

    //blazing quartz
    .id("malum:spirit_infusion.blazing_quartz")
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 4,
          "item": "minecraft:blaze_powder"
        },
      ],
      "input": {
        "count": 32,
        "item": "minecraft:quartz"
      },
      "output": {
        "count": 32,
        "item": "malum:blazing_quartz"
      },
      "spirits": [
        {
          "type": "arcane",
          "count": 16
        },
        {
          "type": "infernal",
          "count": 16
        },
      ]
    }
  )
})
