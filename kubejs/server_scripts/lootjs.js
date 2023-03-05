onEvent("lootjs", (event) => {
    event
    .addBlockLootModifier("minecraft:andesite")
    .randomChance(0.3)
    .thenReplace('minecraft:andesite', 'kubejs:andesite_alloy_nugget')
    event
    .addBlockLootModifier("minecraft:andesite")
    .randomChance(0.2)
    .thenAdd('kubejs:andesite_alloy_nugget')
    event
    .addBlockLootModifier("minecraft:andesite")
    .randomChance(0.1)
    .thenReplace('minecraft:andesite', 'kubejs:raw_andesite_alloy')
    event
    .addBlockLootModifier("minecraft:stone")
    .randomChance(0.01)
    .thenAdd('kubejs:andesite_alloy_nugget')
    event
    .addBlockLootModifier("minecraft:gravel")
    .randomChance(0.2)
    .thenReplace('minecraft:gravel', 'kubejs:andesite_alloy_nugget')

    event
    .addBlockLootModifier("#minecraft:logs")
    .randomChance(0.05)
    .thenAdd('thermal:rubber')

    event
    .addLootTypeModifier(LootType.CHEST)
    .randomChance(0.3)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"basic"}'))
    .randomChance(0.2)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"rare"}'))
    .randomChance(0.1)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"advanced"}'))
    .randomChance(0.05)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"epic"}'))
    .randomChance(0.01)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"legendry"}'))
    .randomChance(0.1)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"guns"}'))
    .randomChance(0.1)
    .thenAdd(Item.of('ftbquests:lootcrate', '{type:"sponsors_items"}'))

    event
    .addLootTypeModifier(LootType.UNKNOWN)
    .randomChance(0.005)
    .thenAdd('kubejs:data')
    event
    .addLootTypeModifier(LootType.BLOCK)
    .randomChance(0.005)
    .thenAdd('kubejs:data')
    event
    .addLootTypeModifier(LootType.ENTITY)
    .randomChance(0.005)
    .thenAdd('kubejs:data')
    event
    .addLootTypeModifier(LootType.CHEST)
    .randomChance(0.4)
    .thenAdd('10x kubejs:data')
    .randomChance(0.2)
    .thenAdd('15x kubejs:data')
    .randomChance(0.1)
    .thenAdd('20x kubejs:data')
    event
    .addLootTypeModifier(LootType.FISHING)
    .randomChance(0.3)
    .thenAdd('kubejs:data')
    event
    .addLootTypeModifier(LootType.GIFT)
    .randomChance(0.6)
    .thenAdd('kubejs:data')
});