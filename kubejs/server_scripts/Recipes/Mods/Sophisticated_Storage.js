let DONOTEXIST = ['sophisticatedstorage:stack_upgrade_tier_5', 'sophisticatedstorage:basic_to_gold_tier_upgrade', 'sophisticatedstorage:basic_to_netherite_tier_upgrade', 'sophisticatedstorage:iron_to_diamond_tier_upgrade', 'sophisticatedstorage:iron_to_netherite_tier_upgrade', 'sophisticatedstorage:gold_to_netherite_tier_upgrade', 'sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_1_plus',
  'sophisticatedstorage:limited_barrel_1',
  'sophisticatedstorage:limited_barrel_2',
  'sophisticatedstorage:limited_barrel_3',
  'sophisticatedstorage:limited_barrel_4',
  'sophisticatedstorage:limited_iron_barrel_1',
  'sophisticatedstorage:limited_iron_barrel_2',
  'sophisticatedstorage:limited_iron_barrel_3',
  'sophisticatedstorage:limited_iron_barrel_4',
  'sophisticatedstorage:limited_copper_barrel_1',
  'sophisticatedstorage:limited_copper_barrel_2',
  'sophisticatedstorage:limited_copper_barrel_3',
  'sophisticatedstorage:limited_copper_barrel_4',
  'sophisticatedstorage:limited_diamond_barrel_1',
  'sophisticatedstorage:limited_diamond_barrel_2',
  'sophisticatedstorage:limited_diamond_barrel_3',
  'sophisticatedstorage:limited_diamond_barrel_4',
  'sophisticatedstorage:limited_netherite_barrel_1',
  'sophisticatedstorage:limited_netherite_barrel_2',
  'sophisticatedstorage:limited_netherite_barrel_3',
  'sophisticatedstorage:limited_netherite_barrel_4',
  'sophisticatedstorage:limited_gold_barrel_1',
  'sophisticatedstorage:limited_gold_barrel_2',
  'sophisticatedstorage:limited_gold_barrel_3',
  'sophisticatedstorage:limited_gold_barrel_4',
  'sophisticatedstorage:copper_shulker_box',
  'sophisticatedstorage:basic_to_copper_tier_upgrade',
  'sophisticatedstorage:copper_to_iron_tier_upgrade',
  'sophisticatedstorage:copper_to_gold_tier_upgrade',
  'sophisticatedstorage:copper_to_diamond_tier_upgrade',
  'sophisticatedstorage:copper_to_netherite_tier_upgrade',
  'sophisticatedstorage:pump_upgrade',
  'sophisticatedstorage:advanced_pump_upgrade',
  'sophisticatedstorage:xp_pump_upgrade',
  'sophisticatedbackpacks:pump_upgrade',
  'sophisticatedbackpacks:advanced_pump_upgrade',
  'sophisticatedbackpacks:xp_pump_upgrade',
  'sophisticatedstorage:stack_upgrade_omega_tier',
  'sophisticatedstorage:infinity_upgrade',
  'sophisticatedbackpacks:stack_upgrade_omega_tier',
  'sophisticatedbackpacks:infinity_upgrade',
  'sophisticatedstorage:survival_infinity_upgrade',
  'sophisticatedbackpacks:survival_infinity_upgrade',
];

ServerEvents.tags('item', event => {
  console.log('[16] - [1] - TAG-WATCHER')
  event.add('forge:viewers/hidden_from_recipe', DONOTEXIST)
  event.add('c:hidden_from_recipe_viewers', DONOTEXIST)
});

ServerEvents.recipes(event => {

    event.remove({output:'sophisticatedstorage:chest'})
    event.remove({output: "sophisticatedstorage:copper_chest"})
    event.remove({output: "sophisticatedstorage:iron_chest"})
    event.remove({output: "sophisticatedstorage:gold_chest"})
    event.remove({output: "sophisticatedstorage:diamond_chest"})
    event.remove({output: "sophisticatedstorage:netherite_chest"})
    event.remove({output:'sophisticatedstorage:barrel'})
    event.remove({output: "sophisticatedstorage:copper_barrel"})
    event.remove({output: "sophisticatedstorage:iron_barrel"})
    event.remove({output: "sophisticatedstorage:gold_barrel"})
    event.remove({output: "sophisticatedstorage:diamond_barrel"})
    event.remove({output: "sophisticatedstorage:netherite_barrel"})
    event.remove({output: "sophisticatedstorage:upgrade_base"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_1"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_1_plus"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_2"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_3"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_4"})
    event.remove({output: "sophisticatedstorage:stack_upgrade_tier_5"})
    event.remove({output: "sophisticatedstorage:controller"})
    event.remove({output: "sophisticatedstorage:storage_io"})
    event.remove({output: "sophisticatedstorage:storage_input"})
    event.remove({output: "sophisticatedstorage:storage_output"})
    event.remove({output: "sophisticatedstorage:storage_link"})
    event.remove({output: "sophisticatedstorage:storage_tool"})

    let basicWoodType = [
    'oak',
    'jungle',
    'birch',
    'mangrove',
    'spruce',
    'dark_oak',
    'acacia',
    'cherry',
    'bamboo'
  ]

  basicWoodType.forEach(woodType => {
    event.shaped(Item.of(`sophisticatedstorage:chest`, `{woodType:"${woodType}"}`), [
      'ABA',
      'BRB',
      'ABA'
    ], {
      A: `#minecraft:${woodType}_logs`,
      B: `minecraft:${woodType}_planks`,
      R: `minecraft:redstone_torch`,
    })
  })
  let basicStemType = [
    'crimson',
    'warped'
  ]

  basicStemType.forEach(woodType => {
    event.shaped(Item.of(`sophisticatedstorage:chest`, `{woodType:"${woodType}"}`), [
      'ABA',
      'BRB',
      'ABA'
    ], {
      A: `minecraft:${woodType}_stem`,
      B: `minecraft:${woodType}_planks`,
      R: `minecraft:redstone_torch`,
    })
  })

  basicWoodType.forEach(woodType => {
  event.custom({
      'type': 'minecraft:crafting_shaped',
      'conditions': [
        {
          'type': 'sophisticatedcore:item_enabled',
          'itemRegistryName': 'sophisticatedstorage:barrel'
        }
      ],
      'key': {
        'C': {
          'item': 'minecraft:redstone_torch'
        },
        'S': {
          'item': `minecraft:${woodType}_slab`
        },
        'E': {
          'tag': 'forge:tools/saws'
        },
        'P': {
          'item': `minecraft:${woodType}_planks`
        }
      },
      'pattern': [
        'PEP',
        'PCP',
        'PSP'
      ],
      'result': {
        'item': 'sophisticatedstorage:barrel',
        'nbt': `{woodType:\'${woodType}\'}`
      }
    })
    });

    // Remove Copper tier storage (not used)
    event.remove({ output: "sophisticatedstorage:copper_barrel" })
    event.remove({ output: "sophisticatedstorage:copper_chest" })
    event.remove({ output: "sophisticatedstorage:copper_shulker_box" })
    // Remove Copper tier upgrades
    event.remove({ output: /^sophisticatedstorage:.*copper.*tier_upgrade$/ })
    event.remove({ input: /^sophisticatedstorage:.*copper.*tier_upgrade$/ })

     // Barrel, Chest, Shulker Box upgrading
    const sophStorageMaterials = [
        ["", null, null],
        ["iron_", "bronze", "lead"],
        ["gold_", "steel", "tin"],
        ["diamond_", "aluminium", "copper"],
        ["netherite_", "stainless_steel", "gold"],
    ]
    const sophStorageTypes = [
        ["", "barrel"],
        ["", "chest"],
        ["", "shulker_box"]
    ]

   sophStorageMaterials.forEach((material, toIndex) => {
        if (toIndex == 0) return;

        // Tier upgrade items
        for (let fromIndex = 0; fromIndex < toIndex; fromIndex++) {
            let fromTierName = (fromIndex == 0 ? "basic_" : sophStorageMaterials[fromIndex][0]);
            let prevTierName = (toIndex - 1 == 0 ? "basic_" : sophStorageMaterials[toIndex - 1][0]);
            let toTierName = material[0];

            event.shaped(`sophisticatedstorage:${fromTierName}to_${toTierName}tier_upgrade`, [
                "PSP",
                "SCS",
                "PSP"
            ], {
                S: `#forge:screws/${material[2]}`,
                P: `#forge:plates/${material[1]}`,
                C: (fromTierName == prevTierName ? "minecraft:redstone_torch" : `sophisticatedstorage:${fromTierName}to_${prevTierName}tier_upgrade`)
            }).id(`sophisticatedstorage:${fromTierName}to_${toTierName}tier_upgrade`)
        }

        // Barrel-in-table upgrades
        sophStorageTypes.forEach(storageType => {
            // Works for upgrades as the recipe type implies, but doesn't work for making new barrels/chests/boxes from scratch
            let outputStorage = `sophisticatedstorage:${storageType[0]}${material[0]}${storageType[1]}`
            let inputStorage = `sophisticatedstorage:${storageType[0]}${sophStorageMaterials[toIndex - 1][0]}${storageType[1]}`
            event.remove({ mod: "sophisticatedstorage", output: outputStorage })
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [
                    {
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": outputStorage
                    }
                ],
                "pattern": [
                    "PSP",
                    "SCS",
                    "PSP"
                ],
                "key": {
                    "S": {
                        "tag": (`forge:screws/${material[2]}`)
                    },
                    "P": {
                        "tag": (`forge:plates/${material[1]}`)
                    },
                    "C": {
                        "item": inputStorage
                    }
                },
                "result": {
                    "item": outputStorage
                }
            });
        })
    })

    event.recipes.gtceu.assembler('sophisticatedstorage:chest_from_assembler')
        .itemInputs('8x #minecraft:planks', '1x minecraft:redstone_torch')
        .itemOutputs(Item.of('sophisticatedstorage:chest', '(woodType="oak")'))
        .circuit(15)
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:barrel_from_assembler')
        .itemInputs('4x gtceu:wood_plate', '1x minecraft:redstone_torch')
        .itemOutputs(Item.of('sophisticatedstorage:barrel', '(woodType="oak")'))
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:copper_chest_from_assembler')
        .itemInputs('8x gtceu:copper_plate', Item.of('sophisticatedstorage:chest', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:copper_chest', '(woodType="oak")'))
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:iron_chest_from_assembler')
        .itemInputs('8x gtceu:iron_plate', Item.of('sophisticatedstorage:copper_chest', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:iron_chest', '(woodType="oak")'))
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:gold_chest_from_assembler')
        .itemInputs('8x gtceu:gold_plate', Item.of('sophisticatedstorage:iron_chest', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:gold_chest', '(woodType="oak")'))
        .duration(160)
        .EUt(64);
    event.recipes.gtceu.assembler('sophisticatedstorage:diamond_chest_from_assembler')
        .itemInputs('8x gtceu:diamond_plate', Item.of('sophisticatedstorage:gold_chest', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:diamond_chest', '(woodType="oak")'))
        .duration(300)
        .EUt(164);
    event.recipes.gtceu.assembler('sophisticatedstorage:netherite_chest_from_assembler')
        .itemInputs('8x gtceu:titanium_plate', Item.of('sophisticatedstorage:diamond_chest', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:netherite_chest', '(woodType="oak")'))
        .duration(600)
        .EUt(600);
    event.recipes.gtceu.assembler('sophisticatedstorage:copper_barrel_from_assembler')
        .itemInputs('8x gtceu:copper_plate', Item.of('sophisticatedstorage:barrel', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:copper_barrel', '(woodType="oak")'))
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:iron_barrel_from_assembler')
        .itemInputs('8x gtceu:iron_plate', Item.of('sophisticatedstorage:copper_barrel', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:iron_barrel', '(woodType="oak")'))
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:gold_barrel_from_assembler')
        .itemInputs('8x gtceu:gold_plate', Item.of('sophisticatedstorage:iron_barrel', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:gold_barrel', '(woodType="oak")'))
        .duration(160)
        .EUt(64);
    event.recipes.gtceu.assembler('sophisticatedstorage:diamond_barrel_from_assembler')
        .itemInputs('8x gtceu:diamond_plate', Item.of('sophisticatedstorage:gold_barrel', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:diamond_barrel', '(woodType="oak")'))
        .duration(300)
        .EUt(64);
    event.recipes.gtceu.assembler('sophisticatedstorage:netherite_barrel_from_assembler')
        .itemInputs('8x gtceu:titanium_plate', Item.of('sophisticatedstorage:diamond_barrel', '(woodType="oak")'))
        .itemOutputs(Item.of('sophisticatedstorage:netherite_barrel', '(woodType="oak")'))
        .duration(600)
        .EUt(600);

    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_base_from_assembler')
        .itemInputs('5x gtceu:wood_plate', '4x gtceu:wrought_iron_plate')
        .itemOutputs('1x sophisticatedstorage:upgrade_base')
        .duration(100)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_tier1_from_assembler')
        .itemInputs('1x sophisticatedstorage:upgrade_base', '8x gtceu:bronze_plate')
        .itemOutputs('1x sophisticatedstorage:stack_upgrade_tier_1')
        .duration(160)
        .EUt(12);
    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_tier2_from_assembler')
        .itemInputs('1x sophisticatedstorage:stack_upgrade_tier_1', '8x gtceu:steel_plate')
        .itemOutputs('1x sophisticatedstorage:stack_upgrade_tier_2')
        .duration(160)
        .EUt(24);
    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_tier3_from_assembler')
        .itemInputs('1x sophisticatedstorage:stack_upgrade_tier_2', '8x gtceu:aluminium_plate')
        .itemOutputs('1x sophisticatedstorage:stack_upgrade_tier_3')
        .duration(160)
        .EUt(64);
    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_tier4_from_assembler')
        .itemInputs('1x sophisticatedstorage:stack_upgrade_tier_3', '8x gtceu:stainless_steel_plate')
        .itemOutputs('1x sophisticatedstorage:stack_upgrade_tier_4')
        .duration(300)
        .EUt(164);
    event.recipes.gtceu.assembler('sophisticatedstorage:upgrade_tier5_from_assembler')
        .itemInputs('1x sophisticatedstorage:stack_upgrade_tier_4', '8x gtceu:titanium_plate')
        .itemOutputs('1x sophisticatedstorage:stack_upgrade_tier_5')
        .duration(600)
        .EUt(600);
    event.recipes.gtceu.assembler('sophisticatedstorage:controller_from_assembler')
        .itemInputs('4x gtceu:aluminium_plate', Item.of('sophisticatedstorage:barrel', '(woodType="oak")'), '2x #gtceu:circuits/mv')
        .itemOutputs('1x sophisticatedstorage:controller')
        .duration(300)
        .EUt(120);

    event.shaped('sophisticatedstorage:storage_tool', [
        'WPQ',
        ' RT',
        'R H'
    ], {
        P: '#gtceu:circuits/ulv',
        C: 'gtceu:lv_emitter',
        R: 'gtceu:steel_rod',
        T: 'gtceu:red_alloy_plate',
        W: '#forge:tools/wrench',
        H: '#forge:tools/hammers'
    })

    event.recipes.gtceu.assembler('sophisticatedstorage:storage_link_from_assembler')
    .itemInputs('1x gtceu:steel_plate', '1x gtceu:lv_emitter', '2x #gtceu:circuits/ulv')
    .itemOutputs('1x sophisticatedstorage:storage_link')
    .duration(300)
    .EUt(120);
})