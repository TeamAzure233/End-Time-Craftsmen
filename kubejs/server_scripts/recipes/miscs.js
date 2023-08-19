// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:edtc_guide"}'),['minecraft:book','minecraft:cobblestone'])
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:the_dawn_project"}'),['minecraft:book','#minecraft:planks'])
    event.shapeless(Item.of('akashictome:tome', '{"akashictome:data":{tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:"armor.plate_chestplate"}}}},astralsorcery:{id:"astralsorcery:tome",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},immersiveengineering:{id:"immersiveengineering:manual",Count:1b},woot:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"woot:wootguide"}},mahoutsukai:{id:"mahoutsukai:guidebook",Count:1b},extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},modularrouters:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"modularrouters:book"}},botania:{id:"botania:lexicon",Count:1b},bloodmagic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bloodmagic:guide"}},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"patchouli:edtc_guide"}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},croptopia:{id:"croptopia:guide",Count:1b},parcool:{id:"parcool:parcool_guide",Count:1b}}}'),['#forge:bookshelves',Item.of('akashictome:tome').ignoreNBT()])

    event.replaceInput({output: 'tconstruct:efln_ball'}, 'minecraft:flint', 'minecraft:tnt')

    event.shaped('16x pipez:item_pipe', [
      'AAA',
      'DRD',
      'AAA'
    ], {
      A: 'create:andesite_alloy',
      R: 'quark:pipe',
      D: 'minecraft:dropper'
    })
    event.shaped('16x pipez:fluid_pipe', [
          'AAA',
          'BRB',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'quark:pipe',
        B: 'minecraft:bucket'
    })
    event.shaped('16x pipez:energy_pipe', [
          'AAA',
          'BRB',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'quark:pipe',
        B: 'minecraft:redstone'
    })
    event.shaped('16x pipez:gas_pipe', [
          'AAA',
          'IRI',
          'AAA'
    ], {
        A: 'create:andesite_alloy',
        R: 'quark:pipe',
        I: 'mekanism:alloy_infused'
    })
    event.shaped('2x pipez:universal_pipe', [
        'IFE',
        'ARA',
        'IFE'
    ], {
        A: 'create:andesite_alloy',
        I: 'pipez:item_pipe',
        F: 'pipez:fluid_pipe',
        E: 'pipez:energy_pipe',
        R: 'minecraft:redstone'
    })
    event.shaped('8x quark:pipe', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: '#forge:ingots/steel',
      B: 'minecraft:redstone'
    })
    event.recipes.thermal.smelter('32x pipez:item_pipe', ['quark:pipe','2x minecraft:dropper','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('32x pipez:fluid_pipe', ['quark:pipe','2x minecraft:bucket','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('32x pipez:energy_pipe', ['quark:pipe','2x minecraft:redstone','6x create:andesite_alloy']).energy(16000)
    event.recipes.thermal.smelter('32x pipez:gas_pipe', ['quark:pipe','2x mekanism:alloy_infused','6x create:andesite_alloy']).energy(16000)

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

    event.shaped('projecte:dm_furnace', [
        'AAA',
        'AFA',
        'AAA'
    ], {
        A: 'projecte:dark_matter_block',
        F: 'ironfurnaces:million_furnace'
    })

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
    event.shaped('ironfurnaces:rainbow_coal', [
        'ARA',
        'ACA',
        'ARA'
    ], {
        C: 'ironfurnaces:rainbow_core',
        A: 'projecte:aeternalis_fuel_block',
        R: 'projecte:red_matter_block',
    })
    event.shaped('thermal:chiller_ball_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:magma_cream'
    })

    event.shaped('thermal:chiller_ingot_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:nether_brick'
    })

    event.shaped('thermal:chiller_rod_cast', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:blaze_rod'
    })

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

    event.shapeless('mekanism:dictionary', ['minecraft:book', 'create:andesite_alloy'])

    event.recipes.createMixing([Fluid.of('kubejs:flowing_time', 200)], [Fluid.of('astralsorcery:liquid_starlight', 1000),'3x #botania:mystical_flowers', Fluid.of('tconstruct:molten_lumium', 1000)]).superheated()

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