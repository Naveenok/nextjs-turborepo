const
  { NextFederationPlugin }
    = require('@module-federation/nextjs-mf');
    
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    },
      config.plugins.push(
        new NextFederationPlugin({
          name: 'shell',
          remotes: {
            mfe1: `mfe1@https://naveenok-expert-space-succotash-r77q949qvw5fw56p-3001.preview.app.github.dev/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
        })
      );
    return config;
  }
};
