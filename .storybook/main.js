module.exports = {
  stories: ['../src/components/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
