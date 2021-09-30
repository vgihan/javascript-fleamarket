const path = require("path");

module.exports = {
    entry: {
        main: "./frontend/public/js/components/app.js",
    },
    output: {
        path: path.resolve(__dirname, "frontend/assets"),
        filename: "js/app.js",
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
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(svg|gif|png|otf)$/,
                loader: "file-loader",
                options: {
                    publicPath: "./asset/",
                    name: "img/[name].[ext]?[hash]",
                },
            },
        ],
    },
    devtool: "inline-source-map",
    mode: "development",
};
