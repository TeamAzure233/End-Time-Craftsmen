// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//输入输出修改
onEvent('recipes', event => {
    let ingots = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium']   
    let mod = 'emendatusenigmatica'
    for (let i of ingots) {
        event.replaceOutput({}, `#forge:ingots/${i}`, `${mod}:${i}_ingot`) 
        event.replaceOutput({}, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)    
        event.replaceOutput({}, `#forge:storage_blocks/${i}`, `${mod}:${i}_block`)
    }

    let gems = ['coke','fluorite','cinnabar','apatite','sulfur','potassium_nitrate']
    for (let i of gems) {
        event.replaceOutput({}, `#forge:gems/${i}`, `${mod}:${i}_gem`)
        event.replaceOutput({}, `#forge:storage_blocks/${i}`, `${mod}:${i}_block`)
    }
    event.replaceOutput({}, `#forge:gems/certus_quartz`, 'appliedenergistics2:certus_quartz_crystal')
    event.replaceOutput({}, `#forge:gems/charged_certus_quartz`, 'appliedenergistics2:charged_certus_quartz_crystal')
    event.replaceOutput({}, `#forge:gems/fluix`, 'appliedenergistics2:fluix_crystal')
    event.replaceInput({}, `#forge:gems/certus_quartz`, 'appliedenergistics2:certus_quartz_crystal')
    event.replaceInput({}, `#forge:gems/charged_certus_quartz`, 'appliedenergistics2:charged_certus_quartz_crystal')
    event.replaceInput({}, `#forge:gems/fluix`, 'appliedenergistics2:fluix_crystal')
    event.replaceOutput({}, `#forge:dusts/certus_quartz`, `appliedenergistics2:certus_quartz_dust`)
    event.replaceInput({}, `#forge:dusts/fluix`, `appliedenergistics2:fluix_dust`)
})
onEvent('recipes', event => {
    let materials = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium','obsidian','iron','gold','lapis','diamond','emerald']
    let mod = 'emendatusenigmatica'
    for (let i of materials) {
        event.replaceOutput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`)
        event.replaceOutput({}, `#forge:plates/${i}`, `${mod}:${i}_plate`)
        event.replaceOutput({}, `#forge:rods/${i}`, `${mod}:${i}_rod`)
        event.replaceOutput({}, `#forge:gears/${i}`, `${mod}:${i}_gear`)
    }

    let materials2 = ['wood','lithium','coal','charcoal','coke','fluorite','quartz','cinnabar','apatite','sulfur','potassium_nitrate','ender']
    for (let i of materials2) {
        event.replaceOutput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`)
    }
})

//板
onEvent('recipes', event => {
    let ingots = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium','iron','gold']
    for (let i of ingots) {
        event.remove({output: `#forge:plates/${i}`})
        event.recipes.createPressing([`emendatusenigmatica:${i}_plate`],[`#forge:ingots/${i}`])
        event.recipes.thermal.press(`emendatusenigmatica:${i}_plate`,`#forge:ingots/${i}`)
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_plate`, `#forge:ingots/${i}`, 'immersiveengineering:mold_plate')
        event.custom(
          {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/plate"
            },
            "fluid": {
              "tag": `forge:molten_${i}`,
              "amount": 144
            },
            "result": {
              "item": `emendatusenigmatica:${i}_plate`
            },
            "cooling_time": 50
          }
        )
        event.custom(
          {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/plate"
            },
            "cast_consumed": true,
            "fluid": {
              "tag": `forge:molten_${i}`,
              "amount": 144
            },
            "result": {
              "item": `emendatusenigmatica:${i}_plate`
            },
            "cooling_time": 50
          }
        )
    }
    event.remove({output: `thermal:netherite_plate`})
    event.recipes.createPressing([`thermal:netherite_plate`],[`#forge:ingots/netherite`])
    event.recipes.thermal.press(`thermal:netherite_plate`,`#forge:ingots/netherite`)
    event.recipes.immersiveengineeringMetalPress(`thermal:netherite_plate`, `#forge:ingots/netherite`, 'immersiveengineering:mold_plate')
    event.custom(
      {
        "type": "tconstruct:casting_table",
        "cast": {
          "tag": "tconstruct:casts/multi_use/plate"
        },
        "fluid": {
          "tag": `forge:molten_netherite`,
          "amount": 144
        },
        "result": {
          "item": `thermal:netherite_plate`
        },
        "cooling_time": 100
      }
    )
    event.custom(
      {
        "type": "tconstruct:casting_table",
        "cast": {
          "tag": "tconstruct:casts/single_use/plate"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": `forge:molten_netherite`,
          "amount": 144
        },
        "result": {
          "item": `thermal:netherite_plate`
        },
        "cooling_time": 100
      }
    )

    let gems = ['lapis','diamond','emerald']
    for (let i of gems) {
        event.remove({output: `#forge:plates/${i}`})
        event.recipes.createPressing([`emendatusenigmatica:${i}_plate`],[`#forge:gems/${i}`])
        event.recipes.thermal.press(`emendatusenigmatica:${i}_plate`,`#forge:gems/${i}`)
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_plate`, `#forge:gems/${i}`, 'immersiveengineering:mold_plate')
    }
})

//粉
onEvent('recipes', event => {
    let ingots = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium']
    for (let i of ingots) {
        event.remove({output: `#forge:dusts/${i}`})
        event.recipes.createMilling([`emendatusenigmatica:${i}_dust`],[`#forge:ingots/${i}`])
        event.recipes.thermal.pulverizer(`emendatusenigmatica:${i}_dust`,`#forge:ingots/${i}`)
        event.recipes.immersiveengineeringCrusher(`emendatusenigmatica:${i}_dust`, `#forge:ingots/${i}`)
        event.recipes.mekanismCrushing(`emendatusenigmatica:${i}_dust`, `#forge:ingots/${i}`)
        event.recipes.mekanismEnriching(`2x emendatusenigmatica:${i}_dust`, `#forge:ores/${i}`)
        event.recipes.mekanismEnriching(`emendatusenigmatica:${i}_dust`, `#mekanism:dirty_dusts/${i}`)
        event.recipes.bloodmagic.alchemytable(`4x emendatusenigmatica:${i}_dust`, [`#forge:ores/${i}`,"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ores/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ingots/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/explosive"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `bloodmagic:gravels/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
    }

    event.recipes.createMilling([`#forge:dusts/netherite`],[`#forge:ingots/netherite`])
    event.recipes.thermal.pulverizer(`#forge:dusts/netherite`,`#forge:ingots/netherite`)
    event.recipes.immersiveengineeringCrusher(`#forge:dusts/netherite`, `#forge:ingots/netherite`)
    event.recipes.bloodmagic.alchemytable(`4x #forge:dusts/netherite`, [`#forge:ingots/netherite`,"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
    event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ingots/netherite`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "tag": `forge:dusts/netherite`,
                  "count": 4
                },
                "consumeingredient": false
            }
    )

    event.recipes.thermal.pulverizer(`2x emendatusenigmatica:obsidian_dust`,`minecraft:obsidian`)
    event.recipes.immersiveengineeringCrusher(`2x emendatusenigmatica:obsidian_dust`,`minecraft:obsidian`)
    event.recipes.mekanismCrushing(`3x emendatusenigmatica:obsidian_dust`,`minecraft:obsidian`)
    event.recipes.bloodmagic.alchemytable(`4x emendatusenigmatica:obsidian_dust`, [`minecraft:obsidian`,"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
    event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "item": `minecraft:obsidian`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `emendatusenigmatica:obsidian_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
    )

    let gems = ['lapis','diamond','emerald','quartz','coal','charcoal','coke','fluorite','cinnabar','apatite','sulfur','potassium_nitrate']
    for (let i of gems) {
        event.remove({output: `#forge:dusts/${i}`})
        event.recipes.createMilling([`emendatusenigmatica:${i}_dust`],[`#forge:gems/${i}`])
        event.recipes.thermal.pulverizer(`emendatusenigmatica:${i}_dust`,`#forge:gems/${i}`)
        event.recipes.immersiveengineeringCrusher(`emendatusenigmatica:${i}_dust`, `#forge:gems/${i}`)
        event.recipes.mekanismCrushing(`emendatusenigmatica:${i}_dust`, `#forge:gems/${i}`)
        event.recipes.mekanismEnriching(`2x emendatusenigmatica:${i}_dust`, `#forge:ores/${i}`)
        event.recipes.mekanismEnriching(`emendatusenigmatica:${i}_dust`, `#mekanism:dirty_dusts/${i}`)
        event.recipes.bloodmagic.alchemytable(`4x emendatusenigmatica:${i}_dust`, [`#forge:ores/${i}`,"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ores/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:gems/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/explosive"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `bloodmagic:gravels/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `emendatusenigmatica:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
    }

    event.remove({output: `#forge:dusts/ender`})
    event.recipes.createMilling([`4x emendatusenigmatica:ender_dust`],['minecraft:ender_pearl'])
    event.recipes.thermal.pulverizer(`4x emendatusenigmatica:ender_dust`,'minecraft:ender_pearl')
    event.recipes.immersiveengineeringCrusher(`4x emendatusenigmatica:ender_dust`, 'minecraft:ender_pearl')
    event.recipes.mekanismCrushing(`4x emendatusenigmatica:ender_dust`, 'minecraft:ender_pearl')
    event.recipes.immersiveengineeringCrusher('4x emendatusenigmatica:ender_dust', 'minecraft:ender_pearl')
    event.recipes.bloodmagic.alchemytable('8x emendatusenigmatica:ender_dust', ['minecraft:ender_pearl',"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
    event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "item": 'minecraft:ender_pearl'
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": 'emendatusenigmatica:ender_dust',
                  "count": 8
                },
                "consumeingredient": false
            }
    )

    let ae = ['fluix','certus_quartz']
    for (let i of ae) {
        event.remove({output: `#forge:dusts/${i}`})
        event.recipes.createMilling([`appliedenergistics2:${i}_dust`],[`#forge:gems/${i}`])
        event.recipes.thermal.pulverizer(`appliedenergistics2:${i}_dust`,`#forge:gems/${i}`)
        event.recipes.immersiveengineeringCrusher(`appliedenergistics2:${i}_dust`, `#forge:gems/${i}`)
        event.recipes.mekanismCrushing(`appliedenergistics2:${i}_dust`, `#forge:gems/${i}`)
        event.recipes.mekanismEnriching(`2x appliedenergistics2:${i}_dust`, `#forge:ores/${i}`)
        event.recipes.mekanismEnriching(`appliedenergistics2:${i}_dust`, `#mekanism:dirty_dusts/${i}`)
        event.recipes.bloodmagic.alchemytable(`4x appliedenergistics2:${i}_dust`, [`#forge:ores/${i}`,"#bloodmagic:arc/cuttingfluid"]).syphon(400).ticks(200).upgradeLevel(1)
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ores/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `appliedenergistics2:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:gems/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/explosive"
                },
                "output": {
                  "item": `appliedenergistics2:${i}_dust`
                },
                "consumeingredient": false
            }
        )
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `bloodmagic:gravels/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/cuttingfluid"
                },
                "output": {
                  "item": `appliedenergistics2:${i}_dust`,
                  "count": 4
                },
                "consumeingredient": false
            }
        )
    }
})

//齿轮
onEvent('recipes', event => {
    let ingots = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium']
    for (let i of ingots) {
        event.remove({output: `#forge:gears/${i}`, type: !'minecraft:crafting_shaped'})
        event.recipes.thermal.press(`emendatusenigmatica:${i}_gear`, `4x #forge:ingots/${i}`, 'thermal:press_gear_die')
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_gear`, `4x #forge:ingots/${i}`, 'immersiveengineering:mold_gear')
    }
    event.remove({output: `#forge:gears/netherite`, type: !'minecraft:crafting_shaped'})
    event.recipes.thermal.press(`thermal:netherite_gear`, `4x #forge:ingots/netherite`, 'thermal:press_gear_die')
    event.recipes.immersiveengineeringMetalPress(`thermal:netherite_gear`, `4x #forge:ingots/netherite`, 'immersiveengineering:mold_gear')

    let gems = ['lapis','diamond','emerald']
    for (let i of gems) {
        event.remove({output: `#forge:gears/${i}`, type: !'minecraft:crafting_shaped'})
        event.recipes.thermal.press(`emendatusenigmatica:${i}_gear`, `4x #forge:gems/${i}`, 'thermal:press_gear_die')
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_gear`, `4x #forge:gems/${i}`, 'immersiveengineering:mold_gear')
    }
})

//杆
onEvent('recipes', event => {
    let ingots = ['copper','silver','lead','nickel','uranium','constantan','electrum','steel','aluminum','osmium','tin','zinc','cobalt','bronze','brass','invar','cast_iron','signalum','lumium','enderium','iron','gold']
    for (let i of ingots) {
        event.remove({output: `#forge:rods/${i}`})
        event.custom(
            {
                "type":"createaddition:rolling",
                "input": {
                    "tag": `forge:ingots/${i}`
                },
                "result": {
                    "item": `emendatusenigmatica:${i}_rod`,
                    "count": 1
                }
            }
        )
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_rod`, `#forge:ingots/${i}`, 'immersiveengineering:mold_rod')
        event.custom(
          {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/rod"
            },
            "fluid": {
              "tag": `forge:molten_${i}`,
              "amount": 72
            },
            "result": {
              "item": `emendatusenigmatica:${i}_rod`
            },
            "cooling_time": 32
          }
        )
        event.custom(
          {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/rod"
            },
            "cast_consumed": true,
            "fluid": {
              "tag": `forge:molten_${i}`,
              "amount": 72
            },
            "result": {
              "item": `emendatusenigmatica:${i}_rod`
            },
            "cooling_time": 32
          }
        )
    }

    let gems = ['lapis','diamond','emerald']
    for (let i of gems) {
        event.remove({output: `#forge:rods/${i}`})
        event.custom(
            {
                "type":"createaddition:rolling",
                "input": {
                    "tag": `forge:gems/${i}`
                },
                "result": {
                    "item": `emendatusenigmatica:${i}_rod`,
                    "count": 1
                }
            }
        )
        event.recipes.immersiveengineeringMetalPress(`emendatusenigmatica:${i}_rod`, `#forge:gems/${i}`, 'immersiveengineering:mold_rod')
    }
})

//矿簇
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','certus_quartz','charged_certus_quartz','coal','fluorite','redstone']
    for (let i of materials) {
        event.recipes.createMechanicalCrafting(`2x #forge:clusters/${i}`, [
            'O'
          ], {
            O: `#forge:ores/${i}`
        })
        event.recipes.createCrushing([Item.of(`2x #create:crushed_ores/${i}`).withChance(0.3), `2x #create:crushed_ores/${i}`], [`#forge:clusters/${i}`])
    }
})

//碎矿
onEvent('recipes', event => {
    let ingots = ['cobalt']
    for (let i of ingots) {
        event.smelting(`#forge:ingots/${i}`, `#create:crushed_ores/${i}`)
        event.recipes.createMilling(`#create:crushed_ores/${i}`, `#forge:ores/${i}`)
        event.recipes.createCrushing([`#create:crushed_ores/${i}`, Item.of(`2x #create:crushed_ores/${i}`).withChance(0.3), Item.of(`minecraft:cobblestone`).withChance(0.12)], `#forge:ores/${i}`)
        event.custom(
          {
            "type": "create:splashing",
            "ingredients": [
              {
                "tag": `create:crushed_ores/${i}`
              }
            ],
            "results": [
              {
                "tag": `forge:nuggets/${i}`,
                "count": 10
              },
              {
                "tag": `forge:nuggets/${i}`,
                "count": 5,
                "chance": 0.5
              }
            ]
          }
        )
    }

    let gems = ['lapis','diamond','emerald','quartz','coal','fluorite']
    for (let i of gems) {
        event.smelting(`#forge:gems/${i}`, `#create:crushed_ores/${i}`)
        event.recipes.createMilling(`#create:crushed_ores/${i}`, `#forge:ores/${i}`)
        event.recipes.createCrushing([`#create:crushed_ores/${i}`, Item.of(`2x #create:crushed_ores/${i}`).withChance(0.3), Item.of(`minecraft:cobblestone`).withChance(0.12)], `#forge:ores/${i}`)
    }

    event.smelting(`minecraft:redstone`, `#create:crushed_ores/redstone`)
    event.recipes.createMilling(`#create:crushed_ores/redstone`, `#forge:ores/redstone`)
    event.recipes.createCrushing([`#create:crushed_ores/redstone`, Item.of(`2x #create:crushed_ores/redstone`).withChance(0.3), Item.of(`minecraft:cobblestone`).withChance(0.12)], `#forge:ores/redstone`)

    event.smelting('minecraft:netherite_scrap', '#create:crushed_ores/ancient_debris')
    event.recipes.createCrushing([`#create:crushed_ores/ancient_debris`, Item.of(`1x #create:crushed_ores/ancient_debris`).withChance(0.3)], 'minecraft:ancient_debris')
})

//残片
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','certus_quartz','charged_certus_quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#bloodmagic:fragments/${i}`})
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `forge:ores/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/explosive"
                },
                "output": {
                  "tag": `bloodmagic:fragments/${i}`,
                  "count": 10
                },
                "consumeingredient": false
            }
        )
    }
})

//沙砾
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','certus_quartz','charged_certus_quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#bloodmagic:gravels/${i}`})
        event.custom(
            {
                "type": "bloodmagic:arc",
                "input": {
                  "tag": `bloodmagic:fragments/${i}`
                },
                "tool": {
                  "tag": "bloodmagic:arc/resonator"
                },
                "addedoutput": [
                  {
                    "chance": 0.05,
                    "type": {
                      "item": "bloodmagic:corrupted_tinydust"
                    }
                  },
                  {
                    "chance": 0.01,
                    "type": {
                      "item": "bloodmagic:corrupted_tinydust"
                    }
                  }
                ],
                "output": {
                  "tag": `bloodmagic:gravels/${i}`
                },
                "consumeingredient": false
            }
        )
    }
})

//污浊粉
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#mekanism:dirty_dusts/${i}`})
        event.recipes.mekanismCrushing(`2x #mekanism:dirty_dusts/${i}`, `#mekanism:clumps/${i}`)
    }
})

//碎块
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#mekanism:clumps/${i}`})
        event.recipes.mekanismPurifying(`3x #mekanism:clumps/${i}`, `#forge:ores/${i}`, {gas: 'mekanism:oxygen', amount: 200})
        event.recipes.mekanismPurifying(`#mekanism:clumps/${i}`, `#mekanism:shards/${i}`, {gas: 'mekanism:oxygen', amount: 200})
    }
})

//碎片
onEvent('recipes', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc','cobalt','lapis','diamond','emerald','quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#mekanism:shards/${i}`})
        event.recipes.mekanismInjecting(`4x #mekanism:shards/${i}`, `#forge:ores/${i}`, {gas: 'mekanism:hydrogen_chloride', amount: 200})
        event.recipes.mekanismInjecting(`2x #mekanism:shards/${i}`, `#mekanism:crystals/${i}`, {gas: 'mekanism:hydrogen_chloride', amount: 200})
    }
})

//结晶和浆液
onEvent('recipes', event => {
    let materials = ['silver','nickel','aluminum','zinc','cobalt','lapis','diamond','emerald','quartz','coal','fluorite','cinnabar','apatite','sulfur','potassium_nitrate','redstone']
    for (let i of materials) {
        event.remove({output: `#mekanism:shards/${i}`})
        event.custom(
            {
                "type":"mekanism:crystallizing",
                "chemicalType":"slurry",
                "input":{
                    "amount":100,
                    "slurry":`emendatusenigmatica:clean_${i}`
                },
                "output":{
                    "tag":`mekanism:crystals/${i}`
                }
            }
        )
        event.custom(
            {
                "type":"mekanism:washing",
                "fluidInput":{
                    "amount":1,
                    "tag":"minecraft:water"
                },
                "slurryInput":{
                    "amount":1,
                    "slurry":`emendatusenigmatica:dirty_${i}`
                },
                "output":{
                    "slurry":`emendatusenigmatica:clean_${i}`,
                    "amount":2
                }
            }
        )
        event.custom(
            {
                "type":"mekanism:dissolution",
                "itemInput":{
                    "ingredient":{
                        "tag":`forge:ores/${i}`
                    }
                },
                "gasInput":{
                    "amount":1,
                    "gas":"mekanism:sulfuric_acid"
                },
                "output":{
                    "slurry":`emendatusenigmatica:dirty_${i}`,
                    "amount":1000,
                    "chemicalType":"slurry"
                }
            }
        )
    }

})
