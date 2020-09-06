const path = require('path');

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            printWidth: 100,
            singleQuote: false,
          }
        },
      },
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: path.resolve(__dirname, 'tsconfig.json')
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
