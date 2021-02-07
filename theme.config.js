// theme.config.js
export default {
  repository: 'https://github.com/steelydylan/zenn-mde', // project repo
  docsRepository: 'https://github.com/steelydylan/zenn-mde-site', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – React Split MDE',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © steelydylan.',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <svg>...</svg>
    <span>React Split MDE</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React Split MDE: the next markdown editor" />
    <meta name="og:title" content="React Split MDE: the next markdown editor" />
  </>
}
