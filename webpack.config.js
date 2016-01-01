var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: "./App.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    },
    plugins: [
      new LiveReloadPlugin()
    ]
};
