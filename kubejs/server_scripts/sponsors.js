//这块前面应该是获取赞助者列表的代码的，但是我找不到合适的方法
var primary = []
var intermediate = []
var advanced = []
var superrrr = []

onEvent('player.logged_in', event => {
    //这里应该是遍历数组内的玩家id并赋予阶段
})

onEvent('player.chat', event => {
    let input = event.message.trim();
    if(event.player.stages.has("primary_sponsor")){
        event.server.tell('§l§2[初级赞助者] §r' + `<${event.player.name}> ${input}`);
        event.cancel();
    }
    if(event.player.stages.has("intermediate_sponsor")){
        event.server.tell('§l§3[中级赞助者] §r' + `<${event.player.name}> ${input}`);
        event.cancel();
    }
    if(event.player.stages.has("advanced_sponsor")){
        event.server.tell('§l§6[高级赞助者] §r' + `<${event.player.name}> ${input}`);
        event.cancel();
    }
    if(event.player.stages.has("super_sponsor")){
        event.server.tell('§l§6[超级赞助者] §r' + `<${event.player.name}> ${input}`);
        event.cancel();
    }
})