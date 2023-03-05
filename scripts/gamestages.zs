import mods.gamestages.StageHelper;
import mods.itemstages.ItemStages;
import mods.dimstages.DimensionStages;
import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageAdded;

CTEventManager.register<GameStageAdded>((event) => {
    if (event.stage == "getting_start") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§egetting_start§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n开始复兴人类文明的大业\n§8——————————————————————————————");
    }
    if (event.stage == "useful_things") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§euseful_things§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n制作一些实用物品\n§8——————————————————————————————");
    }

    if (event.stage == "tinker_start") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§etinker_start§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n制造武器、工具\n§8——————————————————————————————");
    }
    if (event.stage == "melting") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§emelting§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n在匠魂的炉中熔炼矿石\n制作更多的武器、工具\n§8——————————————————————————————");
    }

    if (event.stage == "create_start") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ecreate_start§b！\n恭喜步入机械时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n玩机械\n消耗自己肝的寿命（不是\n§8——————————————————————————————");
    }
    if (event.stage == "create_andesite") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ecreate_andesite§b！\n恭喜步入安山时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n玩更多的机械\n§8——————————————————————————————");
    }
    if (event.stage == "create_brass") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ecreate_brass§b！\n恭喜步入黄铜时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n玩更多的机械\n制造载具装配站和枪械工作台从而制造载具和枪械\n§8——————————————————————————————\n§b游戏难度提升！\n+10\n§8——————————————————————————————");
    }
    if (event.stage == "create_liquid") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ecreate_liquid§b！\n恭喜步入流体时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n运用机械操纵流体\n§8——————————————————————————————");
    }
    if (event.stage == "create_steam") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ecreate_steam§b！\n恭喜步入蒸汽时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n利用蒸汽机获得更多应力\n使用损耗更小的金属齿轮\n§8——————————————————————————————");
    }
    if (event.stage == "electricity_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eelectricity_era§b！\n恭喜步入电力时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n实现应力与电力间的相互转化\n玩机器\n§8——————————————————————————————\n§b游戏难度提升！\n+10\n§8——————————————————————————————");
    }
    if (event.stage == "integration_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eintegration_era§b！\n恭喜步入集成时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n制造便携易用的单方块机器\n§8——————————————————————————————\n§8——————————————————————————————");
    }
    if (event.stage == "digital_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§edigital_era§b！\n恭喜步入数字时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n使用ME网络存储大量物品\n更方便的自动化\n§8——————————————————————————————");
    }
    if (event.stage == "chromatic_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§echromatic_era§b！\n恭喜步入异彩时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n进一步消耗自己肝的寿命（不是\n§8——————————————————————————————");
    }
    if (event.stage == "industrial_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eindustrial_era§b！\n恭喜步入工业时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n玩更多的机器\n能飞（指喷气背包\n再进一步消耗自己肝的寿命（不是\n§8——————————————————————————————\n§b游戏难度提升！\n280-->320\n§8——————————————————————————————");
    }
    if (event.stage == "atomic_era") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eatomic_era§b！\n恭喜步入原子时代~\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n利用原子能来产生更多的电力\n打造更强大的工具、武器、装备甚至近乎无敌\n§8——————————————————————————————\n§b游戏难度提升！\n300-->480\n§8——————————————————————————————");
    }

    if (event.stage == "asylum_of_elves") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§easylum_of_elves§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n进入下界\n§8——————————————————————————————");
    }
    if (event.stage == "the_nether") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ethe_nether§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n迎战凋灵\n探索下界要塞\n§8——————————————————————————————\n§b游戏难度提升！\n+20\n§8——————————————————————————————");
    }
    if (event.stage == "wither_killer") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ewither_killer§b！\n恭喜击杀凋灵！\n§8——————————————————————————————\n§b游戏难度提升！\n+80\n§8——————————————————————————————");
    }
    if (event.stage == "asylum_of_starlight") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§easylum_of_starlight§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n进入末地\n§8——————————————————————————————");
    }
    if (event.stage == "the_end") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ethe_end§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n迎战末影龙\n§b游戏难度提升！\n+20\n§8——————————————————————————————\n");
    }
    if (event.stage == "dragon_killer") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§edragon_killer§b！\n恭喜击杀末影龙！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n探索末地城\n§8——————————————————————————————\n§b游戏难度提升！\n+120\n§8——————————————————————————————");
    }

    if (event.stage == "botania") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ebotania§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n利用自然的力量改变世界\n§8——————————————————————————————");
    }
    if (event.stage == "gaia_killer") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§egaia_killer§b！\n恭喜击杀盖亚守护者！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n挖掘星辉魔法的矿物\n§8——————————————————————————————\n§b游戏难度提升！\n+20\n§8——————————————————————————————");
    }
    if (event.stage == "astralsorcery") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eastralsorcery§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n利用星座的力量改变世界\n§8——————————————————————————————");
    }
    if (event.stage == "blood_wizard") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eblood_wizard§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n掌控血腥中的魔力\n§8——————————————————————————————");
    }

    if (event.stage == "mahoutsukai_all") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§emahoutsukai_all§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n使用魔法使Mod中的所有魔法\n§8——————————————————————————————");
    }

    if (event.stage == "infinite") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§einfinite§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n制作水晶矩阵锭、中子锭、无尽锭\n使用终极工作台\n§8——————————————————————————————\n§b游戏难度提升！\n+100\n§8——————————————————————————————");
    }
    if (event.stage == "owner_of_infinity") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§eowner_of_infinity§b！\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n可以利用无尽的力量\n§8——————————————————————————————\n§b游戏难度提升！\n+40\n§8——————————————————————————————");
    }
    if (event.stage == "the_last_dream") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ethe_last_dream§b！\n结束了？\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n制作创造物品\n§8——————————————————————————————\n§b游戏难度提升！\n+40\n§8——————————————————————————————");
    }
    if (event.stage == "wake_up") {
        event.player.sendMessage("§8——————————————————————————————\n§b你获得了游戏阶段：§ewake_up§b！\n结束了。\n§8——————————————————————————————\n§6你现在可以§7（包括但不限于）§b：\n§k1145141919810\n§8——————————————————————————————");
    }
});

DimensionStages.stageDimensionWithMessage("minecraft:the_nether", "你需要获得精灵的庇护才能进入下界！", "asylum_of_elves");
DimensionStages.stageDimensionWithMessage("minecraft:the_end", "你需要获得星光的庇护才能进入末地！", "asylum_of_starlight");

ItemStages.restrict(<tag:items:tconstruct:tables>, "tinker_start")
.restrict(<item:tconstruct:part_chest>)
.restrict(<item:tconstruct:tinkers_chest>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:astralsorcery:aquamarine>, "gaia_killer")
.restrict(<item:astralsorcery:rock_crystal>)
.restrict(<item:astralsorcery:rock_crystal_ore>)
.restrict(<item:astralsorcery:aquamarine_sand_ore>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:mahoutsukai:dagger>, "mahoutsukai_all").setHiddenInJEI(false);

ItemStages.restrict(<item:bloodmagic:altar>, "blood_wizard")
.restrict(<item:bloodmagic:soulforge>)
.restrict(<item:bloodmagic:demoncrucible>)
.restrict(<item:bloodmagic:alchemytable>)
.restrict(<item:bloodmagic:incensealtar>)
.restrict(<item:bloodmagic:sacrificialdagger>)
.restrict(<item:bloodmagic:alchemicalreactionchamber>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:create:water_wheel>,"create_start")
.restrict(<item:create:nozzle>)
.restrict(<item:create:turntable>)
.restrict(<item:create:chute>)
.restrict(<item:create:shaft>)
.restrict(<item:create:belt_connector>)
.restrict(<item:create:large_cogwheel>)
.restrict(<item:create:cogwheel>)
.restrict(<item:create:hand_crank>)
.restrict(<item:pipez:item_pipe>)
.restrict(<item:create:andesite_funnel>)
.restrict(<item:create:andesite_tunnel>)
.restrict(<item:create:windmill_bearing>)
.restrict(<item:create:white_sail>)
.restrict(<item:create:sail_frame>)
.restrict(<item:create:wrench>)
.restrict(<item:create:metal_bracket>)
.restrict(<item:create:wooden_bracket>)
.restrict(<item:create:goggles>)
.restrict(<item:kubejs:kinetic_mechanism>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:create:brass_nugget>,"create_andesite")
.restrict(<tag:items:forge:plates/brass>)
.restrict(<tag:items:forge:ingots/brass>)
.restrict(<tag:items:forge:storage_blocks/brass>)
.restrict(<item:thermal:saw_blade>)
.restrict(<item:thermal:drill_head>)
.restrict(<item:kubejs:plough>)
.restrict(<item:kubejs:rake>)
.restrict(<item:create:propeller>)
.restrict(<item:create:whisk>)
.restrict(<item:create:brass_hand>)
.restrict(<item:create:electron_tube>)
.restrict(<item:create:polished_rose_quartz>)
.restrict(<item:create:rose_quartz>)
.restrict(<item:kubejs:crushed_rose_quartz>)
.restrict(<item:kubejs:raw_andesite_alloy>)
.restrict(<item:kubejs:blaze_brass>)
.restrict(<item:kubejs:blaze_brass_block>)
.restrict(<item:kubejs:gel>)
.restrict(<item:kubejs:compressed_andesite>)
.restrict(<item:kubejs:rose_quartz_block>)
.restrict(<item:create:sticky_mechanical_piston>)
.restrict(<item:create:piston_extension_pole>)
.restrict(<item:create:andesite_casing>)
.restrict(<item:create:gearbox>)
.restrict(<item:create:vertical_gearbox>)
.restrict(<item:create:clutch>)
.restrict(<item:create:gearshift>)
.restrict(<item:create:encased_chain_drive>)
.restrict(<item:create:adjustable_chain_gearshift>)
.restrict(<item:create:mechanical_piston>)
.restrict(<item:create:weighted_ejector>)
.restrict(<item:create:blaze_burner>)
.restrict(<item:create:empty_blaze_burner>)
.restrict(<item:create:filter>)
.restrict(<item:create:attribute_filter>)
.restrict(<item:create:brass_funnel>)
.restrict(<item:create:brass_tunnel>)
.restrict(<item:create:depot>)
.restrict(<item:create:basin>)
.restrict(<item:create:rope_pulley>)
.restrict(<item:create:mechanical_bearing>)
.restrict(<item:create:gantry_shaft>)
.restrict(<item:create:gantry_carriage>)
.restrict(<item:kubejs:liquid_mechanism>)
.restrict(<item:create:precision_mechanism>)
.restrict(<item:kubejs:kinetic_mechanical_box>)
.restrict(<tag:items:kubejs:andesite_machine>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:create:extendo_grip>,"create_brass")
.restrict(<item:create:potato_cannon>)
.restrict(<item:create:copper_backtank>)
.restrict(<item:create:crushing_wheel>)
.restrict(<item:create:clockwork_bearing>)
.restrict(<item:create:brass_casing>)
.restrict(<item:create:blaze_cake>)
.restrict(<item:kubejs:steam_mechanism>)
.restrict(<item:kubejs:precision_mechanical_box>)
.restrict(<tag:items:kubejs:brass_machine>)
.restrict(<tag:items:forge:plates/bronze>)
.restrict(<tag:items:forge:ingots/bronze>)
.restrict(<tag:items:forge:storage_blocks/bronze>)
.restrict(<tag:items:forge:plates/cast_iron>)
.restrict(<tag:items:forge:ingots/cast_iron>)
.restrict(<tag:items:forge:storage_blocks/cast_iron>)
.restrict(<tag:items:forge:ingots/steel>)
.restrict(<tag:items:forge:plates/steel>)
.restrict(<tag:items:forge:storage_blocks/steel>)
.restrict(<item:steampowered:bronze_large_cogwheel>)
.restrict(<item:steampowered:bronze_cogwheel>)
.restrict(<item:kubejs:scorched_alloy>)
.restrict(<item:kubejs:seared_alloy>)
.setHiddenInJEI(false);

ItemStages.restrict(<tag:items:create:valve_handles>,"create_liquid")
.restrict(<item:create:fluid_pipe>)
.restrict(<item:create:fluid_tank>)
.restrict(<item:create:copper_casing>)
.restrict(<item:kubejs:liquid_mechanical_box>)
.restrict(<item:kubejs:steam_mechanism>)
.restrict(<tag:items:kubejs:liquid_machine>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:kubejs:electricity_mechanism>,"create_steam")
.restrict(<item:kubejs:bronze_casing>)
.restrict(<item:kubejs:cast_iron_casing>)
.restrict(<item:kubejs:steel_casing>)
.restrict(<item:kubejs:steam_mechanical_box_mk1>)
.restrict(<item:kubejs:steam_mechanical_box_mk2>)
.restrict(<item:kubejs:steam_mechanical_box_mk3>)
.restrict(<tag:items:kubejs:steam_machine>)
.restrict(<item:steampowered:cast_iron_cogwheel>)
.restrict(<item:steampowered:cast_iron_large_cogwheel>)
.restrict(<item:steampowered:steel_cogwheel>)
.restrict(<item:steampowered:steel_large_cogwheel>)
.restrict(<item:steampowered:pressurized_gas_container>)
.restrict(<item:steampowered:pressurized_steam_container>)
.setHiddenInJEI(false);

ItemStages.restrict(<tag:items:kubejs:electricity_machine>,"electricity_era")
.restrict(<item:immersiveengineering:light_engineering>)
.restrict(<item:immersiveengineering:heavy_engineering>)
.restrict(<item:immersiveengineering:rs_engineering>)
.restrict(<item:mekanism:cardboard_box>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:kubejs:chorus_chrome>,"integration_era")
.restrict(<item:kubejs:core_hollow>)
.restrict(<item:kubejs:core_desolate>)
.restrict(<item:kubejs:fragments>)
.restrict(<item:kubejs:ether_drop>)
.restrict(<item:kubejs:chorus_crystal>)
.restrict(<item:kubejs:ether_essence>)
.restrict(<tag:items:kubejs:integration_machine>)
.restrict(<item:create:chromatic_compound>)
.restrict(<item:create:shadow_steel>)
.restrict(<item:create:refined_radiance>)
.restrict(<item:create:shadow_steel_casing>)
.restrict(<item:create:refined_radiance_casing>)
.restrict(<item:createaddition:overcharged_alloy>)
.restrict(<item:createaddition:overcharged_casing>)
.restrict(<item:createaddition:overcharged_hammer>)
.restrict(<item:kubejs:chromatic_compound_block>)
.restrict(<item:kubejs:shadow_steel_block>)
.restrict(<item:kubejs:refined_radiance_block>)
.restrict(<item:kubejs:overcharged_alloy_block>)
.restrict(<item:kubejs:chromatic_mechanism>)
.restrict(<item:kubejs:empty_timeinabottle>)
.restrict(<item:tiab:timeinabottle>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:appliedenergistics2:2_cubed_spatial_cell_component>,"digital_era")
.restrict(<item:appliedenergistics2:16_cubed_spatial_cell_component>)
.restrict(<item:appliedenergistics2:128_cubed_spatial_cell_component>)
.restrict(<item:appliedenergistics2:spatial_anchor>)
.restrict(<item:appliedenergistics2:16k_crafting_storage>)
.restrict(<item:appliedenergistics2:64k_crafting_storage>)
.restrict(<item:appliedenergistics2:crafting_monitor>)
.restrict(<item:appliedenergistics2:molecular_assembler>)
.restrict(<item:appliedenergistics2:inscriber>)
.restrict(<item:appliedenergistics2:wireless_access_point>)
.restrict(<item:appliedenergistics2:charger>)
.restrict(<item:appliedenergistics2:security_station>)
.restrict(<item:appliedenergistics2:quantum_ring>)
.restrict(<item:appliedenergistics2:quantum_link>)
.restrict(<item:appliedenergistics2:spatial_pylon>)
.restrict(<item:appliedenergistics2:spatial_io_port>)
.restrict(<item:appliedenergistics2:controller>)
.restrict(<item:appliedenergistics2:drive>)
.restrict(<item:appliedenergistics2:chest>)
.restrict(<item:appliedenergistics2:interface>)
.restrict(<item:appliedenergistics2:fluid_interface>)
.restrict(<item:appliedenergistics2:cell_workbench>)
.restrict(<item:appliedenergistics2:io_port>)
.restrict(<item:appliedenergistics2:condenser>)
.restrict(<item:appliedenergistics2:energy_acceptor>)
.restrict(<item:appliedenergistics2:vibration_chamber>)
.restrict(<item:appliedenergistics2:quartz_growth_accelerator>)
.restrict(<item:appliedenergistics2:energy_cell>)
.restrict(<item:appliedenergistics2:dense_energy_cell>)
.restrict(<item:appliedenergistics2:crafting_unit>)
.restrict(<item:appliedenergistics2:crafting_accelerator>)
.restrict(<item:appliedenergistics2:1k_crafting_storage>)
.restrict(<item:appliedenergistics2:4k_crafting_storage>)
.restrict(<item:appliedenergistics2:1k_fluid_cell_component>)
.restrict(<item:appliedenergistics2:4k_fluid_cell_component>)
.restrict(<item:appliedenergistics2:16k_fluid_cell_component>)
.restrict(<item:appliedenergistics2:64k_fluid_cell_component>)
.restrict(<item:appliedenergistics2:entropy_manipulator>)
.restrict(<item:appliedenergistics2:wireless_terminal>)
.restrict(<item:appliedenergistics2:charged_staff>)
.restrict(<item:appliedenergistics2:fluix_pearl>)
.restrict(<item:appliedenergistics2:basic_card>)
.restrict(<item:appliedenergistics2:advanced_card>)
.restrict(<item:appliedenergistics2:1k_cell_component>)
.restrict(<item:appliedenergistics2:16k_cell_component>)
.restrict(<item:appliedenergistics2:64k_cell_component>)
.restrict(<item:appliedenergistics2:empty_storage_cell>)
.restrict(<item:appliedenergistics2:redstone_card>)
.restrict(<item:appliedenergistics2:speed_card>)
.restrict(<item:appliedenergistics2:capacity_card>)
.restrict(<item:appliedenergistics2:fuzzy_card>)
.restrict(<item:appliedenergistics2:inverter_card>)
.restrict(<item:appliedenergistics2:crafting_card>)
.restrict(<item:appliedenergistics2:printed_calculation_processor>)
.restrict(<item:appliedenergistics2:printed_engineering_processor>)
.restrict(<item:appliedenergistics2:printed_logic_processor>)
.restrict(<item:appliedenergistics2:printed_silicon>)
.restrict(<item:appliedenergistics2:logic_processor>)
.restrict(<item:appliedenergistics2:calculation_processor>)
.restrict(<item:appliedenergistics2:engineering_processor>)
.restrict(<item:appliedenergistics2:4k_cell_component>)
.restrict(<item:appliedenergistics2:blank_pattern>)
.restrict(<item:appliedenergistics2:singularity>)
.restrict(<item:appliedenergistics2:quantum_entangled_singularity>)
.restrict(<item:appliedenergistics2:annihilation_core>)
.restrict(<item:appliedenergistics2:formation_core>)
.restrict(<item:appliedenergistics2:wireless_booster>)
.restrict(<item:appliedenergistics2:wireless_receiver>)
.restrict(<item:appliedenergistics2:memory_card>)
.restrict(<item:appliedenergistics2:biometric_card>)
.restrict(<item:appliedenergistics2:color_applicator>)
.restrict(<item:appliedenergistics2:16k_portable_cell>)
.restrict(<item:appliedenergistics2:64k_portable_cell>)
.restrict(<item:appliedenergistics2:portable_cell>)
.restrict(<item:appliedenergistics2:4k_portable_cell>)
.restrict(<item:appliedenergistics2:matter_cannon>)
.restrict(<item:appliedenergistics2:network_tool>)
.restrict(<item:appliedenergistics2:view_cell>)
.restrict(<item:appliedenergistics2:1k_storage_cell>)
.restrict(<item:appliedenergistics2:4k_storage_cell>)
.restrict(<item:appliedenergistics2:16k_storage_cell>)
.restrict(<item:appliedenergistics2:64k_storage_cell>)
.restrict(<item:appliedenergistics2:1k_fluid_storage_cell>)
.restrict(<item:appliedenergistics2:4k_fluid_storage_cell>)
.restrict(<item:appliedenergistics2:encoded_pattern>)
.restrict(<item:appliedenergistics2:128_cubed_spatial_storage_cell>)
.restrict(<item:appliedenergistics2:16_cubed_spatial_storage_cell>)
.restrict(<item:appliedenergistics2:2_cubed_spatial_storage_cell>)
.restrict(<item:appliedenergistics2:64k_fluid_storage_cell>)
.restrict(<item:appliedenergistics2:16k_fluid_storage_cell>)
.restrict(<item:appliedenergistics2:fe_p2p_tunnel>)
.restrict(<item:appliedenergistics2:light_p2p_tunnel>)
.restrict(<item:appliedenergistics2:interface_terminal>)
.restrict(<item:appliedenergistics2:fluid_terminal>)
.restrict(<item:appliedenergistics2:cable_energy_acceptor>)
.restrict(<item:appliedenergistics2:redstone_p2p_tunnel>)
.restrict(<item:appliedenergistics2:item_p2p_tunnel>)
.restrict(<item:appliedenergistics2:fluid_p2p_tunnel>)
.restrict(<item:appliedenergistics2:toggle_bus>)
.restrict(<item:appliedenergistics2:inverted_toggle_bus>)
.restrict(<item:appliedenergistics2:cable_anchor>)
.restrict(<item:appliedenergistics2:monitor>)
.restrict(<item:appliedenergistics2:semi_dark_monitor>)
.restrict(<item:appliedenergistics2:dark_monitor>)
.restrict(<item:appliedenergistics2:storage_bus>)
.restrict(<item:appliedenergistics2:fluid_storage_bus>)
.restrict(<item:appliedenergistics2:import_bus>)
.restrict(<item:appliedenergistics2:fluid_import_bus>)
.restrict(<item:appliedenergistics2:export_bus>)
.restrict(<item:appliedenergistics2:fluid_export_bus>)
.restrict(<item:appliedenergistics2:level_emitter>)
.restrict(<item:appliedenergistics2:fluid_level_emitter>)
.restrict(<item:appliedenergistics2:annihilation_plane>)
.restrict(<item:appliedenergistics2:identity_annihilation_plane>)
.restrict(<item:appliedenergistics2:fluid_annihilation_plane>)
.restrict(<item:appliedenergistics2:formation_plane>)
.restrict(<item:appliedenergistics2:fluid_formation_plane>)
.restrict(<item:appliedenergistics2:pattern_terminal>)
.restrict(<item:appliedenergistics2:crafting_terminal>)
.restrict(<item:appliedenergistics2:terminal>)
.restrict(<item:appliedenergistics2:storage_monitor>)
.restrict(<item:appliedenergistics2:conversion_monitor>)
.restrict(<item:appliedenergistics2:cable_interface>)
.restrict(<item:appliedenergistics2:cable_fluid_interface>)
.restrict(<item:appliedenergistics2:me_p2p_tunnel>)
.restrict(<tag:items:appliedenergistics2:smart_cable>)
.restrict(<tag:items:appliedenergistics2:covered_cable>)
.restrict(<tag:items:appliedenergistics2:glass_cable>)
.restrict(<tag:items:appliedenergistics2:covered_dense_cable>)
.restrict(<tag:items:appliedenergistics2:smart_dense_cable>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:mekanismgenerators:advanced_solar_generator>,"industrial_era")
.restrict(<item:mekanismgenerators:gas_burning_generator>)
.restrict(<item:mekanismgenerators:solar_generator>)
.restrict(<item:mekanismgenerators:turbine_rotor>)
.restrict(<item:mekanismgenerators:turbine_blade>)
.restrict(<item:mekanismgenerators:solar_panel>)
.restrict(<item:mekanismgenerators:saturating_condenser>)
.restrict(<item:mekanismgenerators:turbine_vent>)
.restrict(<item:mekanismgenerators:turbine_valve>)
.restrict(<item:mekanismgenerators:turbine_casing>)
.restrict(<item:mekanismgenerators:electromagnetic_coil>)
.restrict(<item:mekanismgenerators:rotational_complex>)
.setHiddenInJEI(false);

ItemStages.restrict(<tag:items:kubejs:restrict_mek>, "industrial_era")
.restrict(<tag:items:kubejs:chromatic_machine>)
.restrict(<tag:items:kubejs:mek_factory>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:mekanism:radioactive_waste_barrel>, "atomic_era")
.restrict(<item:mekanism:modification_station>)
.restrict(<item:mekanism:solar_neutron_activator>)
.restrict(<item:mekanism:supercharged_coil>)
.restrict(<item:mekanism:sps_casing>)
.restrict(<item:mekanism:sps_port>)
.restrict(<item:mekanismgenerators:fusion_reactor_controller>)
.restrict(<item:mekanismgenerators:fusion_reactor_frame>)
.restrict(<item:mekanismgenerators:fusion_reactor_port>)
.restrict(<item:mekanismgenerators:fusion_reactor_logic_adapter>)
.restrict(<item:mekanismgenerators:fission_reactor_casing>)
.restrict(<item:mekanism:laser>)
.restrict(<item:mekanism:laser_amplifier>)
.restrict(<item:mekanism:laser_tractor_beam>)
.restrict(<item:mekanismgenerators:hohlraum>)
.restrict(<item:mekanismgenerators:control_rod_assembly>)
.restrict(<item:mekanismgenerators:fission_fuel_assembly>)
.restrict(<item:mekanismgenerators:fission_reactor_logic_adapter>)
.restrict(<item:mekanismgenerators:fission_reactor_port>)
.restrict(<item:mekanismgenerators:laser_focus_matrix>)
.restrict(<item:mekanismgenerators:reactor_glass>)
.restrict(<item:mekanism:antiprotonic_nucleosynthesizer>)
.restrict(<item:mekanismgenerators:module_geothermal_generator_unit>)
.restrict(<item:mekanism:hazmat_mask>)
.restrict(<item:mekanism:hazmat_gown>)
.restrict(<item:mekanism:hazmat_pants>)
.restrict(<item:mekanism:hazmat_boots>)
.restrict(<item:mekanism:isotopic_centrifuge>)
.restrict(<item:kubejs:meka_plate>)
.restrict(<item:mekanism:mekasuit_boots>)
.restrict(<item:mekanism:mekasuit_pants>)
.restrict(<item:mekanism:mekasuit_bodyarmor>)
.restrict(<item:mekanism:mekasuit_helmet>)
.restrict(<tag:items:kubejs:meka_module>)
.restrict(<item:mekanism:meka_tool>)
.restrict(<item:mekanismgenerators:deuterium_bucket>)
.restrict(<item:mekanismgenerators:fusion_fuel_bucket>)
.restrict(<item:mekanismgenerators:tritium_bucket>)
.restrict(<item:mekanism:pellet_antimatter>)
.restrict(<item:mekanism:pellet_plutonium>)
.restrict(<item:mekanism:pellet_polonium>)
.restrict(<item:mekanism:reprocessed_fissile_fragment>)
.restrict(<item:compactvoidminers:void_pump>)
.restrict(<item:compactvoidminers:void_miner>)
.restrict(<item:endless:diamond_lattice>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:tconstruct:seared_ingot_gauge>,"melting")
.restrict(<item:tconstruct:seared_fuel_gauge>)
.restrict(<item:tconstruct:seared_ingot_tank>)
.restrict(<item:tconstruct:seared_fuel_tank>)
.restrict(<item:tconstruct:seared_table>)
.restrict(<item:tconstruct:seared_basin>)
.restrict(<item:tconstruct:seared_channel>)
.restrict(<item:tconstruct:seared_faucet>)
.restrict(<item:tconstruct:smeltery_controller>)
.restrict(<item:tconstruct:foundry_controller>)
.restrict(<item:tconstruct:scorched_alloyer>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:extendedcrafting:compressor>,"infinite")
.restrict(<item:extendedcrafting:ultimate_singularity>)
.restrict(<item:extendedcrafting:singularity>)
.restrict(<item:endless:infinity_block>)
.restrict(<item:endless:infinity_catalyst>)
.restrict(<item:endless:endest_pearl>)
.restrict(<item:endless:neutronium_ingot>)
.restrict(<item:endless:neutronium_nugget>)
.restrict(<item:endless:neutronium_pile>)
.restrict(<item:endless:crystal_matrix_ingot>)
.restrict(<item:endless:infinity_nugget>)
.restrict(<item:endless:neutronium_gear>)
.restrict(<item:endless:infinity_ingot>)
.restrict(<item:endless:ultimate_stew>)
.restrict(<item:endless:cosmic_meatballs>)
.restrict(<item:endless:skullfire_sword>)
.restrict(<item:endless:extreme_crafting_table>)
.restrict(<item:endless:neutronium_block>)
.restrict(<item:endless:crystal_matrix_block>)
.restrict(<item:endless:infinity_boots>)
.restrict(<item:endless:infinity_leggings>)
.restrict(<item:endless:infinity_chestplate>)
.restrict(<item:projecte:alchemical_coal_block>)
.restrict(<item:projecte:mobius_fuel_block>)
.restrict(<item:projecte:aeternalis_fuel_block>)
.restrict(<item:projecte:collector_mk1>)
.restrict(<item:projecte:collector_mk2>)
.restrict(<item:projecte:collector_mk3>)
.restrict(<item:projecte:condenser_mk1>)
.restrict(<item:projecte:condenser_mk2>)
.restrict(<item:projecte:dm_pedestal>)
.restrict(<item:projecte:dm_furnace>)
.restrict(<item:projecte:rm_furnace>)
.restrict(<item:projecte:dm_pick>)
.restrict(<item:projecte:rm_pick>)
.restrict(<item:projecte:dark_matter_block>)
.restrict(<item:projecte:red_matter_block>)
.restrict(<item:projecte:interdiction_torch>)
.restrict(<item:projecte:nova_catalyst>)
.restrict(<item:projecte:nova_cataclysm>)
.restrict(<item:projecte:transmutation_table>)
.restrict(<item:projecte:relay_mk1>)
.restrict(<item:projecte:relay_mk2>)
.restrict(<item:projecte:relay_mk3>)
.restrict(<item:projecte:philosophers_stone>)
.restrict(<tag:items:curios:klein_star>)
.restrict(<item:projecte:alchemical_coal>)
.restrict(<item:projecte:mobius_fuel>)
.restrict(<item:projecte:aeternalis_fuel>)
.restrict(<item:projecte:dark_matter>)
.restrict(<item:projecte:red_matter>)
.restrict(<item:projecte:hyperkinetic_lens>)
.restrict(<item:projecte:catalytic_lens>)
.restrict(<item:projecte:evertide_amulet>)
.restrict(<item:projecte:volcanite_amulet>)
.restrict(<item:projecte:watch_of_flowing_time>)
.restrict(<item:projecte:repair_talisman>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:kubejs:infinite_evidence>,"owner_of_infinity")
.restrict(<item:endless:infinity_sword>)
.restrict(<item:endless:infinity_hoe>)
.restrict(<item:endless:infinity_shovel>)
.restrict(<item:endless:infinity_axe>)
.restrict(<item:endless:infinity_pickaxe>)
.restrict(<item:endless:infinity_helmet>)
.restrict(<item:endless:infinity_bucket>)
.restrict(<item:endless:infinity_crossbow>)
.restrict(<item:endless:infinity_bow>)
.restrict(<item:endless:infinity_arrow>)
.restrict(<item:endless:infinity_totem>)
.setHiddenInJEI(false);

ItemStages.restrict(<item:botania:creative_pool>,"the_last_dream")
.restrict(<item:create:creative_motor>)
.restrict(<item:create:creative_fluid_tank>)
.restrict(<item:create:creative_crate>)
.restrict(<item:create:creative_blaze_cake>)
.restrict(<item:mekanism:creative_fluid_tank>)
.restrict(<item:mekanism:creative_energy_cube>)
.restrict(<item:mekanism:creative_chemical_tank>)
.restrict(<item:storagedrawers:creative_storage_upgrade>)
.restrict(<item:storagedrawers:creative_vending_upgrade>)
.restrict(<item:tconstruct:creative_slot>)
.restrict(<item:thermal:rf_coil_creative_augment>)
.restrict(<item:thermal:fluid_tank_creative_augment>)
.restrict(<item:thermal:machine_efficiency_creative_augment>)
.restrict(<item:thermal:machine_catalyst_creative_augment>)
.setHiddenInJEI(false);

ItemStages.restrict(<tag:items:kubejs:disabled>,"disabled");

mods.champions.ChampionStages.addTierStage("gaia_killer", 3);
mods.champions.ChampionStages.addTierStage("wither_killer", 5);
mods.champions.ChampionStages.addTierStage("dragon_killer", 7);