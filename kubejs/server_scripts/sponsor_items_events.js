onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:sponsor_items_box') {
        var sponsor_items = [Item.of('tazsponsors:one_dollar'),Item.of('tazsponsors:milans_sword')/*,Item.of('tazsponsors:youshous_right_hand')*/];
        var max = 3;
        var min = 1;
        const i = Math.floor(Math.random() * (max - min + 1)) + min;

        event.player.setHeldItem(event.hand, Item.of('kubejs:sponsor_items_box', (event.player.getHeldItem(event.hand).count - 1)))
        event.player.giveInHand(sponsor_items[i])
    }
})

onEvent('item.right_click', event => {
    if (event.item.id == 'tazsponsors:one_dollar') {
        event.player.setHeldItem(event.hand, Item.of('tazsponsors:one_dollar', (event.player.getHeldItem(event.hand).count - 1)))
        event.player.giveInHand(Item.of('kubejs:data').withCount(32));
    }
})