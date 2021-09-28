const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./public/js/index.js",
        reset: "./public/css/reset.scss",
    },
    resolve: {
        extension: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "js/[name].js",
    },
    plugins: [new MiniCssExtractPlugin({ filename: "css/[name].css" })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(svg|gif|otf)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader",
                options: {
                    name: "images/[name].txt",
                },
            },
        ],
    },
    devtool: "inline-source-map",
    mode: "development",
};
