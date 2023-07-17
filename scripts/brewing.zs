import crafttweaker.api.Brewing;

brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "survivaloverhaul:cold_resistance" as string}), <item:minecraft:magma_block>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string}));
brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "survivaloverhaul:heat_resistance" as string}), <item:minecraft:snow_block>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string}));

brewing.removeRecipeByOutputPotion(<potion:survivaloverhaul:heat_resistance>);