// next.config.js
const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  webpack: config => {
    config.module.rules.push({
      test: /\.txt$/i,
      use: "raw-loader",
    })
    return config
  }
})