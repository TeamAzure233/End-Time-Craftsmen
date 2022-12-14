onEvent('item.registry', event => {
    event.create('data').displayName('Data')
    event.create('hyperspace_time_broom_mk1').displayName('超时空扫帚MK1').tooltip('右键清除所有掉落物，供提升性能用')
    event.create('hyperspace_time_broom_mk2').displayName('超时空扫帚MK2').tooltip('右键清除所有掉落物和怪物，供提升性能用').glow(true)

    event.create('empty_infection_medicine_infuser').displayName('空的抗丧尸感染药剂注射器')
    event.create('infection_medicine_infuser').displayName('抗丧尸感染药剂注射器').food((food) => {food.hunger(0).saturation(0).effect('minecraft:regeneration', 100, 1, 1.0).alwaysEdible(true)})

    event.create('blood_imprinting').displayName('血腥之印记').tooltip('右键召唤血月').rarity(RARITY_UNCOMMON).glow(true)
    event.create('luck_imprinting').displayName('运势之印记').tooltip('右键召唤蓝月').rarity(RARITY_UNCOMMON).glow(true)
    event.create('harvest_imprinting').displayName('收获之印记').tooltip('右键召唤丰收月').rarity(RARITY_UNCOMMON).glow(true)
    event.create('zombie_totem').displayName('僵尸之图腾').tooltip('右键召唤丧尸袭击').rarity(RARITY_UNCOMMON).glow(true)
    event.create('zombie_retreat_order').displayName('亡灵退散之令').tooltip('右键结束丧尸袭击').rarity(RARITY_UNCOMMON).glow(true)

    event.create('andesite_alloy_nugget').displayName('安山合金粒')
    event.create('raw_andesite_alloy').displayName('生安山合金')
    event.create('gel').displayName('凝胶')
    event.create('cast_iron_nugget').displayName('铸铁粒')

    event.create('asylum_of_elves').displayName('精灵之庇护').glow(true).rarity(RARITY_UNCOMMON)
    event.create('asylum_of_starlight').displayName('星光之庇护').glow(true).rarity(RARITY_UNCOMMON)

    event.create('catalyst_star').displayName('催化之星').glow(true).rarity(RARITY_UNCOMMON)
    event.create('kinetic_mechanism').displayName('动能构件')
    event.create('liquid_mechanism').displayName('流体构件')
    event.create('steam_mechanism').displayName('蒸汽构件')
    event.create('electricity_mechanism').displayName('电气构件').rarity(RARITY_UNCOMMON)
    event.create('chromatic_mechanism').displayName('异彩构件').rarity(RARITY_UNCOMMON)    
    event.create('incomplete_kinetic_mechanism').type('create:sequenced_assembly').displayName('未完成的动能构件')
    event.create('incomplete_liquid_mechanism').type('create:sequenced_assembly').displayName('未完成的流体构件')
    event.create('incomplete_steam_mechanism').type('create:sequenced_assembly').displayName('未完成的蒸汽构件')
    event.create('incomplete_electricity_mechanism').type('create:sequenced_assembly').displayName('未完成的电气构件').rarity(RARITY_UNCOMMON)
    event.create('incomplete_chromatic_mechanism').type('create:sequenced_assembly').displayName('未完成的异彩构件').rarity(RARITY_UNCOMMON)

    event.create('rake').displayName('耙')
    event.create('plough').displayName('犁')
    event.create('rock_gen_core').displayName('造石核心')
    event.create('collect_core').displayName('收集核心')
    event.create('seared_alloy').displayName('焦黑合金')
    event.create('scorched_alloy').displayName('焦褐合金')
    event.create('blaze_brass').displayName('烈焰合金').rarity(RARITY_UNCOMMON)
    event.create('chorus_chrome').displayName('紫颂合金').glow(true).rarity(RARITY_UNCOMMON)
    event.create('core_hollow').displayName('中空核心').glow(true).rarity(RARITY_UNCOMMON)
    event.create('core_desolate').displayName('荒芜核心').glow(true).rarity(RARITY_UNCOMMON)
    event.create('ether_drop').displayName('以太之滴').glow(true).rarity(RARITY_UNCOMMON)
    event.create('fragments').displayName('未知碎片').glow(true).rarity(RARITY_UNCOMMON)
    event.create('chorus_crystal').displayName('紫颂水晶').glow(true).rarity(RARITY_UNCOMMON)
    event.create('ether_essence').displayName('以太精华').glow(true).rarity(RARITY_UNCOMMON)

    event.create('crushed_rose_quartz').displayName('玫瑰石英碎块')
    event.create('incomplete_polished_rose_quartz').type('create:sequenced_assembly').displayName('未加工的玫瑰石英')
    event.create('incomplete_biscuit_dot_zip').type('create:sequenced_assembly').displayName('未完成的压缩饼干')
    event.create('incomplete_oil_cake').type('create:sequenced_assembly').displayName('未完成的油饼')

    event.create('incomplete_universal_wrench').type('create:sequenced_assembly').displayName('未完成的万能扳手')
    event.create('incomplete_core_desolate').type('create:sequenced_assembly').displayName('未完成的荒芜核心').glow(true).rarity(RARITY_UNCOMMON)
    event.create('incomplete_core_hollow').type('create:sequenced_assembly').displayName('未完成的中空核心').glow(true).rarity(RARITY_UNCOMMON)
    event.create('incomplete_meka_plate').type('create:sequenced_assembly').displayName('未完成的Meka板').rarity(RARITY_RARE)

    event.create('empty_timeinabottle').displayName('空的时间之瓶')
    event.create('flux_tool_casing').displayName('通量工具机壳').tooltip('§6用于锻造通量工具').rarity(RARITY_UNCOMMON)
    event.create('hazmat_cloth').displayName('防辐射布料').rarity(RARITY_UNCOMMON)
    event.create('meka_plate').displayName('Meka板').rarity(RARITY_RARE)

    event.create('antimatter_alloy').displayName('反物质合金').glow(true).rarity(RARITY_EPIC)
    event.create('infinite_evidence').displayName('§6无尽之证').glow(true).rarity(RARITY_EPIC).tooltip('§6如果你做出这个，那么你就毕业了！')
    event.create('dream_mechanism').displayName('梦之构件').rarity(RARITY_EPIC)

    event.create('taz_mascot').displayName('希洛娜多').rarity(RARITY_EPIC)
    event.create('taz_dev_pigeon').displayName('TAz开发组之鸽').rarity(RARITY_EPIC)
    event.create('taz_art_pigeon').displayName('TAz美术组之鸽').rarity(RARITY_EPIC)
})