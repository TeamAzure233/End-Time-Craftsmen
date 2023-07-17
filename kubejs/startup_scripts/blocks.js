onEvent('block.registry', event => {
  event.create('andesite_alloy_block', block => {
          block.material('iron')
        block.hardness(6)
        block.displayName('安山合金块')
        block.requiresTool(true)
        block.resistance(6)
        block.harvestTool('pickaxe', 1)
    })
  event.create('rose_quartz_block', block => {
        block.material('iron')
      block.hardness(6)
      block.displayName('玫瑰石英块')
      block.requiresTool(true)
      block.resistance(6)
      block.harvestTool('pickaxe', 1)
    })
  event.create('machinery_alloy_block', block => {
      block.material('iron')
    block.hardness(6)
    block.displayName('机械合金块')
    block.requiresTool(true)
    block.resistance(6)
    block.harvestTool('pickaxe', 1)
  })
  event.create('chromatic_compound_block', block => {
        block.material('iron')
      block.hardness(10)
      block.displayName('§e异彩化合物块')
      block.requiresTool(true)
      block.resistance(10)
      block.harvestTool('pickaxe', 3)
      block.lightLevel(0.5)
    })
  event.create('shadow_steel_block', block => {
        block.material('iron')
      block.hardness(10)
      block.displayName('§e暗影钢块')
      block.requiresTool(true)
      block.resistance(10)
      block.harvestTool('pickaxe', 3)
      block.lightLevel(0.25)
    })
  event.create('refined_radiance_block', block => {
        block.material('iron')
      block.hardness(10)
      block.displayName('§e光辉石块')
      block.requiresTool(true)
      block.resistance(10)
      block.harvestTool('pickaxe', 3)
      block.lightLevel(1)
    })
  event.create('overcharged_alloy_block', block => {
        block.material('iron')
      block.hardness(10)
      block.displayName('§e超负荷合金块')
      block.requiresTool(true)
      block.resistance(10)
      block.harvestTool('pickaxe', 3)
      block.lightLevel(0.8)
    })
  event.create('blaze_brass_block', block => {
      block.material('iron')
    block.hardness(8)
    block.displayName('§e烈焰合金块')
    block.requiresTool(true)
    block.resistance(8)
    block.harvestTool('pickaxe', 2)
    block.lightLevel(1)
    })
  event.create('chorus_chrome_block', block => {
      block.material('iron')
    block.hardness(8)
    block.displayName('§e紫颂合金块')
    block.requiresTool(true)
    block.resistance(8)
    block.harvestTool('pickaxe', 2)
    block.lightLevel(0.5)
    })
  event.create('gaia_block', block => {
      block.material('iron')
    block.hardness(8)
    block.displayName('§e盖亚魂块')
    block.requiresTool(true)
    block.resistance(8)
    block.harvestTool('pickaxe', 2)
    block.lightLevel(0.2)
    })
  event.create('antimatter_alloy_block', block => {
      block.material('iron')
    block.hardness(12)
    block.displayName('§5反物质合金块')
    block.requiresTool(true)
    block.resistance(20)
    block.harvestTool('pickaxe', 5)
    block.lightLevel(1)
    })

  event.create('bronze_casing', block => {
          block.material('iron')
        block.hardness(5.5)
        block.displayName('青铜机壳')
        block.requiresTool(true)
        block.resistance(5.5)
        block.harvestTool('pickaxe', 1)
    })
  event.create('cast_iron_casing', block => {
          block.material('iron')
        block.hardness(6)
        block.displayName('铸铁机壳')
        block.requiresTool(true)
        block.resistance(6)
        block.harvestTool('pickaxe', 1)
    })
  event.create('steel_casing', block => {
          block.material('iron')
        block.hardness(6.5)
        block.displayName('钢机壳')
        block.requiresTool(true)
        block.resistance(6.5)
        block.harvestTool('pickaxe', 1)
    })

  event.create('kinetic_mechanical_box', block => {
      block.material('lantern')
    block.hardness(6)
    block.displayName('动能机械箱')
    block.requiresTool(true)
    block.resistance(6)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/kinetic_mechanical_box')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('solid')
    })
  event.create('liquid_mechanical_box', block => {
      block.material('lantern')
    block.hardness(6.5)
    block.displayName('流体机械箱')
    block.requiresTool(true)
    block.resistance(6.5)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/liquid_mechanical_box')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('solid')
    })
  event.create('precision_mechanical_box', block => {
      block.material('lantern')
    block.hardness(7)
    block.displayName('精密机械箱')
    block.requiresTool(true)
    block.resistance(7)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/precision_mechanical_box')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('translucent')
    })
  event.create('steam_mechanical_box_mk1', block => {
      block.material('lantern')
    block.hardness(7)
    block.displayName('蒸汽机械箱MK1')
    block.requiresTool(true)
    block.resistance(7)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/steam_mechanical_box_mk1')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('solid')
    })
  event.create('steam_mechanical_box_mk2', block => {
      block.material('lantern')
    block.hardness(7)
    block.displayName('蒸汽机械箱MK2')
    block.requiresTool(true)
    block.resistance(7)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/steam_mechanical_box_mk2')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('solid')
    })
  event.create('steam_mechanical_box_mk3', block => {
      block.material('lantern')
    block.hardness(7)
    block.displayName('蒸汽机械箱MK3')
    block.requiresTool(true)
    block.resistance(7)
    block.harvestTool('pickaxe', 1)
    block.model('kubejs:block/steam_mechanical_box_mk3')
    block.notSolid()
    block.fullBlock(false)
    block.renderType('solid')
  })
})