// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
    presets: [
        [
            'taro',
            {
                framework: 'react',
                ts: true,
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'import lodash'],
        [
            'import',
            { libraryName: 'react-use', libraryDirectory: 'esm', camel2DashComponentName: false },
            'import react-use',
        ],
        [
            'import',
            {
                libraryName: '@tarojsx/ui',
                libraryDirectory: 'dist',
                camel2DashComponentName: false,
                transformToDefaultImport: false,
            },
            'import @tarojsx/ui',
        ],
    ],
}
