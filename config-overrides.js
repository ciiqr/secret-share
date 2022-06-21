const { aliasWebpack } = require("react-app-alias-ex");
const webpack = require("webpack");

module.exports = function override(config) {
    const customConfig = aliasWebpack({})(config);

    customConfig.plugins = [
        // don't overwrite the default cra plugins
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: "process/browser.js",
            Buffer: ["buffer", "Buffer"],
        }),
    ];

    return customConfig;
};
