events.listen('recipes', event => {
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
  event.custom({
    "type": "interactio:item_explode",
    "inputs": [{
        "item": "extendedcrafting:ultimate_singularity",
        "count": 1
        }
    ],
        "output": {
          "entries": [
            {
                "result": {
                  "item": "kubejs:world_heart",
                  "count": 1
                },
                "weight": 0.001
            },
            {
              "result": {
                "item": "kubejs:natural_heart",
                "count": 1
              },
              "weight": 1
            }
            ,{
              "result": {
                "item": "kubejs:magical_heart",
                "count": 1
              },
              "weight": 1
            }
            ,{
                "result": {
                  "item": "kubejs:industrial_heart",
                  "count": 1
                },
                "weight": 1
            }
            ,{
                "result": {
                  "item": "create:creative_motor",
                  "count": 1
                },
                "weight": 1
            }
            ,{
                "result": {
                  "item": "create:creative_fluid_tank",
                  "count": 1
                },
                "weight": 1
            }
            ,{
                "result": {
                  "item": "thermal:rf_coil_creative_augment",
                  "count": 1
                },
                "weight": 1
            }
            ,{
                "result": {
                  "item": "appliedenergistics2:creative_storage_cell",
                  "count": 1
                },
                "weight": 1
            }
          ],
          "empty_weight": 2.999,
        }
     })
})