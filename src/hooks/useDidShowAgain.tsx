import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Button } from '@tarojsx/ui'
import { useDidShowAgain } from '@tarojsx/hooks'

export default () => {
    useDidShowAgain(async () => {
        Taro.showModal({
            title: '页面再次显示',
            content: 'useDidShowAgain 会在页面再次显示时触发，包括从其他页面返回、打开原生对话框、或从后台返回等。',
            showCancel: false,
        })
    })

    return (
        <View>
            <View style={{ margin: 50, textAlign: 'center', fontSize: 24 }}>点击分享后关闭</View>
            <Button style={{ margin: 50 }} openType="share">
                分享
            </Button>
        </View>
    )
}
