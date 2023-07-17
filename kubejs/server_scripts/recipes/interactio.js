// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.custom({
      "type": "interactio:item_fluid_transform",
      "inputs": [
      {
        "item": "gofish:can_dirty",
        "count": 1,
        "return_chance": 0
      }
      ],
      "fluid": {
      "fluid": "minecraft:water"
      },
      "output": {
      "entries": [
      {
        "result": {
          "item": "gofish:can_empty",
          "count": 1
        },
        "weight": 10
      } 
      ],
      },
      "consume_fluid": 0.01
    })
    event.custom({
      "type": "interactio:item_fluid_transform",
      "inputs": [
      {
        "tag": "forge:storage_blocks/brass",
        "count": 2,
        "return_chance": 0.01
      }
      ],
      "fluid": {
      "fluid": "tconstruct:blazing_blood"
      },
      "output": {
      "entries": [
      {
        "result": {
          "item": "kubejs:blaze_brass",
          "count": 1
        },
        "weight": 8
      } 
      ],
        "empty_weight": 2
      },
      "consume_fluid": 0.8
    })
    event.custom({
        "type": "interactio:item_explode",
        "inputs": [{
            "item": "kubejs:fragments",
            "count": 3
           }
        ],
        "output": {
          "entries": [
            {
              "result": {
                "item": "rftoolsbase:dimensionalshard",
                "count": 1
              },
              "weight": 9
            }
          ],
          "empty_weight": 1,
        }
    })
    event.custom({
      "type": "interactio:block_explode",
      "input": {
        "block": "minecraft:blue_ice"
      },
      "output": {
        "type": "item",
        "entries": [
          {
            "result": {
              "item": "thermal:blizz_rod"
            },
            "weight": 6
          }
          ,{
            "result": {
              "item": "minecraft:packed_ice"
            },
            "weight": 3
          }
        ],
        "empty_weight": 1
      }
  })
})