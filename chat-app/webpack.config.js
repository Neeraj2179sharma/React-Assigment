const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "development",
    output: {
        publicPath: "auto", // Fix this to "auto" to avoid loading issues
    },
    devServer: {
        port: 3001,
        open: false,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "chat",
            filename: "remoteEntry.js",
            exposes: {
                "./ChatApp": "./src/App",
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "18.2.0" },
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
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
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    resolve: { extensions: [".js", ".jsx"] },
};
