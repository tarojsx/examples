import { Config } from '@tarojs/taro'

export default {
    pages: [
        'ui/index',
        'ui/Button',
        'ui/List',

        'library/index',
        'library/react-window/FixedSizeList',
        'library/react-window/VariableSizeList',

        'hooks/index',
        'hooks/useRouterParams',
        'hooks/useNavigationBar',
        'hooks/usePullDownRefreshing',
        'hooks/useDidShowAgain',
        'hooks/useLogger',

        'history/index',
    ],

    window: {
        navigationBarTitleText: 'TaroX',
        navigationBarBackgroundColor: '#6190E8',
    },

    tabBar: {
        position: 'bottom',
        selectedColor: '#6190E8',
        list: [
            {
                pagePath: 'ui/index',
                text: 'UI',
                iconPath: 'assets/ui.png',
                selectedIconPath: 'assets/ui2.png',
            },
            {
                pagePath: 'library/index',
                text: 'Library',
                iconPath: 'assets/library.png',
                selectedIconPath: 'assets/library2.png',
            },
            {
                pagePath: 'hooks/index',
                text: 'Hooks',
                iconPath: 'assets/hooks.png',
                selectedIconPath: 'assets/hooks2.png',
            },
            {
                pagePath: 'history/index',
                text: 'History',
                iconPath: 'assets/history.png',
                selectedIconPath: 'assets/history2.png',
            },
        ],
    },
} as Config
