const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "production",  // Changed to production for building
    devServer: {
        port: 3000,
        historyApiFallback: true, // Support React Router
    },
    output: {
        path: path.resolve(__dirname, "../build"), // Output to root-level build folder
        filename: "[name].[contenthash].js",
        publicPath: "/", // Ensure correct asset loading
        clean: true // Clean the output directory before build
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
            filename: path.resolve(__dirname, "../build/index.html"), // Move index.html to build folder
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
                        presets: ["@babel/preset-env", "@babel/preset-react"],
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
