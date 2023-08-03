onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = ['zombie_extreme:blackmetal', 'zombie_extreme:oil_shale', 'zombie_extreme:alternateoretitan', 'zombie_extreme:alternateoreradium', 'zombie_extreme:alternateoreruby', 'zombie_extreme:titanore', 'zombie_extreme:rubyore', 'zombie_extreme:oreradium']
    })
    
    event.removeSpawnsByID(spawns => {
      spawns.entities.values = [
        'zombie_extreme:survial',
        'zombie_extreme:survival',
        'zombie_extreme:militarysoldier',
        'zombie_extreme:heavy_military'
      ]
    })
})