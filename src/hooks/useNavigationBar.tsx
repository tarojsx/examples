import React from 'react'
import { useStateList, useInterval } from 'react-use'
import { View } from '@tarojs/components'
import { Avatar } from '@tarojsx/ui'
import { useNavigationBar } from '@tarojsx/hooks'

import styles from './useNavigationBar.module.scss'

const stateSet = [
    { label: '红', color: '#ff4949' },
    { label: '黄', color: '#ffc82c' },
    { label: '绿', color: '#13ce66' },
]

export default () => {
    const { state, next, setStateAt, currentIndex } = useStateList(stateSet)

    useNavigationBar({
        title: state.label,
        frontColor: '#ffffff',
        backgroundColor: state.color,
    })

    useInterval(next, 2000)

    return (
        <View className={styles.page}>
            <View className={styles.radio}>
                {stateSet.map(({ label, color }, index) => (
                    <View key={label} onClick={() => setStateAt(index)}>
                        <Avatar
                            style={{ backgroundColor: color }}
                            size={index === currentIndex ? 'large' : undefined}
                            text={label}
                        />
                    </View>
                ))}
            </View>
        </View>
    )
}
