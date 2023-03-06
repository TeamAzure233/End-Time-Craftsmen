onEvent('recipes', event => {
    event.remove({id: 'notreepunching:flint_pickaxe'})
    event.remove({id: 'notreepunching:flint_hoe'})
    event.remove({output: '#forge:tools/mattocks'})
    event.remove({id: 'tconstruct:common/flint'})
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:edtc_guide"}'),['minecraft:book','minecraft:cobblestone'])
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:the_dawn_project"}'),['minecraft:book','#minecraft:planks'])
    event.shapeless(Item.of('akashictome:tome', '{"akashictome:data":{tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:"armor.plate_chestplate"}}}},astralsorcery:{id:"astralsorcery:tome",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},immersiveengineering:{id:"immersiveengineering:manual",Count:1b},woot:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"woot:wootguide"}},mahoutsukai:{id:"mahoutsukai:guidebook",Count:1b},extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},modularrouters:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"modularrouters:book"}},botania:{id:"botania:lexicon",Count:1b},bloodmagic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bloodmagic:guide"}},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"patchouli:edtc_guide"}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},croptopia:{id:"croptopia:guide",Count:1b},parcool:{id:"parcool:parcool_guide",Count:1b}}}'),['#forge:bookshelves',Item.of('akashictome:tome').ignoreNBT()])
    event.remove({id: 'croptopia:steamed_rice'})
    event.remove({id: 'minecraft:bread'})
    event.remove({id: 'appliedenergistics2:grinder/flour'})
    event.remove({input: 'appliedenergistics2:flour'})
    event.remove({output: 'create:dough'})
    event.remove({input: 'create:dough'})
    event.remove({output: 'farmersdelight:wheat_dough'})
    event.remove({id: 'croptopia:knife'})
    event.remove({id: 'thermal:rubber_from_vine'})
    event.remove({id: 'thermal:rubber_3'})
    event.remove({id: 'thermal:rubber_from_dandelion'})
    event.recipes.createFilling('thermal:rubber', [Fluid.of('thermal:latex', 250), 'kubejs:gel'])
    event.shaped('3x farmersdelight:wheat_dough', [
        'BA',
        'AA'
    ], {
        A: 'create:wheat_flour',
        B: '#forge:eggs'
    })
    event.shapeless('minecraft:slime_ball', ['farmersdelight:wheat_dough', 'minecraft:lime_dye'])
    event.remove({id: 'extendedcrafting:ender_crafter'})
    event.remove({id: 'extendedcrafting:ender_alternator'})
    event.remove({output: '#inventorypets:all_pets'})

    event.replaceInput({output: 'tconstruct:efln_ball'}, 'minecraft:flint', 'minecraft:tnt')

    event.remove({input: 'charm:netherite_nugget'})
    event.remove({output: 'charm:netherite_nugget'})

    event.remove({output: 'create:precision_mechanism'})
    event.remove({id: 'create:mechanical_crafting/flywheel'})
    event.remove({id: 'create:mechanical_crafting/furnace_engine'})
    event.remove({id: 'createaddition:crafting/furnace_burner'})
    event.remove({id: 'createaddition:crafting/crude_burner'})
    event.remove({id: 'steampowered:alternator'})
    event.remove({output: 'create:andesite_alloy'})
    event.remove({output: 'create:cogwheel'})
    event.remove({output: 'create:large_cogwheel'})
    event.shapeless('create:cogwheel', ['create:shaft','#minecraft:planks'])
    event.shapeless('create:large_cogwheel', ['create:shaft','#minecraft:planks','#minecraft:planks'])
    event.remove({output: 'minecraft:ender_eye'})
    event.recipes.createMixing(['minecraft:ender_eye'],['minecraft:blaze_powder', 'minecraft:ender_pearl', Fluid.of('astralsorcery:liquid_starlight', 100)]).heated()

    event.replaceInput({id: 'miniutilities:ender_dust_to_ender_pearl'}, 'miniutilities:ender_dust', '#forge:dusts/ender')

    event.remove({id: 'miniutilities:unstable_ingot'})
    event.recipes.createCompacting(['4x miniutilities:unstable_ingot'],['4x minecraft:netherite_block' ,'8x minecraft:tnt', '2x #forge:storage_blocks/uranium']).superheated()

    event.remove({id: 'vehicle:fluid_mixer'})
    event.remove({id: 'vehicle:fluid_extracter'})
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 600)],['#forge:dusts/ender']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 450)],['minecraft:blaze_powder']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 1000)],['#forge:dusts/ender']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 650)],['minecraft:blaze_powder']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:fuelium', 200)], [Fluid.of('vehicle:blaze_juice', 100), Fluid.of('vehicle:ender_sap', 100), 'minecraft:glowstone_dust']).superheated()
    
    event.shaped('kubejs:hyperspace_time_broom_mk1', [
        '  A',
        ' A ',
        'B  '
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:wheat'
    })

    event.shaped('pouchofunknown:pouch', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'sophisticatedbackpacks:backpack',
        B: 'minecraft:gold_ingot'
    })

    event.remove({id: 'thermal:saw_blade'})
    event.shaped('thermal:saw_blade', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/tin'
    })
    event.remove({id: 'thermal:drill_head'})
    event.shaped('thermal:drill_head', [
        ' I ',
        'ITI',
        'IAI'
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:plates/tin',
        T: 'minecraft:iron_ingot'
    })
    event.shaped('kubejs:rake', [
        'III',
        'ATA',
        ' A '
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:rods/iron',
        T: '#forge:plates/iron'
    })
    event.shaped('kubejs:plough', [
        'III',
        'ATA',
        ' A '
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:plates/iron',
        T: 'minecraft:iron_ingot'
    })

    event.shaped('kubejs:andesite_alloy_block', [
            'AA',
            'AA'
        ], {
            A: 'create:andesite_alloy'
    })
    event.shapeless('4x create:andesite_alloy', ['kubejs:andesite_alloy_block'])

    event.shaped('create:andesite_alloy', [
        'AA',
        'AA'
    ], {
        A: 'kubejs:andesite_alloy_nugget'
    })
    event.shapeless('4x kubejs:andesite_alloy_nugget', ['create:andesite_alloy'])

    event.shaped('kubejs:machinery_alloy_block', [
            'AAA',
            'A A',
            'AAA'
        ], {
            A: 'kubejs:machinery_alloy'
    })
    event.shapeless('8x kubejs:machinery_alloy', ['kubejs:machinery_alloy_block'])

    event.shaped('kubejs:rose_quartz_block', [
            'AA',
            'AA'
        ], {
            A: 'create:polished_rose_quartz'
          })
    event.shapeless('4x create:polished_rose_quartz', ['kubejs:rose_quartz_block'])

    event.shaped('kubejs:chromatic_compound_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'create:chromatic_compound'
          })
    event.shapeless('9x create:chromatic_compound', ['kubejs:chromatic_compound_block'])

    event.shaped('kubejs:shadow_steel_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'create:shadow_steel'
          })
    event.shapeless('9x create:shadow_steel', ['kubejs:shadow_steel_block'])

    event.shaped('kubejs:refined_radiance_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'create:refined_radiance'
          })
    event.shapeless('9x create:refined_radiance', ['kubejs:refined_radiance_block'])

    event.shaped('kubejs:overcharged_alloy_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'createaddition:overcharged_alloy'
      })
    event.shapeless('9x createaddition:overcharged_alloy', ['kubejs:overcharged_alloy_block'])

    event.shaped('kubejs:blaze_brass_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:blaze_brass'
          })
    event.shapeless('9x kubejs:blaze_brass', ['kubejs:blaze_brass_block'])
    event.shaped('kubejs:chorus_chrome_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:chorus_chrome'
          })
    event.shapeless('9x kubejs:chorus_chrome', ['kubejs:chorus_chrome_block'])
    event.shaped('kubejs:gaia_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'botania:gaia_ingot'
          })
    event.shapeless('9x botania:gaia_ingot', ['kubejs:gaia_block'])

    event.recipes.createCompacting(['botania:blaze_block'],['18x minecraft:blaze_powder'])
    event.replaceInput({id: 'botania:natura_pylon'}, 'minecraft:ender_eye', 'botania:mana_pearl')
    event.replaceInput({id: 'mythicbotany:alfsteel_pylon'}, 'minecraft:ghast_tear', 'botania:mana_powder')
    event.replaceInput({output: 'minecraft:beacon'}, 'minecraft:nether_star', 'botania:dragonstone_block')
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
    )

    event.remove({id: 'botania:terra_pick'})
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 500000,
        "ingredients": [
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:mana_tablet"
          }
        ],
        "result": {
          "item": "botania:terra_pick"
        }
      }
    )
    event.remove({id: 'botania:terra_axe'})
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 250000,
        "ingredients": [
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "minecraft:glowstone"
          }
        ],
        "result": {
          "item": "botania:terra_axe"
        }
      }
    )

    event.remove({id: 'botania:terrasteel_helmet'})
    event.remove({id: 'botania:terrasteel_chestplate'})
    event.remove({id: 'botania:terrasteel_leggings'})
    event.remove({id: 'botania:terrasteel_boots'})
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 250000,
        "ingredients": [
          {
            "item": "botania:manasteel_helmet"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "tag": "botania:runes/spring"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          }
        ],
        "result": {
          "item": "botania:terrasteel_helmet"
        }
      }
    )
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 250000,
        "ingredients": [
          {
            "item": "botania:manasteel_chestplate"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "tag": "botania:runes/summer"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          }
        ],
        "result": {
          "item": "botania:terrasteel_chestplate"
        }
      }
    )
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 250000,
        "ingredients": [
          {
            "item": "botania:manasteel_leggings"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "tag": "botania:runes/autumn"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          }
        ],
        "result": {
          "item": "botania:terrasteel_leggings"
        }
      }
    )
    event.custom(
      {
        "type": "botania:terra_plate",
        "mana": 250000,
        "ingredients": [
          {
            "item": "botania:manasteel_boots"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "item": "botania:livingwood_twig"
          },
          {
            "tag": "botania:runes/winter"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          },
          {
            "item": "botania:terrasteel_ingot"
          }
        ],
        "result": {
          "item": "botania:terrasteel_boots"
        }
      }
    )

    event.recipes.createCompacting(['kubejs:compressed_andesite'],['4x minecraft:andesite'])
    event.recipes.createCompacting(['4x kubejs:raw_andesite_alloy'],['2x minecraft:iron_ingot','2x kubejs:compressed_andesite'])
    event.recipes.createMixing(['2x kubejs:gel'],[Fluid.of('minecraft:water', 100), 'minecraft:slime_ball', 'minecraft:bone_meal'])
    event.recipes.createMixing(['8x create:andesite_alloy'],['2x kubejs:raw_andesite_alloy','2x kubejs:gel'])

    event.recipes.createMixing('8x kubejs:machinery_alloy', ['8x create:andesite_alloy', '#forge:dusts/diamond']).heated()
    event.smithing('masterfulmachinery:multiblock_controller', 'kubejs:machinery_alloy_block', 'create:precision_mechanism')
    event.smithing('masterfulmachinery:multiblock_item_port_items_input', 'kubejs:machinery_alloy_block', '#forge:chests')
    event.shapeless('masterfulmachinery:multiblock_item_port_items_output', ['masterfulmachinery:multiblock_item_port_items_input'])
    event.smithing('masterfulmachinery:multiblock_energy_port_energy_input', 'kubejs:machinery_alloy_block', 'immersiveengineering:connector_lv')
    event.shapeless('masterfulmachinery:multiblock_energy_port_energy_output', ['masterfulmachinery:multiblock_energy_port_energy_input'])
    event.smithing('masterfulmachinery:multiblock_fluid_port_fluids_input', 'kubejs:machinery_alloy_block', 'create:fluid_pipe')
    event.shapeless('masterfulmachinery:multiblock_fluid_port_fluids_output', ['masterfulmachinery:multiblock_fluid_port_fluids_input'])
    event.smithing('masterfulmachinery:multiblock_gas_port_mekanism_gas_input', 'kubejs:machinery_alloy_block', 'mekanism:basic_pressurized_tube')
    event.shapeless('masterfulmachinery:multiblock_gas_port_mekanism_gas_output', ['masterfulmachinery:multiblock_gas_port_mekanism_gas_input'])
    event.smithing('masterfulmachinery:multiblock_rotation_port_create_rotation_input', 'kubejs:machinery_alloy_block', 'create:shaft')
    event.shapeless('masterfulmachinery:multiblock_rotation_port_create_rotation_output', ['masterfulmachinery:multiblock_rotation_port_create_rotation_input'])
    event.smithing('masterfulmachinery:multiblock_starlight_port_astral_starlight_input', 'kubejs:machinery_alloy_block', '#forge:gems/aquamarine')
    event.shapeless('masterfulmachinery:multiblock_starlight_port_astral_starlight_output', ['masterfulmachinery:multiblock_starlight_port_astral_starlight_input'])
    event.smithing('masterfulmachinery:multiblock_mana_port_botania_mana_input', 'kubejs:machinery_alloy_block', '#forge:ingots/manasteel')
    event.shapeless('masterfulmachinery:multiblock_mana_port_botania_mana_output', ['masterfulmachinery:multiblock_mana_port_botania_mana_input'])

    event.recipes.createCompacting(['kubejs:scorched_alloy'],['3x tconstruct:scorched_bricks','#forge:ingots/steel']).heated()
    event.recipes.createCompacting(['kubejs:seared_alloy'],['5x tconstruct:seared_bricks','kubejs:scorched_alloy']).superheated()

    event.recipes.createPressing(['#forge:plates/bronze'],['#forge:ingots/bronze'])

    event.remove({type: 'immersiveengineering:alloy'})

    event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
    event.recipes.createMixing(['4x #forge:ingots/bronze'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()
    event.remove({id: 'thermal:bronze_dust_4'})

    event.custom(
      {
        "type":"immersiveengineering:blast_furnace",
        "result":
        {
          "tag":"forge:ingots/cast_iron"
        },
        "input":
        {
          "item":"minecraft:iron_ingot"
        },
        "slag":
        {
          "tag":"forge:slag"
        },
        "time":600
      }
    )
    event.custom(
      {
        "type":"immersiveengineering:blast_furnace",
        "result":
        {
          "tag":"forge:storage_blocks/cast_iron"
        },
        "input":
        {
          "item":"minecraft:iron_block"
        },
        "slag":
        {
          "tag":"forge:slag"
        },
        "time":5400
      }
    )
    
    event.recipes.createPressing(['#forge:plates/steel'],['#forge:ingots/steel'])
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.recipes.createCompacting(['3x immersiveengineering:blastbrick'],['minecraft:nether_bricks','minecraft:bricks', 'minecraft:magma_block']).superheated()
    event.remove({id: 'immersiveengineering:crafting/cokebrick'})
    event.recipes.createCompacting(['3x immersiveengineering:cokebrick'],['minecraft:clay','minecraft:bricks', '#forge:sandstone']).superheated()

    event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
    event.recipes.createMixing('2x #forge:ingots/electrum', ['#forge:ingots/silver','minecraft:gold_ingot']).superheated()
    event.remove({id: 'thermal:electrum_dust_2'})

    event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
    event.recipes.createMixing('3x #forge:ingots/invar', ['2x minecraft:iron_ingot','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:invar_dust_3'})

    event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
    event.recipes.createMixing('2x #forge:ingots/constantan', ['#forge:ingots/copper','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:constantan_dust_2'})

    event.remove({id: 'thermal:chiller_ball_cast'})
    event.shaped('thermal:chiller_ball_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:magma_cream'
    })
    event.remove({id: 'thermal:chiller_ingot_cast'})
    event.shaped('thermal:chiller_ball_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:nether_brick'
    })
    event.remove({id: 'thermal:chiller_rod_cast'})
    event.shaped('thermal:chiller_ball_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:blaze_rod'
    })

    event.remove({id: 'create:crafting/materials/rose_quartz'})
    event.recipes.createMixing('create:rose_quartz', ['minecraft:quartz','8x minecraft:redstone']).heated()
    event.recipes.createMilling(['3x kubejs:crushed_rose_quartz'], ['create:rose_quartz'])
    event.recipes.createCrushing(['3x kubejs:crushed_rose_quartz', Item.of('kubejs:crushed_rose_quartz').withChance(0.5)], ['create:rose_quartz'])
    event.recipes.createSequencedAssembly([
        Item.of('2x create:polished_rose_quartz').withChance(100.0),
      ], 
      'kubejs:crushed_rose_quartz', 
      [
         event.recipes.createCutting('2x kubejs:incomplete_polished_rose_quartz', 'create:rose_quartz').processingTime(30),
        event.recipes.createPressing(['kubejs:incomplete_polished_rose_quartz'], ['kubejs:incomplete_polished_rose_quartz'])
    ]).transitionalItem('kubejs:incomplete_polished_rose_quartz').loops(2)

    event.custom(
      {
      "type": "botania:runic_altar",
      "output": {
        "item": "kubejs:incomplete_asylum_of_elves_1",
        "count": 1
      },
      "mana": 10000,
      "ingredients": [
        {
          "item": 'botania:elementium_ingot'
        },
        {
          "item": 'botania:elementium_ingot'
        },
        {
          "item": 'botania:terrasteel_ingot'
        },
        {
          "item": 'botania:terrasteel_ingot'
        },
        {
          "item": 'botania:pixie_dust'
        },
        {
          "item": 'botania:life_essence'
        }
      ]
      }
    )
    event.custom(
      {
        "type": "mythicbotany:infusion",
        "group": "infuser",
        "output": {
          "item": "kubejs:incomplete_asylum_of_elves_2"
        },
        "mana": 1000000,
        "ingredients": [
          {
            "item": 'kubejs:incomplete_asylum_of_elves_1'
          }
        ],
        "fromColor": 16435940,
        "toColor": 12255335
      }
    )
    event.custom(
      {
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "kubejs:incomplete_asylum_of_elves_2"
          }
        ],
        "output": [
          {
            "item": "kubejs:asylum_of_elves"
          }
        ]
      }
    )

    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 1,
            "duration": 100,
            "starlight": 800,
            "pattern": [
              "C___C",
              "_BDB_",
              "_BAB_",
              "_BDB_",
              "C___C"
            ],
            "key": {
              "A": {
                "item": 'minecraft:nether_star'
              },
              "B": {
                "item": 'astralsorcery:starmetal_ingot'
              },
              "C": {
                "item": 'minecraft:ender_eye'
              },
              "D": {
                "type": "astralsorcery:crystal",
                "hasToBeAttuned": false,
                "hasToBeCelestial": false,
                "canBeAttuned": true,
                "canBeCelestialCrystal": true
              }
            },
            "output": [
              {
                "item": "kubejs:asylum_of_starlight",
                "count": 1
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_discovery_central_beam"
            ]
    })

    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 3,
          "duration": 100,
          "starlight": 800,
          "pattern": [
            "C_E_C",
            "_DBD_",
            "EFAFE",
            "_DBD_",
            "C_E_C"
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
  })

    event.remove({id: 'scalinghealth:heart_crystal'})
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
    })
    event.remove({id: 'scalinghealth:power_crystal'})
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
    })

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
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })
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
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })
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
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })
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
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })
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
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
    })

    event.remove({output: ['bloodmagic:altar', 'bloodmagic:soulforge', 'bloodmagic:alchemytable', 'bloodmagic:incensealtar', 'bloodmagic:sacrificialdagger', 'bloodmagic:alchemicalreactionchamber']})
    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 3,
          "duration": 200,
          "starlight": 1000,
          "pattern": [
            "FG_GF",
            "GDEDG",
            "BDADB",
            "GCCCG",
            "FG_GF"
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
              "item": 'mythicbotany:kvasir_blood'
            },
            "G":{
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

    event.remove({input: 'mahoutsukai:hammer'})
    event.remove({id: 'mahoutsukai:hammer'})
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
    )

    event.remove({id: 'create:crafting/materials/andesite_casing'})
    event.shapeless('create:andesite_casing',['#minecraft:logs', 'create:andesite_alloy'])
    event.recipes.createDeploying(['create:andesite_casing'], ['#minecraft:logs', 'create:andesite_alloy'])

    event.remove({id: 'create:crafting/materials/brass_casing'})
    event.shapeless('create:brass_casing',['#minecraft:logs', '#forge:plates/brass'])
    event.recipes.createDeploying(['create:brass_casing'], ['#minecraft:logs', '#forge:plates/brass'])

    event.remove({id: 'create:crafting/materials/copper_casing'})
    event.shapeless('create:copper_casing',['#minecraft:logs', '#forge:plates/copper'])
    event.recipes.createDeploying(['create:copper_casing'], ['#minecraft:logs', '#forge:plates/copper'])

    event.shapeless('kubejs:bronze_casing',['#minecraft:logs', '#forge:plates/bronze'])
    event.recipes.createDeploying(['kubejs:bronze_casing'], ['#minecraft:logs', '#forge:plates/bronze'])

    event.shapeless('kubejs:cast_iron_casing',['#minecraft:logs', '#forge:plates/cast_iron'])
    event.recipes.createDeploying(['kubejs:cast_iron_casing'], ['#minecraft:logs', '#forge:plates/cast_iron'])

    event.shapeless('kubejs:steel_casing',['#minecraft:logs', '#forge:plates/steel'])
    event.recipes.createDeploying(['kubejs:steel_casing'], ['#minecraft:logs', '#forge:plates/steel'])

    event.remove({id: 'create:crafting/materials/refined_radiance_casing'})
    event.shapeless('create:refined_radiance_casing',['#minecraft:logs', 'create:refined_radiance'])
    event.recipes.createDeploying(['create:refined_radiance_casing'], ['#minecraft:logs', 'create:refined_radiance'])

    event.remove({id: 'create:crafting/materials/shadow_steel_casing'})
    event.shapeless('create:shadow_steel_casing',['#minecraft:logs', 'create:shadow_steel'])
    event.recipes.createDeploying(['create:shadow_steel_casing'], ['#minecraft:logs', 'create:shadow_steel'])

    event.remove({id: 'createaddition:crafting/overcharged_casing'})
    event.shapeless('createaddition:overcharged_casing',['#minecraft:logs', 'createaddition:overcharged_alloy'])
    event.recipes.createDeploying(['createaddition:overcharged_casing'], ['#minecraft:logs', 'createaddition:overcharged_alloy'])

    event.remove({id: 'projecte:dm_furnace'})
    event.shaped('projecte:dm_furnace', [
        'AAA',
        'AFA',
        'AAA'
    ], {
        A: 'projecte:dark_matter_block',
        F: 'ironfurnaces:million_furnace'
      })

    event.remove({id: 'ironfurnaces:iron_furnace'})
    event.remove({id: 'ironfurnaces:gold_furnace'})
    event.remove({id: 'ironfurnaces:obsidian_furnace2'})
    event.remove({id: 'ironfurnaces:silver_furnace2'})
    event.remove({id: 'ironfurnaces:heater'})
    event.remove({id: 'ironfurnaces:item_heater'})
    event.shaped('ironfurnaces:heater', [
        'SLS',
        'SHS',
        'SRS'
    ], {
        S: '#forge:stone',
        L: 'create:redstone_link',
        R: 'minecraft:redstone',
        H: 'createaddition:heater'
      })
    event.shaped('ironfurnaces:item_heater', [
        'SRS',
        'RLR',
        'SRS'
    ], {
        S: '#forge:stone',
        L: 'create:redstone_link',
        R: 'minecraft:redstone',
      })
    event.remove({id: 'ironfurnaces:upgrade_iron'})
    event.remove({id: 'ironfurnaces:upgrade_gold'})
    event.remove({id: 'ironfurnaces:upgrade_obsidian2'})
    event.shaped('ironfurnaces:rainbow_coal', [
        'ARA',
        'ACA',
        'ARA'
    ], {
        C: 'ironfurnaces:rainbow_core',
        A: 'projecte:aeternalis_fuel_block',
        R: 'projecte:red_matter_block',
      })

    event.remove({id: 'minecraft:torch'})

    event.remove({id: 'pipez:item_pipe'})
    event.shaped('32x pipez:item_pipe', [
        'AAA',
        'DRD',
        'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'minecraft:redstone',
        D: 'minecraft:dropper'
      })
    event.remove({id: 'pipez:fluid_pipe'})
    event.shaped('32x pipez:fluid_pipe', [
          'AAA',
          'BRB',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'minecraft:redstone',
        B: 'minecraft:bucket'
    })
    event.remove({id: 'pipez:energy_pipe'})
    event.shaped('32x pipez:energy_pipe', [
          'AAA',
          'BRB',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'minecraft:redstone',
        B: 'minecraft:redstone_block'
    })
    event.remove({id: 'pipez:gas_pipe'})
    event.shaped('32x pipez:gas_pipe', [
          'AAA',
          'IRI',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'minecraft:redstone',
        I: 'mekanism:alloy_infused'
    })
    event.remove({id: 'pipez:universal_pipe'})
    event.shaped('16x pipez:universal_pipe', [
        'IFE',
        'ARA',
        'IFE'
    ], {
        A: 'create:andesite_alloy',
        I: 'pipez:item_pipe',
        F: 'pipez:fluid_pipe',
        E: 'pipez:energy_pipe',
        R: 'minecraft:redstone_block'
    })

    event.recipes.createMixing([Fluid.of('kubejs:flowing_time', 200)], [Fluid.of('astralsorcery:liquid_starlight', 1000),'3x #botania:mystical_flowers', Fluid.of('tconstruct:molten_lumium', 1000)]).superheated()
    event.remove({id: 'tiab:timeinabottle'})
    event.shaped('kubejs:empty_timeinabottle', [
        'NMN',
        'DCD',
        'LBL'
    ], {
        M: 'extendedcrafting:luminessence',
        N: 'compactmachines:machine_normal',
        D: 'minecraft:diamond_block',
        C: 'minecraft:clock',
        B: 'minecraft:glass_bottle',
        L: 'minecraft:lapis_block'
    })
    event.recipes.createFilling(['tiab:timeinabottle'], ['kubejs:empty_timeinabottle', Fluid.of('kubejs:flowing_time', 200)])

    event.recipes.createMixing([Fluid.of('kubejs:infection_medicine', 200)], [Fluid.of('tconstruct:venom', 50),Fluid.of('tconstruct:blood', 100) ,'3x minecraft:bone_meal']).heated()
    event.shaped('kubejs:empty_infection_medicine_infuser', [
        'RBR',
        'TGT',
        ' N '
    ], {
        T: '#forge:plates/tin',
        N: '#forge:plates/nickel',
        R: 'thermal:cured_rubber',
        G: '#forge:gears/silver',
        B: 'minecraft:glass_bottle'
    })
    event.recipes.createFilling(['kubejs:infection_medicine_infuser'], ['kubejs:empty_infection_medicine_infuser', Fluid.of('kubejs:infection_medicine', 200)])

    event.recipes.createSequencedAssembly([
        Item.of('16x gofish:biscuit_dot_zip').withChance(100.0),
       ],
       'minecraft:bread',
       [
         event.recipes.createPressing(['2x kubejs:incomplete_biscuit_dot_zip'], ['minecraft:bread']),
        event.recipes.createCutting('8x gofish:biscuit_dot_zip', 'kubejs:incomplete_biscuit_dot_zip').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_biscuit_dot_zip').loops(1)

    event.shaped('3x gofish:can_empty', [
        '   ',
        'A A',
        ' A '
    ], {
        A: '#forge:plates/tin'
    })
    event.recipes.createMixing([Fluid.of('kubejs:soup', 1000)], [Fluid.of('minecraft:water', 1000), Fluid.of('createaddition:seed_oil', 80), '3x #forge:meat_cooked', '3x #forge:vegetables', 'croptopia:salt']).heated()
    event.recipes.createMixing([Fluid.of('kubejs:juice', 1000)], [Fluid.of('minecraft:water', 1000), '3x #forge:fruits',  'minecraft:sugar']).heated()
    event.recipes.createMixing([Fluid.of('kubejs:magic_soup', 1000)], [Fluid.of('kubejs:soup', 1000), Fluid.of('astralsorcery:liquid_starlight', 1000), '3x #botania:mystical_flowers', Ingredient.of('minecraft:enchanted_book').ignoreNBT(), '3x minecraft:dragon_breath']).superheated()

    event.recipes.createFilling('gofish:soup_can_open', ['gofish:can_empty', Fluid.of('kubejs:soup', 250)])
    event.recipes.createFilling('gofish:fruit_can_open', ['gofish:can_empty', Fluid.of('kubejs:juice', 250)])
    event.recipes.createFilling('gofish:magic_soup_can_open', ['gofish:can_empty', Fluid.of('kubejs:magic_soup', 250)])

    event.recipes.createDeploying('gofish:soup_can', ['gofish:soup_can_open', '#forge:plates/tin'])
    event.recipes.createDeploying('gofish:fruit_can', ['gofish:fruit_can_open', '#forge:plates/tin'])
    event.recipes.createDeploying('gofish:magic_soup_can', ['gofish:magic_soup_can_open', '#forge:plates/tin'])

    event.recipes.createMixing(['gofish:can_empty'], [Fluid.of('minecraft:water', 250), 'gofish:can_dirty'])

    event.shapeless('gofish:scoop_rice_with_sweet_wing',['farmersdelight:cooked_rice','minecraft:cooked_chicken','minecraft:cooked_chicken'])
    event.shapeless('gofish:essence_of_fish',['minecraft:bowl','#minecraft:fishes','croptopia:salt','croptopia:salt'])
    event.recipes.createSequencedAssembly([
        Item.of('2x gofish:oil_cake').withChance(100.0),
       ],
       'farmersdelight:pie_crust',
       [
         event.recipes.createFilling(['kubejs:incomplete_oil_cake'], ['farmersdelight:pie_crust', Fluid.of('createaddition:seed_oil', 40)]),
        event.recipes.createPressing(['kubejs:incomplete_oil_cake'], ['kubejs:incomplete_oil_cake']),
        event.recipes.createCutting('gofish:oil_cake', 'kubejs:incomplete_oil_cake').processingTime(25)
    ]).transitionalItem('kubejs:incomplete_oil_cake').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('gofish:universal_wrench').withChance(80.0),
        Item.of('#forge:rods/brass').withChance(20.0),
        'create:cogwheel',
        'emendatusenigmatica:brass_ingot',
        'emendatusenigmatica:brass_plate',
        'create:precision_mechanism',
       ],
       '#forge:rods/brass',
       [
         event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['#forge:rods/brass', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', '#forge:plates/brass']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', '#forge:plates/brass']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', '#forge:plates/brass']),
        event.recipes.createPressing(['gofish:universal_wrench'],['kubejs:incomplete_universal_wrench'])
    ]).transitionalItem('kubejs:incomplete_universal_wrench').loops(1)

    event.remove({id: 'vehicle:small_engine_wood'})
    event.remove({id: 'vehicle:large_engine_wood'})
    event.remove({id: 'vehicle:electric_engine_wood'})
    event.recipes.createMechanicalCrafting('vehicle:wood_small_engine', [
        ' DM ',
        'MFPM',
        'MRBM',
        ' MM '
    ], {
        F: 'ironfurnaces:iron_furnace',
        P: 'minecraft:piston',
        B: 'minecraft:iron_block',
        R: 'minecraft:redstone_block',
        M: '#minecraft:planks',
        D: 'pipez:fluid_pipe'
    })
    event.recipes.createMechanicalCrafting('vehicle:wood_large_engine', [
        ' MMM ',
        'MPRPM',
        'DPFPD',
        'MBBBM',
        ' MMM '
    ], {
        F: 'ironfurnaces:iron_furnace',
        P: 'minecraft:piston',
        B: 'minecraft:iron_block',
        R: 'minecraft:redstone_block',
        M: '#minecraft:planks',
        D: 'pipez:fluid_pipe'
    })
    event.recipes.createMechanicalCrafting('vehicle:wood_electric_engine', [
        ' MMM ',
        'MEPEM',
        'DPFPD',
        'MBBBM',
        ' MMM '
    ], {
        F: 'thermal:machine_furnace',
        P: 'minecraft:piston',
        B: 'minecraft:iron_block',
        E: 'pipez:energy_pipe',
        M: '#minecraft:planks',
        D: 'pipez:fluid_pipe'
    })

    event.recipes.createMixing(['kubejs:blaze_brass'], ['#forge:ingots/brass', Fluid.of('tconstruct:blazing_blood', 100), Fluid.of('kubejs:cold_ice', 100)]).superheated()

    event.custom({
		  "type": "thermal:rock_gen",
		  "adjacent":"minecraft:packed_ice",
		  "below":"kubejs:andesite_alloy_block",
		  "result": {"item":'minecraft:andesite'}
	  })
    event.remove({id: 'mekanism:dictionary'})
    event.shapeless('mekanism:dictionary', ['minecraft:book', 'create:andesite_alloy'])

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:kinetic_mechanism').withChance(100.0),
      ], '#minecraft:wooden_slabs', [
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'kubejs:andesite_alloy_nugget']),
        event.recipes.createPressing('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism'])
      ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(1)

    event.shapeless('kubejs:kinetic_mechanism', ['#minecraft:wooden_slabs', 'create:cogwheel', 'create:large_cogwheel', 'kubejs:andesite_alloy_nugget', '#forge:tools/knives'])
    event.shaped('kubejs:kinetic_mechanical_box', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:kinetic_mechanism',
        B: 'create:andesite_casing'
    })
    event.remove({output: '#kubejs:andesite_machine'})
    event.smithing('create:mechanical_harvester', 'create:andesite_casing', 'kubejs:rake')
    event.smithing('create:mechanical_plough', 'create:andesite_casing', 'kubejs:plough')
    event.smithing('create:mechanical_drill', 'kubejs:kinetic_mechanical_box', 'thermal:drill_head')
    event.smithing('create:mechanical_saw', 'kubejs:kinetic_mechanical_box', 'thermal:saw_blade')
    event.smithing('create:mechanical_press', 'kubejs:kinetic_mechanical_box', 'minecraft:iron_block')
    event.smithing('create:mechanical_mixer', 'kubejs:kinetic_mechanical_box', 'create:whisk')
    event.smithing('create:encased_fan', 'kubejs:kinetic_mechanical_box', 'create:propeller')
    event.smithing('create:deployer', 'kubejs:kinetic_mechanical_box', 'create:brass_hand')
    event.smithing('createaddition:rolling_mill', 'kubejs:kinetic_mechanical_box', 'create:shaft')
    event.smithing('create:millstone', 'kubejs:kinetic_mechanical_box', 'create:andesite_alloy')
    event.smithing('create:smart_chute', 'create:chute', 'create:precision_mechanism')
    event.smithing('thermal:device_tree_extractor', 'kubejs:kinetic_mechanical_box', 'minecraft:bucket')
    event.smithing('thermal:device_fisher', 'kubejs:kinetic_mechanical_box', 'minecraft:fishing_rod')
    event.smithing('create:speedometer', 'kubejs:kinetic_mechanical_box', 'minecraft:compass')
    event.smithing('mekanism:oredictionificator', 'kubejs:kinetic_mechanical_box', 'mekanism:dictionary')
    event.shapeless('create:stressometer', ['create:speedometer'])
    event.shapeless('create:speedometer', ['create:stressometer'])

    event.recipes.createSequencedAssembly([
        Item.of('create:precision_mechanism').withChance(85.0),
        Item.of('kubejs:kinetic_mechanism').withChance(6.0),
        Item.of('create:electron_tube').withChance(6.0),
        Item.of('create:polished_rose_quartz').withChance(4.0),
        Item.of('minecraft:clock').withChance(5.0),
        Item.of('create:golden_sheet').withChance(4.0),
      ], 'kubejs:kinetic_mechanism', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:plates/gold']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:clock']),
        event.recipes.createPressing('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism'])
      ]).transitionalItem('create:incomplete_precision_mechanism').loops(1)
    event.shaped('kubejs:precision_mechanical_box', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:brass_casing'
    })
    event.remove({output: '#kubejs:brass_machine'})
    event.smithing('3x create:mechanical_crafter', 'kubejs:precision_mechanical_box', 'minecraft:crafting_table')
    event.smithing('create:mechanical_arm', 'kubejs:precision_mechanical_box', 'create:brass_hand')
    event.smithing('create:sequenced_gearshift', 'kubejs:precision_mechanical_box', 'create:nixie_tube')
    event.smithing('create:rotation_speed_controller', 'kubejs:precision_mechanical_box', 'create:precision_mechanism')
    event.smithing('thermal:device_hive_extractor', 'kubejs:precision_mechanical_box', 'minecraft:shears')
    event.smithing('thermal:device_rock_gen', 'kubejs:precision_mechanical_box', 'kubejs:rock_gen_core')
    event.shaped('kubejs:rock_gen_core', [
        'BBB',
        'DAC',
        'BBB'
    ], {
        A: '#forge:ingots/silver',
        B: '#forge:plates/invar',
        C: 'minecraft:water_bucket',
        D: 'minecraft:lava_bucket'
    })
    event.smithing('thermal:device_collector', 'kubejs:precision_mechanical_box', 'kubejs:collect_core')
    event.shaped('kubejs:collect_core', [
        'BDB',
        'ACA',
        'BBB'
    ], {
        A: '#forge:ingots/silver',
        B: '#forge:plates/invar',
        C: 'minecraft:ender_pearl',
        D: 'minecraft:hopper'
    })
    event.smithing('thermal:device_nullifier', 'kubejs:precision_mechanical_box', 'minecraft:lava_bucket')
    event.smithing('thermal:device_potion_diffuser', 'kubejs:precision_mechanical_box', 'minecraft:glass_bottle')
    event.smithing('create:portable_storage_interface', 'create:brass_casing', 'create:andesite_funnel')
    event.smithing('create:content_observer', 'create:brass_casing', 'minecraft:observer')
    event.smithing('create:stockpile_switch', 'create:brass_casing', 'minecraft:comparator')
    event.smithing('create:adjustable_crate', 'create:brass_casing', '#forge:chests/wooden')
    event.smithing('create:nixie_tube', 'create:brass_casing', 'create:precision_mechanism')
    event.recipes.createMechanicalCrafting('vehicle:workstation', [
        'GGGGG',
        'RMTMR',
        'RPCPR',
        'RPIPR',
        'RRRRR'
    ], {
        C: 'create:mechanical_crafter',
        T: '#create:toolboxes',
        I: 'minecraft:iron_block',
        P: 'vehicle:panel',
        M: 'create:precision_mechanism',
        R: 'minecraft:red_concrete',
        G: 'minecraft:light_gray_concrete'
    })
    event.recipes.createMechanicalCrafting('tac:workbench', [
        'MTM',
        'LCL',
        'IBI',
        'I I'
    ], {
        C: 'create:mechanical_crafter',
        T: '#create:toolboxes',
        B: 'minecraft:iron_block',
        I: 'minecraft:iron_ingot',
        L: '#minecraft:logs',
        M: 'create:precision_mechanism',
    })
    
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:liquid_mechanism').withChance(90.0),
        Item.of('kubejs:kinetic_mechanism').withChance(5.0),
        Item.of('kubejs:andesite_alloy_nugget').withChance(5.0),
        Item.of('create:copper_nugget').withChance(5.0),
        Item.of('thermal:cured_rubber').withChance(5.0),
      ], 'kubejs:kinetic_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_liquid_mechanism', ['kubejs:incomplete_liquid_mechanism', 'kubejs:andesite_alloy_nugget']),
        event.recipes.createDeploying('kubejs:incomplete_liquid_mechanism', ['kubejs:incomplete_liquid_mechanism', 'thermal:cured_rubber']),
        event.recipes.createDeploying('kubejs:incomplete_liquid_mechanism', ['kubejs:incomplete_liquid_mechanism', '#forge:plates/copper']),
        event.recipes.createPressing('kubejs:incomplete_liquid_mechanism', ['kubejs:incomplete_liquid_mechanism'])
    ]).transitionalItem('kubejs:incomplete_liquid_mechanism').loops(1)
    event.shaped('kubejs:liquid_mechanical_box', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:liquid_mechanism',
        B: 'create:copper_casing'
    })
    event.remove({output: '#kubejs:liquid_machine'})
    event.smithing('thermal:device_water_gen', 'kubejs:liquid_mechanical_box', 'minecraft:bucket')
    event.smithing('create:mechanical_pump', 'kubejs:liquid_mechanical_box', 'create:fluid_pipe')
    event.smithing('create:spout', 'create:fluid_tank', 'minecraft:dried_kelp')
    event.smithing('create:hose_pulley', 'kubejs:liquid_mechanical_box', 'thermal:cured_rubber')
    event.smithing('create:item_drain', 'create:copper_casing', 'minecraft:iron_bars')
    event.smithing('create:smart_fluid_pipe', 'create:fluid_pipe', 'create:precision_mechanism')
    event.smithing('create:fluid_valve', 'create:fluid_pipe', 'kubejs:kinetic_mechanism')
    event.smithing('create:portable_fluid_interface', 'create:copper_casing', 'create:andesite_funnel')
    event.recipes.createMechanicalCrafting('thermal:fluid_cell',[
        'CTPTC',
        'AIFIA',
        'CTRTC'
    ],{
        C: 'thermal:cured_rubber',
        I: 'kubejs:liquid_mechanical_box',
        R: 'thermal:redstone_servo',
        F: 'thermal:fluid_cell_frame',
        A: 'create:andesite_alloy',
        T: 'create:fluid_tank',
        P: 'pipez:fluid_pipe'
    })

    event.remove({id: 'steampowered:bronze_cogwheel'})
    event.remove({id: 'steampowered:bronze_large_cogwheel'})
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:plates/bronze"
          }
        ],
        "category":"components","result":
        {
          "item":'steampowered:bronze_cogwheel',"count":2
        }
      }
    )
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:ingots/bronze"
          }
        ],
        "category":"components",
        "result":
        {
          "item":'steampowered:bronze_large_cogwheel',"count":1
        }
      }
    )

    event.remove({id: 'steampowered:cast_iron_cogwheel'})
    event.remove({id: 'steampowered:cast_iron_large_cogwheel'})
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:plates/cast_iron"
          }
        ],
        "category":"components","result":
        {
          "item":'steampowered:cast_iron_cogwheel',"count":2
        }
      }
    )
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:ingots/cast_iron"
          }
        ],
        "category":"components",
        "result":
        {
          "item":'steampowered:cast_iron_large_cogwheel',"count":1
        }
      }
    )

    event.remove({id: 'steampowered:steel_cogwheel'})
    event.remove({id: 'steampowered:steel_large_cogwheel'})
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:plates/steel"
          }
        ],
        "category":"components","result":
        {
          "item":'steampowered:steel_cogwheel',"count":2
        }
      }
    )
    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":"create:shaft"
          },
          {
            "tag":"forge:ingots/steel"
          }
        ],
        "category":"components",
        "result":
        {
          "item":'steampowered:steel_large_cogwheel',"count":1
        }
      }
    )

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:steam_mechanism').withChance(80.0),
        Item.of('create:precision_mechanism').withChance(2.5),
        Item.of('kubejs:liquid_mechanism').withChance(2.5),
        Item.of('thermal:bronze_nugget').withChance(5.0),
        Item.of('steampowered:steel_sheet').withChance(5.0),
        Item.of('steampowered:bronze_cogwheel').withChance(2.5),
        Item.of('steampowered:bronze_large_cogwheel').withChance(2.5),
      ], 'create:precision_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'kubejs:liquid_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'steampowered:bronze_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'steampowered:bronze_large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', '#forge:nuggets/bronze']),
        event.recipes.createDeploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', '#forge:plates/steel']),
        event.recipes.createPressing('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism']),
      ]).transitionalItem('kubejs:incomplete_steam_mechanism').loops(1)

    event.remove({output: '#kubejs:steam_machine'})
    event.shaped('kubejs:steam_mechanical_box_mk1', [
        'ACA',
        'ABA',
        'ADA'
    ], {
        A: 'kubejs:steam_mechanism',
        B: 'kubejs:precision_mechanical_box',
        C: '#forge:plates/bronze',
        D: 'kubejs:bronze_casing',
    })
    event.smithing('steampowered:bronze_boiler', 'kubejs:bronze_casing', 'create:fluid_tank')
    event.smithing('steampowered:bronze_burner', 'kubejs:bronze_casing', 'minecraft:blast_furnace')
    event.recipes.createMechanicalCrafting('steampowered:bronze_flywheel', [
        ' PIP ',
        'PWCWP',
        'ICMCI',
        'PWCWP',
        ' PIP '
      ], {
        M: 'kubejs:steam_mechanical_box_mk1',
        C: 'kubejs:bronze_casing',
        I: '#forge:ingots/bronze',
        P: '#forge:plates/bronze',
        W: 'steampowered:bronze_cogwheel'
    })
    event.recipes.createMechanicalCrafting('steampowered:bronze_steam_engine', [
        'RPPR ',
        'PFCPR',
        'PFMH ',
        'PFCPR',
        'RPPR '
      ], {
        M: 'kubejs:steam_mechanical_box_mk1',
        C: 'kubejs:bronze_casing',
        P: '#forge:plates/bronze',
        F: 'create:fluid_pipe',
        H: '#kubejs:piston',
        R: 'thermal:cured_rubber'
    })
    event.shaped('kubejs:steam_mechanical_box_mk2', [
        'CAC',
        'DBD',
        'CAC'
    ], {
        A: 'kubejs:cast_iron_casing',
        B: 'kubejs:steam_mechanical_box_mk1',
        C: '#steampowered:plates/cast_iron',
        D: 'steampowered:cast_iron_cogwheel'
    })
    event.smithing('steampowered:cast_iron_boiler', 'steampowered:bronze_boiler', 'kubejs:cast_iron_casing')
    event.smithing('steampowered:cast_iron_burner', 'steampowered:bronze_burner', 'kubejs:cast_iron_casing')
    event.smithing('steampowered:cast_iron_flywheel', 'steampowered:bronze_flywheel', 'kubejs:steam_mechanical_box_mk2')
    event.smithing('steampowered:cast_iron_steam_engine', 'steampowered:bronze_steam_engine', 'kubejs:steam_mechanical_box_mk2')
    
    event.shaped('kubejs:steam_mechanical_box_mk3', [
        'CAC',
        'DBD',
        'CAC'
    ], {
        A: 'kubejs:steel_casing',
        B: 'kubejs:steam_mechanical_box_mk2',
        C: '#forge:plates/steel',
        D: 'steampowered:steel_cogwheel'
    })
    event.smithing('steampowered:steel_boiler', 'steampowered:cast_iron_boiler', 'kubejs:steel_casing')
    event.smithing('steampowered:steel_burner', 'steampowered:cast_iron_burner', 'kubejs:steel_casing')
    event.smithing('steampowered:steel_flywheel', 'steampowered:cast_iron_flywheel', 'kubejs:steam_mechanical_box_mk3')
    event.smithing('steampowered:steel_steam_engine', 'steampowered:cast_iron_steam_engine', 'kubejs:steam_mechanical_box_mk3')

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:electricity_mechanism').withChance(80.0),
        Item.of('immersiveengineering:wire_copper').withChance(5.0),
        Item.of('kubejs:steam_mechanism').withChance(5.0),
        Item.of('kubejs:blaze_brass').withChance(4.0),
        Item.of('steampowered:steel_cogwheel').withChance(3.0),
        Item.of('steampowered:steel_large_cogwheel').withChance(3.0),
      ], 'kubejs:steam_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'steampowered:steel_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'steampowered:steel_large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'immersiveengineering:wire_copper']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'kubejs:blaze_brass']),
        event.recipes.createPressing('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism']),
      ]).transitionalItem('kubejs:incomplete_electricity_mechanism').loops(1)
    event.remove({output: '#kubejs:electricity_machine'})

    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'createaddition:gold_spool', 'immersiveengineering:wirecoil_copper')
    event.replaceInput({output: 'createaddition:tesla_coil'}, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')
    event.remove({id: 'createaddition:rolling/copper_plate'})
    event.custom(
      {
        "type":"createaddition:rolling",
        "input": {
              "tag": "forge:plates/lead"
        },
        "result": {
          "item": 'immersiveengineering:wire_lead',
          "count": 2
        }
      }
    )
    event.custom(
      {
        "type":"createaddition:rolling",
        "input": {
              "tag": "forge:plates/copper"
        },
        "result": {
          "item": 'immersiveengineering:wire_copper',
          "count": 2
        }
      }
    )
    event.remove({id: 'immersiveengineering:crafting/wire_copper'})
    event.remove({id: 'immersiveengineering:crafting/wire_lead'})
    event.remove({id: 'immersiveengineering:crafting/wire_aluminum'})
    event.remove({id: 'immersiveengineering:crafting/wire_electrum'})
    event.remove({id: 'immersiveengineering:crafting/wire_steel'})

    event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_copper_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'})
    event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_cobalt'})

    event.remove({id: 'createaddition:crafting/heater'})
    event.remove({id: 'createaddition:compat/immersiveengineering/constantan'})
    event.remove({id: 'createaddition:compat/immersiveengineering/electrum'})
    event.remove({id: 'immersiveengineering:crafting/constantan_mix'})
    event.remove({id: 'immersiveengineering:crafting/electrum_mix'})

    event.remove({id: 'immersiveengineering:crafting/component_iron'})
    event.remove({id: 'immersiveengineering:crafting/component_steel'})

    event.recipes.createMechanicalCrafting('immersiveengineering:capacitor_lv', [
        'SSS',
        'CLC',
        'TET'
    ], {
        C: '#forge:ingots/copper',
        L: '#forge:ingots/lead',
        S: '#forge:plates/steel',
        T: '#forge:treated_wood',
        E: 'kubejs:electricity_mechanism'
    })
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:capacitor_lv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:ingots/electrum",
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:ingots/lead",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:capacitor_mv",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:capacitor_mv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:ingots/aluminum",
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:ingots/lead",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:ingot_hop_graphite",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:capacitor_hv",
                    "count": 1
                }
            }
        ]
    }
    )

    event.replaceInput({id: 'immersiveengineering:crafting/generator'}, 'immersiveengineering:dynamo', 'createaddition:alternator')

    event.recipes.createMechanicalCrafting('createaddition:electric_motor', [
        ' BAB ',
        'BDCDB',
        'BCECB',
        'BDCDB',
        ' BAB '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/brass',
        C: 'immersiveengineering:wirecoil_copper',
        E: 'kubejs:electricity_mechanism',
        D: 'createaddition:capacitor',
    })
    event.recipes.createMechanicalCrafting('createaddition:alternator', [
        ' SAS ',
        'SDCDS',
        'SCECS',
        'SDCDS',
        ' SAS '
    ], {
        A: 'create:andesite_alloy',
        S: '#forge:plates/steel',
        C: 'immersiveengineering:wirecoil_copper',
        D: 'createaddition:capacitor',
        E: 'kubejs:electricity_mechanism'
    })

    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": "botania:elf_glass",
                    "count": 8
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:component_iron",
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:electron_tube",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:phytogro",
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:treated_wood",
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "botanypots:hopper_botany_pots",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:cloche",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "forge:plates/constantan",
                    "count": 10
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "forge:ingots/steel",
                    "count": 6
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:coil_mv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:generator",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:thermoelectric_generator",
                    "count": 2
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:toolupgrade_railgun_scope",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": "immersiveengineering:revolver",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "immersiveengineering:circuits/pcb",
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:turntable",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:rs_engineering",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:toolupgrade_revolver_magazine",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:turret_gun",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:toolupgrade_railgun_scope",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": "immersiveengineering:chemthrower",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "immersiveengineering:circuits/pcb",
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:turntable",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:rs_engineering",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:metal_barrel",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:turret_chem",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:capacitor_hv",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": "immersiveengineering:coil_mv",
                    "count": 2
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "immersiveengineering:circuits/pcb",
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": "forge:ingots/steel",
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:wooden_grip",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:railgun",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": "forge:plates/iron",
                    "count": 7
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:generator",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:capacitor_lv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersivepetroleum:gas_generator",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:connector_lv',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:connector_mv',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:coil_mv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "minecraft:iron_ingot",
                  "count": 5
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:transformer",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:connector_mv',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:connector_hv',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:coil_hv",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "minecraft:iron_ingot",
                  "count": 5
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersiveengineering:transformer_hv",
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:capacitor_hv',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:ingots/aluminum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "immersiveengineering:coil_lv",
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:tesla_coil',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:steel_fence',
                    "count": 3
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:light_engineering',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:steel_scaffolding_standard',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:sample_drill',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:glass',
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:treated_wood',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:iron_ingot',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:connector_lv',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:coil_lv',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:charging_station',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'create:propeller',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'createaddition:heater',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:sheetmetal_iron',
                  "count": 7
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:blastfurnace_preheater',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'create:propeller',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'createaddition:heater',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:sheetmetal_iron',
                  "count": 7
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:blastfurnace_preheater',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:plates/iron',
                    "count": 3
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:component_iron',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:fluid_pipe',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'immersiveengineering:fluid_pump',
                    "count": 1
                }
            }
        ]
    }
    )
    event.smithing('createaddition:tesla_coil', 'immersiveengineering:tesla_coil', 'create:brass_casing')
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:iron_ingot',
                    "count": 4
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag":"forge:ingots/copper",
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:coil_lv',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'createaddition:heater',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'botania:manasteel_ingot',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone_block',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'botania:livingrock',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'botania:mana_fluxfield',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:electricity_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:capacitor_lv',
                    "count": 5
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:ingots/tin',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:flux_capacitor',
                    "count": 1
                }
            }
        ]
    }
    )
    event.replaceInput({id: 'thermal:flux_magnet'}, 'thermal:rf_coil', 'immersiveengineering:wirecoil_copper')
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:kinetic_mechanism',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:andesite_alloy_nugget',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:cured_rubber',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:copper_sheet',
                  "count": 1
              }
          },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'kubejs:liquid_mechanism',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:kinetic_mechanism',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:golden_sheet',
                  "count": 1
              }
          },
          {
            "type": "masterfulmachinery:items",
            "perTick": false,
            "consumeInstantly": false,
            "data":{
                "item": 'create:electron_tube',
                "count": 1
            }
          },
          {
            "type": "masterfulmachinery:items",
            "perTick": false,
            "consumeInstantly": false,
            "data":{
                "item": 'minecraft:clock',
                "count": 1
            }
          },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'create:precision_mechanism',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:precision_mechanism',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:liquid_mechanism',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'steampowered:bronze_cogwheel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'steampowered:bronze_large_cogwheel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:nugget_bronze',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:plate_steel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'kubejs:steam_mechanism',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:steam_mechanism',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'steampowered:steel_cogwheel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'steampowered:steel_large_cogwheel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:wire_copper',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:blaze_brass',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 50
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'kubejs:electricity_mechanism',
                    "count": 1
                }
            }
        ]
    }
    )

    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id: 'thermal:signalum_dust_4'})
    event.custom(
      {
        "type":"immersiveengineering:arc_furnace",
        "results":
        [
          {
            "count":4,
            "base_ingredient":
            {
              "tag":"forge:ingots/signalum"
            }
          }
        ],
        "additives":
        [
          {
            "tag":"forge:ingots/silver"
          },
          {
            "count":4,
            "base_ingredient":
              {
                "item":"minecraft:redstone"
              }
          }
        ],
        "input":
        {
          "count":3,
          "base_ingredient":
          {
            "tag":"forge:ingots/bronze"
          }
        },
        "time":120,
        "energy":64000
      }
    )

    event.remove({id: 'thermal:lumium_dust_4'})
    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id: 'thermal:machine/smelter/smelter_alloy_lumium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
    event.remove({id: 'extendedcrafting:luminessence'})
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 1000)], [Fluid.of('thermal:redstone', 500),Fluid.of('thermal:glowstone', 500),'minecraft:gunpowder']).superheated()
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 200)], ['extendedcrafting:luminessence']).superheated()
    event.recipes.createCompacting(['extendedcrafting:luminessence'], [Fluid.of('kubejs:lumium_solution', 200)])

    event.remove({id: 'thermal:enderium_dust_2'})
    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id: 'thermal:machine/smelter/smelter_alloy_enderium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.remove({id: 'extendedcrafting:ender_ingot'})
    event.recipes.createCompacting('extendedcrafting:ender_ingot', ['#forge:sand', 'minecraft:ender_pearl']).heated()

    event.replaceInput({id: 'thermal:rf_coil'},'minecraft:gold_ingot','immersiveengineering:wirecoil_steel')
    event.replaceInput({},'rftoolsbase:machine_frame','thermal:machine_frame')
    event.replaceInput({},'woot:machine_casing','thermal:machine_frame')
    event.remove({output: ['rftoolsbase:machine_frame','woot:machine_casing']})
    event.custom(
      {
        "type":"immersiveengineering:arc_furnace",
        "results":
        [
          {
            "item":"kubejs:integration_mechanism"
          }
        ],
        "additives":[
          {
            "count":4,
            "base_ingredient":
            {
              "tag":'forge:ingots/hop_graphite'
            }
          },
          {
            "item":"thermal:rf_coil"
          },
          {
            "item":"immersiveengineering:circuit_board"
          },
          {
            "tag":"forge:plates/signalum"
          }
        ],
        "input":
        {
          "item":"kubejs:electricity_mechanism"
        },
        "time":200,
        "energy":102400
      }
    )
    event.remove({output: '#kubejs:integration_machine'})
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:rf_coil',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:steel_casing',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:glass',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_frame',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:energy_cell_frame',
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:capacitor_hv',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:energy_cell',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'createaddition:heater',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:blast_furnace',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_smelter',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'createaddition:heater',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:furnace',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/invar',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_furnace',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom( 
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'createaddition:heater',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:blast_furnace',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:nether_bricks',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_crucible',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:treated_wood',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:phytogro',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/lumium',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:device_soil_infuser',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'create:mechanical_crafter',
                    "count": 9
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_crafter',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:lumium_glass',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/lumium',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_insolator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'create:mechanical_bearing',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_centrifuge',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:packed_ice',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_chiller',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'create:fluid_tank',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_refinery',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:bucket',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/copper',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_bottler',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:brewing_stand',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/constantan',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_brewer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:cokebrick',
                    "count": 9
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'botania:blaze_block',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_pyrolyzer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'immersiveengineering:craftingtable',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:tinker_bench',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:saw_blade',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_sawmill',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:flint',
                    "count": 2
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_pulverizer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'minecraft:iron_block',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:machine_press',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:saw_blade',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:flux_saw',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:drill_head',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 128
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:flux_drill',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:storage_blocks/invar',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:upgrade_augment_1',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'forge:storage_blocks/electrum',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/lumium',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:upgrade_augment_2',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 1
              }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "item": 'thermal:enderium_glass',
                    "count": 1
                }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/enderium',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'thermal:upgrade_augment_3',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:integration_mechanism",
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:mechanical_crafter',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/signalum',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'extendedcrafting:luminessence_block',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 100
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'extendedcrafting:crafting_core',
                    "count": 1
                }
            }
        ]
    }
    )
    event.replaceInput({id: 'extendedcrafting:pedestal'}, 'extendedcrafting:black_iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'extendedcrafting:pedestal'}, 'extendedcrafting:black_iron_block', '#forge:storage_blocks/steel')

    event.recipes.thermal.bottler('2x minecraft:shulker_shell', ['minecraft:shulker_shell', Fluid.of('kubejs:chorus_solution', 100)]).energy(10000)
    event.recipes.thermal.bottler('2x quark:myalite_crystal', ['quark:myalite_crystal', Fluid.of('kubejs:chorus_solution', 50)]).energy(10000)
    event.recipes.thermal.bottler('2x minecraft:dragon_breath', ['minecraft:dragon_breath', Fluid.of('kubejs:chorus_solution', 200)]).energy(10000)

    event.recipes.createMixing(['kubejs:chorus_chrome'], [Fluid.of('kubejs:chorus_solution', 100),Fluid.of('tconstruct:molten_enderium', 100),'kubejs:blaze_brass', 'kubejs:core_hollow']).superheated()
    event.recipes.thermal.crucible(Fluid.of('kubejs:chorus_solution', 1000), 'kubejs:chorus_crystal').energy(500000)
    event.recipes.thermal.crucible(Fluid.of('kubejs:cold_ice', 1000), 'thermal:blizz_rod').energy(200000)
    event.recipes.createMechanicalCrafting('kubejs:chorus_crystal', [
        'S',
        'M',
        'P',
        'C',
        'P',
        'M',
        'S'
    ], {
        S: 'minecraft:shulker_shell',
        M: 'quark:myalite_crystal',
        P: 'minecraft:popped_chorus_fruit',
        C: 'kubejs:core_desolate'
    })

    event.shaped('4x kubejs:ether_drop', [
        'EEE',
        'EGE',
        'EEE'
    ], {
        E: 'kubejs:ether_essence',
        G: 'botania:elementium_nugget'
    })

    event.remove({id: 'rftoolsbase:dimensionalshard'})
    event.remove({id: 'create:mixing/chromatic_compound'})
    event.recipes.createMixing(['4x create:chromatic_compound'],['3x #forge:dusts/glowstone','2x #forge:dusts/obsidian','4x create:polished_rose_quartz','kubejs:chorus_chrome','botania:terrasteel_ingot','astralsorcery:starmetal_ingot']).superheated()

    event.remove({output: '#kubejs:chromatic_machine'})
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 200,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:chromatic_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:machine_frame",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:refined_radiance_casing',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:shadow_steel_casing',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'createaddition:overcharged_casing',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'immersiveengineering:sheetmetal_steel',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 150
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:steel_casing',
                    "count": 1
                }
            }
        ]
    }
    )
    event.smithing('mekanism:formulaic_assemblicator', 'thermal:machine_crafter', 'mekanism:basic_control_circuit')
    event.smithing('mekanism:energized_smelter', 'thermal:machine_furnace', 'mekanism:basic_control_circuit')
    event.smithing('mekanism:electric_pump', 'immersiveengineering:fluid_pump', 'mekanism:basic_control_circuit')
    event.smithing('mekanism:chargepad', 'immersiveengineering:charging_station', 'mekanism:basic_control_circuit')
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "dense_mechanical_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "kubejs:chromatic_mechanism",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "create:shadow_steel",
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone_block',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'ironfurnaces:silver_furnace',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:storage_blocks/osmium',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:metallurgic_infuser',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:electrolytic_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:gas_burning_generator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:bio_fuel',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:bio_generator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:gears/osmium',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:wind_generator',
                    "count": 1
                }
            }
        ]
    }
    )

    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:refined_radiance',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanismgenerators:solar_panel',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:solar_generator',
                    "count": 2
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:refined_radiance',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanismgenerators:solar_generator',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:advanced_solar_generator',
                    "count": 1
                }
            }
        ]
    }
    )
   
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'ironfurnaces:silver_furnace',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:ingots/steel',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:fuelwood_heater',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:energy_tablet',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:resistive_heater',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:lava_bucket',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:crusher',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:saw_blade',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:precision_sawmill',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:enrichment_chamber",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:dynamic_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:pressurized_reaction_chamber',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:lapis_lazuli',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:ingots/tin',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:seismic_vibrator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:purification_chamber",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_injection_chamber',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:enrichment_chamber",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:purification_chamber',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:enrichment_chamber',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_infuser',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:cobblestone',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:combiner',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone_block',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:electrolytic_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:electrolytic_separator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "thermal:saw_blade",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:drill_head',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:energy_tablet',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:atomic_disassembler',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'thermal:rf_coil',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:free_runners',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "create:refined_radiance",
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'create:blaze_burner',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:energy_tablet',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:jetpack',
                    "count": 1
                }
            }
        ]
    }
    )
    event.smithing('mekanism:jetpack_armored', 'mekanism:jetpack', 'kubejs:shadow_steel_block')
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'gofish:can_empty',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:nutritional_liquifier',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:dye_base',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:painting_machine',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:hdpe_rod',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:pigment_mixer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:flint',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:redstone',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:pigment_extractor',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:bucket',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:osmium_compressor',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_dissolution_chamber',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_fluid_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_washer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:fluorite_gem',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_crystallizer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:dynamic_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:personal_chest',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:chemical_oxidizer',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_energy_cube',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:advanced_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_fluid_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:teleportation_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:quantum_entangloporter',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:teleportation_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ingot_refined_obsidian',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:teleporter',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:teleportation_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:robit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:logistical_sorter',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:digital_miner',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:ingots/lead',
                  "count": 12
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:isotopic_centrifuge',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_fluid_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_infused',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:rotary_condensentrator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanismgenerators:solar_panel',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:hdpe_sheet',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:solar_neutron_activator',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:pellet_polonium',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:pellet_plutonium',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:meka_plate',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:chests',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:modification_station',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:energy_tablet',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:diamond',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:laser',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:basic_induction_cell",
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'minecraft:diamond',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:elite_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_reinforced',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:laser_amplifier',
                    "count": 1
                }
            }
        ]
    }
    )
    event.remove({output: 'mekanismgenerators:fusion_reactor_controller'})
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanismgenerators:fusion_reactor_frame',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanismgenerators:reactor_glass',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:basic_chemical_tank',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 8
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanismgenerators:fusion_reactor_controller',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": "mekanism:steel_casing",
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:pellet_antimatter',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:meka_plate',
                  "count": 6
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 16
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:antiprotonic_nucleosynthesizer',
                    "count": 1
                }
            }
        ]
    }
    )

    event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})
    event.custom(
        {
            "type":"mekanism:metallurgic_infusing",
            "itemInput":
            {
                "ingredient":
                {
                    "item":"kubejs:chorus_chrome"
                }
            },
            "infusionInput":
            {
                "amount":10,
                "tag":"mekanism:redstone"
            },
            "output":
            {
                "item":"mekanism:alloy_infused"
            }
        }
    )
    event.remove({id: 'mekanism:control_circuit/basic'})
    event.custom(
        {
            "type":"mekanism:metallurgic_infusing",
            "itemInput":
            {
                "ingredient":
                {
                    "item":"kubejs:chromatic_mechanism"
                }
            },
            "infusionInput":
            {
                "amount":20,
                "tag":"mekanism:redstone"
            },
            "output":
            {
                "item":"2x mekanism:basic_control_circuit"
            }
        }
    )
    event.remove({id: 'mekanism:control_circuit/advanced'})
    event.remove({id: 'mekanism:control_circuit/elite'})
    event.remove({id: 'mekanism:control_circuit/ultimate'})
    event.remove({id: 'mekanism:teleportation_core'})
    event.replaceInput({id: 'mekanismgenerators:reactor/frame'}, 'mekanism:steel_casing', 'mekanismgenerators:fission_reactor_casing')
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:laser',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:storage_blocks/copper',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:pellet_polonium',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:supercharged_coil',
                    "count": 1
                }
            }
        ]
    }
    )
    event.remove({id: 'mekanism:supercharged_coil'})
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:laser',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "tag": 'forge:storage_blocks/copper',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:pellet_polonium',
                  "count": 3
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'mekanism:supercharged_coil',
                    "count": 1
                }
            }
        ]
    }
    )
    event.custom(
        {
            "type":"mekanism:nucleosynthesizing",
            "itemInput":
            {
                "ingredient":
                {
                    "item":"kubejs:chromatic_compound_block"
                }
            },
            "gasInput":
            {
                "amount":1,
                "gas":"mekanism:antimatter"
            },
            "output":
            {
                "item":"kubejs:antimatter_alloy"
            },
            "duration":200
        })
    event.shaped('kubejs:antimatter_alloy_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:antimatter_alloy'
      })
    event.shapeless('9x kubejs:antimatter_alloy', ['kubejs:antimatter_alloy_block'])
    event.remove({id: 'mekanism:mekasuit_helmet'})
    event.remove({id: 'mekanism:mekasuit_bodyarmor'})
    event.remove({id: 'mekanism:mekasuit_pants'})
    event.remove({id: 'mekanism:mekasuit_boots'})
    event.remove({id: 'mekanism:meka_tool'})
    event.recipes.createSequencedAssembly([
      Item.of('kubejs:meka_plate').withChance(99.0),
      Item.of('thermal:netherite_plate').withChance(1.0),
      'thermal:netherite_plate',
      'mekanism:hdpe_sheet',
      'mekanism:alloy_atomic',
      'mekanism:pellet_polonium',
      'mekanism:pellet_plutonium'
     ],
     'thermal:netherite_plate',
     [
       event.recipes.createDeploying('kubejs:incomplete_meka_plate', ['kubejs:incomplete_meka_plate', 'mekanism:alloy_atomic']),
      event.recipes.createDeploying('kubejs:incomplete_meka_plate', ['kubejs:incomplete_meka_plate', 'mekanism:pellet_polonium']),
      event.recipes.createDeploying('kubejs:incomplete_meka_plate', ['kubejs:incomplete_meka_plate', 'mekanism:pellet_plutonium']),
      event.recipes.createDeploying('kubejs:incomplete_meka_plate', ['kubejs:incomplete_meka_plate', 'mekanism:hdpe_sheet']),
      event.recipes.createPressing(['kubejs:meka_plate'], ['kubejs:incomplete_meka_plate'])
  ]).transitionalItem('kubejs:incomplete_meka_plate').loops(1)

    event.remove({id: 'compactvoidminers:void_miner'})
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "instrument_assembly_machine",
        "controllerId": "multiblock",
        "ticks": 240,
        "inputs": [
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:laser',
                  "count": 2
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:digital_miner',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:antimatter_alloy',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:ultimate_control_circuit',
                  "count": 4
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'mekanism:alloy_atomic',
                  "count": 18
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 200
              }
            },
            {
              "type": "masterfulmachinery:create_rotation",
              "data":{
                  "speed": 256
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'compactvoidminers:void_miner',
                    "count": 1
                }
            }
        ]
    }
    )
    event.remove({id: 'mekanism:induction/cell/basic'})
    event.remove({id: 'mekanism:induction/cell/advanced'})
    event.remove({id: 'mekanism:induction/cell/elite'})
    event.remove({id: 'mekanism:induction/cell/ultimate'})
    event.remove({id: 'mekanism:induction/provider/basic'})
    event.remove({id: 'mekanism:induction/provider/advanced'})
    event.remove({id: 'mekanism:induction/provider/elite'})
    event.remove({id: 'mekanism:induction/provider/ultimate'})
    
    event.custom(
      {
        "type": "masterfulmachinery:machine_process",
        "structureId": "neutrin_polymerizer",
        "controllerId": "multiblock",
        "ticks": 300,
        "inputs": [
            {
              "type": "masterfulmachinery:mekanism_gas",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "gas": 'mekanism:antimatter',
                  "amount": 1
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
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'endless:neutronium_pile',
                    "count": 1
                }
            }
        ]
    }
    )
    event.remove({id: 'endless:extreme_crafting_table'})
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
    )
    event.remove({id: 'endless:diamond_lattice'})
    event.remove({id: 'endless:crystal_matrix_ingot'})
    event.remove({output: ['projecte:condenser_mk1', 'projecte:collector_mk1', 'projecte:relay_mk1']})
    event.remove({id: 'projecte:dark_matter'})
    event.remove({id: 'projecte:red_matter'})
    event.remove({id: 'projecte:red_matter_alt'})
    event.remove({id: 'projecte:philosophers_stone'})
    event.remove({id: 'projecte:philosophers_stone_alt'})
    event.remove({id: 'projecte:transmutation_table'})
    event.remove({id: 'projecte:transmutation_tablet'})
    event.remove({id: 'projecte:evertide_amulet'})
    event.remove({id: 'projecte:volcanite_amulet'})
    event.remove({id: 'projecte:watch_of_flowing_time'})
    event.remove({output: 'projecte:repair_talisman'})
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 200,
            "starlight": 1000,
            "pattern": [
              "GEDEG",
              "FABAF",
              "DBCBD",
              "FABAF",
              "GEDEG"
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
                "item": "endless:crystal_matrix_ingot"
              },
              "G": {
                "item": "endless:neutronium_ingot"
              },
            },
            "output": [
              {
                "item": "projecte:philosophers_stone",
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
                "item": "endless:endest_pearl"
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
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 3,
            "duration": 180,
            "starlight": 800,
            "pattern": [
              "CAAAC",
              "ABBBA",
              "ABDBA",
              "ABBBA",
              "CAAAC"
            ],
            "key": {
              "A": {
                "item": "projecte:aeternalis_fuel_block"
              },
              "B": {
                "item": "mekanism:pellet_antimatter"
              },
              "C": {
                "item": "endless:diamond_lattice"
              },
              "D": {
                "item": "endless:neutronium_ingot"
              },
            },
            "output": [
              {
                "item": "projecte:dark_matter",
                "count": 8
              }
            ],
            "focus_constellation": "astralsorcery:evorsio",
            "relay_inputs": [],
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
              "CAAAC",
              "ABBBA",
              "ABDBA",
              "ABBBA",
              "CAAAC"
            ],
            "key": {
              "A": {
                "item": "projecte:aeternalis_fuel_block"
              },
              "B": {
                "item": "projecte:dark_matter"
              },
              "C": {
                "item": "endless:crystal_matrix_ingot"
              },
              "D": {
                "item": "endless:neutronium_block"
              },
            },
            "output": [
              {
                "item": "projecte:red_matter",
                "count": 2
              }
            ],
            "focus_constellation": "astralsorcery:discidia",
            "relay_inputs": [],
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
                  "item": 'endless:cosmic_meatballs',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:ultimate_stew',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:endest_pearl',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:neutronium_gear',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:record_fragment',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'appliedenergistics2:singularity',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'scalinghealth:power_crystal',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'scalinghealth:heart_crystal',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'miniutilities:the_final_opinium_core',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:data',
                  "count": 1
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 500
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
                  "amount": 10
              }
            },
            {
              "type": "masterfulmachinery:botania_mana",
              "perTick": true,
              "data":{
                  "amount": 10
              }
            },
            {
              "type": "masterfulmachinery:fluids",
              "perTick": true,
              "data":{
                  "fluid": "bloodmagic:life_essence_fluid",
                  "amount": 10
              }
            },
            {
              "type": "masterfulmachinery:mekanism_gas",
              "perTick": true,
              "data":{
                  "gas": "mekanism:antimatter",
                  "amount": 1
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'endless:infinity_catalyst',
                    "count": 1
                }
            }
        ]
    }
    )
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
                  "item": 'endless:infinity_catalyst',
                  "count": 9
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:neutronium_ingot',
                  "count": 18
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'endless:crystal_matrix_ingot',
                  "count": 18
              }
            },
            {
              "type": "masterfulmachinery:items",
              "perTick": false,
              "consumeInstantly": false,
              "data":{
                  "item": 'kubejs:antimatter_alloy',
                  "count": 9
              }
            },
            {
              "type": "masterfulmachinery:energy",
              "perTick": true,
              "consumeInstantly": false,
              "data":{
                  "amount": 500
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
                  "amount": 10
              }
            },
            {
              "type": "masterfulmachinery:botania_mana",
              "perTick": true,
              "data":{
                  "amount": 60
              }
            },
            {
              "type": "masterfulmachinery:fluids",
              "perTick": true,
              "data":{
                  "fluid": "bloodmagic:life_essence_fluid",
                  "amount": 50
              }
            },
            {
              "type": "masterfulmachinery:mekanism_gas",
              "perTick": true,
              "data":{
                  "gas": "mekanism:antimatter",
                  "amount": 1
              }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": 'endless:infinity_ingot',
                    "count": 1
                }
            }
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
    )

    event.remove({id: 'endless:sd_creative_vending_upgrade'})
    event.remove({id: 'endless:ae2_creative_energy_cell'})
    event.remove({id: 'endless:sd_creative_storage_upgrade'})
    event.remove({id: 'endless:tc3_creative_slot_upgrades'})
    event.remove({id: 'endless:tc3_creative_slot_abilities'})
    event.remove({id: 'endless:tc3_creative_slot_souls'})
    event.remove({id: 'endless:tc3_creative_slot_defense'})
    event.remove({id: 'endless:bot_creative_pool'})
    event.remove({id: 'endless:bot_creative_mana_tablet'})
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

    event.remove({output: '#kubejs:disabled'})

    event.custom(
      {
          "type": "astralsorcery:altar",
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "GH_HD",
            "IDADI",
            "_BFC_",
            "IDEDI",
            "DH_HG"
          ],
          "key": {
            "A": {
              "item": "minecraft:red_dye"
            },
            "B": {
              "item": "minecraft:blue_dye"
            },
            "C": {
              "item": "minecraft:yellow_dye"
            },
            "D": {
              "item": "minecraft:feather"
            },
            "E": {
              "item": "minecraft:black_dye"
            },
            "F": {
              "item": "minecraft:white_dye"
            },
            "G": {
              "item": "astralsorcery:resonating_gem"
            },
            "H": {
              "item": "astralsorcery:stardust"
            },
            "I": {
              "item": "astralsorcery:illumination_powder"
            },
          },
          "output": [
            {
              "item": "gofish:taz_art_pigeon",
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
          "altar_type": 2,
          "duration": 100,
          "starlight": 600,
          "pattern": [
            "GD_DG",
            "IF FI",
            "_BAB_",
            "IF FI",
            "GD_DG"
          ],
          "key": {
            "A": {
              "item": "minecraft:redstone_block"
            },
            "B": {
              "item": "kubejs:kinetic_mechanism"
            },
            "F": {
              "item": "minecraft:feather"
            },
            "G": {
              "item": "astralsorcery:resonating_gem"
            },
            "D": {
              "item": "astralsorcery:stardust"
            },
            "I": {
              "item": "astralsorcery:illumination_powder"
            },
          },
          "output": [
            {
              "item": "gofish:taz_dev_pigeon",
              "count": 1
            }
          ],
          "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam"
          ]
      }
  )
  event.shapeless(Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;807872109,-50642177,-1128450341,2001042160],Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTY3Nzg5OTc1ODQ0NCwKICAicHJvZmlsZUlkIiA6ICIzMDI3MjY2ZGZjZmI0MmZmYmNiZDM2ZGI3NzQ1N2FmMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJHb2Zpc2hmbHkyMzMzMzMiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzI3OTg3YWEwZGZmZjk3NGQ5MTI3MzQxMmY3ZTAxNTlhMzUwNzg0OGRjMGRmMDdlYjMyYzYyMTBiMzllY2IxZCIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9",Signature:"fLhoWqRQcRPH/PaVudTkxgUxv2kiC9Cz6+JMgb1MwYbKo8eN/8XwE9ZxX4G8kMa3YDuVDF+xCFVlRQmH6VEIaBu6J+BC02+IijOtZZdH9vgDW/YQM6EFS/7OlZ1QdkCemhddbKQaJwWyZQm1W5za0qVG2PniP2gRk8iVqs6wHBnpIBkL8ys5xNkgumfxe+oA2JMoBqEINSmSZC+6dVpZIjWog8YDLcG8eZdD3/GWo6KnqvdzqYKY2yRncuYzNqP3sOW9ctY73ww64vS/LqmxhVoy7tgBE46oaB4dcK9RVy0Rmj4gS3aZySOMnZDPO6Xmv4pXdDgdPqYwgtv/oLGggrxOKok1k/oko6c3Hm5g99aCigyh6jPUukAolzlHw4uihrqCxbVDEPfBzvJx/+QKC7qAxg3EuDFj0jE7Yls+zIdD8UAsK/wejNCVpQ1227mpzQC0W84vaQ4gptsme4D4VELAY7Asc8Gn0Tishq+B5YR2RcCO/vskcV9y6NYzOk3YxugziDb2dNBc6htuG/GqPkyJN9SsBJhAmV3FdkV8i4Padnpr7zhHg5RdJX9zXNLoNrtgZp9j52FCyPxJabP4ATqaSh4kERbclmbGVD2gsyeYXtAe4lt5i/cx4HNeq9iietUmdKfsecDGn02A3cTRSOEeeYQ6FO6iGxXapnox2V8="}]},Name:"Gofishfly233333"}}'), [Item.of('minecraft:name_tag', "{RepairCost:0,display:{Name:'{\"text\":\"咕咕咕\"}'}}")])
})