const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "production", // Changed to production for optimized builds
    output: {
        path: path.resolve(__dirname, "../build/chat-app"), // Build into a shared root build folder
        filename: "[name].[contenthash].js",
        publicPath: "/chat-app/", // Ensures assets are correctly referenced in Netlify
        clean: true, // Cleans the folder before each build
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
            filename: path.resolve(__dirname, "../build/chat-app/index.html"), // Ensures the correct placement of index.html
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["file-loader"],
            },
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
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
