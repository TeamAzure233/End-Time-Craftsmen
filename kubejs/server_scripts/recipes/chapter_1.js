// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.shaped('kubejs:mysterious_amulet', [
        'BCB',
        'DAD',
        'BCB'
    ], {
        A: 'minecraft:diamond',
        B: 'botania:magenta_mystical_flower',
        C: '#botania:petals/lime',
        D: '#forge:ingots/silver'
    })

    event.recipes.createMixing(['kubejs:twilight_gemstone'],['#forge:gems/emerald','4x #minecraft:saplings',Fluid.of('materialis:molten_fairy', 144)]).superheated()

    event.shapeless('create:cogwheel', ['create:shaft','#minecraft:planks'])
    event.shapeless('create:large_cogwheel', ['create:shaft','#minecraft:planks','#minecraft:planks'])

    event.shaped('thermal:saw_blade', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/tin'
    })
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
    
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:kinetic_mechanism').withChance(100.0),
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

    event.shaped('kubejs:steam_mechanical_box_mk1', [
        'ABA',
        'A A',
        'ACA'
    ], {
        A: 'kubejs:steam_mechanism',
        B: '#forge:plates/bronze',
        C: 'kubejs:bronze_casing',
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
        'ABA',
        'A A',
        'ACA'
    ], {
        A: 'kubejs:steam_mechanism',
        B: '#forge:plates/cast_iron',
        C: 'kubejs:cast_iron_casing',
    })
    event.smithing('steampowered:cast_iron_boiler', 'steampowered:bronze_boiler', 'kubejs:cast_iron_casing')
    event.smithing('steampowered:cast_iron_burner', 'steampowered:bronze_burner', 'kubejs:cast_iron_casing')
    event.smithing('steampowered:cast_iron_flywheel', 'steampowered:bronze_flywheel', 'kubejs:steam_mechanical_box_mk2')
    event.smithing('steampowered:cast_iron_steam_engine', 'steampowered:bronze_steam_engine', 'kubejs:steam_mechanical_box_mk2')
    
    event.shaped('kubejs:steam_mechanical_box_mk3', [
        'ABA',
        'A A',
        'ACA'
    ], {
        A: 'kubejs:steam_mechanism',
        B: '#forge:plates/steel',
        C: 'kubejs:steel_casing',
    })
    event.smithing('steampowered:steel_boiler', 'steampowered:cast_iron_boiler', 'kubejs:steel_casing')
    event.smithing('steampowered:steel_burner', 'steampowered:cast_iron_burner', 'kubejs:steel_casing')
    event.smithing('steampowered:steel_flywheel', 'steampowered:cast_iron_flywheel', 'kubejs:steam_mechanical_box_mk3')
    event.smithing('steampowered:steel_steam_engine', 'steampowered:cast_iron_steam_engine', 'kubejs:steam_mechanical_box_mk3')
})