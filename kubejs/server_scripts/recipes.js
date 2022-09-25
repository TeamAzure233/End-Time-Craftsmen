onEvent('recipes', event => { 
    event.shapeless('minecraft:oak_planks',['minecraft:stick','minecraft:stick'])
    event.remove({id: 'minecraft:bread'})
    event.remove({id: 'create:mechanical_crafting/flywheel'})
    event.remove({id: 'create:mechanical_crafting/furnace_engine'})
    event.remove({id: 'steampowered:alternator'})

    event.shaped('kubejs:andesite_alloy_block', [
            'AA',
            'AA'
        ], {
            A: 'create:andesite_alloy'
          })
    event.shapeless('4x create:andesite_alloy', ['kubejs:andesite_alloy_block'])
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
    event.shapeless('9x create:refined_radiance', ['kubejs:refined_radiance_block'])
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
    event.shaped('kubejs:ice_brass_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:ice_brass'
          })
    event.shapeless('9x kubejs:ice_brass', ['kubejs:ice_brass_block'])
    event.shaped('kubejs:hollow_alloy_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'kubejs:hollow_alloy'
          })
    event.shapeless('9x kubejs:hollow_alloy', ['kubejs:hollow_alloy_block'])
    event.shaped('kubejs:gaia_block', [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: 'botania:gaia_ingot'
          })
    event.shapeless('9x botania:gaia_ingot', ['kubejs:gaia_block'])

    event.remove({id: 'create:mixing/chromatic_compound'})
    event.recipes.createMixing(['create:chromatic_compound'],['4x astralsorcery:illumination_powder','4x astralsorcery:nocturnal_powder','4x #forge:dusts/obsidian','10x kubejs:rose_quartz_block','1x kubejs:chorus_chrome_block','1x kubejs:hollow_alloy_block','botania:terrasteel_ingot']).superheated()
    event.recipes.createPressing(['steampowered:bronze_sheet'],['#forge:ingots/bronze'])
    event.recipes.createMixing(['4x #forge:ingots/bronze'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()
    event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
    event.recipes.createMixing(['4x thermal:bronze_ingot'],['3x #forge:ingots/copper','#forge:ingots/tin']).superheated()
    event.remove({id: 'thermal:bronze_dust_4'})
    event.recipes.createMixing(['4x #forge:dusts/bronze'],['3x #forge:dusts/copper','#forge:dusts/tin']).superheated()
    event.recipes.createPressing(['steampowered:steel_sheet'],['#forge:ingots/steel'])
    event.recipes.createMixing(['#forge:ingots/steel'],['steampowered:cast_iron_ingot','#minecraft:coals']).superheated()
    event.recipes.createMixing(['steampowered:steel_ingot'],['steampowered:cast_iron_ingot','#minecraft:coals']).superheated()

    event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
    event.recipes.createMixing('thermal:electrum_ingot', ['#forge:ingots/silver','minecraft:gold_ingot']).superheated()
    event.remove({id: 'thermal:electrum_dust_2'})

    event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
    event.recipes.createMixing('thermal:invar_ingot', ['2x minecraft:iron_ingot','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:invar_dust_3'})

    event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
    event.recipes.createMixing('thermal:constantan_ingot', ['#forge:ingots/copper','#forge:ingots/nickel']).superheated()
    event.remove({id: 'thermal:constantan_dust_2'})

    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id: 'thermal:signalum_dust_4'})
    event.recipes.createMixing('thermal:signalum_dust', ['3x #forge:dusts/copper','#forge:dusts/silver','4x minecraft:redstone']).superheated()

    event.remove({id: 'thermal:lumium_dust_4'})
    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
    event.remove({id: 'extendedcrafting:luminessence'})
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 1000)], [Fluid.of('tconstruct:molten_signalum', 100),Fluid.of('thermal:glowstone', 500),'minecraft:gunpowder']).superheated()
    event.recipes.createMixing([Fluid.of('kubejs:lumium_solution', 500)], ['extendedcrafting:luminessence']).superheated()
    event.recipes.createCompacting(['extendedcrafting:luminessence'], [Fluid.of('kubejs:lumium_solution', 500)])

    event.remove({id: 'thermal:enderium_dust_2'})
    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.recipes.createMixing(['thermal:enderium_dust'], [Fluid.of('vehicle:ender_sap', 600),'3x rftoolsbase:dimensionalshard','3x #forge:dusts/lead','thermal:lumium_dust','4x extendedcrafting:ender_ingot']).superheated()

    event.remove({id: 'projecte:philosophers_stone'})
    event.remove({id: 'projecte:philosophers_stone_alt'})
    event.remove({id: 'projecte:transmutation_table'})
    event.remove({id: 'projecte:transmutation_tablet'})

    event.remove({id: 'create:crafting/materials/andesite_casing'})
    event.shaped('create:andesite_casing', [
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
    event.shaped('create:brass_casing', [
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
    event.shaped('create:copper_casing', [
        'PLP',
        'CBC',
        'PLP'
    ], {
        P: '#minecraft:planks',
        L: '#minecraft:logs',
        C: '#forge:plates/copper',
        B: '#forge:storage_blocks/copper'
    })
    event.remove({id: 'create:crafting/materials/refined_radiance_casing'})
    event.recipes.createMechanicalCrafting('create:refined_radiance_casing', [
        ' GGG ',
        'GBRBG',
        'GRBRG',
        'GBRBG',
        ' GGG '
    ], {
        G: '#forge:glass/colorless',
        B: 'create:brass_casing',
        R: 'create:refined_radiance',
    })
    event.remove({id: 'create:crafting/materials/shadow_steel_casing'})
    event.recipes.createMechanicalCrafting('create:shadow_steel_casing', [
        ' OOO ',
        'OBRBO',
        'ORBRO',
        'OBRBO',
        ' OOO '
    ], {
        O: '#forge:obsidian',
        B: 'create:brass_casing',
        R: 'create:shadow_steel',
    })
    event.remove({id: 'createaddition:crafting/overcharged_casing'})
    event.recipes.createMechanicalCrafting('createaddition:overcharged_casing', [
        ' III ',
        'IBOBI',
        'IOBOI',
        'IBOBI',
        ' III '
    ], {
        I: 'minecraft:blue_ice',
        B: 'create:brass_casing',
        O: 'createaddition:overcharged_alloy',
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

    event.remove({id: 'tiab:timeinabottle'})
    event.shaped('tiab:timeinabottle', [
        'NKN',
        'DCD',
        'LBL'
    ], {
        K: 'projecte:klein_star_ein',
        N: 'compactmachines:machine_normal',
        D: 'minecraft:diamond_block',
        C: 'minecraft:clock',
        B: 'minecraft:glass_bottle',
        L: 'minecraft:lapis_block'
    })

    event.remove({id: 'vehicle:workstation'})
    event.remove({id: 'tac:craft_timeless_workbench'})
    event.recipes.createMechanicalCrafting('tac:workbench', [
        ' T T ',
        'LLCLL',
        ' ITI ',
        ' IKI ',
        ' I I '
    ], {
        T: '#create:toolboxes',
        L: '#minecraft:logs',
        I: 'minecraft:iron_ingot',
        K: 'minecraft:iron_block',
        C: 'extendedcrafting:basic_table'
    })
    event.recipes.createMechanicalCrafting('vehicle:workstation', [
        'GGGGG',
        'RKTKR',
        'RTCTR',
        'RKXKR',
        'RRRRR'
    ], {
        T: '#create:toolboxes',
        X: 'minecraft:chest',
        K: 'minecraft:iron_block',
        R: 'minecraft:red_concrete',
        G: 'minecraft:light_gray_concrete',
        C: 'extendedcrafting:basic_table'
    })

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
        F: 'mekanism:energized_smelter',
        P: 'minecraft:piston',
        B: 'minecraft:iron_block',
        E: 'pipez:energy_pipe',
        M: '#minecraft:planks',
        D: 'pipez:fluid_pipe'
    })

    event.recipes.createCompacting(['kubejs:blaze_brass'], [Fluid.of('tconstruct:blazing_blood', 100),Fluid.of('vehicle:blaze_juice', 100),'create:brass_block'])
    event.recipes.createCompacting(['kubejs:ice_brass'], [Fluid.of('kubejs:cold_ice', 100),'create:brass_block'])
    event.recipes.createCompacting(['kubejs:chorus_chrome'], [Fluid.of('kubejs:chorus_solution', 100),Fluid.of('tconstruct:molten_enderium', 100),'kubejs:blaze_brass_block'])
    event.recipes.createCompacting(['kubejs:hollow_alloy'], ['kubejs:core_hollow',Fluid.of('tconstruct:molten_enderium', 100),'kubejs:ice_brass_block'])
    event.recipes.createMixing([Fluid.of('kubejs:chorus_solution', 500)],['kubejs:chorus_crystal']).superheated()
    event.recipes.thermal.crucible(Fluid.of('kubejs:cold_ice', 100), 'thermal:blizz_rod').energy(100000)
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 600)],['minecraft:ender_pearl']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 450)],['minecraft:blaze_rod']).heated()
    event.recipes.createMixing([Fluid.of('vehicle:ender_sap', 1000)],['minecraft:ender_pearl']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:blaze_juice', 650)],['minecraft:blaze_rod']).superheated()
    event.recipes.createMixing([Fluid.of('vehicle:fuelium', 200)], [Fluid.of('vehicle:blaze_juice', 100), Fluid.of('vehicle:ender_sap', 100), 'minecraft:glowstone_dust']).superheated()
    event.recipes.createMechanicalCrafting('kubejs:chorus_crystal', [
        'SMMS',
        'MPCM',
        'MCPM',
        'SMMS'
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
    event.shaped('kubejs:ether_drop', [
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

    event.remove({id: 'createaddition:mechanical_crafting/accumulator'})
    event.recipes.createMechanicalCrafting('createaddition:accumulator', [
        ' L L ',
        'SEGES',
        'SCKCS',
        'SEGES'
    ], {
        S: 'create:brass_sheet',
        C: 'createaddition:capacitor',
        K: 'create:brass_casing',
        G: 'createaddition:gold_spool',
        L: 'createaddition:connector',
        E: 'thermal:energy_cell'
    })
    event.custom({
		"type": "thermal:rock_gen",
		"adjacent":"minecraft:packed_ice",
		"below":"kubejs:andesite_alloy_block",
		"result": {"item":'minecraft:andesite'}
	})

    event.remove({id: 'thermal:machine_frame'})
    event.recipes.createMechanicalCrafting('thermal:machine_frame', [
        'CIGIC',
        'IBPBI',
        'GRMRG',
        'IBFBI',
        'CIGIC'
    ], {
        I: 'minecraft:iron_ingot',
        G: '#forge:glass',
        B: 'kubejs:blaze_brass',
        C: 'create:brass_casing',
        F: 'create:fluid_tank',
        P: 'pipez:universal_pipe',
        R: 'thermal:rf_coil',
        M: 'create:precision_mechanism'
    })
    event.remove({id: 'thermal:saw_blade'})
    event.shaped('thermal:saw_blade', [
        ' I ',
        'IAI',
        ' I '
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:plates/iron'
    })
    event.remove({id: 'thermal:drill_head'})
    event.shaped('thermal:drill_head', [
        ' I ',
        'ITI',
        'IAI'
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:plates/iron',
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
    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
    event.smithing('create:mechanical_drill', 'create:andesite_casing', 'thermal:drill_head')
    event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
    event.smithing('create:mechanical_saw', 'create:andesite_casing', 'thermal:saw_blade')
    event.remove({id: 'create:crafting/kinetics/mechanical_harvester'})
    event.smithing('create:mechanical_harvester', 'create:andesite_casing', 'kubejs:rake')
    event.remove({id: 'create:crafting/kinetics/mechanical_plough'})
    event.smithing('create:mechanical_plough', 'create:andesite_casing', 'kubejs:plough')
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
        F: 'thermal:machine_frame',
        P: 'create:precision_mechanism'
    })
    event.remove({id: 'thermal:flux_drill'})
    event.smithing('thermal:flux_drill', 'kubejs:flux_tool_casing', 'thermal:drill_head')
    event.remove({id: 'thermal:flux_saw'})
    event.smithing('thermal:flux_saw', 'kubejs:flux_tool_casing', 'thermal:saw_blade')
    event.remove({id: 'thermal:fluid_cell'})
    event.recipes.createMechanicalCrafting('thermal:fluid_cell',[
        'CTPTC',
        'IAFAI',
        'CTRTC'
    ],{
        C: 'thermal:cured_rubber',
        I: 'minecraft:iron_ingot',
        R: 'thermal:redstone_servo',
        F: 'thermal:fluid_cell_frame',
        A: 'create:andesite_alloy',
        T: 'create:fluid_tank',
        P: 'pipez:fluid_pipe'
    })
    event.remove({id: 'thermal:tinker_bench'})
    event.recipes.createMechanicalCrafting('thermal:tinker_bench', [
        'IIIII',
        'PCFSP',
        'PRDRP',
        'PPPPP'
    ], {
        I: '#forge:plates/iron',
        C: 'minecraft:crafting_table',
        S: 'minecraft:smithing_table',
        F: 'thermal:machine_frame',
        R: 'thermal:rf_coil',
        D: 'create:depot',
        P: '#minecraft:planks'
    })
    event.remove({id: 'thermal:charge_bench'})
    event.recipes.createMechanicalCrafting('thermal:charge_bench', [
        'EEEEE',
        'LRTRL',
        'LDFDL',
        'ELLLE'
    ], {
        E: 'thermal:electrum_plate',
        D: 'create:depot',
        T: 'createaddition:tesla_coil',
        F: 'thermal:machine_frame',
        L: '#forge:plates/lead',
        R: 'thermal:rf_coil'
    })
    event.remove({id: 'extendedcrafting:frame'})
    event.recipes.createMechanicalCrafting('extendedcrafting:frame', [
        'BGB',
        'GFG',
        'BGB'
    ], {
        F: 'thermal:machine_frame',
        G: 'thermal:signalum_glass',
        B: 'extendedcrafting:black_iron_slate'
    })
    event.remove({id: 'mysticalagriculture:infusion_altar'})

    event.remove({id: 'appliedenergistics2:network/blocks/controller'})
    event.remove({id: 'appliedenergistics2:network/blocks/storage_chest'})
    event.remove({id: 'appliedenergistics2:network/blocks/quantum_ring'})
    event.remove({id: 'appliedenergistics2:network/blocks/quantum_link'})

    event.remove({id: 'mekanism:steel_casing'})
    event.recipes.createMechanicalCrafting('mekanism:steel_casing', [
        'ZAGAH',
        'BHFZB',
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
        H: 'kubejs:hollow_alloy_block'
    })
    event.remove({id: 'mekanism:control_circuit/advanced'})
    event.remove({id: 'mekanism:control_circuit/elite'})
    event.remove({id: 'mekanism:control_circuit/ultimate'})
    event.remove({id: 'mekanismgenerators:generator/wind'})
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
    event.remove({id: 'mekanism:metallurgic_infuser'})
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
    event.remove({id: 'mekanism:energy_cube/basic'})
    event.remove({id: 'mekanism:energy_cube/advanced'})
    event.remove({id: 'mekanism:energy_cube/elite'})
    event.remove({id: 'mekanism:energy_cube/ultimate'})
    event.remove({id: 'mekanism:electrolytic_separator'})
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
    event.remove({id: 'mekanismgenerators:generator/gas_burning'})
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
    event.remove({id: 'mekanismgenerators:generator/solar'})
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
    event.remove({id: 'mekanismgenerators:generator/advanced_solar'})
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
    event.remove({id: 'mekanism:atomic_disassembler'})
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
    event.remove({id: 'mekanism:free_runners'})
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
    event.remove({id: 'mekanism:jetpack'})
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
    event.remove({id: 'mekanism:jetpack_armored'})
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
    event.remove({id: 'mekanism:flamethrower'})
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
    event.remove({id: 'mekanismgenerators:fission_reactor/casing'})
    event.remove({id: 'mekanism:hazmat_mask'})
    event.remove({id: 'mekanism:hazmat_gown'})
    event.remove({id: 'mekanism:hazmat_pants'})
    event.remove({id: 'mekanism:hazmat_boots'})
    event.remove({id: 'mekanism:sps_casing'})
    event.remove({id: 'mekanism:supercharged_coil'})
    event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"kubejs:chromatic_compound_block"}},"gasInput":{"amount":100,"gas":"mekanism:antimatter"},"output":{"item":"kubejs:antimatter_alloy"},"duration":1000})
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
    ]).transitionalItem('kubejs:incomplete_meka_plate').loops(5)
    event.remove({id: 'mekanism:digital_miner'})
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
    event.remove({id: 'mekanism:teleportation_core'})
    event.remove({id: 'compactvoidminers:void_miner'})
    event.remove({id: 'mekanism:induction/cell/basic'})
    event.remove({id: 'mekanism:induction/cell/advanced'})
    event.remove({id: 'mekanism:induction/cell/elite'})
    event.remove({id: 'mekanism:induction/cell/ultimate'})
    event.remove({id: 'mekanism:induction/provider/basic'})
    event.remove({id: 'mekanism:induction/provider/advanced'})
    event.remove({id: 'mekanism:induction/provider/elite'})
    event.remove({id: 'mekanism:induction/provider/ultimate'})
    
    event.remove({id: 'extendedcrafting:compressor'})
    event.remove({id: 'projecte:dm_helmet'})
    event.remove({id: 'projecte:dm_chestplate'})
    event.remove({id: 'projecte:dm_leggings'})
    event.remove({id: 'projecte:dm_boots'})
    event.remove({id: 'projecte:swiftwolf_rending_gale'})
    event.remove({id: 'projecte:watch_of_flowing_time'})
    event.remove({id: 'projecte:dark_matter'})
    event.remove({id: 'projecte:red_matter'})
    event.remove({id: 'projecte:red_matter_alt'})
    event.remove({id: 'projecte:rm_katar'})
    event.remove({id: 'projecte:rm_morning_star'})
    event.recipes.createMechanicalCrafting('kubejs:industrial_heart', [
        'UGGJCJGGU',
        'JLKCCCKLJ',
        'LKCFFFCKL',
        'HCFSRAFCH',
        'UCFOQOFCU',
        'HCFARSFCH',
        'LKCFFFCKL',
        'JLKCCCKLJ',
        'UGGJCJGGU'
    ], {
        C: 'mekanism:steel_casing',
        Q: 'appliedenergistics2:quantum_entangled_singularity',
        H: 'appliedenergistics2:quantum_ring',
        L: 'appliedenergistics2:quantum_link',
        A: 'kubejs:andesite_alloy_block',
        F: 'kubejs:antimatter_alloy_block',
        R: 'kubejs:refined_radiance_block',
        S: 'kubejs:shadow_steel_block',
        O: 'kubejs:overcharged_alloy_block',
        K: 'appliedenergistics2:controller',
        G: 'steampowered:steel_large_cogwheel',
        U: 'extendedcrafting:the_ultimate_ingot',
        J: 'extendedcrafting:crystaltine_ingot'
    })
    event.smithing(Item.of('mekanism:creative_energy_cube',{mekData:{EnergyContainers:[{Container:0,stored:"18446744073709551615.9999"}]}}),'mekanism:ultimate_energy_cube', 'kubejs:world_heart')
    event.smithing('mekanism:creative_fluid_tank','mekanism:ultimate_fluid_tank', 'kubejs:world_heart')
    event.smithing('mekanism:creative_chemical_tank','mekanism:ultimate_chemical_tank', 'kubejs:world_heart')
    event.smithing('thermal:rf_coil_creative_augment', 'thermal:rf_coil_augment', 'kubejs:world_heart')
    event.smithing('thermal:fluid_tank_creative_augment', 'thermal:fluid_tank_augment', 'kubejs:world_heart')
    event.smithing('thermal:machine_efficiency_creative_augment', 'thermal:machine_efficiency_augment', 'kubejs:world_heart')
    event.smithing('thermal:machine_catalyst_creative_augment', 'thermal:machine_catalyst_augment', 'kubejs:world_heart')
    event.smithing('create:creative_crate', 'create:adjustable_crate', 'kubejs:world_heart')
    event.smithing('create:creative_motor', 'steampowered:steel_flywheel', 'kubejs:world_heart')
    event.smithing('create:creative_fluid_tank', 'create:fluid_tank', 'kubejs:world_heart')
    event.smithing('create:creative_blaze_cake', 'create:blaze_cake', 'kubejs:world_heart')
    event.smithing('appliedenergistics2:creative_storage_cell', 'appliedenergistics2:64k_storage_cell', 'kubejs:world_heart')
    event.smithing('mysticalagriculture:creative_soulium_dagger', 'mysticalagriculture:soulium_dagger', 'kubejs:world_heart')
    event.smithing('botania:creative_pool', 'botania:mana_pool', 'kubejs:world_heart')
    event.smithing('storagedrawers:creative_vending_upgrade', 'storagedrawers:upgrade_template', 'kubejs:world_heart')
    event.smithing('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'kubejs:world_heart')
    event.smithing('projecte:tome', 'minecraft:book', 'kubejs:world_heart')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"upgrades"}), 'tconstruct:sky_slime_crystal', 'kubejs:world_heart')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"defense"}), 'tconstruct:earth_slime_crystal', 'kubejs:world_heart')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"abilities"}), 'tconstruct:ender_slime_crystal', 'kubejs:world_heart')
    event.smithing(Item.of('tconstruct:creative_slot',{slot:"souls"}), 'tconstruct:ichor_slime_crystal', 'kubejs:world_heart')
})