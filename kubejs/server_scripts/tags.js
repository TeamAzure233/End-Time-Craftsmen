onEvent('item.tags', event => {
    event.add('notreepunching:weak_saws', '#forge:tools/axes')
    event.add('notreepunching:knives', 'tconstruct:dagger')
    event.add('farmersdelight:straw_harvesters', 'tconstruct:dagger')

    event.add('kubejs:piston', 'minecraft:piston')
    event.add('kubejs:piston', 'minecraft:sticky_piston')

    event.add('forge:gems/coal', 'minecraft:coal')
    event.add('forge:gems/charcoal', 'minecraft:charcoal')
    event.add('forge:gems/coke', ['immersiveengineering:coal_coke', 'thermal:coal_coke'])
    event.add('forge:gems/coal_coke', ['immersiveengineering:coal_coke', 'thermal:coal_coke'])
    event.add('forge:storage_blocks/coke', ['immersiveengineering:coke', 'thermal:coal_coke_block'])
    event.add('forge:dusts/coke', ['immersiveengineering:dust_coke'])

    event.add('forge:ores/copper', 'zombie_extreme:copper_ore')
    event.add('forge:ores/ruby', 'zombie_extreme:rubyore')
    event.add('forge:ores/iron', 'zombie_extreme:alternateoreiron')
    event.add('forge:ores/gold', 'zombie_extreme:alternateoregold')
    event.add('forge:ores/ruby', 'zombie_extreme:alternateoreruby')
    event.add('forge:ingots/copper', 'zombie_extreme:copper_ignot')
    event.add('forge:gems/ruby', 'zombie_extreme:ruby')

    event.remove('twilightforest:portal/activator', ['#forge:gems/diamond'])
    event.add('twilightforest:portal/activator', ['kubejs:twilight_gemstone'])

    event.add('twilightforest:trophies', ['twilightforest:naga_trophy', 'twilightforest:lich_trophy', 'twilightforest:knight_phantom_trophy', 'twilightforest:ur_ghast_trophy', 'twilightforest:snow_queen_trophy', 'twilightforest:yeti_trophy', 'twilightforest:minoshroom_trophy', 'twilightforest:hydra_trophy', 'twilightforest:quest_ram_trophy'])

    event.remove('forge:gems/certus_quartz', 'appliedenergistics2:charged_certus_quartz_crystal')
    event.add('forge:gems/charged_certus_quartz', 'appliedenergistics2:charged_certus_quartz_crystal')

    event.add('forge:dusts/ender', ['thermal:ender_pearl_dust','appliedenergistics2:ender_dust'])
    event.add('appliedenergistics2:ender_dust', ['thermal:ender_pearl_dust','emendatusenigmatica:ender_dust','miniutilities:ender_dust'])

    event.add('diet:proteins', 'gofish:soup_can_open')
    event.add('diet:vegetables', 'gofish:soup_can_open')
    event.add('diet:fruits', 'gofish:fruit_can_open')
    event.add('diet:sugars', 'gofish:fruit_can_open')
    event.add('diet:proteins', 'gofish:magic_soup_can_open')
    event.add('diet:vegetables', 'gofish:magic_soup_can_open')
    event.add('diet:fruits', 'gofish:magic_soup_can_open')
    event.add('diet:grains', 'gofish:magic_soup_can_open')
    event.add('diet:sugars', 'gofish:magic_soup_can_open')

    event.add('diet:grains', 'gofish:scoop_rice_with_sweet_wing')
    event.add('diet:proteins', 'gofish:scoop_rice_with_sweet_wing')
    event.add('diet:proteins', 'gofish:essence_of_fish')
    event.add('diet:grains', 'gofish:oil_cake')

    event.remove('forge:tools/knives', 'croptopia:knife')

    event.add('forge:meat_cooked', 'croptopia:cooked_anchovy')
    event.add('forge:meat_cooked', 'croptopia:cooked_shrimp')
    event.add('forge:meat_cooked', 'croptopia:cooked_tuna')

    event.add('kubejs:gun_accessories', ['tac:coyote_sight', 'tac:aimpoint_t2', 'tac:aimpoint_t1', 'tac:eotech_n', 'tac:vortex_uh_1', 'tac:eotech_short', 'tac:srs_red_dot', 'tac:acog_4x_scope', 'tac:qmk152', 'tac:elcan_14x', 'tac:lpvo_1_6', 'tac:8x_scope', 'tac:old_8x_scope', 'tac:old_4x_scope', 'tac:mini_dot', 'tac:sro_dot', 'tac:silencer', 'tac:muzzle_brake', 'tac:muzzle_compensator', 'tac:pistol_silencer', 'tac:light_stock', 'tac:tactical_stock', 'tac:weighted_stock', 'tac:light_grip', 'tac:specialised_grip'])
    event.add('kubejs:bullets', ['tac:round45', 'tac:ae50', 'tac:win_30-30', 'tac:bullet_308', 'tac:nato_556_bullet', 'tac:9mm_round', 'tac:10_gauge_round', 'tac:58x42', 'tac:762x25', 'tac:762x54', 'tac:762x39', 'tac:50bmg', 'tac:lapua338', 'tac:bullet68'])
    event.add('kubejs:guns', ['tac:ai_awp', 'tac:db_short', 'tac:aa_12', 'tac:m870_classic', 'tac:m1014', 'tac:m60', 'tac:dp28', 'tac:rpk', 'tac:m1911', 'tac:glock_17', 'tac:sti2011', 'tac:deagle_357', 'tac:cz75', 'tac:cz75_auto', 'tac:tti_g34', 'tac:vector45', 'tac:micro_uzi', 'tac:hk_mp5a5', 'tac:mp7', 'tac:ak47', 'tac:m4', 'tac:qbz_95', 'tac:mk14', 'tac:hk416_a5', 'tac:type81_x', 'tac:fn_fal', 'tac:sks_tactical', 'tac:m16a4', 'tac:scar_h', 'tac:scar_l', 'tac:mk47', 'tac:spr15', 'tac:mk18_mod1', 'tac:m24'])

    event.add('kubejs:banned_tools', 'minecraft:wooden_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:wooden_axe')
    event.add('kubejs:banned_tools', 'minecraft:stone_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:stone_axe')
    event.add('kubejs:banned_tools', 'minecraft:golden_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:golden_axe')
    event.add('kubejs:banned_tools', 'minecraft:iron_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:iron_axe')
    event.add('kubejs:banned_tools', 'minecraft:diamond_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:diamond_axe')
    event.add('kubejs:banned_tools', 'minecraft:netherite_pickaxe')
    event.add('kubejs:banned_tools', 'minecraft:netherite_axe')
    event.add('kubejs:banned_tools', ['botania:manasteel_pick', 'botania:manasteel_axe', 'botania:elementium_pickaxe', 'botania:elementium_axe'])
    event.add('kubejs:banned_tools', ['appliedenergistics2:certus_quartz_axe', 'appliedenergistics2:certus_quartz_pickaxe', 'appliedenergistics2:nether_quartz_axe', 'appliedenergistics2:nether_quartz_pickaxe'])
    event.add('kubejs:banned_tools', ['zombie_extreme:copper_pickaxe', 'zombie_extreme:copper_axe'])

    event.add('forge:tools/axes', 'appliedenergistics2:certus_quartz_axe')
    event.add('forge:tools/axes', 'appliedenergistics2:nether_quartz_axe')
    event.add('forge:tools/axes', 'astralsorcery:crystal_axe')
    event.add('forge:tools/axes', 'astralsorcery:infused_crystal_axe')
    event.add('forge:tools/axes', 'botania:manasteel_axe')
    event.add('forge:tools/axes', 'botania:elementium_axe')
    event.add('forge:tools/axes', 'projecte:dm_axe')
    event.add('forge:tools/axes', 'projecte:rm_axe')
    event.add('forge:tools/axes', 'tconstruct:hand_axe')

    event.add('notreepunching:saws', 'thermal:flux_saw')
    event.add('notreepunching:saws', 'tconstruct:broad_axe')
    
    event.add('kubejs:andesite_machine', 'create:mechanical_press')
    event.add('kubejs:andesite_machine', 'create:mechanical_mixer')
    event.add('kubejs:andesite_machine', 'create:speedometer')
    event.add('kubejs:andesite_machine', 'create:stressometer')
    event.add('kubejs:andesite_machine', 'create:mechanical_drill')
    event.add('kubejs:andesite_machine', 'create:mechanical_saw')
    event.add('kubejs:andesite_machine', 'create:deployer')
    event.add('kubejs:andesite_machine', 'create:mechanical_harvester')
    event.add('kubejs:andesite_machine', 'create:mechanical_plough')
    event.add('kubejs:andesite_machine', 'create:encased_fan')
    event.add('kubejs:andesite_machine', 'createaddition:rolling_mill')
    event.add('kubejs:andesite_machine', 'create:millstone')
    event.add('kubejs:andesite_machine', 'create:smart_chute')
    event.add('kubejs:andesite_machine', 'thermal:device_tree_extractor')
    event.add('kubejs:andesite_machine', 'thermal:device_fisher')
    event.add('kubejs:andesite_machine', 'mekanism:oredictionificator')

    event.add('kubejs:brass_machine', 'create:mechanical_crafter')
    event.add('kubejs:brass_machine', 'create:mechanical_arm')
    event.add('kubejs:brass_machine', 'create:sequenced_gearshift')
    event.add('kubejs:brass_machine', 'create:rotation_speed_controller')
    event.add('kubejs:brass_machine', 'create:portable_storage_interface')
    event.add('kubejs:brass_machine', 'create:content_observer')
    event.add('kubejs:brass_machine', 'create:stockpile_switch')
    event.add('kubejs:brass_machine', 'create:adjustable_crate')
    event.add('kubejs:brass_machine', 'create:nixie_tube')
    event.add('kubejs:brass_machine', 'thermal:device_hive_extractor')
    event.add('kubejs:brass_machine', 'thermal:device_rock_gen')
    event.add('kubejs:brass_machine', 'thermal:device_collector')
    event.add('kubejs:brass_machine', 'thermal:device_nullifier')
    event.add('kubejs:brass_machine', 'thermal:device_potion_diffuser')
    event.add('kubejs:brass_machine', ['vehicle:workstation', 'tac:workbench'])

    event.add('kubejs:liquid_machine', 'thermal:device_water_gen')
    event.add('kubejs:liquid_machine', 'create:mechanical_pump')
    event.add('kubejs:liquid_machine', 'create:smart_fluid_pipe')
    event.add('kubejs:liquid_machine', 'create:fluid_valve')
    event.add('kubejs:liquid_machine', 'create:spout')
    event.add('kubejs:liquid_machine', 'create:hose_pulley')
    event.add('kubejs:liquid_machine', 'create:item_drain')
    event.add('kubejs:liquid_machine', 'create:portable_fluid_interface')
    event.add('kubejs:liquid_machine', 'thermal:fluid_cell')

    event.add('kubejs:steam_machine', 'steampowered:bronze_burner')
    event.add('kubejs:steam_machine', 'steampowered:cast_iron_burner')
    event.add('kubejs:steam_machine', 'steampowered:steel_burner')
    event.add('kubejs:steam_machine', 'steampowered:bronze_boiler')
    event.add('kubejs:steam_machine', 'steampowered:cast_iron_boiler')
    event.add('kubejs:steam_machine', 'steampowered:steel_boiler')
    event.add('kubejs:steam_machine', 'steampowered:bronze_steam_engine')
    event.add('kubejs:steam_machine', 'steampowered:cast_iron_steam_engine')
    event.add('kubejs:steam_machine', 'steampowered:steel_steam_engine')
    event.add('kubejs:steam_machine', 'steampowered:bronze_flywheel')
    event.add('kubejs:steam_machine', 'steampowered:cast_iron_flywheel')
    event.add('kubejs:steam_machine', 'steampowered:steel_flywheel')

    event.add('kubejs:electricity_machine', ['createaddition:electric_motor', 'createaddition:alternator', 'immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv', 'immersiveengineering:cloche', 'immersiveengineering:thermoelectric_generator', 'immersiveengineering:turret_gun', 'immersiveengineering:turret_chem', 'immersiveengineering:railgun', 'immersivepetroleum:gas_generator', 'immersiveengineering:transformer', 'immersiveengineering:transformer_hv', 'immersiveengineering:tesla_coil', 'immersiveengineering:sample_drill', 'immersiveengineering:charging_station', 'immersiveengineering:blastfurnace_preheater', 'immersiveengineering:fluid_pump', 'createaddition:tesla_coil', 'createaddition:heater', 'thermal:flux_capacitor','miniutilities:solar_panel_controller', 'miniutilities:lunar_panel', 'miniutilities:solar_panel','immersiveengineering:light_engineering', 'immersiveengineering:heavy_engineering', 'immersiveengineering:rs_engineering'])

    event.add('kubejs:integration_machine', 'thermal:machine_frame')
    event.add('kubejs:integration_machine', 'thermal:tinker_bench')
    event.add('kubejs:integration_machine', 'thermal:energy_cell')
    event.add('kubejs:integration_machine', 'thermal:machine_smelter')
    event.add('kubejs:integration_machine', 'thermal:machine_furnace')
    event.add('kubejs:integration_machine', 'thermal:machine_crucible')
    event.add('kubejs:integration_machine', 'thermal:device_soil_infuser')
    event.add('kubejs:integration_machine', 'thermal:machine_insolator')
    event.add('kubejs:integration_machine', 'thermal:machine_centrifuge')
    event.add('kubejs:integration_machine', 'thermal:machine_chiller')
    event.add('kubejs:integration_machine', 'thermal:machine_refinery')
    event.add('kubejs:integration_machine', 'thermal:machine_crafter')
    event.add('kubejs:integration_machine', 'thermal:machine_brewer')
    event.add('kubejs:integration_machine', 'thermal:machine_pyrolyzer')
    event.add('kubejs:integration_machine', 'thermal:machine_bottler')
    event.add('kubejs:integration_machine', ['thermal:machine_sawmill','thermal:machine_pulverizer','thermal:machine_press','thermal:flux_drill','thermal:flux_saw','thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3'])
    event.add('kubejs:integration_machine', 'extendedcrafting:crafting_core')

    event.add('kubejs:restrict_bot', ['botania:manasteel_nugget', 'botania:terrasteel_nugget', 'botania:elementium_nugget', 'botania:manaweave_cloth', 'botania:mana_powder', 'botania:quartz_mana', 'botania:quartz_elven', '#botania:lens', 'botania:twig_wand', 'botania:fertilizer', 'botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond', 'botania:livingwood_twig', 'botania:terrasteel_ingot', 'botania:life_essence', 'botania:elementium_ingot', 'botania:pixie_dust', 'botania:dragonstone', 'botania:red_string', 'botania:dreamwood_twig', 'botania:gaia_ingot', 'botania:mana_string', '#botania:runes', 'botania:grass_seeds', 'botania:podzol_seeds', 'botania:mycelium_seeds', 'botania:dry_seeds', 'botania:vivid_seeds', 'botania:scorched_seeds', 'botania:infused_seeds', 'botania:mutated_seeds', 'botania:golden_seeds', '#botania:rods', 'botania:manasteel_helmet',  'botania:manasteel_chestplate',  'botania:manasteel_leggings',  'botania:manasteel_boots',  'botania:manasteel_pick',  'botania:manasteel_shovel',  'botania:manasteel_hoe',  'botania:manasteel_axe',  'botania:manasteel_sword',  'botania:manasteel_shears',  'botania:elementium_helmet',  'botania:elementium_chestplate',  'botania:elementium_leggings',  'botania:elementium_boots',  'botania:elementium_pickaxe',  'botania:elementium_shovel',  'botania:elementium_hoe',  'botania:elementium_axe',  'botania:elementium_sword',  'botania:elementium_shears',  'botania:terrasteel_helmet',  'botania:terrasteel_chestplate',  'botania:terrasteel_leggings',  'botania:terrasteel_boots',  'botania:terra_pick', 'botania:terra_axe',  'botania:terra_sword',  'botania:star_sword',  'botania:thunder_sword',  'botania:manaweave_helmet',  'botania:manaweave_chestplate',  'botania:manaweave_leggings',  'botania:manaweave_boots',  'botania:ender_dagger',  'botania:glass_pickaxe',  'botania:livingwood_bow', 'botania:crystal_bow',  'botania:thorn_chakram', 'botania:flare_chakram', 'botania:mana_tablet', 'botania:mana_mirror', 'botania:mana_gun', 'botania:clip', 'botania:horn_grass', 'botania:horn_leaves', 'botania:horn_snow', 'botania:vine_ball', 'botania:slingshot', 'botania:open_bucket', 'botania:spawner_mover', 'botania:ender_hand', 'botania:crafting_halo', 'botania:auto_crafting_halo', 'botania:spell_cloth',  'botania:black_hole_talisman', 'botania:temperance_stone', 'botania:slime_bottle', 'botania:sextant', 'botania:astrolabe', 'botania:bauble_box', 'botania:mana_ring', 'botania:mana_ring_greater', 'botania:aura_ring', 'botania:aura_ring_greater', 'botania:magnet_ring', 'botania:magnet_ring_greater', 'botania:water_ring', 'botania:swap_ring', 'botania:dodge_ring', 'botania:mining_ring', 'botania:pixie_ring', 'botania:reach_ring', 'botania:travel_belt', 'botania:super_travel_belt', 'botania:speed_up_belt', 'botania:knockback_belt', 'botania:ice_pendant', 'botania:lava_pendant', 'botania:super_lava_pendant', 'botania:cloud_pendant', 'botania:super_cloud_pendant', 'botania:holy_cloak', 'botania:unholy_cloak', 'botania:balance_cloak', 'botania:invisibility_cloak', 'botania:third_eye', 'botania:monocle', 'botania:tiny_planet', 'botania:goddess_charm', 'botania:diva_charm', 'botania:flight_tiara', 'botania:mana_cookie', 'botania:placeholder', 'botania:pattern_1_1', 'botania:pattern_2_2', 'botania:pattern_1_2', 'botania:pattern_2_1', 'botania:pattern_1_3', 'botania:pattern_3_1', 'botania:pattern_2_3', 'botania:pattern_3_2', 'botania:pattern_donut', 'botania:laputa_shard', 'botania:virus_necrodermal', 'botania:virus_nullodermal', 'botania:spark', 'botania:spark_upgrade_dispersive', 'botania:spark_upgrade_dominant', 'botania:spark_upgrade_recessive', 'botania:spark_upgrade_isolated', 'botania:corporea_spark', 'botania:corporea_spark_master', 'botania:world_seed', 'botania:phantom_ink', 'botania:pool_minecart', 'botania:keep_ivy', 'botania:dice',  'botania:infinite_fruit',  'botania:king_key',  'botania:flugel_eye',  'botania:thor_ring',  'botania:odin_ring', 'botania:loki_ring', 'botania:ancient_will_ahrim', 'botania:ancient_will_dharok', 'botania:ancient_will_guthan', 'botania:ancient_will_torag', 'botania:ancient_will_verac', 'botania:ancient_will_karil', 'botania:pinkinator', 'botania:blood_pendant', 'botania:incense_stick', 'botania:apothecary_default', 'botania:apothecary_forest', 'botania:apothecary_plains', 'botania:apothecary_mountain', 'botania:apothecary_fungal', 'botania:apothecary_swamp', 'botania:apothecary_desert', 'botania:apothecary_taiga', 'botania:apothecary_mesa', 'botania:apothecary_mossy', 'botania:livingrock_bricks', 'botania:livingrock', 'botania:chiseled_livingrock_bricks', 'botania:cracked_livingrock_bricks', 'botania:mossy_livingrock_bricks', 'botania:livingwood', 'botania:livingwood_planks', 'botania:mossy_livingwood_planks', 'botania:framed_livingwood', 'botania:pattern_framed_livingwood', 'botania:glimmering_livingwood', 'botania:dreamwood', 'botania:dreamwood_planks', 'botania:mossy_dreamwood_planks', 'botania:framed_dreamwood', 'botania:pattern_framed_dreamwood', 'botania:glimmering_dreamwood', 'botania:mana_spreader', 'botania:redstone_spreader', 'botania:elven_spreader', 'botania:gaia_spreader', 'botania:mana_pool', 'botania:diluted_pool', 'botania:fabulous_pool', 'botania:alchemy_catalyst', 'botania:conjuration_catalyst', 'botania:manasteel_block', 'botania:terrasteel_block', 'botania:elementium_block', 'botania:mana_diamond_block', 'botania:dragonstone_block', 'botania:mana_glass', 'botania:elf_glass', 'botania:bifrost_perm', 'botania:runic_altar', 'botania:brewery', 'botania:terra_plate', 'botania:alfheim_portal', 'botania:mana_pylon', 'botania:natura_pylon', 'botania:gaia_pylon', 'botania:mana_distributor', 'botania:mana_void', 'botania:mana_detector', 'botania:piston_relay', 'botania:turntable', 'botania:tiny_planet_block', 'botania:drum_wild', 'botania:drum_gathering', 'botania:drum_canopy', 'botania:spawner_claw', 'botania:mana_fluxfield', 'botania:prism', 'botania:pump', 'botania:spark_changer', 'botania:mana_bomb', 'botania:bellows', 'botania:open_crate', 'botania:crafty_crate', 'botania:forest_eye', 'botania:abstruse_platform', 'botania:spectral_platform', 'botania:tiny_potato', 'botania:red_string_container', 'botania:red_string_dispenser', 'botania:red_string_fertilizer', 'botania:red_string_comparator', 'botania:red_string_relay', 'botania:red_string_interceptor', 'botania:corporea_index','botania:corporea_funnel', 'botania:corporea_interceptor', 'botania:corporea_crystal_cube', 'botania:corporea_retainer', 'botania:corporea_block', 'botania:corporea_slab', 'botania:corporea_stairs', 'botania:corporea_brick', 'botania:corporea_brick_slab', 'botania:corporea_brick_stairs', 'botania:corporea_brick_wall', 'botania:incense_plate', 'botania:hourglass', 'botania:ghost_rail', 'botania:light_relay', 'botania:detector_light_relay', 'botania:fork_light_relay', 'botania:toggle_light_relay', 'botania:light_launcher', 'botania:cell_block', 'botania:teru_teru_bozu', 'botania:avatar', 'botania:cocoon', 'botania:animated_torch', 'botania:starfield', 'botania:gaia_head', 'botania:shimmerrock', 'botania:shimmerwood_planks', 'botania:hydroangeas_motif', 'botania:livingwood_stairs', 'botania:livingwood_slab', 'botania:livingwood_wall', 'botania:livingwood_fence', 'botania:livingwood_fence_gate', 'botania:livingwood_planks_stairs', 'botania:livingwood_planks_slab', 'botania:livingrock_stairs', 'botania:livingrock_slab', 'botania:livingrock_wall', 'botania:livingrock_bricks_stairs', 'botania:livingrock_bricks_slab', 'botania:livingrock_bricks_wall', 'botania:mossy_livingrock_bricks_stairs', 'botania:mossy_livingrock_bricks_slab', 'botania:mossy_livingrock_bricks_wall', 'botania:dreamwood_stairs', 'botania:dreamwood_slab', 'botania:dreamwood_wall', 'botania:dreamwood_fence', 'botania:dreamwood_fence_gate', 'botania:dreamwood_planks_stairs', 'botania:dreamwood_planks_slab', 'botania:mana_quartz', 'botania:mana_quartz_pillar', 'botania:chiseled_mana_quartz', 'botania:mana_quartz_slab', 'botania:mana_quartz_stairs', 'botania:elf_quartz', 'botania:elf_quartz_pillar', 'botania:chiseled_elf_quartz', 'botania:elf_quartz_slab', 'botania:elf_quartz_stairs', 'botania:shimmerrock_slab', 'botania:shimmerrock_stairs', 'botania:shimmerwood_planks_slab', 'botania:shimmerwood_planks_stairs', 'botania:mana_glass_pane', 'botania:elf_glass_pane', 'botania:bifrost_pane', '#botania:special_flowers', '#botania:special_floating_flowers', 'mythicbotany:mana_infuser', 'mythicbotany:alfsteel_block', 'mythicbotany:alfsteel_pylon', 'mythicbotany:mana_collector', 'mythicbotany:yggdrasil_branch', 'mythicbotany:rune_holder', 'mythicbotany:master_rune_holder', 'mythicbotany:mjoellnir', 'mythicbotany:dreamwood_leaves', 'mythicbotany:elementium_ore', 'mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_nugget', 'mythicbotany:alfsteel_armor_upgrade', 'mythicbotany:alfsteel_sword', 'mythicbotany:alfsteel_pick', 'mythicbotany:alfsteel_axe', 'mythicbotany:alfsteel_helmet', 'mythicbotany:alfsteel_chestplate',  'mythicbotany:alfsteel_leggings',  'mythicbotany:alfsteel_boots',  'mythicbotany:mana_ring_greatest', 'mythicbotany:aura_ring_greatest', 'mythicbotany:dreamwood_twig_wand', 'mythicbotany:fire_ring', 'mythicbotany:ice_ring', 'mythicbotany:gjallar_horn_empty', 'mythicbotany:gjallar_horn_full', 'mythicbotany:cursed_andwari_ring', 'mythicbotany:andwari_ring',  'mythicbotany:fimbultyr_tablet', 'mythicbotany:kvasir_blood', 'mythicbotany:kvasir_mead', 'mythicbotany:dream_cherry', 'extrabotany:universalpetal'])

    event.add('botania:special_flowers', 'extrabotany:serenitian')

    event.add('botania:lens', ['extrabotany:lens_mana', 'extrabotany:lens_potion', 'extrabotany:lens_push', 'extrabotany:lens_smelt', 'extrabotany:lens_superconductor', 'extrabotany:lens_trace'])

    event.add('kubejs:extra_knowledge_bot', ['extrabotany:silverbullet', 'extrabotany:firstfractal',  'extrabotany:silverbullet', 'extrabotany:trueshadowkatana',  'extrabotany:motor',  'extrabotany:gildedmashedpotato', 'extrabotany:cosmiccarkey', 'extrabotany:flamescionweapon',  'extrabotany:walkingcane', 'extrabotany:manareader', 'extrabotany:shadowkatana',  'extrabotany:rodofdiscord',  'extrabotany:aerostone' , 'extrabotany:earthstone', 'extrabotany:aquastone', 'extrabotany:ignisstone', 'extrabotany:thecommunity', 'extrabotany:peaceamulet', 'extrabotany:froststar', 'extrabotany:deathring', 'extrabotany:manadrivering', 'extrabotany:natureorb', 'extrabotany:powerglove', 'extrabotany:jingweifeather', 'extrabotany:motoraccessory',  'extrabotany:cosmiccarkeyaccessory', 'extrabotany:excaliber',  'extrabotany:sagesmanaring', 'extrabotany:failnaught',  'extrabotany:influxwaver',  'extrabotany:trueterrablade', 'extrabotany:starwrath',  'extrabotany:camera',  'extrabotany:coregod', 'extrabotany:sunring', 'extrabotany:moonpendant', 'extrabotany:manadrink', 'extrabotany:cocktail',  'extrabotany:infinitewine', 'extrabotany:splashgrenade', 'extrabotany:spirit', 'extrabotany:orichalcos', 'extrabotany:photonium', 'extrabotany:shadowium', 'extrabotany:aerialite', 'extrabotany:gildedpotato', 'extrabotany:heromedal', 'extrabotany:goldcloth', 'extrabotany:emptybottle', 'extrabotany:thechaos', 'extrabotany:theorigin', 'extrabotany:theend', 'extrabotany:theuniverse', 'extrabotany:maid_helm',  'extrabotany:maid_chest',  'extrabotany:maid_legs',  'extrabotany:maid_boots',  'extrabotany:miku_helm',  'extrabotany:miku_chest',  'extrabotany:miku_legs',  'extrabotany:miku_boots',  'extrabotany:goblinslayer_helm',  'extrabotany:goblinslayer_chest',  'extrabotany:goblinslayer_legs',  'extrabotany:goblinslayer_boots', 'extrabotany:shadowwarrior_helm',  'extrabotany:shadowwarrior_chest',  'extrabotany:shadowwarrior_legs',  'extrabotany:shadowwarrior_boots' , 'extrabotany:shootingguardian_helm',  'extrabotany:shootingguardian_chest',  'extrabotany:shootingguardian_legs', 'extrabotany:shootingguardian_boots', 'extrabotany:treasurebox', 'extrabotany:rewardbaga', 'extrabotany:rewardbagb', 'extrabotany:rewardbagc', 'extrabotany:rewardbagd', 'extrabotany:powerframe', 'extrabotany:manabuffer', 'extrabotany:dimensioncatalyst'])

    event.remove('forge:storage_blocks/quartz', ['botania:mana_quartz', 'botania:dark_quartz', 'botania:lavender_quartz', 'botania:blaze_quartz', 'botania:red_quartz', 'botania:elf_quartz', 'botania:sunny_quartz'])

    event.add('kubejs:restrict_astral', ['astralsorcery:shifting_star', '#kubejs:shifting_stars', '#astralsorcery:colored_lens', 'astralsorcery:wand', 'astralsorcery:chisel', 'astralsorcery:resonator', 'astralsorcery:linking_tool', 'astralsorcery:illumination_wand', 'astralsorcery:architect_wand', 'astralsorcery:resonating_gem', 'astralsorcery:glass_lens', 'astralsorcery:parchment', 'astralsorcery:starmetal_ingot', 'astralsorcery:stardust', 'astralsorcery:perk_gem_sky', 'astralsorcery:perk_gem_day', 'astralsorcery:perk_gem_night', 'astralsorcery:crystal_axe', 'astralsorcery:crystal_pickaxe', 'astralsorcery:crystal_shovel', 'astralsorcery:crystal_sword', 'astralsorcery:infused_crystal_axe', 'astralsorcery:infused_crystal_pickaxe', 'astralsorcery:infused_crystal_shovel', 'astralsorcery:infused_crystal_sword', 'astralsorcery:enchantment_amulet', 'astralsorcery:knowledge_share', 'astralsorcery:exchange_wand', 'astralsorcery:grapple_wand', 'astralsorcery:blink_wand', 'astralsorcery:hand_telescope', 'astralsorcery:infused_glass', 'astralsorcery:mantle', 'astralsorcery:perk_seal', 'astralsorcery:nocturnal_powder', 'astralsorcery:illumination_powder', 'astralsorcery:starmetal', 'astralsorcery:spectral_relay', 'astralsorcery:altar_discovery', 'astralsorcery:altar_attunement', 'astralsorcery:altar_constellation', 'astralsorcery:altar_radiance', 'astralsorcery:attunement_altar', 'astralsorcery:lens','astralsorcery:prism', 'astralsorcery:infused_wood', 'astralsorcery:infused_wood_arch', 'astralsorcery:infused_wood_column', 'astralsorcery:infused_wood_engraved', 'astralsorcery:infused_wood_enriched', 'astralsorcery:infused_wood_infused', 'astralsorcery:infused_wood_planks', 'astralsorcery:infused_wood_stairs', 'astralsorcery:infused_wood_slab', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:rock_crystal_ore', 'astralsorcery:starmetal_ore', 'astralsorcery:ritual_link', 'astralsorcery:ritual_pedestal', 'astralsorcery:infuser', 'astralsorcery:chalice', 'astralsorcery:well', 'astralsorcery:illuminator', 'astralsorcery:telescope', 'astralsorcery:liquid_starlight_bucket', 'astralsorcery:observatory', 'astralsorcery:refraction_table', 'astralsorcery:tree_beacon', 'astralsorcery:celestial_gateway', 'astralsorcery:fountain', 'astralsorcery:fountain_prime_liquid', 'astralsorcery:fountain_prime_vortex'])

    event.add('kubejs:chromatic_machine', ['mekanism:enrichment_chamber', 'mekanism:osmium_compressor', 'mekanism:combiner', 'mekanism:digital_miner', 'mekanism:metallurgic_infuser', 'mekanism:purification_chamber','mekanismgenerators:solar_generator', 'mekanism:energized_smelter','mekanism:teleporter', 'mekanism:electric_pump', 'mekanism:chargepad',  'mekanism:rotary_condensentrator', 'mekanism:chemical_oxidizer', 'mekanism:chemical_infuser', 'mekanism:chemical_injection_chamber', 'mekanism:electrolytic_separator', 'mekanism:chemical_dissolution_chamber', 'mekanism:chemical_washer', 'mekanism:chemical_crystallizer', 'mekanism:seismic_vibrator','mekanism:pressurized_reaction_chamber', 'mekanism:nutritional_liquifier', 'mekanism:fluidic_plenisher', 'mekanism:quantum_entangloporter', 'mekanism:resistive_heater','mekanism:fuelwood_heater', 'mekanism:pigment_extractor', 'mekanism:pigment_mixer', 'mekanism:painting_machine', 'mekanismgenerators:gas_burning_generator' , 'mekanismgenerators:advanced_solar_generator', 'mekanism:basic_energy_cube', 'mekanism:advanced_energy_cube', 'mekanism:elite_energy_cube', 'mekanism:ultimate_energy_cube', 'mekanism:modification_station', 'mekanism:antiprotonic_nucleosynthesizer', 'mekanism:solar_neutron_activator', 'mekanism:isotopic_centrifuge','mekanism:jetpack', 'mekanism:jetpack_armored', 'mekanism:free_runners', 'mekanism:atomic_disassembler', 'mekanism:laser_amplifier', 'mekanism:laser', 'mekanism:formulaic_assemblicator','mekanism:steel_casing', 'mekanism:crusher','mekanism:precision_sawmill', 'mekanismgenerators:bio_generator', 'mekanismgenerators:wind_generator'])

    event.add('kubejs:restrict_mek', ['mekanism:robit', 'mekanism:energy_tablet', 'mekanism:configurator', 'mekanism:network_reader', 'mekanism:portable_teleporter', 'mekanism:configuration_card', 'mekanism:crafting_formula', 'mekanism:scuba_mask', 'mekanism:seismic_reader', 'mekanism:gauge_dropper', 'mekanism:geiger_counter', 'mekanism:dosimeter', 'mekanism:canteen', 'mekanism:atomic_disassembler', 'mekanism:electric_bow', 'mekanism:free_runners', 'mekanism:scuba_tank' , 'mekanism:jetpack',  'mekanism:jetpack_armored', 'mekanism:hdpe_elytra' , 'mekanism:hazmat_mask', 'mekanism:hazmat_gown', 'mekanism:hazmat_pants', 'mekanism:hazmat_boots', 'mekanism:upgrade_speed', 'mekanism:upgrade_energy', 'mekanism:upgrade_filter', 'mekanism:upgrade_muffling', 'mekanism:upgrade_gas', 'mekanism:upgrade_anchor', 'mekanism:upgrade_stone_generator', 'mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer', 'mekanism:basic_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:ultimate_control_circuit', 'mekanism:alloy_infused', 'mekanism:alloy_reinforced', 'mekanism:alloy_atomic', 'mekanism:enriched_carbon', 'mekanism:enriched_redstone', 'mekanism:enriched_diamond', 'mekanism:enriched_refined_obsidian', 'mekanism:enriched_gold', 'mekanism:enriched_tin', 'mekanism:hdpe_pellet', 'mekanism:hdpe_rod', 'mekanism:hdpe_sheet', 'mekanism:hdpe_stick', 'mekanism:electrolytic_core', 'mekanism:teleportation_core', 'mekanism:enriched_iron', 'mekanism:salt', 'mekanism:substrate', 'mekanism:bio_fuel', 'mekanism:dye_base', 'mekanism:yellow_cake_uranium', 'mekanism:steel_casing', 'mekanism:basic_bin', 'mekanism:advanced_bin', 'mekanism:elite_bin', 'mekanism:ultimate_bin', 'mekanism:dynamic_tank', 'mekanism:structural_glass', 'mekanism:dynamic_valve', 'mekanism:thermal_evaporation_controller', 'mekanism:thermal_evaporation_valve', 'mekanism:thermal_evaporation_block', 'mekanism:induction_casing', 'mekanism:induction_port', 'mekanism:basic_induction_cell', 'mekanism:advanced_induction_cell', 'mekanism:elite_induction_cell', 'mekanism:ultimate_induction_cell', 'mekanism:basic_induction_provider', 'mekanism:advanced_induction_provider', 'mekanism:elite_induction_provider', 'mekanism:ultimate_induction_provider', 'mekanism:superheating_element', 'mekanism:pressure_disperser', 'mekanism:boiler_casing', 'mekanism:boiler_valve', 'mekanism:security_desk', 'mekanism:industrial_alarm', 'mekanism:basic_fluid_tank', 'mekanism:advanced_fluid_tank', 'mekanism:elite_fluid_tank', 'mekanism:ultimate_fluid_tank', 'mekanism:basic_chemical_tank', 'mekanism:advanced_chemical_tank', 'mekanism:elite_chemical_tank', 'mekanism:ultimate_chemical_tank', 'mekanism:superheated_sodium_bucket', 'mekanism:brine_bucket', 'mekanism:hydrogen_bucket', 'mekanism:oxygen_bucket', 'mekanism:chlorine_bucket', 'mekanism:sulfur_dioxide_bucket', 'mekanism:sulfur_trioxide_bucket', 'mekanism:sulfuric_acid_bucket', 'mekanism:hydrogen_chloride_bucket', 'mekanism:hydrofluoric_acid_bucket', 'mekanism:uranium_oxide_bucket', 'mekanism:uranium_hexafluoride_bucket', 'mekanism:ethene_bucket', 'mekanism:sodium_bucket', 'mekanism:lithium_bucket', 'mekanism:steam_bucket', 'mekanism:heavy_water_bucket', 'mekanism:personal_chest', 'mekanism:logistical_sorter', 'mekanism:flamethrower','#kubejs:chromatic_machine'])

    event.add('kubejs:meka_module', ['mekanism:module_base', 'mekanism:module_energy_unit', 'mekanism:module_laser_dissipation_unit', 'mekanism:module_radiation_shielding_unit', 'mekanism:module_excavation_escalation_unit', 'mekanism:module_attack_amplification_unit', 'mekanism:module_farming_unit', 'mekanism:module_shearing_unit', 'mekanism:module_silk_touch_unit', 'mekanism:module_vein_mining_unit', 'mekanism:module_teleportation_unit', 'mekanism:module_electrolytic_breathing_unit', 'mekanism:module_inhalation_purification_unit', 'mekanism:module_vision_enhancement_unit', 'mekanism:module_solar_recharging_unit', 'mekanism:module_nutritional_injection_unit', 'mekanism:module_dosimeter_unit', 'mekanism:module_geiger_unit', 'mekanism:module_jetpack_unit', 'mekanism:module_charge_distribution_unit', 'mekanism:module_gravitational_modulating_unit', 'mekanism:module_elytra_unit', 'mekanism:module_locomotive_boosting_unit', 'mekanism:module_hydraulic_propulsion_unit', 'mekanism:module_magnetic_attraction_unit', 'mekanism:module_frost_walker_unit'])

    event.add('kubejs:mek_factory', ['mekanism:basic_smelting_factory', 'mekanism:basic_enriching_factory', 'mekanism:basic_compressing_factory', 'mekanism:basic_combining_factory', 'mekanism:basic_purifying_factory', 'mekanism:basic_injecting_factory', 'mekanism:basic_infusing_factory', 'mekanism:advanced_smelting_factory', 'mekanism:advanced_enriching_factory', 'mekanism:advanced_compressing_factory', 'mekanism:advanced_combining_factory', 'mekanism:advanced_purifying_factory', 'mekanism:advanced_injecting_factory', 'mekanism:advanced_infusing_factory', 'mekanism:elite_smelting_factory', 'mekanism:elite_enriching_factory', 'mekanism:elite_compressing_factory', 'mekanism:elite_combining_factory', 'mekanism:elite_purifying_factory', 'mekanism:elite_injecting_factory', 'mekanism:elite_infusing_factory', 'mekanism:ultimate_smelting_factory', 'mekanism:ultimate_enriching_factory', 'mekanism:ultimate_compressing_factory', 'mekanism:ultimate_combining_factory', 'mekanism:ultimate_purifying_factory', 'mekanism:ultimate_injecting_factory', 'mekanism:ultimate_infusing_factory', 'mekanism:basic_crushing_factory', 'mekanism:advanced_crushing_factory', 'mekanism:elite_crushing_factory', 'mekanism:ultimate_crushing_factory', 'mekanism:basic_sawing_factory', 'mekanism:advanced_sawing_factory', 'mekanism:elite_sawing_factory', 'mekanism:ultimate_sawing_factory'])

    event.add('forge:ingots', ['create:andesite_alloy', 'kubejs:blaze_brass', 'kubejs:chorus_chrome', "kubejs:antimatter_alloy"])
    event.add('forge:storage_blocks/refined_radiance', 'kubejs:refined_radiance_block')
    event.add('forge:storage_blocks/shadow_steel', 'kubejs:shadow_steel_block')
    event.add('kubejs:shifting_stars', ['astralsorcery:shifting_star_aevitas', 'astralsorcery:shifting_star_armara', 'astralsorcery:shifting_star_discidia', 'astralsorcery:shifting_star_evorsio', 'astralsorcery:shifting_star_vicio'])

    event.add('kubejs:disabled', ['#forge:angelring', 'projecte:alchemical_chest', 'projecte:dm_pedestal', '#projecte:alchemical_bags', 'projecte:dm_helmet', 'projecte:dm_chestplate', 'projecte:dm_leggings', 'projecte:dm_boots', 'projecte:rm_helmet', 'projecte:rm_chestplate', 'projecte:rm_leggings', 'projecte:rm_boots', 'projecte:iron_band', 'projecte:gem_of_eternal_density', 'projecte:mercurial_eye', 'projecte:body_stone', 'projecte:soul_stone', 'projecte:mind_stone', 'projecte:life_stone', 'projecte:destruction_catalyst', 'projecte:hyperkinetic_lens', 'projecte:catalytic_lens', 'projecte:rm_katar', 'projecte:rm_morning_star', 'projecte:void_ring', 'projecte:arcana_ring', 'projecte:gem_helmet', 'projecte:gem_chestplate', 'projecte:gem_leggings', 'projecte:gem_boots', 'projecte:rm_hammer', 'projecte:dm_hammer', 'projecte:dm_shears', 'projecte:dm_hoe', 'projecte:dm_shovel', 'projecte:dm_axe', 'projecte:dm_sword', 'projecte:rm_hammer', 'projecte:rm_shears', 'projecte:rm_hoe', 'projecte:rm_sword', 'projecte:rm_shovel', 'projecte:rm_axe', 'projecte:archangel_smite', 'projecte:black_hole_band', 'projecte:ignition_ring', 'projecte:harvest_goddess_band', 'projecte:swiftwolf_rending_gale', 'projecte:zero_ring', 'twilightforest:uncrafting_table'])

    event.add('kubejs:disabled', ['createaddition:copper_spool', 'createaddition:gold_spool', 'createaddition:accumulator', 'createaddition:connector', 'createaddition:redstone_relay', 'createaddition:spool', 'immersiveengineering:windmill', 'immersiveengineering:windmill_blade', 'immersiveengineering:windmill_sail', 'immersiveengineering:waterwheel_segment', 'immersiveengineering:watermill', 'immersiveengineering:dynamo', 'immersiveengineering:alloybrick', 'immersiveengineering:slab_alloybrick', 'appliedenergistics2:grindstone','create:flywheel','create:furnace_engine','createaddition:furnace_burner','createaddition:crude_burner','steampowered:alternator'])

    event.add('kubejs:disabled', ['thermal:charge_bench','thermal:dynamo_gourmand', 'thermal:dynamo_stirling', 'thermal:dynamo_compression', 'thermal:dynamo_magmatic', 'thermal:dynamo_numismatic', 'thermal:dynamo_lapidary', 'thermal:dynamo_disenchantment'])

    event.add('kubejs:disabled', ['mekanism:portable_qio_dashboard', 'mekanism:qio_drive_base', 'mekanism:qio_drive_hyper_dense', 'mekanism:qio_drive_time_dilating', 'mekanism:qio_drive_supermassive', 'mekanism:qio_drive_array', 'mekanism:qio_dashboard', 'mekanism:qio_importer', 'mekanism:qio_exporter', 'mekanism:qio_redstone_adapter','mekanismgenerators:heat_generator'])

    event.add('kubejs:disabled', ['endless:neutron_compressor','extendedcrafting:compressor','endless:neutronium_collector','endless:dense_neutronium_collector','endless:denser_neutronium_collector','endless:densest_neutronium_collector'])

    event.add('kubejs:disabled', ['extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot','extendedcrafting:crystaltine_ingot',  'extendedcrafting:black_iron_slate', 'extendedcrafting:basic_catalyst', 'extendedcrafting:advanced_catalyst', 'extendedcrafting:elite_catalyst', 'extendedcrafting:ultimate_catalyst', 'extendedcrafting:redstone_catalyst', 'extendedcrafting:ender_catalyst', 'extendedcrafting:enhanced_ender_catalyst', 'extendedcrafting:crystaltine_catalyst', 'extendedcrafting:the_ultimate_catalyst', 'extendedcrafting:basic_component', 'extendedcrafting:advanced_component', 'extendedcrafting:elite_component', 'extendedcrafting:ultimate_component', 'extendedcrafting:redstone_component', 'extendedcrafting:ender_component', 'extendedcrafting:enhanced_ender_component', 'extendedcrafting:crystaltine_component', 'extendedcrafting:the_ultimate_component', 'extendedcrafting:frame','extendedcrafting:enhanced_ender_ingot'])
})
onEvent('item.tags', event => {
    let materials = ['iron','gold','copper','silver','lead','nickel','uranium','aluminum','osmium','tin','zinc']
    for (let i of materials) {
        event.add(`create:crushed_ores/${i}`, `create:crushed_${i}_ore`)
    }
})
onEvent('block.tags', event => {
    event.add('notreepunching:always_breakable', 'minecraft:snow')
})