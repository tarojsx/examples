import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'

export default () => {
    return (
        <View>
            <List>
                <ListHeader title="taro-ui 组件" />
                <ListItem title="Button" arrow="right" onClick={() => Taro.navigateTo({ url: 'Button' })}>
                    按钮
                </ListItem>
                <ListItem title="List" arrow="right" onClick={() => Taro.navigateTo({ url: 'List' })}>
                    列表
                </ListItem>

                <ListHeader title="扩展组件" />
            </List>
        </View>
    )
}
