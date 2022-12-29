onEvent('item.modification', event => {
    event.modify('jordan7102_lm:heart_crystal', item => {
        item.rarity(RARITY_RARE)
    })
})