const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    mode: "production", // Changed to production for optimized builds
    output: {
        path: path.resolve(__dirname, "../build/email-app"), // Unified build directory
        filename: "[name].[contenthash].js",
        publicPath: "/email-app/", // Ensures correct asset references in Netlify
        clean: true, // Cleans build before each build
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "email",
            filename: "remoteEntry.js",
            exposes: {
                "./EmailApp": "./src/App",
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
                "react-dom": { singleton: true, eager: true, requiredVersion: "18.2.0" },
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: path.resolve(__dirname, "../build/email-app/index.html"), // Places index.html correctly
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
