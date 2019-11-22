const RE_TITLE = /^seminar-(\d+)$/

const hasCategory = (data, category) =>
  data.categories.some(cat => cat.name == category)

hexo.extend.filter.register('before_post_render', data => {
  if (data.layout === 'post' && hasCategory(data, 'socratic')) {
    const matches = data.title.match(RE_TITLE)
    if (matches) {
      data.title = `Socratic Seminar ${matches[1]} - ${data.date.format('MMM Do YYYY')}`
    }

    data.css = 'socratic.css'
  }
  return data
})
