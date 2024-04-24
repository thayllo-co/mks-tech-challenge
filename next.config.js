const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
    prependData: `@import "main.scss";`
  }
}