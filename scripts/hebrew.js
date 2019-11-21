hexo.extend.tag.register('he', (args, content) => {
  let text = hexo.render.renderSync({ text: content, engine: 'markdown'  })
  return `<div class="hebrew">${text}</div>`
}, { ends: true })

hexo.extend.tag.register('split', (args, content) => {
  const [ en, he ] = content.split('{ --- }')
    .map(text => hexo.render.renderSync({ text, engine: 'markdown'  }))

  return `<div class="split clearfix">
    <div class="left">${en}</div>
    <div class="right hebrew">${he}</div>
  </div>`
}, { ends: true })
