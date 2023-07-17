onEvent('item.right_click', event => {
    if (event.item.id == 'tazsponsors:one_dollar') {
        event.item.count--;
        event.player.giveInHand('32x kubejs:data');
    }
})