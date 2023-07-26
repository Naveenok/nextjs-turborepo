const
  { NextFederationPlugin }
    = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true, layers: true, };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe1',
        filename: 'static/chunks/remoteEntry.js',
        // extraOptions: {
        //   exposePages: true
        // },
        exposes: {
          './mfe1UI': './src/pages/index.js'
        },
      })
    );
    return config;
  }
};
