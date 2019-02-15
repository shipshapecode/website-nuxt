const Prism = require('prismjs');

module.exports = {
  content: {
    anchorLevel: 0,
    isPost: true,
    page: '/blog/_post',
    permalink: '/blog/:slug',
    generate: [
      'get',
      'getAll'
    ]
  },

  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`;
        };
      }
    }
  },

  api(isStatic) {
    return {
      baseURL: 'http://localhost:3000',
      browserBaseURL: isStatic ? 'https://suspicious-golick-63656d.netlify.com' : ''
    };
  },

  css: [
    'prismjs/themes/prism-coy.css'
  ]
};
