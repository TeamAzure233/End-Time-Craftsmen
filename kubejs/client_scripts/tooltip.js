onEvent('item.tooltip', tooltip => {
    tooltip.add(['#kubejs:banned_tools'], '§c这个物品只能用于合成！')
    tooltip.add(['jordan7102_lm:heart_crystal'], '增加一条命（如果未开启生命系统则回血）')
})