import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'

export default () => {
    return (
        <View>
            <List>
                <ListHeader title="react-window" />
                <ListItem
                    title="FixedSizeList"
                    extra="10万行"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'react-window/FixedSizeList' })}
                >
                    固定高度虚拟滚动列表
                </ListItem>
                <ListItem
                    title="VariableSizeList"
                    extra="10万行"
                    arrow="right"
                    onClick={() => Taro.navigateTo({ url: 'react-window/VariableSizeList' })}
                >
                    可变高度虚拟滚动列表
                </ListItem>
            </List>
        </View>
    )
}
