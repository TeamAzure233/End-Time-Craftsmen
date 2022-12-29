onEvent('player.logged_in', event => {
    let player = event.player;
    let server = event.server;
    player.tell("§b欢迎您游玩末世工匠整合包！")
    player.tell("§b记得多看任务书")
    player.tell("§b初次游玩建议先看整合包手册§6（末世生存指南）§b以了解游戏机制")
    player.tell("§b玩得开心！")
    player.tell("§b我们的官网：§9https://teamazure.rth1.one/#/")
    player.runCommandSilent(`/flywheel backend on`)
    if (!player.stages.has('starting_items')) {
      player.stages.add('starting_items')
      player.give(Item.of('akashictome:tome', '{"akashictome:data":{extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:"armor.plate_chestplate"}}}},botania:{id:"botania:lexicon",Count:1b},astralsorcery:{id:"astralsorcery:tome",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"patchouli:edtc_guide"}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},croptopia:{id:"croptopia:guide",Count:1b},mysticalagriculture:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"mysticalagriculture:guide"}}}}'))
      player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:edtc_guide"}'))
      player.give('solpotato:food_book')
      player.give('sereneseasons:calendar')
      player.give('ftbquests:book')
      player.give('pouchofunknown:pouch')
      server.runCommandSilent(`gamerule keepInventory true`)
      server.runCommandSilent(`gamerule keepSkills true`)
      server.runCommandSilent(`gamerule doTraderSpawning false`)
      server.runCommandSilent(`gamerule naturalRegeneration false`)
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
        event.server.runCommandSilent(`gamestage add @p asylum_of_elves`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:asylum_of_starlight') {
        event.item.count--;
        event.server.runCommandSilent(`gamestage add @p asylum_of_starlight`)
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:hyperspace_time_broom_mk1') {
        event.server.runCommandSilent(`kill @e[type=item]`)
        event.player.tell("§b清理完成！")
    }
})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:hyperspace_time_broom_mk2') {
        event.server.runCommandSilent(`difficulty peaceful`)
        event.server.runCommandSilent(`kill @e[type=item]`)
        event.server.runCommandSilent(`difficulty easy`)
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
onEvent('ftbquests.custom_reward.0909AEC1A58A8710', event => {
    event.server.runCommandSilent(`gamestage add @p wake_up`);
    event.server.runCommandSilent(`advancement grant @p only edtc:end`)
    event.server.scheduleInTicks(100, event.server, function (callback) {
        callback.data.tell('§3“曲终人散，黄粱一梦。玩家开始了新的梦境。玩家再次做起了梦，更好的梦。玩家就是宇宙。玩家就是爱。”');
        callback.data.tell('§3“你就是那个玩家。”');
        callback.data.tell('§3“该醒了。”');
        callback.data.tell('§3——终末之诗');
        callback.data.tell('§b是的，这一切都是梦');
        callback.data.tell('§b是的，结束了，该醒了……');
        event.server.runCommandSilent(`effect give @p haoyuezeughaus:nothingness 60 1`)
        event.server.runCommandSilent(`gamemode spectator @p`);
    })
})