"use strict";
exports.__esModule = true;
exports["default"] = (function (ctx, options) {
    var prod = process.env.NODE_ENV === 'production';
    ctx.modifyWebpackChain(function (_a) {
        var chain = _a.chain;
        // 支持 node 风格的 __filename 全局变量
        if ((options === null || options === void 0 ? void 0 : options.node) !== false) {
            chain.node.set('__filename', true);
        }
        // 允许 import .d.ts 文件, 内容最终会被 babel-typescript 清空.
        if ((options === null || options === void 0 ? void 0 : options.resolve) !== false && !chain.resolve.extensions.has('.d.ts')) {
            chain.resolve.extensions.add('.d.ts');
        }
        // if (options?.tarojsxProvidePlugin !== false && !chain.plugins.has('taroProvidePlugin')) {
        //     try {
        //         chain
        //             .plugin('taroProvidePlugin')
        //             .use(require('@tarojsx/polyfill/dist/plugins/TaroProvidePlugin').default)
        //     } catch (err) {}
        // }
        // // production 环境下优化去重 wxss
        // if (prod && options?.optimizeCssAssetsPlugin !== false && chain.plugins.has('optimizeCssAssetsPlugin')) {
        //     try {
        //         chain
        //             .plugin('optimizeCssAssetsPlugin')
        //             .use(require('optimize-css-assets-webpack-plugin'), [{ assetNameRegExp: /\.wxss$/g }])
        //     } catch (err) {}
        // }
    });
});
