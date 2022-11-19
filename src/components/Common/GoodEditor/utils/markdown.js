import md from 'markdown-it'

import { highlight } from './highlight'

const markdownIt = md({
  highlight(str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          highlight.highlight(str, {
            language: lang,
            ignoreIllegals: true
          }).value
        }</code></pre>`
      } catch (err) {
        console.log('err', err)
      }
    }

    return `<pre class="hljs"><code>${markdownIt.utils.escapeHtml(str)}</code></pre>`
  }
})

export const markdownRender = content => ({
  __html: markdownIt.render(content)
})
