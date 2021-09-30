const path = require("path");

module.exports = {
    entry: {
        main: "./frontend/public/js/components/app.js",
    },
    output: {
        path: path.resolve(__dirname, "frontend/assets"),
        filename: "js/index.js",
    },
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
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(svg|gif|png|otf)$/,
                loader: "file-loader",
                options: {
                    publicPath: "./assets/",
                    name: "img/[name].[ext]?[hash]",
                },
            },
        ],
    },
    devtool: "inline-source-map",
    mode: "development",
};
