// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    //植魔
    event.custom(
      {
        "type": "mythicbotany:rune_ritual",
        "group": "rune_rituals",
        "center": {
          "tag": "botania:runes/mana"
        },
        "runes": [
          {
            "rune": {
              "tag": "botania:runes/greed"
            },
            "x": -1,
            "z": -3,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/sloth"
            },
            "x": 1,
            "z": 3,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/gluttony"
            },
            "x": -3,
            "z": -1,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/lust"
            },
            "x": 3,
            "z": 1,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/spring"
            },
            "x": 1,
            "z": -3,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/summer"
            },
            "x": -1,
            "z": 3,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/autumn"
            },
            "x": 3,
            "z": -1,
            "consume": false
          },
          {
            "rune": {
              "tag": "botania:runes/winter"
            },
            "x": -3,
            "z": 1,
            "consume": false
          }
        ],
        "mana": 50000,
        "ticks": 200,
        "inputs": [
          {
            "item": 'minecraft:emerald'
          }
        ],
        "outputs": [
          {
            "item": "minecraft:villager_spawn_egg",
            "count": 2
          }
        ]
      }
    )//村民蛋

    //星辉
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 2,
            "duration": 60,
            "starlight": 200,
            "pattern": [
              "AB_BA",
              "BBBBB",
              "_BCB_",
              "BBBBB",
              "AB_BA"
            ],
            "key": {
              "A": {
                "item": "astralsorcery:illumination_powder"
              },
              "B": {
                "item": "scalinghealth:heart_crystal_shard"
              },
              "C": {
                "item": "astralsorcery:aquamarine"
              }
            },
            "output": [
              {
                "item": "scalinghealth:heart_crystal",
                "count": 1
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_discovery_central_beam"
            ]
    })//心晶
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 2,
            "duration": 60,
            "starlight": 200,
            "pattern": [
              "AB_BA",
              "BBBBB",
              "_BCB_",
              "BBBBB",
              "AB_BA"
            ],
            "key": {
              "A": {
                "item": "astralsorcery:illumination_powder"
              },
              "B": {
                "item": "scalinghealth:power_crystal_shard"
              },
              "C": {
                "item": "astralsorcery:aquamarine"
              }
            },
            "output": [
              {
                "item": "scalinghealth:power_crystal",
                "count": 1
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_discovery_central_beam"
            ]
    })//力晶

    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "AA_AA",
            "ABBBA",
            "_BCB_",
            "ABBBA",
            "AA_AA"
          ],
          "key": {
            "A": {
              "item": "astralsorcery:nocturnal_powder"
            },
            "B": {
              "item": "tconstruct:blood_bucket"
            },
            "C": {
              "item": "botania:rune_fire"
            }
          },
          "output": [
            {
              "item": "kubejs:blood_imprinting",
              "count": 2
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })//血腥之印记
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "DA_AD",
            "ABEBA",
            "_FCF_",
            "ABEBA",
            "DA_AD"
          ],
          "key": {
            "A": {
              "item": "astralsorcery:nocturnal_powder"
            },
            "B": {
              "item": "astralsorcery:starmetal_ingot"
            },
            "C": {
              "item": "botania:rune_mana"
            },
            "D": {
              "item": "astralsorcery:resonating_gem"
            },
            "E": {
              "item": "botania:blue_petal"
            },
            "F": {
              "item": "astralsorcery:stardust"
            },
          },
          "output": [
            {
              "item": "kubejs:luck_imprinting",
              "count": 2
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })//运势之印记
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "DA_AD",
            "ABEBA",
            "_BCB_",
            "ABEBA",
            "DA_AD"
          ],
          "key": {
            "A": {
              "item": "astralsorcery:nocturnal_powder"
            },
            "B": {
              "item": "minecraft:wheat"
            },
            "C": {
              "item": "botania:rune_autumn"
            },
            "D": {
              "item": "astralsorcery:resonating_gem"
            },
            "E": {
              "item": "minecraft:potato"
            }
          },
          "output": [
            {
              "item": "kubejs:harvest_imprinting",
              "count": 2
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })//收获之印记
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "EB_BE",
            "BBDBB",
            "_CAC_",
            "BBDBB",
            "EB_BE"
          ],
          "key": {
            "A": {
              "item": "minecraft:zombie_head"
            },
            "B": {
              "item": "astralsorcery:nocturnal_powder"
            },
            "C": {
              "item": "tconstruct:blood_bucket"
            },
            "D": {
              "item": 'mythicbotany:helheim_rune'
            },
            "E":{
              "item": "tconstruct:blood_slime_ball"
            }
          },
          "output": [
            {
              "item": "kubejs:zombie_totem",
              "count": 2
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })//僵尸之图腾
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "CB_BC",
            "BCDCB",
            "_CAC_",
            "_BCB_",
            "_____"
          ],
          "key": {
            "A": {
              "item": "minecraft:zombie_head"
            },
            "B": {
              "item": "astralsorcery:illumination_powder"
            },
            "C": {
              "item": "minecraft:gold_ingot"
            },
            "D": {
              "item": 'mythicbotany:helheim_rune'
            }
          },
          "output": [
            {
              "item": "kubejs:zombie_retreat_order",
              "count": 2
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })//亡灵退散之令

    //


    //血魔法
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 1,
          "duration": 100,
          "starlight": 800,
          "pattern": [
            "C___C",
            "_DBD_",
            "_FAF_",
            "_DBD_",
            "C___C"
          ],
          "key": {
            "A": {
              "item": 'minecraft:nether_star'
            },
            "B": {
              "item": 'mythicbotany:midgard_rune'
            },
            "C": {
              "item": 'kubejs:blood_imprinting',
            },
            "D": {
              "item": "astralsorcery:nocturnal_powder"
            },
            "E": {
              "item": 'astralsorcery:stardust'
            },
            "F": {
              "item": 'astralsorcery:starmetal_ingot'
            }
          },
          "output": [
            {
              "item": 'kubejs:blood_star',
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:discidia",
          "relay_inputs": [
            {
              "item": 'mythicbotany:kvasir_blood'
            },
            {
              "tag": 'kubejs:shifting_stars'
            },
            {
              "item": 'mythicbotany:kvasir_blood'
            },
            {
              "tag": 'kubejs:shifting_stars'
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
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "_____",
            "_DED_",
            "BDADB",
            "FCCCF",
            "FF_FF"
          ],
          "key": {
            "A": {
              "item": 'minecraft:furnace'
            },
            "B": {
              "item": 'astralsorcery:starmetal_ingot'
            },
            "C": {
              "item": 'tconstruct:rose_gold_ingot'
            },
            "D": {
              "item": 'botania:livingrock'
            },
            "E": {
              "type": "astralsorcery:crystal",
              "hasToBeAttuned": false,
              "hasToBeCelestial": true,
              "canBeAttuned": true,
              "canBeCelestialCrystal": true
            },
            "F":{
              "item": 'tconstruct:blood_slime_ball'
            }
          },
          "output": [
            {
              "item": "bloodmagic:altar",
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:evorsio",
          "relay_inputs": [
            {
              "item": "astralsorcery:resonating_gem"
            },
            {
              "item": "astralsorcery:nocturnal_powder"
            },
            {
              "item": "astralsorcery:stardust"
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
          "altar_type": 1,
          "duration": 100,
          "starlight": 300,
          "pattern": [
            "____A",
            "__CA_",
            "_DAC_",
            "_BD__",
            "_____"
          ],
          "key": {
            "A": {
              "tag": 'forge:glass'
            },
            "B": {
              "item": 'astralsorcery:starmetal_ingot'
            },
            "C": {
              "item": 'minecraft:gold_ingot'
            },
            "D": {
              "item": 'tconstruct:blood_slime_ball'
            }
          },
          "output": [
            {
              "item": 'bloodmagic:sacrificialdagger',
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
      }
    )
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 3,
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "_____",
            "_B_B_",
            "_DED_",
            "DACAD",
            "_D_D_"
          ],
          "key": {
            "A": {
              "item": 'minecraft:furnace'
            },
            "B": {
              "item": 'astralsorcery:starmetal_ingot'
            },
            "C": {
              "item": 'astralsorcery:starmetal'
            },
            "D": {
              "item": 'botania:livingrock'
            },
            "E":{
              "item": 'bloodmagic:blankslate'
            }
          },
          "output": [
            {
              "item": "bloodmagic:soulforge",
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:evorsio",
          "relay_inputs": [
            {
              "item": "astralsorcery:nocturnal_powder"
            },
            {
              "item": "astralsorcery:stardust"
            },
            {
              "item": "astralsorcery:stardust"
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
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "_____",
            "DDDDD",
            "_BFB_",
            "ECECE",
            "_____"
          ],
          "key": {
            "B": {
              "item": 'astralsorcery:starmetal_ingot'
            },
            "C": {
              "item": 'tconstruct:rose_gold_ingot'
            },
            "D": {
              "item": 'botania:livingrock'
            },
            "E": {
              "item": 'astralsorcery:infused_wood'
            },
            "F":{
              "item": 'bloodmagic:blankslate'
            }
          },
          "output": [
            {
              "item": 'bloodmagic:alchemytable',
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:evorsio",
          "relay_inputs": [
            {
              "item": "astralsorcery:nocturnal_powder"
            },
            {
              "item": "astralsorcery:stardust"
            },
            {
              "item": "astralsorcery:stardust"
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
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "_____",
            "_B_B_",
            "_C_C_",
            "_CEC_",
            "BDADB"
          ],
          "key": {
            "A": {
              "type": "bloodmagic:bloodorb",
              "orb_tier": 1
            },
            "B": {
              "item": 'minecraft:gold_ingot'
            },
            "C": {
              "item": 'botania:livingrock'
            },
            "D": {
              "item": 'botania:shimmerrock'
            },
            "E": {
              "item": 'minecraft:charcoal'
            }
          },
          "output": [
            {
              "item": 'bloodmagic:incensealtar',
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:evorsio",
          "relay_inputs": [
            {
              "item": "astralsorcery:nocturnal_powder"
            },
            {
              "item": "astralsorcery:stardust"
            },
            {
              "item": "astralsorcery:stardust"
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
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "_____",
            "_DDD_",
            "BEFEB",
            "DCACD",
            "_____"
          ],
          "key": {
            "A": {
              "item": 'minecraft:furnace'
            },
            "B": {
              "item": 'astralsorcery:starmetal_ingot'
            },
            "C": {
              "item": 'astralsorcery:starmetal'
            },
            "D": {
              "item": 'botania:livingrock'
            },
            "E":{
              "item": 'bloodmagic:infusedslate'
            },
            "F":{
              "type": "bloodmagic:bloodorb",
              "orb_tier": 3
            }
          },
          "output": [
            {
              "item": 'bloodmagic:alchemicalreactionchamber',
              "count": 1
            }
          ],
          "focus_constellation": "astralsorcery:evorsio",
          "relay_inputs": [
            {
              "item": "astralsorcery:nocturnal_powder"
            },
            {
              "item": "astralsorcery:stardust"
            },
            {
              "item": "astralsorcery:stardust"
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

    //


    //魔法使
    event.replaceInput({id: 'mahoutsukai:dagger'},'minecraft:iron_ingot','mythicbotany:alfsteel_ingot')
    event.replaceInput({id: 'mahoutsukai:dagger'},'minecraft:gold_ingot','botania:terrasteel_ingot')
    event.replaceInput({id: 'mahoutsukai:dagger'},'minecraft:stick','botania:dreamwood_twig')
    event.replaceInput({id: 'mahoutsukai:mortar'},'minecraft:diamond','botania:elementium_ingot')
    event.replaceInput({id: 'mahoutsukai:pestle'},'minecraft:diamond','botania:terrasteel_ingot')
    event.custom(
      {
        "type": "mythicbotany:infusion",
        "group": "infuser",
        "output": {
          "item": "kubejs:mahou_crystal_ball"
        },
        "mana": 4000000,
        "ingredients": [
          {
            "item": 'kubejs:gaia_block'
          },
          {
            "item": "mahoutsukai:powdered_diamond"
          },
          {
            "item": "mahoutsukai:powdered_emerald"
          },          
          {
            "item": "mahoutsukai:powdered_gold"
          },
          {
            "item": "mahoutsukai:powdered_iron"
          },
          {
            "item": "mahoutsukai:powdered_quartz"
          },
          {
            "item": "mahoutsukai:powdered_ender"
          },
          {
            "item": "mahoutsukai:powdered_eye"
          }
        ],
        "fromColor": 57599,
        "toColor": 15794431
      }
    )//水晶球
})