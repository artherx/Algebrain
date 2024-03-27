module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [ // Cambiar 'plugin' a 'plugins'
      ["module-resolver", {
        "alias": {
          "@components": "./assets/components",
          "@img": "./assets/img",
        }
      }]
    ]
  };
};
