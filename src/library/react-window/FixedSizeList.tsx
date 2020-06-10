import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { FixedSizeList } from '@tarojsx/library/dist/react-window'
import { useNavigationBarTitle } from '@tarojsx/hooks'

export default () => {
    useNavigationBarTitle('固定行高列表')

    const { windowWidth, windowHeight } = Taro.getSystemInfoSync()

    return (
        <FixedSizeList width={windowWidth} height={windowHeight} itemCount={100000} itemSize={50}>
            {({ index, style }) => <View style={{ ...style, paddingLeft: 10 }}>Row: {index + 1}</View>}
        </FixedSizeList>
    )
}
