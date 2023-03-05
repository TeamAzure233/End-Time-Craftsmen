onEvent('player.logged_in', event => {
    let player = event.player;
    let server = event.server;
    player.tell("§b欢迎您游玩末世工匠整合包！")
    player.tell("§b记得多看任务书")
    player.tell("§b初次游玩建议先看整合包手册§6（末世生存指南）§b以了解游戏机制")
    player.tell("§b玩得开心！")
    player.tell("§b我们的官网：§9https://teamazure.rth1.one/#/")
    if (!player.stages.has('starting_items')) {
      player.stages.add('starting_items')
      server.runCommandSilent(`xp set "${event.player.name}" 10 levels`)
      player.give(Item.of('akashictome:tome', '{"akashictome:data":{tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:"armor.plate_chestplate"}}}},astralsorcery:{id:"astralsorcery:tome",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},immersiveengineering:{id:"immersiveengineering:manual",Count:1b},woot:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"woot:wootguide"}},mahoutsukai:{id:"mahoutsukai:guidebook",Count:1b},extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},modularrouters:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"modularrouters:book"}},botania:{id:"botania:lexicon",Count:1b},bloodmagic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bloodmagic:guide"}},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"patchouli:edtc_guide"}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},croptopia:{id:"croptopia:guide",Count:1b},parcool:{id:"parcool:parcool_guide",Count:1b}}}'))
      player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:edtc_guide"}'))
      player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:the_dawn_project"}'))
      player.give('solpotato:food_book')
      player.give('sereneseasons:calendar')
      player.give('ftbquests:book')
      player.give('pouchofunknown:pouch')
      server.runCommandSilent(`gamerule keepInventory true`)
      server.runCommandSilent(`gamerule doTraderSpawning false`)
      player.tell("§9[System]§bbi~bi~检测到您是第一次进入游戏~")
      player.tell("§9[System]§b请打开任务书，进入序章，跟随任务的指引开始在这世界上的生存吧~")
      player.tell("§9[System]§b祝你好运~")
      player.tell("§9[System]§b另一个提示是Endless这个Mod的，不是这个整合包的，不必注意~")
    }
    if (player.stages.has('primary_sponsor')) {
        player.tell("§9[System]§b欢迎回来，初级赞助者§2" + `"${event.player.name}"`) 
    }
    if (player.stages.has('intermediate_sponsor')) {
        player.tell("§9[System]§b欢迎回来，中级赞助者§3" + `"${event.player.name}"`) 
    }
    if (player.stages.has('advanced_sponsor')) {
        player.tell("§9[System]§b欢迎回来，高级赞助者§6" + `"${event.player.name}"`) 
    }
    if (player.stages.has('super_sponsor')) {
        player.tell("§9[System]§b欢迎回来，超级赞助者§6" + `"${event.player.name}"`) 
    }
})

onEvent('block.break', event => {
    let player = event.player;
    if (player.mainHandItem.hasTag('kubejs:banned_tools') == true && !player.creativeMode) {
        player.tell("§c这个物品只能用作合成！")
        event.cancel()
    }
})

onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:asylum_of_elves') {
        event.item.count--;
        event.server.runCommandSilent(`gamestage add "${event.player.name}" asylum_of_elves`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:asylum_of_starlight') {
        event.item.count--;
        event.server.runCommandSilent(`gamestage add "${event.player.name}" asylum_of_starlight`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:blood_star') {
        event.item.count--;
        event.server.runCommandSilent(`gamestage add "${event.player.name}" blood_wizard`)
    }
})

onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:mahou_crystal_ball') {
        event.item.count--;
        event.server.runCommandSilent(`gamestage add "${event.player.name}" mahoutsukai_all`)
    }
})

onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:hyperspace_time_broom_mk1') {
        event.server.runCommandSilent(`kill @e[type=item]`)
        event.player.tell("§b清理完成！")
    }
})

onEvent('item.right_click', event => {
    let player = event.player;
    let target = player.rayTrace(5);
    if (player.getHeldItem(event.hand) == 'gofish:can_dirty') {
        if (target.block.id == 'minecraft:water') {
            player.setHeldItem(event.hand, Item.of('gofish:can_dirty', (event.player.getHeldItem(event.hand).count - 1)))
            player.giveInHand('gofish:can_empty')
        }
    }
})

onEvent('item.right_click', event =>{
    if (event.item.id == 'kubejs:infection_medicine_infuser') {
        event.player.statusMessage = `注射中……（这真的是注射）`;
    }
})
onEvent('item.food_eaten', event =>{
    if (event.item.id == 'kubejs:infection_medicine_infuser') {
        event.player.statusMessage = `注射完成！`;
        event.player.give("kubejs:empty_infection_medicine_infuser");
        event.server.runCommandSilent(`effect clear "${event.player.name}" hordes:infected`);
    }
})

onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:blood_imprinting') {
        event.item.count--;
        event.server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials-blood_moon`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:luck_imprinting') {
        event.item.count--;
        event.server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials-blue_moon`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:harvest_imprinting') {
        event.item.count--;
        event.server.runCommandSilent(`enhancedcelestials setLunarEvent enhancedcelestials-harvest_moon`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:zombie_totem') {
        event.item.count--;
        event.player.runCommandSilent(`startHordeEvent 6000`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:zombie_retreat_order') {
        event.item.count--;
        event.player.runCommandSilent(`stopHordeEvent`)
    }
})

onEvent('item.entity_interact', event => {
    if (event.target.type == 'minecraft:villager' && event.player.getHeldItem(event.hand) == 'botania:rune_greed'){
        event.player.mainHandItem.count-=1
        event.target.kill()
        var trader = event.world.createEntity('minecraft:wandering_trader');
        trader.setPosition(event.target.x, event.target.y, event.target.z);
        trader.spawn();
        event.player.tell("§9[神秘的力量]§2村民吸收了贪婪符文的力量，变成了流浪商人！")
    }
})
