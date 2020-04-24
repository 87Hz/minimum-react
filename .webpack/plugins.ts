import { concat, lensProp, over } from 'ramda'
import { Configuration, DefinePlugin, Plugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type PluginCreator = (config: Configuration) => Plugin | undefined

export const addPlugins = (pluginCreators: PluginCreator[]) => (config: Configuration) => {
  const plugins = pluginCreators.map((pluginCreator) => pluginCreator(config)).filter((plugin) => plugin !== undefined)

  return over(lensProp('plugins'), concat(plugins), config)
}

export const miniCssExtractPlugin: PluginCreator = (config) => {
  const isProd = config.mode === 'production'
  const filename = isProd ? 'styles.[hash].css' : 'styles.css'
  return new MiniCssExtractPlugin({ filename })
}

export const definePlugin: PluginCreator = () => {
  return new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  })
}

export const htmlWebpackPlugin: PluginCreator = (config) => {
  const isNonProd = config.mode !== 'production'

  if (isNonProd) return

  return new HtmlWebpackPlugin({
    title: 'Minimum React',
    template: 'src/template.html',
  })
}
