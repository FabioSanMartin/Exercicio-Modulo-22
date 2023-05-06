const findWebpack = require('find-webpack')
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const injectDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  const webpackOptions = findWebpack.getWebpackOptions();

  if (!webpackOptions) {
    throw new Error('Could not find Webpack in this project');
  }

  const cleanOptions = { reactScripts: true };

  findWebpack.cleanForCypress(cleanOptions, webpackOptions);

  const options = {
    webpackOptions,
    watchOptions: {},
  };

  on('file:preprocessor', webpackPreprocessor(options));
  injectDevServer(on, config);
  return config;
};