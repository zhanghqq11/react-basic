/* eslint-disable */
const withCss = require('@zeit/next-css')
const path = require('path')

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    const eslintRule = {
     enforce: 'pre',
     test: /.(js|jsx)$/,
     loader: 'eslint-loader',
     exclude: [
       path.resolve(__dirname, '/node_modules'),
     ],
   }
   config.module.rules.push(eslintRule)
    return config
  },
})