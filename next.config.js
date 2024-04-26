const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
    prependData: `@import "main.scss";`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}