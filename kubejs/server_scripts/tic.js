onEvent('recipes', event => { 
    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_andesite_alloy",
          "amount": 576
        },
        "result": "kubejs:andesite_alloy_block",
        "cooling_time": 150
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_andesite_alloy",
              "amount": 144
            },
            "result": "create:andesite_alloy",
            "cooling_time": 50
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_andesite_alloy",
              "amount": 144
            },
            "result": "create:andesite_alloy",
            "cooling_time": 50
        }
    )
    event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/multi_use/nugget"
          },
          "fluid": {
            "name": "kubejs:molten_andesite_alloy",
            "amount": 36
          },
          "result": "kubejs:andesite_alloy_nugget",
          "cooling_time": 13
      }
  )
  event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/single_use/nugget",
            "cast_consumed": true,
          },
          "fluid": {
            "name": "kubejs:molten_andesite_alloy",
            "amount": 36
          },
          "result": "kubejs:andesite_alloy_nugget",
          "cooling_time": 13
      }
  )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:andesite_alloy_block"
            },
            "result": {
              "fluid": "kubejs:molten_andesite_alloy",
              "amount": 576
            },
            "temperature": 800,
            "time": 150
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "create:andesite_alloy"
            },
            "result": {
              "fluid": "kubejs:molten_andesite_alloy",
              "amount": 144
            },
            "temperature": 800,
            "time": 50
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:andesite_alloy_nugget"
            },
            "result": {
              "fluid": "kubejs:molten_andesite_alloy",
              "amount": 36
            },
            "temperature": 800,
            "time": 13
        }
    )

    event.custom(
        {
          "type": "tconstruct:melting",
          "ingredient": {
            "item": "steampowered:cast_iron_ingot"
          },
          "result": {
            "fluid": "kubejs:molten_cast_iron",
            "amount": 144
          },
          "temperature": 900,
          "time": 60
        }
    )
    event.custom(
        {
          "type": "tconstruct:melting",
          "ingredient": {
            "item": "steampowered:cast_iron_sheet"
          },
          "result": {
            "fluid": "kubejs:molten_cast_iron",
            "amount": 144
          },
          "temperature": 900,
          "time": 60
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:cast_iron_block"
            },
            "result": {
              "fluid": "kubejs:molten_cast_iron",
              "amount": 1296
            },
            "temperature": 900,
            "time": 180
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:cast_iron_nugget"
            },
            "result": {
              "fluid": "kubejs:molten_cast_iron",
              "amount": 16
            },
            "temperature": 900,
            "time": 13
        }
    )
    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_cast_iron",
          "amount": 1296
        },
        "result": "kubejs:cast_iron_block",
        "cooling_time": 180
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_cast_iron",
              "amount": 144
            },
            "result": "steampowered:cast_iron_ingot",
            "cooling_time": 60
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_cast_iron",
              "amount": 144
            },
            "result": "steampowered:cast_iron_ingot",
            "cooling_time": 60
        }
    )
        event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/plate"
            },
            "fluid": {
              "name": "kubejs:molten_cast_iron",
              "amount": 144
            },
            "result": "steampowered:cast_iron_sheet",
            "cooling_time": 60
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/plate",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_cast_iron",
              "amount": 144
            },
            "result": "steampowered:cast_iron_sheet",
            "cooling_time": 60
        }
    )
    event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/multi_use/nugget"
          },
          "fluid": {
            "name": "kubejs:molten_cast_iron",
            "amount": 16
          },
          "result": "kubejs:cast_iron_nugget",
          "cooling_time": 13
      }
  )
  event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/single_use/nugget",
            "cast_consumed": true,
          },
          "fluid": {
            "name": "kubejs:molten_cast_iron",
            "amount": 16
          },
          "result": "kubejs:cast_iron_nugget",
          "cooling_time": 13
      }
  )

    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_blaze_brass",
          "amount": 1296
        },
        "result": "kubejs:blaze_brass_block",
        "cooling_time": 200
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_blaze_brass",
              "amount": 144
            },
            "result": "kubejs:blaze_brass",
            "cooling_time": 23
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_blaze_brass",
              "amount": 144
            },
            "result": "kubejs:blaze_brass",
            "cooling_time": 23
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:blaze_brass_block"
            },
            "result": {
              "fluid": "kubejs:molten_blaze_brass",
              "amount": 1296
            },
            "temperature": 1100,
            "time": 200
        }
    )
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "kubejs:blaze_brass"
        },
        "result": {
          "fluid": "kubejs:molten_blaze_brass",
          "amount": 144
        },
        "temperature": 1100,
        "time": 23
      }
    )

    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_chorus_chrome",
          "amount": 1296
        },
        "result": "kubejs:chorus_chrome_block",
        "cooling_time": 200
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_chorus_chrome",
              "amount": 144
            },
            "result": "kubejs:chorus_chrome",
            "cooling_time": 23
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_chorus_chrome",
              "amount": 144
            },
            "result": "kubejs:chorus_chrome",
            "cooling_time": 200
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:chorus_chrome_block"
            },
            "result": {
              "fluid": "kubejs:molten_chorus_chrome",
              "amount": 1296
            },
            "temperature": 1400,
            "time": 23
        }
    )
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "kubejs:chorus_chrome"
        },
        "result": {
          "fluid": "kubejs:molten_chorus_chrome",
          "amount": 144
        },
        "temperature": 1400,
        "time": 23
      }
    )

    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_antimatter_alloy",
          "amount": 1296
        },
        "result": "kubejs:antimatter_alloy_block",
        "cooling_time": 270
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_antimatter_alloy",
              "amount": 144
            },
            "result": "kubejs:antimatter_alloy",
            "cooling_time": 30
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_antimatter_alloy",
              "amount": 144
            },
            "result": "kubejs:antimatter_alloy",
            "cooling_time": 30
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:antimatter_alloy_block"
            },
            "result": {
              "fluid": "kubejs:molten_antimatter_alloy",
              "amount": 1296
            },
            "temperature": 1500,
            "time": 270
        }
    )
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "kubejs:antimatter_alloy"
        },
        "result": {
          "fluid": "kubejs:molten_antimatter_alloy",
          "amount": 144
        },
        "temperature": 1500,
        "time": 270
      }
    )

    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_insanium",
          "amount": 1296
        },
        "result": "mysticalagradditions:insanium_ingot_block",
        "cooling_time": 270
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_insanium",
              "amount": 144
            },
            "result": "mysticalagradditions:insanium_ingot",
            "cooling_time": 30
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_insanium",
              "amount": 144
            },
            "result": "mysticalagradditions:insanium_ingot",
            "cooling_time": 30
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "mysticalagradditions:insanium_ingot_block"
            },
            "result": {
              "fluid": "kubejs:molten_insanium",
              "amount": 1296
            },
            "temperature": 1100,
            "time": 270
        }
    )
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "mysticalagradditions:insanium_ingot"
        },
        "result": {
          "fluid": "kubejs:molten_insanium",
          "amount": 144
        },
        "temperature": 1100,
        "time": 30
      }
    )
    event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/multi_use/nugget"
          },
          "fluid": {
            "name": "kubejs:molten_insanium",
            "amount": 16
          },
          "result": "mysticalagradditions:insanium_nugget",
          "cooling_time": 4
      }
    )
    event.custom(
      {
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/single_use/nugget",
            "cast_consumed": true,
          },
          "fluid": {
            "name": "kubejs:molten_insanium",
            "amount": 16
          },
          "result": "mysticalagradditions:insanium_nugget",
          "cooling_time": 4
      }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "mysticalagradditions:insanium_nugget"
            },
            "result": {
              "fluid": "kubejs:molten_insanium",
              "amount": 16
            },
            "temperature": 1100,
            "time": 4
        }
    )

    event.custom(
        {
        "type": "tconstruct:casting_basin",
        "fluid": {
          "name": "kubejs:molten_overcharged_alloy",
          "amount": 1296
        },
        "result": "kubejs:overcharged_alloy_block",
        "cooling_time": 225
      }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/ingot"
            },
            "fluid": {
              "name": "kubejs:molten_overcharged_alloy",
              "amount": 144
            },
            "result": "createaddition:overcharged_alloy",
            "cooling_time": 75
        }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/ingot",
              "cast_consumed": true,
            },
            "fluid": {
              "name": "kubejs:molten_overcharged_alloy",
              "amount": 144
            },
            "result": "createaddition:overcharged_alloy",
            "cooling_time": 75
        }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
              "item": "kubejs:overcharged_alloy_block"
            },
            "result": {
              "fluid": "kubejs:molten_overcharged_alloy",
              "amount": 1296
            },
            "temperature": 1300,
            "time": 225
        }
    )
    event.custom(
      {
        "type": "tconstruct:melting",
        "ingredient": {
          "item": "createaddition:overcharged_alloy"
        },
        "result": {
          "fluid": "kubejs:molten_overcharged_alloy",
          "amount": 144
        },
        "temperature": 1300,
        "time": 25
      }
    )

    event.custom(
      {
        "type": "tconstruct:ore_melting",
        "ingredient": {
          "item": "kubejs:gaia_block"
        },
        "result": {
          "fluid": "kubejs:molten_gaia",
          "amount": 432
        },
        "temperature": 1300,
        "time": 225,
        "byproducts": [
          {
            "fluid": "materialis:molten_terrasteel",
            "amount": 864
          }
        ]
      }
    )
    event.custom(
      {
        "type": "tconstruct:ore_melting",
        "ingredient": {
          "item": "botania:gaia_ingot"
        },
        "result": {
          "fluid": "kubejs:molten_gaia",
          "amount": 48
        },
        "temperature": 1300,
        "time": 25,
        "byproducts": [
          {
            "fluid": "materialis:molten_terrasteel",
            "amount": 96
          }
        ]
      }
    )
})