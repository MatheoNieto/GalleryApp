module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
          ["module-resolver", {
            "root": ["./"],
            "alias": {
              "@screens": "./src/screens",
              "@assets": "./src/assets",
              "@navigation": "./src/navigation",
              "@environment": "./src/environment/environment",
              "@navigators": "./src/navigators",
              "@routes": "./src/routes",
              "@contexts": "./src/contexts"
            }
        }]
      ],
  };
};
