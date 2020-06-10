import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Icon } from '@tarojsx/ui'
import { usePullDownRefreshing } from '@tarojsx/hooks'

export default () => {
    usePullDownRefreshing(async () => {
        Taro.showToast({title: '1秒后收起', icon: 'loading'})
    }, 1000)

    return (
        <View>
            <View style={{ textAlign: 'center', fontSize: 24 }}>
                <Icon value="arrow-down" size="24" />
                <View>下拉刷新</View>
            </View>
        </View>
    )
}
