import { concat, lensPath, over } from 'ramda'
import { Configuration, RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

type RuleCreator = (config: Configuration) => RuleSetRule

export const addRules = (ruleCreators: RuleCreator[]) => (config: Configuration): Configuration => {
  const rules = ruleCreators.map((r) => r(config))
  return over(lensPath(['module', 'rules']), concat(rules), config)
}

export const tsRule: RuleCreator = (config) => {
  const isNonProd = config.mode !== 'production'

  return {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'linaria/loader',
        options: { sourceMap: isNonProd },
      },
    ],
  }
}

export const cssRule: RuleCreator = (config) => {
  const isNonProd = config.mode !== 'production'

  return {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: { hmr: isNonProd },
      },
      {
        loader: 'css-loader',
        options: { sourceMap: isNonProd },
      },
    ],
  }
}
