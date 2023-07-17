onEvent('ftbquests.custom_reward.495115228FCCA932', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" getting_start`)
    event.player.tell(`<${event.player.name}> 完成了一个研究后，我似乎学会了这些，但我还得花时间来研究它们的价值……`)
    event.server.runCommandSilent(`advancement grant "${event.player.name}" only edtc:pages/page0`)
    event.server.runCommandSilent(`advancement grant "${event.player.name}" only edtc:diaries/diary1`)
})

onEvent('ftbquests.custom_reward.3EE53AB5BE072617', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" tinker_start`)
})
onEvent('ftbquests.custom_reward.1E94E1F96F16EC80', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" melting`)
})

onEvent('ftbquests.custom_reward.1D8644962F822504', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" the_nether`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 20`)
})
onEvent('ftbquests.custom_reward.3BBD6AB90000552C', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" wither_killer`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 20`)
})
onEvent('ftbquests.custom_reward.75778851A6CDAE03', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" twilight_explorer`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 10`)
})
onEvent('ftbquests.custom_reward.0E86C4E961DD93AE', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" the_end`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 20`)
})
onEvent('ftbquests.custom_reward.4CE0FAEA4640D6C3', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" dragon_killer`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 80`)
})

onEvent('ftbquests.custom_reward.54592CF737C8EDB9', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" useful_things`)
})

onEvent('ftbquests.custom_reward.780DFB7C282AB16E', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" botania`)
})
onEvent('ftbquests.custom_reward.7AF4B1416927F5C5', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" gaia_killer`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 60`)
})
onEvent('ftbquests.custom_reward.68A6C780FA98434E', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" astralsorcery`)
})

onEvent('ftbquests.custom_reward.6644D4FC7F03C96A', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" create_start`)
})
onEvent('ftbquests.custom_reward.30DBDDC0F5FB5FC0', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" create_andesite`)
})
onEvent('ftbquests.custom_reward.1D5D8165BBA7C571', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" create_brass`)
})
onEvent('ftbquests.custom_reward.5B15E04A208A0785', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" create_liquid`)
})
onEvent('ftbquests.custom_reward.50B68496D1A6632B', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" create_steam`)
})

onEvent('ftbquests.custom_reward.7F706E1EED3CE67C', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" electricity_era`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 10`)
})
onEvent('ftbquests.custom_reward.08CB055795081BF6', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" integration_era`)
})
onEvent('ftbquests.custom_reward.27EFC6276338B608', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" digital_era`)
})
onEvent('ftbquests.custom_reward.3338004A87E298CC', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" industrial_era`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 80`)
})
onEvent('ftbquests.custom_reward.696DF930A158EC44', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" atomic_era`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 100`)
})

onEvent('ftbquests.custom_reward.7B7F335A9EA1D772', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" infinite`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 100`)
})
onEvent('ftbquests.custom_reward.40269E85F5A89F1D', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" owner_of_infinity`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 40`)
})
onEvent('ftbquests.custom_reward.7A201D8F3391CDB7', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" the_last_dream`)
    event.server.runCommandSilent(`sh_difficulty add "${event.player.name}" 40`)
})

onEvent('ftbquests.custom_reward.0909AEC1A58A8710', event => {
    event.server.runCommandSilent(`gamestage add "${event.player.name}" wake_up`);
    event.server.runCommandSilent(`advancement grant "${event.player.name}" only edtc:end`)
    event.server.scheduleInTicks(100, event.server, function (callback) {
        callback.data.tell('§3“曲终人散，黄粱一梦。玩家开始了新的梦境。玩家再次做起了梦，更好的梦。玩家就是宇宙。玩家就是爱。”');
        callback.data.tell('§3“你就是那个玩家。”');
        callback.data.tell('§3“该醒了。”');
        callback.data.tell('§3——终末之诗');
        callback.data.tell('§b是的，这一切都是梦');
        callback.data.tell('§b是的，结束了，该醒了……');
        event.server.runCommandSilent(`effect give "${event.player.name}" haoyuezeughaus:nothingness 60 1`)
        event.server.runCommandSilent(`gamemode spectator "${event.player.name}"`);
        event.player.giveInHand('haoyuezeughaus:yong_heng_zhi_ren');
        callback.data.tell('§9[作者的话]§b最后的最后，感谢您游玩该整合包！');
        callback.data.tell('§9[作者的话]§b如果喜欢这个整合包，记得给我们的官号三连+关注，这是我们坚持下去的动力！');
        callback.data.tell('§9[作者的话]§b如果不喜欢的话就去看看别的包吧，肯定有喜欢的');
        callback.data.tell('§9[作者的话]§b也可以期待我们的下一个整合包呢~');
    })
    event.server.scheduleInTicks(200, event.server, function (callback) {
        callback.data.tell('[SYSTEM]§9在击败梦境守护者后，你从梦中醒了过来，才察觉到这一切只不过是梦。但看着手里的永恒之刃，这个梦又像是真实的……这时，你突然发现这个世界正在崩解！你被一股强大的引力吸入了虚空，就算永恒之刃也无法与这股力量对抗……');
    })
})
onEvent('ftbquests.custom_reward.5DFE7DD7259777DC', event => {
    event.server.runCommandSilent(`kill "${event.player.name}"`)
})