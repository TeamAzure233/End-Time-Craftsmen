events.listen('recipes', event => {
    event.custom(
        {
            "type": "botanypots:crop",
            "seed": {
              "item": "kubejs:chorus_crystal"
            },
            "categories":["chromatic"],
            "growthTicks": 1000,
            "growthModifier": 1,
            "display": {
              "block": "minecraft:shulker_box"
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
            }
          ]
      }
  )
})