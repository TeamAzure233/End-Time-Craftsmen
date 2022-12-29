onEvent('recipes', event => { 
    event.remove({id: 'notreepunching:flint_pickaxe'})
    event.remove({id: 'notreepunching:flint_shovel'})
    event.remove({id: 'notreepunching:flint_hoe'})
    event.remove({output: '#forge:tools/mattocks'})
    event.remove({id: 'tconstruct:common/flint'})
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:edtc_guide"}'),['minecraft:book','minecraft:cobblestone'])
    event.shapeless(Item.of('akashictome:tome', '{"akashictome:data":{extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:"armor.plate_chestplate"}}}},botania:{id:"botania:lexicon",Count:1b},astralsorcery:{id:"astralsorcery:tome",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"patchouli:edtc_guide"}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},croptopia:{id:"croptopia:guide",Count:1b},mysticalagriculture:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"mysticalagriculture:guide"}}}}'),['#forge:bookshelves','akashictome:tome'])
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
    event.remove({output: '#forge:angelring'})

    event.remove({output: 'create:precision_mechanism'})
    event.shapeless('3x mysticalagradditions:nether_star_shard',['minecraft:nether_star'])
    event.remove({id: 'create:mechanical_crafting/flywheel'})
    event.remove({id: 'create:mechanical_crafting/furnace_engine'})
    event.remove({id: 'createaddition:crafting/furnace_burner'})
    event.remove({id: 'createaddition:crafting/crude_burner'})
    event.remove({id: 'steampowered:alternator'})
    event.remove({output: 'create:andesite_alloy'})
    event.remove({id: 'minecraft:ender_eye'})
    event.remove({id: 'mysticalagriculture:essence/ender_eye'})
    event.remove({id: 'tconstruct:smeltery/casting/ender/eye'})

    event.shaped('kubejs:hyperspace_time_broom_mk1', [
        '  A',
        ' A ',
        'B  '
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:wheat'
    })
    event.shapeless('kubejs:hyperspace_time_broom_mk2',['kubejs:hyperspace_time_broom_mk1', 'minecraft:diamond'])

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
        I: 'createaddition:iron_rod',
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

    event.shaped('kubejs:rose_quartz_block', [
            'AA',
            'AA'
        ], {
            A: 'create:polished_rose_quartz'
          })
    event.shapeless('4x create:polished_rose_quartz', ['kubejs:rose_quartz_block'])

    event.shaped('kubejs:cast_iron_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'steampowered:cast_iron_ingot'
          })    
    event.shapeless('9x steampowered:cast_iron_ingot', ['kubejs:cast_iron_block'])
    event.shaped('steampowered:cast_iron_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:cast_iron_nugget'
    })
    event.shapeless('9x kubejs:cast_iron_nugget', ['steampowered:cast_iron_ingot'])

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
    event.replaceInput({output: 'minecraft:beacon'}, 'minecraft:nether_star', 'botania:dragonstone_block')

    event.recipes.createCompacting(['kubejs:compressed_andesite'],['4x minecraft:andesite'])
    event.recipes.createCompacting(['4x kubejs:raw_andesite_alloy'],['2x minecraft:iron_ingot','2x kubejs:compressed_andesite'])
    event.recipes.createMixing(['2x kubejs:gel'],[Fluid.of('minecraft:water', 100), 'minecraft:slime_ball', 'minecraft:bone_meal'])
    event.recipes.createMixing(['8x create:andesite_alloy'],['2x kubejs:raw_andesite_alloy','2x kubejs:gel'])

    event.recipes.createCompacting(['kubejs:scorched_alloy'],['3x tconstruct:scorched_bricks','#forge:ingots/steel']).heated()
    event.recipes.createCompacting(['kubejs:seared_alloy'],['5x tconstruct:seared_bricks','kubejs:scorched_alloy']).superheated()

    event.recipes.createPressing(['steampowered:bronze_sheet'],['#forge:ingots/bronze'])
    event.recipes.createMixing(['4x #forge:ingots/bronze'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()

    event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
    event.recipes.createMixing(['4x thermal:bronze_ingot'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()

    event.remove({id: 'thermal:bronze_dust_4'})
    event.recipes.createMixing(['4x #forge:dusts/bronze'],['3x #forge:dusts/copper','#forge:dusts/tin']).superheated()

    event.recipes.createPressing(['steampowered:steel_sheet'],['#forge:ingots/steel'])
    event.recipes.createCompacting(['#forge:ingots/steel'],['steampowered:cast_iron_ingot','#minecraft:coals']).superheated()
    event.recipes.createCompacting(['steampowered:steel_ingot'],['steampowered:cast_iron_ingot','#minecraft:coals']).superheated()

    event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
    event.recipes.createMixing('2x thermal:electrum_ingot', ['#forge:ingots/silver','minecraft:gold_ingot']).superheated()
    event.remove({id: 'thermal:electrum_dust_2'})

    event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
    event.recipes.createMixing('3x thermal:invar_ingot', ['2x minecraft:iron_ingot','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:invar_dust_3'})

    event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
    event.recipes.createMixing('2x thermal:constantan_ingot', ['#forge:ingots/copper','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:constantan_dust_2'})

    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id: 'thermal:machine/smelter/smelter_alloy_signalum'})
    event.remove({id: 'thermal:signalum_dust_4'})
    event.recipes.createMixing('4x thermal:signalum_dust', ['3x #forge:dusts/copper','#forge:dusts/silver','4x minecraft:redstone']).superheated()

    event.remove({id: 'thermal:lumium_dust_4'})
    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id: 'thermal:machine/smelter/smelter_alloy_lumium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
    event.remove({id: 'extendedcrafting:luminessence'})
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 1000)], [Fluid.of('tconstruct:molten_signalum', 100),Fluid.of('thermal:glowstone', 500),'minecraft:gunpowder']).superheated()
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 500)], ['extendedcrafting:luminessence']).superheated()
    event.recipes.createCompacting(['extendedcrafting:luminessence'], [Fluid.of('kubejs:lumium_solution', 500)])

    event.remove({id: 'extendedcrafting:enhanced_ender_ingot'})
    event.remove({id: 'thermal:enderium_dust_2'})
    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id: 'thermal:machine/smelter/smelter_alloy_enderium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.recipes.createMixing(['4x thermal:enderium_dust'], [Fluid.of('vehicle:ender_sap', 600),'3x rftoolsbase:dimensionalshard','3x #forge:dusts/lead','thermal:lumium_dust','4x extendedcrafting:ender_ingot']).superheated()

    event.remove({id: 'extendedcrafting:crystaltine_ingot'})
    event.recipes.createCompacting(['extendedcrafting:crystaltine_ingot'], ['64x rftoolsbase:dimensionalshard'])

    event.replaceInput({id: 'mysticalagriculture:prosperity_ingot'}, 'minecraft:iron_ingot', 'astralsorcery:starmetal_ingot')
    event.replaceInput({id: 'mysticalagriculture:prosperity_gemstone'}, 'minecraft:diamond', 'astralsorcery:resonating_gem')

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

    event.remove({id: 'thermal:machine/press/press_iron_ingot_to_plate'})
    event.remove({id: 'thermal:machine/press/press_gold_ingot_to_plate'})
    event.remove({id: 'thermal:machine/press/press_copper_ingot_to_plate'})
    event.remove({id: 'thermal:machine/press/press_bronze_ingot_to_plate'})
    event.recipes.createPressing(['thermal:tin_plate'],['#forge:ingots/tin'])
    event.recipes.createPressing(['thermal:silver_plate'],['#forge:ingots/silver'])
    event.recipes.createPressing(['thermal:nickel_plate'],['#forge:ingots/nickel'])

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

    event.remove({id: 'realistictorches:glowstone_paste'})
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 0,
            "duration": 60,
            "starlight": 60,
            "pattern": [
              "_____",
              "__A__",
              "_ABA_",
              "__C__",
              "_____"
            ],
            "key": {
              "A": {
                "item": "astralsorcery:illumination_powder"
              },
              "B": {
                "item": "minecraft:clay_ball"
              },
              "C": {
                "item": "minecraft:water_bucket"
              }
            },
            "output": [
              {
                "item": "realistictorches:glowstone_paste",
                "count": 1
              }
            ],
            "effects": [
              "astralsorcery:built_in_effect_discovery_central_beam"
            ]
    })
    event.remove({id: 'realistictorches:glowstone_crystal'})
    event.custom(
        {
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 60,
        "starlight": 60,
        "pattern": [
          "_____",
          "__A__",
          "_ABA_",
          "__A__",
          "_____"
        ],
        "key": {
          "A": {
            "item": "astralsorcery:illumination_powder"
          },
          "B": {
            "item": "mysticalagriculture:prosperity_shard"
          }
        },
        "output": [
          {
            "item": "realistictorches:glowstone_crystal",
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
            "altar_type": 1,
            "duration": 80,
            "starlight": 600,
            "pattern": [
              "D___D",
              "_BCB_",
              "_BAB_",
              "_BCB_",
              "D___D"
            ],
            "key": {
              "A": {
                "item": 'astralsorcery:aquamarine'
              },
              "B": {
                "item": 'botania:elementium_ingot'
              },
              "C": {
                "item": 'botania:terrasteel_ingot'
              },
              "D": {
                "item": 'botania:life_essence'
              }
            },
            "output": [
              {
                "item": "kubejs:asylum_of_elves",
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
            "starlight": 800,
            "pattern": [
              "DE_ED",
              "EACAE",
              "_CBC_",
              "EACAE",
              "DE_ED"
            ],
            "key": {
              "A": {
                "item": 'minecraft:nether_star'
              },
              "B": {
                "tag": 'kubejs:shifting_stars'
              },
              "C": {
                "item": 'astralsorcery:starmetal_ingot'
              },
              "D": {
                "item": 'minecraft:ender_eye'
              },
              "E": {
                "item": 'astralsorcery:resonating_gem'
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

    event.remove({id: 'scalinghealth:heart_crystal'})
    event.custom(
        {
            "type": "astralsorcery:altar",
            "altar_type": 1,
            "duration": 60,
            "starlight": 60,
            "pattern": [
              "A___A",
              "_BBB_",
              "_BCB_",
              "_BBB_",
              "A___A"
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
            "altar_type": 1,
            "duration": 60,
            "starlight": 60,
            "pattern": [
              "A___A",
              "_BBB_",
              "_BCB_",
              "_BBB_",
              "A___A"
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
              "item": "botania:rune_fire"
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
              "item": "botania:rune_air"
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

    event.remove({id: 'create:crafting/materials/andesite_casing'})
    event.shaped('4x create:andesite_casing', [
        'PLP',
        'ABA',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        A: 'create:andesite_alloy',
        B: 'kubejs:andesite_alloy_block'
    })
    event.remove({id: 'create:crafting/materials/brass_casing'})
    event.shaped('4x create:brass_casing', [
        'PLP',
        'SBS',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        S: 'create:brass_sheet',
        B: 'create:brass_block'
    })
    event.remove({id: 'create:crafting/materials/copper_casing'})
    event.shaped('4x create:copper_casing', [
        'PLP',
        'CBC',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        C: 'create:copper_sheet',
        B: '#forge:storage_blocks/copper'
    })
    event.shaped('4x kubejs:bronze_casing', [
        'PLP',
        'SBS',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        S: '#forge:plates/bronze',
        B: '#forge:storage_blocks/bronze'
    })
    event.shaped('4x kubejs:cast_iron_casing', [
        'PLP',
        'SBS',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        S: 'steampowered:cast_iron_sheet',
        B: 'kubejs:cast_iron_block'
    })
    event.shaped('4x kubejs:steel_casing', [
        'PLP',
        'SBS',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        S: '#forge:plates/steel',
        B: '#forge:storage_blocks/steel'
    })
    event.remove({id: 'create:crafting/materials/refined_radiance_casing'})
    event.recipes.createMechanicalCrafting('4x create:refined_radiance_casing', [
        ' GGG ',
        'GBRBG',
        'GRMRG',
        'GBRBG',
        ' GGG '
    ], {
        G: '#forge:glass/colorless',
        B: 'kubejs:steel_casing',
        R: 'create:refined_radiance',
        M: 'kubejs:electricity_mechanical_box'
    })
    event.remove({id: 'create:crafting/materials/shadow_steel_casing'})
    event.recipes.createMechanicalCrafting('4x create:shadow_steel_casing', [
        ' OOO ',
        'OBRBO',
        'ORMRO',
        'OBRBO',
        ' OOO '
    ], {
        O: '#forge:obsidian',
        B: 'kubejs:steel_casing',
        R: 'create:shadow_steel',
        M: 'kubejs:electricity_mechanical_box'
    })
    event.remove({id: 'createaddition:crafting/overcharged_casing'})
    event.recipes.createMechanicalCrafting('4x createaddition:overcharged_casing', [
        ' III ',
        'IBOBI',
        'IOMOI',
        'IBOBI',
        ' III '
    ], {
        I: 'minecraft:blue_ice',
        B: 'kubejs:steel_casing',
        O: 'createaddition:overcharged_alloy',
        M: 'kubejs:electricity_mechanical_box'
    })

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

    event.recipes.createMixing([Fluid.of('kubejs:flowing_time', 200)], [Fluid.of('astralsorcery:liquid_starlight', 1000),'3x #botania:mystical_flowers' ,'3x mysticalagriculture:imperium_essence', Fluid.of('tconstruct:molten_lumium', 1000)]).superheated()
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
    event.recipes.createMixing([Fluid.of('kubejs:magic_soup', 1000)], [Fluid.of('kubejs:soup', 1000), Fluid.of('astralsorcery:liquid_starlight', 1000), '3x #botania:mystical_flowers', Ingredient.of('minecraft:enchanted_book').ignoreNBT(), '3x minecraft:dragon_breath', '3x mysticalagriculture:imperium_essence']).superheated()

    event.recipes.createFilling('gofish:soup_can_open', ['gofish:can_empty', Fluid.of('kubejs:soup', 250)])
    event.recipes.createFilling('gofish:fruit_can_open', ['gofish:can_empty', Fluid.of('kubejs:juice', 250)])
    event.recipes.createFilling('gofish:magic_soup_can_open', ['gofish:can_empty', Fluid.of('kubejs:magic_soup', 250)])

    event.recipes.createDeploying('gofish:soup_can', ['gofish:soup_can_open', '#forge:plates/tin'])
    event.shapeless('gofish:soup_can_open', 'gofish:soup_can')
    event.recipes.createDeploying('gofish:fruit_can', ['gofish:fruit_can_open', '#forge:plates/tin'])
    event.shapeless('gofish:fruit_can_open', 'gofish:fruit_can')
    event.recipes.createDeploying('gofish:magic_soup_can', ['gofish:magic_soup_can_open', '#forge:plates/tin'])
    event.shapeless('gofish:magic_soup_can_open', 'gofish:magic_soup_can')

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
    
    //WIP 月饼（占位符

    event.recipes.createSequencedAssembly([
        Item.of('gofish:universal_wrench').withChance(80.0),
        Item.of('createaddition:brass_rod').withChance(20.0),
        'create:cogwheel',
        'create:brass_ingot',
        'create:brass_sheet',
        'create:precision_mechanism',
       ],
       'createaddition:brass_rod',
       [
         event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['createaddition:brass_rod', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', 'create:brass_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', 'create:brass_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_universal_wrench', ['kubejs:incomplete_universal_wrench', 'create:brass_sheet']),
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

    event.recipes.createMixing(['3x kubejs:blaze_brass'], ['create:brass_block', Fluid.of('tconstruct:blazing_blood', 100), Fluid.of('kubejs:cold_ice', 100)]).superheated()
    event.recipes.createMixing(['3x kubejs:chorus_chrome'], [Fluid.of('kubejs:chorus_solution', 100),Fluid.of('tconstruct:molten_enderium', 100),'kubejs:blaze_brass_block', 'kubejs:core_hollow']).superheated()
    event.recipes.thermal.crucible(Fluid.of('kubejs:chorus_solution', 1000), 'kubejs:chorus_crystal').energy(500000)
    event.recipes.thermal.crucible(Fluid.of('kubejs:cold_ice', 1000), 'thermal:blizz_rod').energy(200000)
    event.remove({id: 'vehicle:fluid_mixer'})
    event.remove({id: 'vehicle:fluid_extracter'})
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 600)],['thermal:ender_pearl_dust']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 450)],['minecraft:blaze_rod']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 1000)],['thermal:ender_pearl_dust']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 650)],['minecraft:blaze_rod']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:fuelium', 200)], [Fluid.of('vehicle:blaze_juice', 100), Fluid.of('vehicle:ender_sap', 100), 'minecraft:glowstone_dust']).superheated()
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
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:core_desolate').withChance(80.0),
        Item.of('mysticalagradditions:nether_star_shard').withChance(20.0),
        'kubejs:ether_essence',
        'kubejs:fragments',
        'kubejs:ether_drop',
        'minecraft:end_crystal'
       ],
       'mysticalagradditions:nether_star_shard',
       [
         event.recipes.createDeploying('kubejs:incomplete_core_desolate', ['kubejs:incomplete_core_desolate', 'kubejs:fragments']),
        event.recipes.createDeploying('kubejs:incomplete_core_desolate', ['kubejs:incomplete_core_desolate', 'kubejs:ether_drop']),
        event.recipes.createDeploying('kubejs:incomplete_core_desolate', ['kubejs:incomplete_core_desolate', 'minecraft:end_crystal']),
        event.recipes.createPressing(['kubejs:core_desolate'], ['kubejs:incomplete_core_desolate'])
   ]).transitionalItem('kubejs:incomplete_core_desolate').loops(1)

    event.shaped('4x kubejs:ether_drop', [
        'EEE',
        'EGE',
        'EEE'
    ], {
        E: 'kubejs:ether_essence',
        G: 'minecraft:ghast_tear'
    })
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:core_hollow').withChance(80.0),
        Item.of('rftoolsbase:infused_enderpearl').withChance(20.0),
        'kubejs:ether_essence',
        'kubejs:fragments',
        'kubejs:ether_drop',
        'minecraft:ender_eye'
       ],
       'rftoolsbase:infused_enderpearl',
       [
         event.recipes.createDeploying('kubejs:incomplete_core_hollow', ['kubejs:incomplete_core_hollow', 'kubejs:fragments']),
        event.recipes.createDeploying('kubejs:incomplete_core_hollow', ['kubejs:incomplete_core_hollow', 'kubejs:ether_drop']),
        event.recipes.createDeploying('kubejs:incomplete_core_hollow', ['kubejs:incomplete_core_hollow', 'minecraft:ender_eye']),
        event.recipes.createPressing(['kubejs:core_hollow'], ['kubejs:incomplete_core_hollow'])
    ]).transitionalItem('kubejs:incomplete_core_hollow').loops(1)

    event.remove({id: 'rftoolsbase:dimensionalshard'})
    event.remove({id: 'create:mixing/chromatic_compound'})
    event.recipes.createMixing(['6x create:chromatic_compound'],['4x astralsorcery:illumination_powder','4x astralsorcery:nocturnal_powder','4x #forge:dusts/obsidian','10x kubejs:rose_quartz_block','kubejs:chorus_chrome_block','botania:terrasteel_block']).superheated()

    event.custom({
		"type": "thermal:rock_gen",
		"adjacent":"minecraft:packed_ice",
		"below":"kubejs:andesite_alloy_block",
		"result": {"item":'minecraft:andesite'}
	})

    event.remove({id: 'mysticalagriculture:infusion_altar'})
    event.recipes.thermal.smelter('mysticalagriculture:infusion_altar', ['24x mysticalagriculture:supremium_gemstone_block', '8x thermal:lumium_block', '64x minecraft:stone']).energy(1048576)
    event.remove({id: 'mysticalagriculture:blank_skull'})
    event.shaped('16x mysticalagriculture:blank_skull', [
        ' S ',
        'SLS',
        ' S '
    ], {
        S: 'mysticalagriculture:soul_dust',
        L: 'minecraft:bone_block'
    })
    event.shaped('tconstruct:blaze_head', [
        ' S ',
        'SLS',
        ' S '
    ], {
        S: 'mysticalagriculture:blaze_essence',
        L: 'mysticalagriculture:blank_skull'
    })
    event.custom({
		"type": "thermal:rock_gen",
		"adjacent":"minecraft:blue_ice",
		"below":"mysticalagriculture:soulstone",
		"result": {"item":'mysticalagriculture:soulstone_cobble'}
	})
    event.shaped('16x mysticalagriculture:soul_dust', [
        'SS',
        'SS'
    ], {
        S: 'mysticalagriculture:soulstone_cobble'
    })
    event.shaped('mysticalagriculture:soulstone_cobble', [
        'SLS'
    ], {
        S: 'mysticalagriculture:soul_dust',
        L: '#forge:cobblestone'
    })
    event.remove({id: 'mysticalagriculture:infusion_crystal'})
    event.remove({id: 'mysticalagriculture:master_infusion_crystal'})

    event.remove({id: 'mekanism:dictionary'})
    event.shapeless('mekanism:dictionary', ['minecraft:book', 'create:andesite_alloy'])
//机械箱相关合成
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:kinetic_mechanism').withChance(90.0),
        Item.of('kubejs:andesite_alloy_nugget').withChance(1.0),
        Item.of('minecraft:andesite').withChance(4.0),
        Item.of('create:cogwheel').withChance(2.0),
        Item.of('create:large_cogwheel').withChance(1.0),
        Item.of('#minecraft:wooden_slabs').withChance(2.0),
      ], '#minecraft:wooden_slabs', [
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'kubejs:andesite_alloy_nugget']),
        event.recipes.createPressing('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism'])
      ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(1)

    event.shapeless('kubejs:kinetic_mechanism', ['#minecraft:wooden_slabs', 'create:cogwheel', 'create:large_cogwheel', 'kubejs:andesite_alloy_nugget'])
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
        Item.of('create:precision_mechanism').withChance(80.0),
        Item.of('kubejs:kinetic_mechanism').withChance(5.0),
        Item.of('create:electron_tube').withChance(4.0),
        Item.of('create:polished_rose_quartz').withChance(4.0),
        Item.of('minecraft:clock').withChance(3.0),
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
        A: 'thermal:silver_ingot',
        B: 'thermal:invar_plate',
        C: 'minecraft:water_bucket',
        D: 'minecraft:lava_bucket'
    })
    event.smithing('thermal:device_collector', 'kubejs:precision_mechanical_box', 'kubejs:collect_core')
    event.shaped('kubejs:collect_core', [
        'BDB',
        'ACA',
        'BBB'
    ], {
        A: 'thermal:silver_ingot',
        B: 'thermal:invar_plate',
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
    event.recipes.createMechanicalCrafting('tconstruct:scorched_alloyer', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:scorched_alloy',
        B: 'kubejs:liquid_mechanism',
        C: '#tconstruct:scorched_tanks'
    })
    event.recipes.createMechanicalCrafting('tconstruct:foundry_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:scorched_alloy',
        B: 'kubejs:liquid_mechanism',
        C: 'tconstruct:seared_melter'
    })
    event.recipes.createMechanicalCrafting('tconstruct:smeltery_controller', [
        'ABA',
        'CED',
        'ABA'
    ], {
        A: 'kubejs:seared_alloy',
        B: 'kubejs:liquid_mechanism',
        C: 'tconstruct:foundry_controller',
        D: 'tconstruct:scorched_alloyer',
        E: 'kubejs:liquid_mechanical_box'
    })
    event.recipes.createMechanicalCrafting('tac:workbench', [
        'MTM',
        'LCL',
        'LIL'
    ], {
        C: 'create:mechanical_crafter',
        T: '#create:toolboxes',
        I: 'minecraft:iron_block',
        L: '#minecraft:logs',
        M: 'create:precision_mechanism'
    })
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
    
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:liquid_mechanism').withChance(85.0),
        Item.of('kubejs:kinetic_mechanism').withChance(3.0),
        Item.of('kubejs:andesite_alloy_nugget').withChance(2.0),
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
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:steam_mechanism').withChance(75.0),
        Item.of('create:precision_mechanism').withChance(4.0),
        Item.of('kubejs:liquid_mechanism').withChance(5.0),
        Item.of('thermal:bronze_nugget').withChance(6.0),
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
    event.recipes.createMechanicalCrafting('steampowered:cast_iron_flywheel', [
        ' PIP ',
        'PWCWP',
        'IMBMI',
        'PWCWP',
        ' PIP '
      ], {
        M: 'kubejs:steam_mechanical_box_mk2',
        C: 'kubejs:cast_iron_casing',
        I: 'steampowered:cast_iron_ingot',
        P: 'steampowered:cast_iron_sheet',
        W: 'steampowered:cast_iron_cogwheel',
        B: 'steampowered:bronze_flywheel'
    })
    event.recipes.createMechanicalCrafting('steampowered:cast_iron_steam_engine', [
        'RPPR ',
        'PFCPR',
        'PMBMH',
        'PFCPR',
        'RPPR '
      ], {
        M: 'kubejs:steam_mechanical_box_mk2',
        C: 'kubejs:cast_iron_casing',
        P: 'steampowered:cast_iron_sheet',
        F: 'create:fluid_pipe',
        H: '#kubejs:piston',
        R: 'thermal:cured_rubber',
        B: 'steampowered:bronze_steam_engine'
    })
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
    event.recipes.createMechanicalCrafting('steampowered:steel_flywheel', [
        ' PIP ',
        'PWCWP',
        'IMBMI',
        'PWCWP',
        ' PIP '
      ], {
        M: 'kubejs:steam_mechanical_box_mk3',
        C: 'kubejs:steel_casing',
        I: '#forge:ingots/steel',
        P: '#forge:plates/steel',
        W: 'steampowered:cast_iron_cogwheel',
        B: 'steampowered:cast_iron_flywheel'
    })
    event.recipes.createMechanicalCrafting('steampowered:steel_steam_engine', [
        'RPPR ',
        'PFCPR',
        'PMBMH',
        'PFCPR',
        'RPPR '
      ], {
        M: 'kubejs:steam_mechanical_box_mk3',
        C: 'kubejs:steel_casing',
        P: '#forge:plates/steel',
        F: 'create:fluid_pipe',
        H: '#kubejs:piston',
        R: 'thermal:cured_rubber',
        B: 'steampowered:cast_iron_steam_engine'
    })

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:electricity_mechanism').withChance(70.0),
        Item.of('thermal:rf_coil').withChance(5.0),
        Item.of('kubejs:steam_mechanism').withChance(3.0),
        Item.of('create:precision_mechanism').withChance(3.0),
        Item.of('kubejs:blaze_brass').withChance(4.0),
        Item.of('thermal:silver_plate').withChance(8.0),
        Item.of('steampowered:steel_cogwheel').withChance(3.0),
        Item.of('steampowered:steel_large_cogwheel').withChance(3.0),
      ], 'kubejs:steam_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'steampowered:steel_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'steampowered:steel_large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'thermal:rf_coil']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', 'kubejs:blaze_brass']),
        event.recipes.createDeploying('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism', '#forge:plates/silver']),
        event.recipes.createPressing('kubejs:incomplete_electricity_mechanism', ['kubejs:incomplete_electricity_mechanism']),
      ]).transitionalItem('kubejs:incomplete_electricity_mechanism').loops(1)
    event.remove({output: '#kubejs:electricity_machine'})
    event.recipes.createMechanicalCrafting('kubejs:electricity_mechanical_box', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: 'kubejs:electricity_mechanism',
        B: 'kubejs:steam_mechanical_box_mk3',
        C: 'thermal:machine_frame',
        D: '#forge:storage_blocks/redstone'
    })
    event.recipes.createMechanicalCrafting('4x thermal:machine_frame', [
        'CIGIC',
        'IBPBI',
        'GRMRG',
        'IBFBI',
        'CIGIC'
    ], {
        I: '#forge:plates/invar',
        G: '#forge:glass',
        B: 'kubejs:blaze_brass',
        C: 'kubejs:steel_casing',
        F: 'create:fluid_tank',
        P: 'pipez:universal_pipe',
        R: 'thermal:rf_coil',
        M: 'kubejs:electricity_mechanism'
    })
    event.recipes.createMechanicalCrafting('kubejs:flux_tool_casing', [
        ' I I ',
        ' IPI ',
        'IRGRI',
        'ITCTI',
        ' IFI ',
        'I B I',
        '  B  '
    ], {
        I: '#forge:plates/steel',
        G: 'thermal:gold_gear',
        T: 'thermal:tin_gear',
        R: 'thermal:rf_coil',
        B: 'createaddition:iron_rod',
        C: 'createaddition:capacitor',
        F: 'kubejs:electricity_mechanical_box',
        P: 'kubejs:electricity_mechanism'
    })
    event.smithing('thermal:flux_drill', 'kubejs:flux_tool_casing', 'thermal:drill_head')
    event.smithing('thermal:flux_saw', 'kubejs:flux_tool_casing', 'thermal:saw_blade')
    event.recipes.createMechanicalCrafting('thermal:tinker_bench', [
        'IIIII',
        'PCFSP',
        'PRDRP',
        'PPPPP'
    ], {
        I: '#forge:plates/iron',
        C: 'minecraft:crafting_table',
        S: 'minecraft:smithing_table',
        F: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        D: 'create:depot',
        P: '#minecraft:planks'
    })
    event.recipes.createMechanicalCrafting('thermal:charge_bench', [
        'EEEEE',
        'LRTRL',
        'LDFDL',
        'ELLLE'
    ], {
        E: 'thermal:electrum_plate',
        D: 'create:depot',
        T: 'createaddition:tesla_coil',
        F: 'kubejs:electricity_mechanical_box',
        L: '#forge:plates/lead',
        R: 'thermal:rf_coil'
    })
    event.recipes.createMechanicalCrafting('extendedcrafting:frame', [
        'BGB',
        'GFG',
        'BGB'
    ], {
        F: 'kubejs:electricity_mechanical_box',
        G: 'thermal:signalum_glass',
        B: 'extendedcrafting:black_iron_slate'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_stirling', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'minecraft:iron_ingot',
        C: 'thermal:iron_gear',
        D: '#forge:stone',
        E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_compression', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'minecraft:iron_ingot',
        C: 'thermal:bronze_gear',
        D: '#forge:ingots/bronze',
        E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_gourmand', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: '#forge:ingots/bronze',
        C: 'thermal:copper_gear',
        D: '#forge:ingots/tin',
        E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_magmatic', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: '#forge:ingots/bronze',
        C: 'thermal:invar_gear',
        D: '#forge:ingots/invar',
        E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_numismatic', [
      ' A ',
      'BCB',
      'DED'
    ], {
      A: 'thermal:rf_coil',
      B: '#forge:ingots/bronze',
      C: 'thermal:tin_gear',
      D: '#forge:ingots/constantan',
      E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_lapidary', [
      ' A ',
      'BCB',
      'DED'
    ], {
      A: 'thermal:rf_coil',
      B: '#forge:ingots/bronze',
      C: 'thermal:gold_gear',
      D: 'minecraft:lapis_lazuli',
      E: 'thermal:machine_frame'
    })
    event.recipes.createMechanicalCrafting('thermal:dynamo_disenchantment', [
      ' A ',
      'BCB',
      'DED'
    ], {
      A: 'thermal:rf_coil',
      B: '#forge:ingots/bronze',
      C: 'thermal:silver_gear',
      D: 'minecraft:experience_bottle',
      E: 'thermal:machine_frame'
    }) 
    event.remove({id: 'thermal:dynamo_numismatic'})
    event.remove({id: 'thermal:dynamo_lapidary'})
    event.remove({id: 'thermal:dynamo_disenchantment'})
    event.remove({id: 'extendedcrafting:black_iron_slate'})
    event.recipes.createPressing(['extendedcrafting:black_iron_slate'], ['extendedcrafting:black_iron_ingot'])
    event.recipes.createMechanicalCrafting('createaddition:electric_motor', [
        ' BAB ',
        'BSSSB',
        'BEREB',
        'BSSSB',
        ' BAB '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/brass',
        R: '#forge:rods/iron',
        S: 'createaddition:copper_spool',
        E: 'kubejs:electricity_mechanism'
    })
    event.recipes.createMechanicalCrafting('createaddition:alternator', [
        ' SAS ',
        'SCCCS',
        'SERES',
        'SDGDS',
        ' SAS '
    ], {
        A: 'create:andesite_alloy',
        S: '#forge:plates/steel',
        R: '#forge:rods/iron',
        C: 'createaddition:copper_spool',
        D: 'createaddition:capacitor',
        G: 'createaddition:gold_spool',
        E: 'kubejs:electricity_mechanism'
    })
    event.recipes.createMechanicalCrafting('thermal:energy_cell', [
        'AFCFA',
        'FEDEF',
        'FDBDF',
        'FEDEF',
        'AFFFA'
    ], {
        A: 'thermal:cured_rubber',
        B: 'kubejs:electricity_mechanical_box',
        C: 'pipez:energy_pipe',
        D: 'thermal:energy_cell_frame',
        E: 'thermal:rf_coil',
        F: '#forge:plates/invar'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_furnace', [
        'FAF',
        'BCB',
        'DED'
    ], {
        A: 'createaddition:heater',
        B: 'minecraft:bricks',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:copper_gear',
        E: 'thermal:rf_coil',
        F: 'minecraft:furnace'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_smelter', [
        'FAF',
        'BCB',
        'DED'
    ], {
        A: 'createaddition:heater',
        B: '#forge:sand',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:invar_gear',
        E: 'thermal:rf_coil',
        F: 'minecraft:blast_furnace'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_crucible', [
        'FAG',
        'BCB',
        'DED'
    ], {
        A: 'createaddition:heater',
        B: 'minecraft:nether_bricks',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:invar_gear',
        E: 'thermal:rf_coil',
        F: 'minecraft:blast_furnace',
        G: 'thermal:obsidian_glass'
    })
    event.recipes.createMechanicalCrafting('thermal:device_soil_infuser', [
        'FBF',
        'ACA',
        'EDE'
    ], {
        A: '#forge:glass',
        B: 'thermal:phytogro',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:rf_coil',
        E: '#minecraft:planks',
        F: '#forge:gears/lumium'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_sawmill', [
        ' A ',
        'ECE',
        'BDB'
    ], {
        A: 'thermal:saw_blade',
        B: '#forge:gears/copper',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:rf_coil',
        E: '#forge:stone',
    })
    event.recipes.createMechanicalCrafting('thermal:machine_crafter', [
        'AAA',
        'ECE',
        'BDB'
    ], {
        A: 'create:mechanical_crafter',
        B: '#forge:gears/copper',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:rf_coil',
        E: '#forge:plates/tin',
    })
    event.recipes.createMechanicalCrafting('thermal:machine_pulverizer', [
        ' A ',
        'ECE',
        'BDB'
    ], {
        A: 'thermal:drill_head',
        B: '#forge:gears/copper',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:rf_coil',
        E: 'minecraft:flint',
    })
    event.recipes.createMechanicalCrafting('thermal:machine_press', [
        ' A ',
        'ECE',
        'BDB'
    ], {
        A: '#forge:storage_blocks/steel',
        B: '#forge:gears/constantan',
        C: 'kubejs:electricity_mechanical_box',
        D: 'thermal:rf_coil',
        E: '#forge:plates/bronze',
    })
    event.recipes.createMechanicalCrafting('thermal:machine_insolator', [
        ' F ',
        'OBO',
        'GRG'
    ], {
        F: 'minecraft:farmland',
        B: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        O: 'thermal:obsidian_glass',
        G: '#forge:gears/lumium'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_centrifuge', [
        ' B ',
        'TMT',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        T: '#forge:plates/tin',
        G: '#forge:gears/constantan',
        B: 'create:mechanical_bearing'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_chiller', [
        ' O ',
        'IMI',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        I: 'minecraft:packed_ice',
        G: '#forge:gears/invar',
        O: 'thermal:obsidian_glass'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_refinery', [
        'OFO',
        'IMI',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        I: '#forge:ingots/copper',
        G: '#forge:gears/constantan',
        O: 'thermal:obsidian_glass',
        F: 'create:fluid_tank'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_bottler', [
        ' B ',
        'LML',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        G: '#forge:gears/copper',
        L: '#forge:glass',
        B: 'minecraft:bucket'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_brewer', [
        ' B ',
        'OMO',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        O: 'thermal:obsidian_glass',
        G: '#forge:gears/constantan',
        B: 'minecraft:brewing_stand'
    })
    event.recipes.createMechanicalCrafting('thermal:machine_pyrolyzer', [
        ' B ',
        'NMN',
        'GRG'
    ], {
        M: 'kubejs:electricity_mechanical_box',
        R: 'thermal:rf_coil',
        N: 'minecraft:nether_bricks',
        G: '#forge:gears/constantan',
        B: 'minecraft:blaze_rod'
    })
    event.recipes.createMechanicalCrafting('ftb-power-pots:power_pot_mk1', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'mysticalagriculture:prudentium_ingot',
        B: 'botanypots:hopper_botany_pot',
        C: 'kubejs:electricity_mechanism'
    })
    event.recipes.createMechanicalCrafting('ftb-power-pots:power_pot_mk2', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'mysticalagriculture:tertium_ingot',
        B: 'ftb-power-pots:power_pot_mk1'
    })
    event.recipes.createMechanicalCrafting('ftb-power-pots:power_pot_mk3', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mysticalagriculture:imperium_ingot',
        B: 'ftb-power-pots:power_pot_mk2'
    })
    event.recipes.createMechanicalCrafting('ftb-power-pots:power_pot_mk4', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mysticalagradditions:insanium_nugget',
        B: 'ftb-power-pots:power_pot_mk3'
    })

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:chromatic_mechanism').withChance(65.0),
        Item.of('kubejs:electricity_mechanism').withChance(5.0),
        Item.of('kubejs:chorus_chrome').withChance(10.0),
        Item.of('create:shadow_steel').withChance(5.0),
        Item.of('create:refined_radiance').withChance(5.0),
        Item.of('createaddition:overcharged_alloy').withChance(5.0),
        Item.of('create:chromatic_compound').withChance(5.0),
      ], 'kubejs:electricity_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism', 'kubejs:chorus_chrome']),
        event.recipes.createDeploying('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism', 'create:shadow_steel']),
        event.recipes.createDeploying('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism', 'create:refined_radiance']),
        event.recipes.createDeploying('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism', 'createaddition:overcharged_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism', 'create:chromatic_compound']),
        event.recipes.createPressing('kubejs:incomplete_chromatic_mechanism', ['kubejs:incomplete_chromatic_mechanism']),
      ]).transitionalItem('kubejs:incomplete_chromatic_mechanism').loops(1)

    event.remove({output: '#kubejs:chromatic_machine'})
    event.recipes.createMechanicalCrafting('mekanismgenerators:wind_generator', [
        '  O  ',
        '  A  ',
        'OABAO',
        '  A  ',
        '  O  ',
        ' OAO ',
        ' BFB '
    ], {
        F: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/osmium',
        B: 'mekanism:basic_control_circuit'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:heat_generator', [
        'SSS',
        'POP',
        'CFC'
    ], {
        F: 'ironfurnaces:silver_furnace',
        P: '#minecraft:planks',
        O: '#forge:ingots/osmium',
        C: '#forge:ingots/copper',
        S: '#forge:ingots/steel'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:bio_generator', [
        'RAR',
        'FCF',
        'SAS'
    ], {
        F: 'mekanism:bio_fuel',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        S: '#forge:ingots/steel',
        R: 'minecraft:redstone'
    })
    event.recipes.createMechanicalCrafting('mekanism:quantum_entangloporter', [
        'OAUAO',
        'AUCUA',
        'UFJTU',
        'AUEUA',
        'OAUAO'
    ], {
        A: 'mekanism:alloy_atomic',
        U: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:teleportation_core',
        O: 'mekanism:ingot_refined_obsidian',
        F: 'mekanism:elite_fluid_tank',
        E: 'mekanism:ultimate_energy_cube',
        T: 'mekanism:advanced_chemical_tank',
        J: 'mekanism:steel_casing'
    })
    event.recipes.createMechanicalCrafting('mekanism:painting_machine', [
        'IAI',
        'DCD',
        'IAI'
    ], {
        D: 'mekanism:dye_base',
        C: 'mekanism:steel_casing',
        A: 'mekanism:advanced_control_circuit',
        I: 'mekanism:alloy_infused'
    })
    event.recipes.createMechanicalCrafting('mekanism:pigment_mixer', [
        'ACA',
        'HJH',
        'ACA'
    ], {
        H: 'mekanism:hdpe_rod',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        J: 'mekanism:steel_casing'
    })
    event.recipes.createMechanicalCrafting('mekanism:pigment_extractor', [
        'RCR',
        'FJF',
        'RCR'
    ], {
        F: 'minecraft:flint',
        R: 'minecraft:redstone',
        C: 'mekanism:basic_control_circuit',
        J: 'mekanism:steel_casing'
    })
    event.recipes.createMechanicalCrafting('mekanism:fuelwood_heater', [
        'SCS',
        'FJF',
        'SSS'
    ], {
        C: 'mekanism:basic_control_circuit',
        J: 'mekanism:steel_casing',
        F: 'ironfurnaces:silver_furnace',
        S: '#forge:ingots/steel'
    })
    event.recipes.createMechanicalCrafting('mekanism:resistive_heater', [
        'TRT',
        'RJR',
        'TET'
    ], {
        J: 'mekanism:steel_casing',
        E: 'mekanism:energy_tablet',
        R: 'minecraft:redstone',
        T: '#forge:ingots/tin'
    })
    event.recipes.createMechanicalCrafting('mekanism:pressurized_reaction_chamber', [
        'SAS',
        'CEC',
        'TDT'
    ], {
        E: 'mekanism:enrichment_chamber',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        D: 'mekanism:dynamic_tank',
        T: 'mekanism:basic_chemical_tank',
        S: '#forge:ingots/steel'
    })
    event.recipes.createMechanicalCrafting('mekanism:seismic_vibrator', [
        'TLT',
        'CJC',
        'TTT'
    ], {
        J: 'mekanism:steel_casing',
        L: 'minecraft:lapis_lazuli',
        C: 'mekanism:basic_control_circuit',
        T: '#forge:ingots/tin'
    })
    event.recipes.createMechanicalCrafting('mekanism:precision_sawmill', [
        'SCS',
        'AJA',
        'SBS'
    ], {
        J: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        S: '#forge:ingots/steel',
        B: 'thermal:saw_blade'
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_injection_chamber', [
        'ACA',
        'GPG',
        'ACA'
    ], {
        P: 'mekanism:purification_chamber',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        G: 'minecraft:gold_ingot'
    })
    event.recipes.createMechanicalCrafting('mekanism:purification_chamber', [
        'ACA',
        'OPO',
        'ACA'
    ], {
        P: 'mekanism:enrichment_chamber',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:advanced_control_circuit',
        O: '#forge:ingots/osmium'
    })
    event.recipes.createMechanicalCrafting('mekanism:energized_smelter', [
        'RCR',
        'FJF',
        'RCR'
    ], {
        J: 'mekanism:steel_casing',
        F: 'ironfurnaces:iron_furnace',
        R: 'minecraft:redstone',
        C: 'mekanism:basic_control_circuit'
    })
    event.recipes.createMechanicalCrafting('mekanism:electric_pump', [
        ' P ',
        'AJA',
        'OOO'
    ], {
        J: 'mekanism:steel_casing',
        P: 'create:mechanical_pump',
        O: '#forge:ingots/osmium',
        A: 'mekanism:alloy_infused',
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_infuser', [
        'ACA',
        'TJT',
        'ACA'
    ], {
        J: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
        T: 'mekanism:basic_chemical_tank'
    })
    event.recipes.createMechanicalCrafting('mekanism:combiner', [
        'ACA',
        'SJS',
        'ACA'
    ], {
        J: 'mekanism:steel_casing',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        S: '#forge:cobblestone'
    })
    event.recipes.createMechanicalCrafting('mekanism:chargepad', [
        ' T ',
        'PPP',
        'SES'
    ], {
        T: 'createaddition:tesla_coil',
        S: '#forge:plates/steel',
        P: 'minecraft:polished_blackstone_pressure_plate',
        E: 'mekanism:energy_tablet'
    })
    event.recipes.createMechanicalCrafting('mekanism:metallurgic_infuser', [
        'SFS',
        'ROR',
        'SFS'
    ], {
        S: 'create:shadow_steel',
        F: 'ironfurnaces:silver_furnace',
        R: 'minecraft:redstone_block',
        O: '#forge:storage_blocks/osmium'
    })
    event.recipes.createMechanicalCrafting('mekanism:electrolytic_separator', [
        'SRS',
        'AEA',
        'SFS'
    ], {
        S: 'create:shadow_steel',
        A: 'mekanism:alloy_infused',
        R: 'minecraft:redstone_block',
        E: 'mekanism:electrolytic_core',
        F: 'mekanism:steel_casing'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:gas_burning_generator', [
        'SAS',
        'FEF',
        'SAS'
    ], {
        S: 'create:shadow_steel',
        A: 'mekanism:alloy_infused',
        E: 'mekanism:electrolytic_core',
        F: 'mekanism:steel_casing'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:solar_generator', [
        'SSSSS',
        ' GFG ',
        'OABAO',
    ], {
        F: '#forge:storage_blocks/steel',
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/osmium',
        B: 'mekanism:basic_control_circuit',
        S: 'mekanismgenerators:solar_panel',
        G: '#forge:plates/steel'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:advanced_solar_generator', [
        'SGAGS',
        'SOAOS',
        'OGBGO',
    ], {
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/osmium',
        B: 'mekanism:basic_control_circuit',
        S: 'mekanismgenerators:solar_generator',
        G: '#forge:plates/steel',
        B: 'mekanism:basic_control_circuit'
    })
    event.recipes.createMechanicalCrafting('mekanism:atomic_disassembler', [
        'SED',
        'ACA',
        'OGO',
        ' P ',
        ' O '
    ], {
        S: Item.of('thermal:flux_saw').ignoreNBT(),
        D: Item.of('thermal:flux_drill').ignoreNBT(),
        E: 'mekanism:energy_tablet',
        A: 'create:shadow_steel',
        O: 'mekanism:ingot_refined_obsidian',
        C: 'mekanism:ultimate_control_circuit',
        G: 'thermal:enderium_gear',
        P: 'create:precision_mechanism'
    })
    event.recipes.createMechanicalCrafting('mekanism:free_runners', [
        'D D',
        'R R',
        'C C',
        'G G',
        'P P',
        'O O'
    ], {
        D: 'createaddition:capacitor',
        R: 'thermal:rf_coil',
        O: 'mekanism:ingot_refined_obsidian',
        C: 'mekanism:advanced_control_circuit',
        G: 'thermal:enderium_gear',
        P: 'create:precision_mechanism'
    })
    event.recipes.createMechanicalCrafting('mekanism:jetpack', [
        'TSCST',
        'STBTS',
        ' GLG ',
        ' P P ',
        ' T T '
    ], {
        T: '#forge:plates/tin',
        S: '#forge:plates/steel',
        C: 'mekanism:elite_control_circuit',
        B: 'mekanism:basic_chemical_tank',
        G: 'thermal:enderium_gear',
        L: 'create:blaze_burner',
        P: 'create:precision_mechanism'
    })
    event.recipes.createMechanicalCrafting('mekanism:jetpack_armored', [
        ' DDD ',
        'DRSRD',
        ' DJD ',
        '  D  '
    ], {
        J: 'mekanism:jetpack',
        R: 'create:refined_radiance',
        S: 'kubejs:shadow_steel_block',
        D: 'mekanism:dust_refined_obsidian'
    })
    event.recipes.createMechanicalCrafting('mekanism:flamethrower', [
        'CIIIII ',
        'IAPBGLD',
        'CCCCCI '
    ], {
        I: '#forge:plates/invar',
        C: '#forge:plates/constantan',
        A: 'mekanism:advanced_control_circuit',
        B: 'mekanism:basic_chemical_tank',
        G: 'thermal:enderium_gear',
        P: 'create:precision_mechanism',
        L: 'create:blaze_burner',
        D: 'create:blaze_cake'
    })
    event.recipes.createMechanicalCrafting('mekanism:nutritional_liquifier', [
        'ABA',
        'TCT',
        'ABA'
    ], {
        T: 'gofish:can_empty',
        C: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit'
    })
    event.recipes.createMechanicalCrafting('mekanism:isotopic_centrifuge', [
        'LLRLL',
        ' LCL ',
        'SUBUS',
        " LCL ",
        "LLRLL"
    ], {
        L: '#forge:ingots/lead',
        C: 'mekanism:steel_casing',
        B: 'mekanism:basic_chemical_tank',
        U: 'mekanism:ultimate_control_circuit',
        S: 'create:shadow_steel',
        R: 'create:refined_radiance'
    })
    event.recipes.createMechanicalCrafting('mekanism:enrichment_chamber', [
        'ASA',
        'BCB',
        'ASA',
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        S: '#forge:plates/steel'
    })
    event.recipes.createMechanicalCrafting('mekanism:osmium_compressor', [
        'ABA',
        'TCT',
        'ABA',
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:advanced_control_circuit',
        A: 'mekanism:alloy_infused',
        T: 'minecraft:bucket'
    })
    event.recipes.createMechanicalCrafting('mekanism:crusher', [
        'ASA',
        'BCB',
        'ALA',
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        S: '#forge:plates/steel',
        L: 'minecraft:lava_bucket'
    })
    event.recipes.createMechanicalCrafting('mekanism:teleporter', [
        ' A A ',
        'ABCBA',
        ' CTC ',
        'ABCBA',
        ' A A '
    ], {
        C: 'mekanism:steel_casing',
        T: 'mekanism:teleportation_core',
        B: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused'
    })    
    event.recipes.createMechanicalCrafting('mekanism:rotary_condensentrator', [
        'AG GA',
        'GBCBG',
        'AHTYA',
        'GBCBG',
        'AG GA'
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        T: 'mekanism:energy_tablet',
        G: 'thermal:obsidian_glass',
        Y: 'mekanism:basic_fluid_tank',
        H: 'mekanism:basic_chemical_tank'
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_oxidizer', [
        ' ACA ',
        ' ABA ',
        'AXDHA',
        'GABAG',
        'AGCGA'
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        G: 'thermal:obsidian_glass',
        D: 'mekanism:dynamic_tank',
        H: 'mekanism:basic_chemical_tank',
        X: 'mekanism:personal_chest'
    })
    event.recipes.createMechanicalCrafting('mekanism:solar_neutron_activator', [
        'ADGDA',
        ' ABA ',
        ' ABA ',
        'FBCBF',
        'FEEEF'
    ], {
        C: 'mekanism:steel_casing',
        B: 'mekanism:elite_control_circuit',
        A: 'mekanism:alloy_reinforced',
        E: '#forge:storage_blocks/bronze',
        F: '#forge:plates/bronze',
        D: 'mekanism:hdpe_sheet',
        G: 'mekanismgenerators:solar_panel'
    })
    event.recipes.createMechanicalCrafting('mekanism:modification_station', [
        ' MAXAM ',
        'MUPCPUM',
        'AMCBCMA'
    ], {
        C: 'mekanism:steel_casing',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:pellet_plutonium',
        M: 'kubejs:meka_plate',
        U: 'mekanism:ultimate_control_circuit',
        X: '#forge:chests/wooden',
        A: 'mekanism:alloy_atomic'
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_dissolution_chamber', [
        'AGLGA',
        'GRBRG',
        'LUCUL',
        'GRBRG',
        'AGLGA'
    ], {
        C: 'mekanism:steel_casing',
        U: 'mekanism:ultimate_control_circuit',
        R: 'mekanism:ingot_refined_obsidian',
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:basic_chemical_tank',
        G: 'thermal:obsidian_glass',
        L: 'kubejs:blaze_brass'
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_washer', [
        'AGLGA',
        'GRFRG',
        'LUCUL',
        'GRBRG',
        'AGLGA'
    ], {
        C: 'mekanism:steel_casing',
        U: 'mekanism:ultimate_control_circuit',
        R: 'mekanism:ingot_refined_obsidian',
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:basic_chemical_tank',
        F: 'mekanism:basic_fluid_tank',
        G: 'thermal:obsidian_glass',
        L: 'kubejs:blaze_brass'
    })
    event.recipes.createMechanicalCrafting('mekanism:chemical_crystallizer', [
        'AGLGA',
        'GRFRG',
        'LUCUL',
        'GRFRG',
        'AGLGA'
    ], {
        C: 'mekanism:steel_casing',
        U: 'mekanism:ultimate_control_circuit',
        R: 'mekanism:ingot_refined_obsidian',
        A: 'mekanism:alloy_atomic',
        F: 'mekanism:fluorite_gem',
        G: 'thermal:obsidian_glass',
        L: 'kubejs:blaze_brass'
    })
    event.recipes.createMechanicalCrafting('mekanism:digital_miner', [
        'SUAUS',
        'ACSCA',
        'ALRLA',
        'ACPCA',
        'SPAPS'
    ], {
        R: 'mekanism:robit',
        S: 'mekanism:steel_casing',
        C: 'mekanism:teleportation_core',
        L: 'mekanism:logistical_sorter',
        A: 'mekanism:alloy_atomic',
        U: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:ultimate_logistical_transporter'
    })
    event.recipes.createMechanicalCrafting('mekanism:laser', [
        'AE ',
        'CJD',
        'AE '
    ], {
        J: 'mekanism:steel_casing',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        E: 'mekanism:energy_tablet',
        D: 'minecraft:diamond',
    })
    event.recipes.createMechanicalCrafting('mekanism:laser_amplifier', [
        'SSS',
        'CID',
        'SSS'
    ], {
        I: 'mekanism:basic_induction_cell',
        D: 'minecraft:diamond',
        S: '#forge:plates/steel',
        C: 'mekanism:elite_control_circuit',
    })
    event.recipes.createMechanicalCrafting('mekanism:antiprotonic_nucleosynthesizer', [
        'YAGGAY',
        'AUAAUA',
        'YMCCMY',
        'YMCCMY',
        'AUAAUA',
        'YAYYAY'
    ], {
        C: 'mekanism:steel_casing',
        U: 'mekanism:ultimate_control_circuit',
        A: 'mekanism:alloy_atomic',
        G: 'thermal:enderium_glass',
        Y: 'create:chromatic_compound',
        M: 'mekanism:pellet_antimatter'
    })

    event.remove({output: '#kubejs:removed_recipes_machine'})
//WIP 机械箱相关合成

    event.remove({id: 'appliedenergistics2:network/blocks/controller'})
    event.remove({id: 'appliedenergistics2:network/blocks/storage_chest'})
    event.remove({id: 'appliedenergistics2:network/blocks/quantum_ring'})
    event.remove({id: 'appliedenergistics2:network/blocks/quantum_link'})

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
                "item":"mekanism:basic_control_circuit"
            }
        }
    )
    event.remove({id: 'mekanism:steel_casing'})
    event.recipes.createMechanicalCrafting('5x mekanism:steel_casing', [
        'ZAGAZ',
        'BZFZB',
        'GOEOG',
        'BRFRB',
        'SAGAS'
    ], {
        F: 'extendedcrafting:frame',
        G: 'thermal:enderium_glass',
        E: '#forge:storage_blocks/osmium',
        B: '#forge:storage_blocks/steel',
        S: 'create:shadow_steel_casing',
        R: 'create:refined_radiance_casing',
        O: 'createaddition:overcharged_casing',
        A: 'mekanism:alloy_infused',
        Z: 'kubejs:chorus_chrome_block',
    })

    event.remove({id: 'mekanism:control_circuit/advanced'})
    event.remove({id: 'mekanism:control_circuit/elite'})
    event.remove({id: 'mekanism:control_circuit/ultimate'})
    event.remove({id: 'mekanismgenerators:generator/wind'})
    event.remove({id: 'mekanism:teleportation_core'})
    event.remove({id: 'mekanismgenerators:fission_reactor/casing'})
    event.remove({id: 'mekanismgenerators:reactor/frame'})
    event.remove({id: 'mekanism:hazmat_mask'})
    event.remove({id: 'mekanism:hazmat_gown'})
    event.remove({id: 'mekanism:hazmat_pants'})
    event.remove({id: 'mekanism:hazmat_boots'})
    event.remove({id: 'mekanism:sps_casing'})
    event.remove({id: 'mekanism:supercharged_coil'})
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
                "amount":10,
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
    event.remove({id: 'mekanism:induction/cell/basic'})
    event.remove({id: 'mekanism:induction/cell/advanced'})
    event.remove({id: 'mekanism:induction/cell/elite'})
    event.remove({id: 'mekanism:induction/cell/ultimate'})
    event.remove({id: 'mekanism:induction/provider/basic'})
    event.remove({id: 'mekanism:induction/provider/advanced'})
    event.remove({id: 'mekanism:induction/provider/elite'})
    event.remove({id: 'mekanism:induction/provider/ultimate'})
    
    event.remove({id: 'endless:neutron_compressor'})
    event.remove({id: 'endless:extreme_crafting_table'})
    event.remove({id: 'extendedcrafting:compressor'})
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
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:redstone"
                }
              },
              "B": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:glowstone"
                }
              },
              "C": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:diamond"
                }
              },
              "D": {
                "item": "astralsorcery:celestial_crystal"
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
                "item": "mysticalagradditions:insanium_gemstone"
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
                "count": 1
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
                "count": 1
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
              "EFFFE",
              "FGCGF",
              "DCBCD",
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
              "D": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:glowstone"
                }
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
              "DIHFGFHID",
              "CKKGAGKKC",
              "DIHFGFHID",
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
                "item": "endless:neutronium_block"
              },
              "D": {
                "item": "minecraft:smooth_stone"
              },
              "E": {
                "item": "minecraft:obsidian"
              },
              "F": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:antimatter_alloy"
                }
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
              "FBBBF",
              "ELJLE",
              "GIKHG",
              "DLALD",
              "FCCCF"
            ],
            "key": {
              "A": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "nbt": {
                  "Id": "extendedcrafting:antimatter_alloy"
                }
              },
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
                "type": "forge:nbt",
                "item": "astralsorcery:attuned_celestial_crystal",
                "nbt": {
                  "constellationName": "astralsorcery:vicio"
                }
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
    
    event.remove({id: 'endless:diamond_lattice'})
    event.custom(
        {
            "type": "endless:extreme_craft",
            "pattern": [
              "AAAEEEAAA",
              "B C   C B",
              "A C   C A",
              "B C G C B",
              "FCCGDGCCF",
              "B C G C B",
              "A C   C A",
              "B C   C B",
              "AAABABAAA"
            ],
            "key": {
              "A": {
                "item": "extendedcrafting:black_iron_block"
              },
              "B": {
                "item": "endless:crystal_matrix_ingot"
              },
              "C": {
                "item": "endless:neutronium_ingot"
              },
              "D": {
                "item": "endless:neutronium_block"
              },
              "E": {
                "item": "minecraft:hopper"
              },
              "F": {
                "item": "minecraft:redstone_block"
              },
              "G": {
                "item": "endless:neutronium_gear"
              }
            },
            "result": {
              "item": "extendedcrafting:compressor"
            }
        }
    )
    event.custom(
        {
            "type": "endless:extreme_craft",
            "pattern": [
              "BCDEFGHIJ",
              "KLMNOPQRA",
              "         ",
              "         ",
              "         ",
              "         ",
              "         ",
              "         ",
              "         "
            ],
            "key": {
              "A": {
                "item": "projecte:philosophers_stone"
              },
              "B": {
                "item": "extendedcrafting:ultimate_singularity"
              },
              "C": {
                "item": "endless:cosmic_meatballs"
              },
              "D": {
                "item": "endless:ultimate_stew"
              },
              "E": {
                "item": "endless:endest_pearl"
              },
              "F": {
                "item": "endless:neutronium_ingot"
              },
              "G": {
                "item": "endless:crystal_matrix_ingot"
              },
              "H": {
                "item": "endless:record_fragment"
              },
              "I": {
                "item": "endless:neutronium_gear"
              },
              "J": {
                "item": "mysticalagradditions:creative_essence"
              },
              "K": {
                "item": "appliedenergistics2:singularity"
              },
              "L": {
                "item": "miniutilities:the_final_opinium_core"
              },
              "M": {
                "item": "astralsorcery:resonating_gem"
              },
              "N": {
                "item": "astralsorcery:celestial_crystal"
              },
              "O": {
                "item": "mysticalagradditions:withering_soul"
              },
              "P": {
                "item": "scalinghealth:heart_crystal"
              },
              "Q": {
                "item": "scalinghealth:power_crystal"
              },
              "R": {
                "item": "kubejs:data"
              }
            },
            "result": {
              "item": "endless:infinity_catalyst"
            }
        }
    )
    event.custom(
        {
            "type": "endless:extreme_craft",
            "pattern": [
              "DEB      ",
              "ECAA     ",
              "BACCA    ",
              " ACCA    ",
              "  AACAA  ",
              "    ACCA ",
              "    ACCAB",
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
    event.smithing('mysticalagriculture:creative_soulium_dagger', 'mysticalagriculture:soulium_dagger', 'kubejs:infinite_evidence')
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
})
