// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "infinite_convergent_altar",
        "controllerId": "multiblock",
        "ticks": 300,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:neutronium_gear',
                  "count": 8
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:double_compressed_crafting_table',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 300
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            },
            {
              "type": "masterfulmachinery:astral_starlight",
              "perTick": true,
              "data":{
                  "amount": 300
              }
            },
            {
              "type": "masterfulmachinery:botania_mana",
              "perTick": true,
              "data":{
                  "amount": 300
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'endless:extreme_crafting_table',
                    "count": 1
                }
            }
        ]
    }
    )//终极工作台

    //等价
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 200,
            "starlight": 1000,
            "pattern": [
              "FE ED",
              "CABAC",
              " BGB ",
              "CABAC",
              "DE EF"
            ],
            "key": {
              "A": {
                "item": 'minecraft:redstone'
              },
              "B": {
                "item": 'mekanism:ingot_refined_glowstone'
              },
              "C": {
                "item": 'endless:crystal_matrix_ingot'
              },
              "D": {
                "type": "astralsorcery:crystal",
                "hasToBeAttuned": false,
                "hasToBeCelestial": true,
                "canBeAttuned": true,
                "canBeCelestialCrystal": true
              },
              "E": {
                "item": "astralsorcery:resonating_gem"
              },
              "F": {
                "item": "endless:neutronium_ingot"
              },
              "G": {
                "item": "endless:endest_pearl"
              },
            },
            "output": [
              {
                "item": "kubejs:item_value_conversion_core",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:aevitas",
            "relay_inputs": [
              {
                "item": "astralsorcery:illumination_powder"
              },
              {
                "item": "astralsorcery:stardust"
              },
              {
                "item": "astralsorcery:nocturnal_powder"
              },
              {
                "tag": "kubejs:shifting_stars"
              },
              {
                "item": "create:chromatic_compound"
              },
              {
                "item": "projecte:high_covalence_dust"
              },
              {
                "item": "projecte:medium_covalence_dust"
              },
              {
                "item": "projecte:low_covalence_dust"
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )
    event.recipes.bloodmagic.altar('projecte:philosophers_stone', 'kubejs:item_value_conversion_core').upgradeLevel(3).altarSyphon(10000).consumptionRate(20).drainRate(10)

    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 180,
            "starlight": 800,
            "pattern": [
              "_____",
              "CDDDC",
              "ABBBA",
              "CDDDC",
              "_____"
            ],
            "key": {
              "A": {
                "item": "projecte:red_matter"
              },
              "B": {
                "item": "projecte:dark_matter"
              },
              "C": {
                "item": "endless:infinity_catalyst"
              },
              "D": {
                "item": "minecraft:water_bucket"
              },
            },
            "output": [
              {
                "item": "projecte:evertide_amulet",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:aevitas",
            "relay_inputs": [
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 180,
            "starlight": 800,
            "pattern": [
              "_____",
              "CDDDC",
              "ABBBA",
              "CDDDC",
              "_____"
            ],
            "key": {
              "A": {
                "item": "projecte:red_matter"
              },
              "B": {
                "item": "projecte:dark_matter"
              },
              "C": {
                "item": "endless:infinity_catalyst"
              },
              "D": {
                "item": "minecraft:lava_bucket"
              },
            },
            "output": [
              {
                "item": "projecte:volcanite_amulet",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:mineralis",
            "relay_inputs": [
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 180,
            "starlight": 800,
            "pattern": [
              "EFFFE",
              "FGCGF",
              "_CBC_",
              "FGCGF",
              "EFAFE"
            ],
            "key": {
              "A": {
                "item": "minecraft:clock"
              },
              "B": {
                "item": "tiab:timeinabottle"
              },
              "C": {
                "item": "endless:infinity_catalyst"
              },
              "E": {
                "item": "projecte:dark_matter"
              },
              "F": {
                "item": "minecraft:obsidian"
              },
              "G": {
                "item": "projecte:red_matter"
              },
            },
            "output": [
              {
                "item": "projecte:watch_of_flowing_time",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:horologium",
            "relay_inputs": [
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 180,
            "starlight": 800,
            "pattern": [
              "_CDE_",
              "_GFG_",
              "_BAB_",
              "_GFG_",
              "_EDC_"
            ],
            "key": {
              "A": {
                "item": "projecte:red_matter"
              },
              "B": {
                "item": "endless:infinity_catalyst"
              },
              "C": {
                "item": "projecte:high_covalence_dust"
              },
              "D": {
                "item": "projecte:medium_covalence_dust"
              },
              "E": {
                "item": "projecte:low_covalence_dust"
              },
              "F": {
                "item": "minecraft:paper"
              },
              "G": {
                "item": "minecraft:string"
              }
            },
            "output": [
              {
                "item": "projecte:repair_talisman",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:aevitas",
            "relay_inputs": [
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                },
                {
                    "item": "endless:neutronium_ingot"
                }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )

    event.custom(
        {
            "type": "endless:extreme_craft",
            "pattern": [
              "BEDDCDDEB",
              "ENIIKIIOE",
              "DILHKHLID",
              "DIHGGGHID",
              "CKKGAGKKC",
              "DIHGGGHID",
              "DILHKHLID",
              "EPIIKIIME",
              "BEDDCDDEB"
            ],
            "key": {
              "A": {
                "item": "projecte:philosophers_stone"
              },
              "B": {
                "item": "endless:crystal_matrix_block"
              },
              "C": {
                "item": "endless:neutronium_ingot"
              },
              "D": {
                "item": "minecraft:smooth_stone"
              },
              "E": {
                "item": "minecraft:obsidian"
              },
              "G": {
                "item": "projecte:high_covalence_dust"
              },
              "H": {
                "item": "projecte:medium_covalence_dust"
              },
              "I": {
                "item": "projecte:low_covalence_dust"
              },
              "K": {
                "item": "projecte:dark_matter"
              },
              "L": {
                "item": "projecte:red_matter"
              },
              "M": {
                "item": "appliedenergistics2:terminal"
              },
              "N": {
                "item": "appliedenergistics2:controller"
              },
              "O": {
                "item": "appliedenergistics2:chest"
              },
              "P": {
                "item": "appliedenergistics2:64k_storage_cell"
              }
            },
            "result": {
              "item": "projecte:transmutation_table"
            }
        }
    )
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 200,
            "starlight": 800,
            "pattern": [
              "FBMBF",
              "ELJLE",
              "GIKHG",
              "DLGLD",
              "FCCCF"
            ],
            "key": {
              "B": {
                "item": "botania:life_essence"
              },
              "C": {
                "item": "botania:gaia_ingot"
              },
              "D": {
                "item": "astralsorcery:starmetal_ingot"
              },
              "E": {
                "item": "astralsorcery:resonating_gem"
              },
              "F": {
                "tag": "astralsorcery:stardust"
              },
              "G": {
                "tag": "kubejs:shifting_stars"
              },
              "H": {
                "item": "appliedenergistics2:wireless_terminal"
              },
              "I": {
                "item": "appliedenergistics2:64k_portable_cell"
              },
              "J": {
                "item": "appliedenergistics2:singularity"
              },
              "K": {
                "item": "projecte:transmutation_table"
              },
              "L": {
                "item": "projecte:red_matter"
              },
              "M": {
                "item": "thermal:upgrade_augment_3"
              }
            },
            "output": [
              {
                "item": "projecte:transmutation_tablet",
                "count": 1
              }
            ],
            "focus_constellation": "astralsorcery:horologium",
            "relay_inputs": [
              {
                "item": "create:refined_radiance"
              },
              {
                "item": "create:refined_radiance"
              },
              {
                "item": "create:refined_radiance"
              },
              {
                "item": "create:refined_radiance"
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_constellation_finish",
              "astralsorcery:built_in_effect_trait_relay_highlight",
              "astralsorcery:built_in_effect_discovery_central_beam",
              "astralsorcery:built_in_effect_trait_focus_circle",
              "astralsorcery:focus_dust_swirl",
              "astralsorcery:focus_edge",
              "astralsorcery:altar_focus_sparkle",
              "astralsorcery:altar_default_sparkle",
              "astralsorcery:built_in_effect_constellation_lines",
              "astralsorcery:built_in_effect_attunement_sparkle"
            ]
        }
    )

    event.custom(
        {
            "type": "endless:extreme_craft",
            "pattern": [
              "DEB      ",
              "ECAA     ",
              "BA  A    ",
              " A  A    ",
              "  AACAA  ",
              "    A  A ",
              "    A  AB",
              "     AACE",
              "      BED"
            ],
            "key": {
              "A": {
                "item": "endless:infinity_ingot"
              },
              "B": {
                "item": "endless:diamond_lattice"
              },
              "C": {
                "item": "endless:infinity_catalyst"
              },
              "D": {
                "item": "endless:neutronium_ingot"
              },
              "E": {
                "item": "endless:crystal_matrix_ingot"
              }
            },
            "result": {
              "item": "kubejs:infinite_evidence"
            }
        }
    )//无尽之证

    event.smithing(Item.of('mekanism:creative_energy_cube',{mekData:{EnergyContainers:[{Container:0,stored:"18446744073709551615.9999"}]}}),'mekanism:ultimate_energy_cube', 'kubejs:infinite_evidence')
    event.smithing('create:creative_motor','steampowered:steel_flywheel', 'kubejs:infinite_evidence')
    event.smithing('mekanism:creative_fluid_tank','mekanism:ultimate_fluid_tank', 'kubejs:infinite_evidence')
    event.smithing('mekanism:creative_chemical_tank','mekanism:ultimate_chemical_tank', 'kubejs:infinite_evidence')
    event.smithing('thermal:rf_coil_creative_augment', 'thermal:rf_coil_augment', 'kubejs:infinite_evidence')
    event.smithing('thermal:fluid_tank_creative_augment', 'thermal:fluid_tank_augment', 'kubejs:infinite_evidence')
    event.smithing('thermal:machine_efficiency_creative_augment', 'thermal:machine_efficiency_augment', 'kubejs:infinite_evidence')
    event.smithing('thermal:machine_catalyst_creative_augment', 'thermal:machine_catalyst_augment', 'kubejs:infinite_evidence')
    event.smithing('create:creative_crate', 'create:adjustable_crate', 'kubejs:infinite_evidence')
    event.smithing('create:creative_fluid_tank', 'create:fluid_tank', 'kubejs:infinite_evidence')
    event.smithing('create:creative_blaze_cake', 'create:blaze_cake', 'kubejs:infinite_evidence')
    event.smithing('appliedenergistics2:creative_storage_cell', 'appliedenergistics2:64k_storage_cell', 'kubejs:infinite_evidence')
    event.smithing('botania:creative_pool', 'botania:fabulous_pool', 'kubejs:infinite_evidence')
    event.smithing(Item.of('botania:mana_tablet', '{mana:500000,creative:1b}'), 'botania:mana_tablet', 'kubejs:infinite_evidence')
    event.smithing('storagedrawers:creative_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'kubejs:infinite_evidence')
    event.smithing('storagedrawers:creative_vending_upgrade', 'storagedrawers:creative_storage_upgrade', 'kubejs:infinite_evidence')
    event.smithing('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'kubejs:infinite_evidence')
    event.smithing('projecte:tome', 'minecraft:book', 'kubejs:infinite_evidence')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"upgrades"}), 'tconstruct:sky_slime_crystal', 'kubejs:infinite_evidence')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"defense"}), 'tconstruct:earth_slime_crystal', 'kubejs:infinite_evidence')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"abilities"}), 'tconstruct:ender_slime_crystal', 'kubejs:infinite_evidence')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"souls"}), 'tconstruct:ichor_slime_crystal', 'kubejs:infinite_evidence')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"sensor"}), 'minecraft:gold_nugget', 'kubejs:infinite_evidence')

    event.custom(
      {
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "kubejs:infinite_evidence"
          }
        ],
        "output": [
          {
            "item": "edtc:dream_element_lump"
          },
          {
            "item": "edtc:dream_element_lump"
          },
          {
            "item": "edtc:dream_element_lump"
          }
        ]
      }
    )
})