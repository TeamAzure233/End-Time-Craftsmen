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

    event
    .addLootTypeModifier(LootType.ENTITY)
    .thenRemove('scalinghealth:cursed_heart')
    .thenRemove('scalinghealth:enchanted_heart')
    .thenRemove('scalinghealth:chance_heart')
    .thenRemove('scalinghealth:heart_crystal')
    .thenRemove('scalinghealth:power_crystal')
    event
    .addLootTypeModifier(LootType.ENTITY)
    .randomChance(0.01)
    .thenAdd('scalinghealth:heart_crystal')
    event
    .addLootTypeModifier(LootType.ENTITY)
    .randomChance(0.01)
    .thenAdd('scalinghealth:power_crystal')
});