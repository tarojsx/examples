import React from 'react'
import { useMount, useUpdate } from 'react-use'
import { View } from '@tarojs/components'
import { useLogger } from '@tarojsx/hooks'

export default () => {
    useLogger(console.log, 'demo page')

    useMount(useUpdate())

    return (
        <View>
            <View style={{ margin: 50, textAlign: 'center', fontSize: 24 }}>请打开微信开发者工具 Console 面板查看</View>
        </View>
    )
}
