import { join } from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import 'webpack-dev-server';

export default (): Configuration => {
  const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
  const isDevMode = mode === 'development';

  return {
    mode,
    entry: './src/index.tsx',

    devServer: {
      compress: false,
      historyApiFallback: true,
      contentBase: join(__dirname, 'public'),
      host: '0.0.0.0',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    },

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx$/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'linaria/loader',
              options: { sourceMap: isDevMode },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: isDevMode },
            },
            {
              loader: 'css-loader',
              options: { sourceMap: isDevMode },
            },
          ],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({ filename: 'styles.css' }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  };
};
