import { Config } from '@tarojs/taro'

export default {
    pages: [
        'ui/index',
        'ui/Button',
        'ui/List',

        'library/index',
        'library/react-window/FixedSizeList',
        'library/react-window/VariableSizeList',
    ],

    window: {
        navigationBarTitleText: '@tarojsx',
        navigationBarBackgroundColor: '#6190E8',
    },

    tabBar: {
        position: 'top',
        selectedColor: '#6190E8',
        list: [
            {
                pagePath: 'ui/index',
                text: 'UI',
            },
            {
                pagePath: 'library/index',
                text: 'Library',
            },
        ],
    },
} as Config
