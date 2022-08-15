module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@features": "./src/features",
          "@assets": "./src/assets",
          "@navigation": "./src/navigation",
          "@environment": "./src/environment",
          "@navigators": "./src/navigators",
          "@routes": "./src/routes",
          "@contexts": "./src/contexts",
          "@components": "./src/components",
          "@core": "./src/core",
          "@hooks": "./src/hooks",
          "@shared": "./src/shared",
          "@models": "./src/models"
        }
      }],
    ],
  };
};
