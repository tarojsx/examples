import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'
import { useNavigationBarTitle } from '@tarojsx/hooks'

export default () => {
    useNavigationBarTitle('Hooks')

    return (
        <View>
            <List>
                <ListHeader title="环境" />
                <ListItem
                    title="useRouterParams"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'useRouterParams?s=a&n=1' })}
                >
                    获取页面路由参数.
                </ListItem>
            </List>
            <List>
                <ListHeader title="界面" />
                <ListItem
                    title="useNavigationBar"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'useNavigationBar' })}
                >
                    动态更新导航栏属性.
                </ListItem>
                <ListItem
                    title="usePullDownRefreshing"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'usePullDownRefreshing' })}
                >
                    监听用户下拉刷新事件.
                </ListItem>
            </List>

            <List>
                <ListHeader title="生命周期" />
                <ListItem
                    title="useDidShowAgain"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'useDidShowAgain' })}
                >
                    页面再次显示时的回调.
                </ListItem>
                <ListItem title="useLogger" arrow="right" onClick={() => Taro.navigateTo({ url: 'useLogger' })}>
                    打印组件生命周期.
                </ListItem>
            </List>
        </View>
    )
}
