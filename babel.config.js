module.exports = (api) => {
  api.cache(true)

  const presets = [
    '@babel/typescript',
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: 'last 1 chrome versions',
        },
      },
    ],
    'linaria/babel',
  ]
  const plugins = []

  return {
    presets,
    plugins,
  }
}
