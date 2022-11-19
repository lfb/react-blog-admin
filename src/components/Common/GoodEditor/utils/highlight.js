import highlight from 'highlight.js/lib/core'

import cLang from 'highlight.js/lib/languages/c'
import cssLang from 'highlight.js/lib/languages/css'
import xmlLang from 'highlight.js/lib/languages/xml'
import jsonLang from 'highlight.js/lib/languages/json'
import bashLang from 'highlight.js/lib/languages/bash'
import diffLang from 'highlight.js/lib/languages/diff'
import scssLang from 'highlight.js/lib/languages/scss'
import lessLang from 'highlight.js/lib/languages/less'
import shellLang from 'highlight.js/lib/languages/shell'
import pythonLang from 'highlight.js/lib/languages/python'
import markdownLang from 'highlight.js/lib/languages/markdown'
import htmlbarsLang from 'highlight.js/lib/languages/vbscript-html'
import javascriptLang from 'highlight.js/lib/languages/javascript'
import typescriptLang from 'highlight.js/lib/languages/typescript'

highlight.registerLanguage('c', cLang)
highlight.registerLanguage('css', cssLang)
highlight.registerLanguage('xml', xmlLang)
highlight.registerLanguage('bash', bashLang)
highlight.registerLanguage('diff', diffLang)
highlight.registerLanguage('json', jsonLang)
highlight.registerLanguage('less', lessLang)
highlight.registerLanguage('scss', scssLang)
highlight.registerLanguage('shell', shellLang)
highlight.registerLanguage('python', pythonLang)
highlight.registerLanguage('markdown', markdownLang)
highlight.registerLanguage('htmlbars', htmlbarsLang)
highlight.registerLanguage('javascript', javascriptLang)
highlight.registerLanguage('typescript', typescriptLang)

export { highlight }
