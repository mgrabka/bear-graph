import type { Configuration } from 'webpack';
import rules from './webpack.rules';

const mainConfig: Configuration = {
  entry: './src/main/main.ts',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      util: require.resolve('util/'),
    },
  },
};

export default mainConfig;
