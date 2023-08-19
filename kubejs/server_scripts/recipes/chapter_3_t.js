// priority: 0 

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.replaceInput({id: 'mekanism:metallurgic_infuser'}, 'minecraft:iron_ingot', 'create:shadow_steel')

    event.custom(
        {
            "type":"mekanism:metallurgic_infusing",
            "itemInput":{
                "ingredient":{
                    "item":"kubejs:chromatic_mechanism"
                }
            },
            "infusionInput":{
                "amount":20,
                "tag":"mekanism:redstone"
            },
            "output":{
                "item":"2x mekanism:basic_control_circuit"
            }
        }
    )
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
                "item":"4x mekanism:alloy_infused"
            }
        }
    )

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

    event.replaceInput({id: 'mekanism:sps_casing'}, 'mekanism:hdpe_sheet', 'kubejs:meka_plate')

    event.custom(
        {
            "type":"mekanism:nucleosynthesizing",
            "itemInput":
            {
                "ingredient":
                {
                    "item":"create:shadow_steel"
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
})