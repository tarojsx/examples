import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button, ListHeader, ListItem } from '@tarojsx/ui'

import styles from '@/theme.module.scss'

export default () => {
    return (
        <View>
            <ListHeader title="按钮类型" />
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="secondary">secondary</Button>
            <Button type="warn">warn</Button>
            <Button type="error">error</Button>

            <ListHeader title="按钮状态" />
            <Button loading>default loading</Button>
            <Button disabled>default disabled</Button>
            <Button disabled type="primary">
                primary disabled
            </Button>
            <Button disabled type="secondary">
                secondary disabled
            </Button>
            <Button disabled type="warn">
                warn disabled
            </Button>
            <Button disabled type="error">
                error disabled
            </Button>

            <ListHeader title="按钮尺寸" />
            <Button size="small">small</Button>
            <View style={{ margin: 10 }}>
                <Button size="mini" iconInfo={{ value: 'help', size: 14, color: styles.colorBrand }}>
                    mini
                </Button>
            </View>

            <ListHeader title="圆角按钮" />
            <Button circle>circle</Button>

            <ListHeader title="通栏按钮" />
            <Button full>full</Button>

            <ListHeader title="透明按钮" />
            <Button transparent openType="share">
                <ListItem title="点击分享" arrow="right">
                    为子组件实现 openType 按钮效果
                </ListItem>
            </Button>

            <ListHeader title="浮动按钮" />
            <Button fab>FAB</Button>
        </View>
    )
}
