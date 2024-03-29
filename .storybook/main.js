const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../components'
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  features: {
    interactionsDebugger: true
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [
        path.resolve(__dirname, '../styles'),
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../node_modules')
      ]
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '..')
    }

    return config
  }
}
