import 'webpack-dev-server';
import { pipe } from 'ramda';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { addRules, cssRule, tsRule } from './rules';
import { addPlugins, definePlugin, htmlWebpackPlugin, miniCssExtractPlugin } from './plugins';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProdMode = mode === 'production';

const basicConfig: Configuration = {
  mode,
  entry: resolve('./src/index.tsx'),
  module: { rules: [] },
  plugins: [],
  output: { filename: isProdMode ? 'bundle.[hash].js' : 'bundle.js' },

  devServer: {
    compress: false,
    historyApiFallback: true,
    contentBase: resolve('./public'),
    host: '0.0.0.0',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: { '~': resolve('./src') },
  },
};

export default () => pipe(
  addRules([tsRule, cssRule]),
  addPlugins([definePlugin, miniCssExtractPlugin, htmlWebpackPlugin]),
)(basicConfig);
