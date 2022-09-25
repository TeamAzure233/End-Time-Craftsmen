onEvent('block.modification', event => {
    event.modify('#minecraft:logs', block => {
        block.requiredTool(True)
    })
})