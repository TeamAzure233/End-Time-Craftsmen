onEvent('block.modification', event => {
    event.modify('minecraft:torch', block => {
      block.lightEmission = 15
    })
  })