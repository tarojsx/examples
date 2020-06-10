import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { VariableSizeList } from '@tarojsx/library/dist/react-window'
import { useNavigationBarTitle } from '@tarojsx/hooks'

const rowHeights = new Array(100000).fill(true).map(() => 50 + Math.round(Math.random() * 50))

export default () => {
    useNavigationBarTitle('可变行高列表')

    const { windowWidth, windowHeight } = Taro.getSystemInfoSync()

    return (
        <VariableSizeList
            className="virtual__list"
            width={windowWidth}
            height={windowHeight}
            itemCount={100000}
            itemSize={index => rowHeights[index]}
        >
            {({ index, style }) => (
                <View style={{ ...style, paddingLeft: 10, borderTop: '1px dashed #eee' }}>
                    <Text space="nbsp">
                        Row: {index + 1} &nbsp; Height: {rowHeights[index]}px
                    </Text>
                </View>
            )}
        </VariableSizeList>
    )
}
