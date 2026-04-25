ServerEvents.recipes(event => {

    event.remove({output: "sophisticatedbackpacks:backpack"})
    event.remove({output: "sophisticatedbackpacks:copper_backpack"})
    event.remove({output: "sophisticatedbackpacks:iron_backpack"})
    event.remove({output: "sophisticatedbackpacks:gold_backpack"})
    event.remove({output: "sophisticatedbackpacks:diamond_backpack"})
    event.remove({output: "sophisticatedbackpacks:netherite_backpack"})
    event.remove({output: "sophisticatedbackpacks:upgrade_base"})
    event.remove({output: "sophisticatedbackpacks:stack_upgrade_starter_tier"})
    event.remove({output: "sophisticatedbackpacks:stack_upgrade_tier_1"})
    event.remove({output: "sophisticatedbackpacks:stack_upgrade_tier_2"})
    event.remove({output: "sophisticatedbackpacks:stack_upgrade_tier_3"})
    event.remove({output: "sophisticatedbackpacks:stack_upgrade_tier_4"})
    event.remove({output: "sophisticatedbackpacks:magnet_upgrade"})
    event.remove({output: "sophisticatedbackpacks:advanced_magnet_upgrade"})
    event.remove({output: "sophisticatedbackpacks:compacting_upgrade"})
    event.remove({output: "sophisticatedbackpacks:advanced_compacting_upgrade"})

    event.shaped(Item.of('sophisticatedbackpacks:backpack'),
     [
        "WLW",
        "LCL",
        "SSS"
    ], 
    {
        L: 'minecraft:leather',
        C: 'gtceu:wood_crate',
        S: 'minecraft:string',
        W: 'gtceu:wrought_iron_screw'
    }, 
    );

  event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:iron_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'SPS',
      'LBL',
      'PCP'
    ],
    'key': {
      'P': {
        'item': 'gtceu:wrought_iron_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:backpack'
      },
      'L': {
        'item': 'minecraft:leather'
      },
        'S': {
        'item': 'gtceu:wrought_iron_screw'
      },
       'C': {
        'item': 'gtceu:bronze_crate'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:iron_backpack' // Same case as the Registry name
    }
  })

  //GOLD BACKPACK
  event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:gold_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'SPS',
      'LBL',
      'PCP'
    ],
    'key': {
      'P': {
        'item': 'gtceu:steel_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:iron_backpack'
      },
      'L': {
        'item': 'minecraft:leather'
      },
        'S': {
        'item': 'gtceu:steel_screw'
      },
       'C': {
        'item': 'gtceu:steel_crate'
      }

    },
    'result': {
      'item': 'sophisticatedbackpacks:gold_backpack' // Same case as the Registry name
    }
  })

  //DIAMOND BACKPACK
  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:diamond_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'SPS',
      'LBL',
      'PCP'
    ],
    'key': {
      'P': {
        'item': 'gtceu:aluminium_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:gold_backpack'
      },
      'L': {
        'item': 'minecraft:leather'
      },
        'S': {
        'item': 'gtceu:aluminium_screw'
      },
       'C': {
        'item': 'gtceu:aluminium_crate'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:diamond_backpack' // Same case as the Registry name
    }
  })
  event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:netherite_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'SPS',
      'LBL',
      'PCP'
    ],
    'key': {
      'P': {
        'item': 'gtceu:titanium_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:diamond_backpack'
      },
      'L': {
        'item': 'minecraft:leather'
      },
        'S': {
        'item': 'gtceu:titanium_screw'
      },
       'C': {
        'item': 'gtceu:titanium_crate'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:netherite_backpack' // Same case as the Registry name
    }
  })

    event.recipes.gtceu.assembler('sophisticatedbackpacks:upgrade_base_from_assembler')
    .itemInputs('2x gtceu:steel_plate', '1x minecraft:leather', '2x gtceu:steel_screw')
    .itemOutputs('2x sophisticatedbackpacks:upgrade_base')
    .duration(300)
    .EUt(12);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:stack_upgrade_from_assembler')
    .itemInputs('8x gtceu:double_bronze_plate', 'sophisticatedbackpacks:upgrade_base')
    .itemOutputs('2x sophisticatedbackpacks:stack_upgrade_starter_tier')
    .duration(300)
    .EUt(24);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:stack_upgrade_tier1_from_assembler')
    .itemInputs('8x gtceu:double_steel_plate', 'sophisticatedbackpacks:stack_upgrade_starter_tier')
    .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_1')
    .duration(300)
    .EUt(24);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:stack_upgrade_tier2_from_assembler')
    .itemInputs('8x gtceu:double_aluminium_plate', 'sophisticatedbackpacks:stack_upgrade_tier_1')
    .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_2')
    .duration(300)
    .EUt(120);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:stack_upgrade_tier3_from_assembler')
    .itemInputs('8x gtceu:double_stainless_steel_plate', 'sophisticatedbackpacks:stack_upgrade_tier_2')
    .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_3')
    .duration(300)
    .EUt(300);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:stack_upgrade_tier4_from_assembler')
    .itemInputs('8x gtceu:double_titanium_plate', 'sophisticatedbackpacks:stack_upgrade_tier_3')
    .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_4')
    .duration(300)
    .EUt(600);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:magnet_upgrade_from_assembler')
    .itemInputs('gtceu:lv_item_magnet', 'sophisticatedbackpacks:upgrade_base', '2x gtceu:steel_screw')
    .itemOutputs('sophisticatedbackpacks:magnet_upgrade')
    .duration(300)
    .EUt(24);

    event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_magnet_upgrade_from_assembler')
    .itemInputs('gtceu:hv_item_magnet', 'sophisticatedbackpacks:magnet_upgrade', '2x gtceu:stainless_steel_screw')
    .itemOutputs('sophisticatedbackpacks:advanced_magnet_upgrade')
    .duration(300)
    .EUt(120);


})