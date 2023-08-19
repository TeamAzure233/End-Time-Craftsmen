// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
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

    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'createaddition:gold_spool', 'immersiveengineering:wirecoil_copper')
    event.replaceInput({output: 'createaddition:tesla_coil'}, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')

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
    event.recipes.createMechanicalCrafting('immersiveengineering:capacitor_mv', [
        'SSS',
        'CLC',
        'TET'
    ], {
        C: '#forge:ingots/electrum',
        L: '#forge:ingots/lead',
        S: '#forge:plates/steel',
        T: '#forge:treated_wood',
        E: 'kubejs:electricity_mechanism'
    })
    event.recipes.createMechanicalCrafting('immersiveengineering:capacitor_hv', [
        'SGS',
        'CLC',
        'TET'
    ], {
        C: '#forge:ingots/aluminum',
        L: '#forge:storage_blocks/lead',
        S: '#forge:plates/steel',
        T: '#forge:treated_wood',
        E: 'kubejs:electricity_mechanism',
        G: '#forge:ingots/hop_graphite'
    })
    
    event.replaceInput({id: 'immersiveengineering:crafting/generator'}, 'immersiveengineering:dynamo', 'createaddition:alternator')

    event.recipes.createMechanicalCrafting('createaddition:electric_motor', [
        ' BAB ',
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

    event.shaped('2x immersiveengineering:thermoelectric_generator', [
        'SSS',
        'CGC',
        'CCC'
    ], {
        G: 'immersiveengineering:generator',
        C: '#forge:plates/constantan',
        S: '#forge:ingots/steel'
    })

    event.replaceInput({id: 'thermal:flux_magnet'}, 'thermal:rf_coil', 'immersiveengineering:wirecoil_copper')

    event.replaceInput({id: 'thermal:rf_coil'},'minecraft:gold_ingot','immersiveengineering:wirecoil_steel')
    event.replaceInput({},'rftoolsbase:machine_frame','thermal:machine_frame')
    event.replaceInput({},'woot:machine_casing','thermal:machine_frame')

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

    event.custom(
      {
        "type":"immersiveengineering:blueprint",
        "inputs":[
          {
            "item":'kubejs:integration_mechanism'
          },
          {
            "tag":"forge:ingots/steel"
          },
          {
            "tag":"forge:ingots/steel"
          },
          {
            "item":'kubejs:blaze_brass'
          },
          {
            "tag":'forge:gears/signalum'
          },
          {
            "item":'thermal:rf_coil'
          }
        ],
        "category":"components",
        "result":
        {
          "item":'thermal:machine_frame',"count":1
        }
      }
    )

    event.replaceInput({id: 'extendedcrafting:pedestal'}, 'extendedcrafting:black_iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'extendedcrafting:pedestal'}, 'extendedcrafting:black_iron_block', '#forge:storage_blocks/steel')
    event.recipes.createMechanicalCrafting('extendedcrafting:crafting_core', [
        ' ISI ',
        'SLGLS',
        'SMFMS',
        'SLGLS',
        'SIIIS'
    ], {
      F: 'thermal:machine_frame',
      L: 'extendedcrafting:luminessence',
      G: '#forge:gears/signalum',
      M: 'kubejs:integration_mechanism',
      I: '#forge:plates/invar',
      S: '#forge:plates/steel'
    })
})