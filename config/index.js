/// <reference types="webpack" />
/// <reference types="webpack-chain" />

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const webpackChain = require('webpack-chain')
const { TaroProvidePlugin } = require('@tarojsx/polyfill/dist/plugins')

const config = {
    projectName: 'tarojsx-examples',
    framework: 'react',
    date: '2020-0202',
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
    mini: {
        /**
         * webpack config
         * @param {webpackChain} chain
         * @param {webpack} webpack
         */
        webpackChain(chain, webpack) {
            chain.plugin('taroProviderPlugin').use(TaroProvidePlugin, [['default', 'Intl']])
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

module.exports = function(merge) {
    const env = require(process.env.NODE_ENV === 'development' ? './dev' : './prod')
    const custom = fs.existsSync(path.join(__dirname, 'custom.js')) ? require('./custom') : {}

    return merge({}, config, env, custom)
}
