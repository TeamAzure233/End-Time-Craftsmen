// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.recipes.createFilling('thermal:rubber', [Fluid.of('thermal:latex', 250), 'kubejs:gel'])
    event.shaped('3x farmersdelight:wheat_dough', [
        'BA',
        'AA'
    ], {
        A: 'create:wheat_flour',
        B: '#forge:eggs'
    })
    event.shaped('3x farmersdelight:wheat_dough', [
        'BA',
        'AA',
    ], {
        A: 'create:wheat_flour',
        B: 'minecraft:water_bucket'
    })
    event.shapeless('minecraft:slime_ball', ['farmersdelight:wheat_dough', 'minecraft:lime_dye'])

    event.recipes.createMixing(['minecraft:ender_eye'],['minecraft:blaze_powder', 'minecraft:ender_pearl', Fluid.of('astralsorcery:liquid_starlight', 100)]).superheated()

    event.replaceInput({id: 'miniutilities:ender_dust_to_ender_pearl'}, 'miniutilities:ender_dust', '#forge:dusts/ender')

    event.recipes.createCompacting(['4x miniutilities:unstable_ingot'],['4x minecraft:netherite_block' ,'8x minecraft:tnt', '2x #forge:storage_blocks/uranium']).superheated()

    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 600)],['#forge:dusts/ender']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 450)],['minecraft:blaze_powder']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 1000)],['#forge:dusts/ender']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 650)],['minecraft:blaze_powder']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:fuelium', 200)], [Fluid.of('vehicle:blaze_juice', 100), Fluid.of('vehicle:ender_sap', 100), 'minecraft:glowstone_dust']).superheated()

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

    event.recipes.createCompacting(['kubejs:raw_andesite_alloy'],['2x minecraft:iron_nugget','2x minecraft:andesite'])
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

    event.replaceInput({mod: 'zombie_extreme'}, 'zombie_extreme:copper_ignot'/*原文如此*/, '#forge:ingots/copper')
    event.replaceInput({mod: 'zombie_extreme'}, 'zombie_extreme:ruby', '#forge:gems/ruby')

    event.recipes.createMixing(['4x emendatusenigmatica:bronze_ingot'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()
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
    event.recipes.createCompacting(['3x immersiveengineering:blastbrick'],['minecraft:nether_bricks','minecraft:bricks', 'minecraft:magma_block']).superheated()
    event.recipes.createCompacting(['3x immersiveengineering:cokebrick'],['minecraft:clay','minecraft:bricks', '#forge:sandstone']).superheated()
    event.recipes.createMixing('2x #forge:ingots/electrum', ['#forge:ingots/silver','minecraft:gold_ingot']).superheated()
    event.recipes.createMixing('3x #forge:ingots/invar', ['2x minecraft:iron_ingot','#forge:ingots/nickel']).superheated()
    event.recipes.createMixing('2x #forge:ingots/constantan', ['#forge:ingots/copper','#forge:ingots/nickel']).superheated()

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

    event.shapeless('create:andesite_casing',['#minecraft:logs', 'create:andesite_alloy'])
    event.recipes.createDeploying(['create:andesite_casing'], ['#minecraft:logs', 'create:andesite_alloy'])

    event.shapeless('create:brass_casing',['#minecraft:logs', '#forge:plates/brass'])
    event.recipes.createDeploying(['create:brass_casing'], ['#minecraft:logs', '#forge:plates/brass'])

    event.shapeless('create:copper_casing',['#minecraft:logs', '#forge:plates/copper'])
    event.recipes.createDeploying(['create:copper_casing'], ['#minecraft:logs', '#forge:plates/copper'])

    event.shapeless('kubejs:bronze_casing',['#minecraft:logs', '#forge:plates/bronze'])
    event.recipes.createDeploying(['kubejs:bronze_casing'], ['#minecraft:logs', '#forge:plates/bronze'])

    event.shapeless('kubejs:cast_iron_casing',['#minecraft:logs', '#forge:plates/cast_iron'])
    event.recipes.createDeploying(['kubejs:cast_iron_casing'], ['#minecraft:logs', '#forge:plates/cast_iron'])

    event.shapeless('kubejs:steel_casing',['#minecraft:logs', '#forge:plates/steel'])
    event.recipes.createDeploying(['kubejs:steel_casing'], ['#minecraft:logs', '#forge:plates/steel'])

    event.shapeless('create:refined_radiance_casing',['#minecraft:logs', 'create:refined_radiance'])
    event.recipes.createDeploying(['create:refined_radiance_casing'], ['#minecraft:logs', 'create:refined_radiance'])

    event.shapeless('create:shadow_steel_casing',['#minecraft:logs', 'create:shadow_steel'])
    event.recipes.createDeploying(['create:shadow_steel_casing'], ['#minecraft:logs', 'create:shadow_steel'])

    event.shapeless('createaddition:overcharged_casing',['#minecraft:logs', 'createaddition:overcharged_alloy'])
    event.recipes.createDeploying(['createaddition:overcharged_casing'], ['#minecraft:logs', 'createaddition:overcharged_alloy'])

    event.recipes.createMixing(['kubejs:blaze_brass'], ['#forge:ingots/brass', Fluid.of('tconstruct:blazing_blood', 100), Fluid.of('kubejs:cold_ice', 100)]).superheated()

    event.custom({
		  "type": "thermal:rock_gen",
		  "adjacent":"minecraft:packed_ice",
		  "below":"kubejs:andesite_alloy_block",
		  "result": {"item":'minecraft:andesite'}
	  })
    event.custom({
		  "type": "thermal:rock_gen",
		  "adjacent":"minecraft:packed_ice",
		  "below":"minecraft:nether_bricks",
		  "result": {"item":'minecraft:netherrack'}
	  })

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
    event.recipes.thermal.smelter('emendatusenigmatica:coke_gem', ['minecraft:charcoal']).energy(1000)
    event.recipes.thermal.smelter('emendatusenigmatica:steel_ingot', ['emendatusenigmatica:coke_gem','minecraft:iron_ingot']).energy(10000)
    event.recipes.thermal.smelter('16x pipez:item_pipe', [ 'quark:pipe','2x minecraft:dropper','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('16x pipez:fluid_pipe', [ 'quark:pipe','2x minecraft:bucket','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('16x pipez:fluid_pipe', [ 'quark:pipe','2x minecraft:redstone_block','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('16x pipez:gas_pipe', [ 'quark:pipe','2x mekanism:alloy_infused','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('emendatusenigmatica:aluminum_ore', ['#forge:stone','8x #forge:dusts/aluminum']).energy(8000)
    event.recipes.thermal.smelter('emendatusenigmatica:silver_ore', ['#forge:stone','8x #forge:dusts/silver']).energy(8000)
    event.recipes.thermal.smelter('emendatusenigmatica:nickel_ore', ['#forge:stone','8x #forge:dusts/nickel']).energy(8000)
    event.recipes.thermal.smelter('emendatusenigmatica:zinc_ore', ['#forge:stone','#forge:dusts/zinc']).energy(8000)
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 1000)], [Fluid.of('thermal:redstone', 500),Fluid.of('thermal:glowstone', 500),'minecraft:gunpowder']).superheated()
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 200)], ['extendedcrafting:luminessence']).superheated()

    event.recipes.createCompacting(['extendedcrafting:luminessence'], [Fluid.of('kubejs:lumium_solution', 200)])
    event.recipes.createCompacting('extendedcrafting:ender_ingot', ['#forge:sand', 'minecraft:ender_pearl']).heated()
  
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

    event.recipes.createMixing(['2x create:chromatic_compound'],['3x #forge:dusts/glowstone','2x #forge:dusts/obsidian','4x create:polished_rose_quartz','kubejs:chorus_chrome']).superheated()

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
                "item":"8x mekanism:alloy_infused"
            }
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
    )//中子素

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
    )//暗物质
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
    )//红物质

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
                    "item": 'projecte:red_matter',
                    "count": 1
                }
              },
              {
                "type": "masterfulmachinery:items",
                "perTick": false,
                "consumeInstantly": false,
                "data":{
                    "tag": 'twilightforest:trophies',
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
    )//无尽催化剂
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
    )//无尽锭
})