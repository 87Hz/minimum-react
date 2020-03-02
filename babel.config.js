module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/typescript',
    '@babel/react',
    '@babel/env',
    'linaria/babel',
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
