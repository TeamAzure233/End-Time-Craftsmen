events.listen('recipes', event => {
    event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:oak_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:oak_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:oak_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:oak_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.3,
              "output": {
                "item": "minecraft:apple"
              },
              "minRolls": 1,
              "maxRolls": 3
            }
          ]
      }
  )
  event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:spruce_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:spruce_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:spruce_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:spruce_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            }
          ]
      }
  )
  event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:birch_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:birch_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:birch_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:birch_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            }
          ]
      }
  )
  event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:jungle_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:jungle_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:jungle_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:jungle_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            }
          ]
      }
  )
  event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:acacia_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:acacia_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:acacia_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:acacia_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            }
          ]
      }
  )
  event.custom(
      {
          "type": "botanypots:crop",
          "seed": {
            "item": "minecraft:dark_oak_sapling"
          },
          "categories":["dirt"],
          "growthTicks": 1000,
          "growthModifier": 1,
          "display": {
            "block": "minecraft:dark_oak_sapling",
          },
          "results": [
            {
              "chance": 1,
              "output": {
                "item": "minecraft:dark_oak_log"
              },
              "minRolls": 3,
              "maxRolls": 6
            },
            {
              "chance": 0.5,
              "output": {
                "item": "minecraft:dark_oak_sapling"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.4,
              "output": {
                "item": "minecraft:stick"
              },
              "minRolls": 1,
              "maxRolls": 5
            },
            {
              "chance": 0.3,
              "output": {
                "item": "minecraft:apple"
              },
              "minRolls": 1,
              "maxRolls": 3
            }
          ]
      }
  )

  event.custom(
        {
            "type": "botanypots:soil",
            "input": {
              "item": "kubejs:chromatic_compound_block"
            },
            "display": {
              "block": "kubejs:chromatic_compound_block"
            },
            "growthModifier": 0.1,
            "categories": ["chromatic"]
        }
    )
  event.custom(
      {
          "type": "botanypots:soil",
          "input": {
            "item": "minecraft:purpur_block"
          },
          "display": {
            "block": "minecraft:purpur_block"
          },
          "growthModifier": 0.1,
          "categories": ["purpur"]
      }
  )

  event.custom(
        {
            "type": "botanypots:crop",
            "seed": {
              "item": "kubejs:chorus_crystal"
            },
            "categories":["purpur"],
            "growthTicks": 1000,
            "growthModifier": 1,
            "display": {
              "block": "minecraft:purpur_pillar"
            },
            "results": [
              {
                "chance": 0.8,
                "output": {
                  "item": "minecraft:shulker_shell"
                },
                "minRolls": 1,
                "maxRolls": 2
              }
            ]
        }
    )
  event.custom(
    {
        "type": "botanypots:crop",
        "seed": {
          "item": "quark:myalite_crystal"
        },
        "categories":["end_stone"],
        "growthTicks": 800,
        "growthModifier": 1,
        "display": {
          "block": "quark:myalite_crystal"
        },
        "results": [
          {
           "chance": 1,
           "output": {
              "item": "quark:myalite_crystal"
            },
            "minRolls": 1,
            "maxRolls": 1
          },
          {
            "chance": 0.8,
            "output": {
               "item": "quark:myalite_crystal"
             },
             "minRolls": 1,
             "maxRolls": 2
           }
        ]
    }
)
event.custom(
  {
      "type": "botanypots:crop",
      "seed": {
        "item": "minecraft:dragon_breath"
      },
      "categories":["end_stone"],
      "growthTicks": 800,
      "growthModifier": 1,
      "display": {
        "block": "minecraft:purple_stained_glass"
      },
      "results": [
        {
         "chance": 1,
         "output": {
            "item": "minecraft:dragon_breath"
          },
          "minRolls": 1,
          "maxRolls": 4
        }
      ]
  }
)
event.custom(
  {
      "type": "botanypots:crop",
      "seed": {
        "item": "mysticalagriculture:prosperity_shard"
      },
      "categories":["inferium"],
      "growthTicks": 600,
     "growthModifier": 1,
      "display": {
        "block": "mysticalagriculture:prosperity_block"
      },
      "results": [
        {
        "chance": 0.9,
        "output": {
            "item": "mysticalagriculture:prosperity_shard"
          },
          "minRolls": 1,
          "maxRolls": 2
        }
      ]
  }
)
event.custom(
  {
      "type": "botanypots:crop",
      "seed": {
        "item": "extendedcrafting:luminessence_block"
      },
      "categories":["insanium"],
      "growthTicks": 2000,
     "growthModifier": 1,
      "display": {
        "block": "extendedcrafting:luminessence_block"
      },
      "results": [
        {
        "chance": 1,
        "output": {
            "item": "extendedcrafting:luminessence"
          },
          "minRolls": 1,
          "maxRolls": 4
        }
      ]
  }
)
event.custom(
  {
      "type": "botanypots:crop",
      "seed": {
        "item": "create:blaze_cake"
      },
      "categories":["tertium"],
      "growthTicks": 500,
     "growthModifier": 1,
      "display": {
        "block": "minecraft:magma_block"
      },
      "results": [
        {
        "chance": 0.8,
        "output": {
            "item": "create:blaze_cake"
          },
          "minRolls": 1,
          "maxRolls": 4
        }
      ]
  }
)
event.custom(
  {
      "type": "botanypots:crop",
      "seed": {
        "item": "kubejs:gaia_block"
      },
      "categories":["tertium"],
      "growthTicks": 1500,
     "growthModifier": 1,
      "display": {
        "block": "kubejs:gaia_block"
      },
      "results": [
        {
        "chance": 1.5,
        "output": {
            "item": "botania:life_essence"
          },
          "minRolls": 1,
          "maxRolls": 4
        }
      ]
  }
)
})