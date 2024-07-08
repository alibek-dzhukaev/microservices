import type {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptions} from "./types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: path.resolve(options.paths.public, 'icon.ico'),
            publicPath: '/'
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        }),
    ]

    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin(),
            // new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshWebpackPlugin()
        )
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        if (options.analyzer) {
            plugins.push(new BundleAnalyzerPlugin())
        }

        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(options.paths.public, 'locales'), to: path.resolve(options.paths.output, 'locales') },
            ]
        }))
    }

    return plugins
}