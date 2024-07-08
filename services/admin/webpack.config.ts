import path from 'path'
import {buildWebpack} from "@packages/build-config";
import type {BuildMode, BuildPaths, BuildPlatform} from "@packages/build-config";
import webpack from "webpack";
import packageJson from './package.json'


interface EnvVariables {
    mode?: BuildMode
    port?: number
    analyzer?: boolean
    platform?: BuildPlatform
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')

    }

    const config = buildWebpack({
        port: env.port ?? 3002,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'admin',
            filename: 'remoteEntry.js',
            exposes: {
                './router': "./src/router/Router.tsx"
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react']
                },
                'react-router-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom']
                },
                'react-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-dom']
                }
            }
        })
    )

    return config
}

