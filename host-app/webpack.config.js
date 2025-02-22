const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].[contenthash].js",
        publicPath: "/",
        clean: true
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                chat: "chat@http://localhost:3001/remoteEntry.js",
                email: "email@http://localhost:3002/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, requiredVersion: "18.2.0", eager: true },
                "react-dom": { singleton: true, requiredVersion: "18.2.0", eager: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: path.resolve(__dirname, "../build/index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"], // Add this
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
