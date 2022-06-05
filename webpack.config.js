const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@routes': path.resolve(__dirname, './src/router'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@enums': path.resolve(__dirname, './src/enums'),
            '@store': path.resolve(__dirname, './src/store'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@services': path.resolve(__dirname, './src/services'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@assets': path.resolve(__dirname, './assets'),

        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Bridge",
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    mode: production ? 'production' : 'development',
    performance: { hints: false },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
};
