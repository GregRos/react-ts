"use strict";
var config = {
    entry: "./app/main.js",
    output: {
        filename: './bundle.js',
        path: './out',
    },
    devtool: "source-map",
    watch: true,
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.(eot|woff|svg|ttf)/, loader: "file-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
module.exports = config;
//# sourceMappingURL=webpack.config.js.map