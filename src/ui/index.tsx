import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'
import { useNavigationBarTitle } from '@tarojsx/hooks'

export default () => {
    useNavigationBarTitle('UI')

    return (
        <View>
            <List>
                <ListHeader title="基础组件" />
                <ListItem
                    title="Button"
                    extra="按钮"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'Button' })}
                />
                <ListItem title="List" extra="列表" arrow="right" onClick={() => Taro.navigateTo({ url: 'List' })} />

                <ListHeader title="扩展组件" />
            </List>
        </View>
    )
}
