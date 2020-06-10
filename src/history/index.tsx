import React from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { View, Text } from '@tarojs/components'
import history, { TaroHistoryAction, TaroHistoryRouterInfo } from '@tarojsx/history'
import { List, ListHeader, ListItem } from '@tarojsx/ui'
import { useNavigationBarTitle } from '@tarojsx/hooks'

import styles from './index.module.scss'

const data: { action: TaroHistoryAction; location: TaroHistoryRouterInfo; time: dayjs.Dayjs }[] = []
history.listen((location, action) => data.unshift({ action, location, time: dayjs() }))

export default () => {
    useNavigationBarTitle('History')

    return (
        <View className={styles.page}>
            <List>
                <ListHeader title="路由历史日志" />
                {data.map(({ action, location, time }, index) => (
                    <ListItem
                        key={index}
                        title={<Text className={classNames(styles.action, styles[action])}>{action}</Text>}
                        extra={time.format('mm:ss')}
                    >
                        {location.path}
                    </ListItem>
                ))}
            </List>
        </View>
    )
}
