import path from 'path'
import fs from 'fs'
import webpack from 'webpack'
import webpackChain from 'webpack-chain'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { IProjectConfig } from '@tarojs/taro/types/compile'
import { TaroProvidePlugin } from '@tarojsx/polyfill/dist/plugins'

const config: IProjectConfig = {
    projectName: 'tarojsx-examples',
    framework: 'react',
    date: '2020-02-02',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    alias: {
        '@': path.resolve(__dirname, '..', 'src'),
    },
    plugins: [path.resolve(__dirname, '../plugin.js')],
    mini: {
        webpackChain(chain: webpackChain, webpack: webpack.Configuration) {
            // chain.plugin('taroProviderPlugin').use(TaroProvidePlugin, [['default', 'Intl']])
            // chain.plugin('optimizeCssAssetsPlugin').use(OptimizeCssAssetsPlugin, [{ assetNameRegExp: /\.wxss$/g }])
        },
        postcss: {
            autoprefixer: {
                enable: true,
                config: {},
            },
            pxtransform: {
                enable: true,
                config: {},
            },
            url: {
                enable: true,
                config: {
                    limit: 10240, // 设定转换尺寸上限
                },
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
        miniCssExtractPluginOption: {
            ignoreOrder: true,
        },
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        postcss: {
            autoprefixer: {
                enable: true,
                config: {},
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
    },
}

export default function(merge) {
    const env = require(process.env.NODE_ENV === 'development' ? './dev' : './prod')
    const custom = fs.existsSync(path.join(__dirname, 'custom.ts')) ? require('./custom') : {}

    return merge({}, config, env, custom)
}
