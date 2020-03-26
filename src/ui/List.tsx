import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { List, ListHeader, ListItem, Avatar } from '@tarojsx/ui'

import styles from '@/theme.module.scss'

const BrandText: React.FC<{ style?: React.CSSProperties }> = ({ style = {}, ...rest }) => (
    <Text style={{ color: styles.colorBrand, ...style }} {...rest} />
)

export default () => {
    return (
        <View>
            <List>
                <ListHeader title="ListHeader" />
                <ListItem
                    thumb={<Avatar size="mini" style={{ backgroundColor: styles.colorBrand }} text="图" />}
                    title={<BrandText>title</BrandText>}
                    extra={<BrandText style={{ paddingRight: 20 }}>extra</BrandText>}
                    footer={<BrandText>footer</BrandText>}
                    arrow="right"
                >
                    {<BrandText>children</BrandText>}
                </ListItem>
            </List>

            <List>
                <ListHeader title="箭头" />
                <ListItem extra="右箭头" arrow="right" />
                <ListItem extra="上箭头" arrow="up" />
                <ListItem extra="下箭头" arrow="down" />
                <ListItem extra="点击清除" arrow="clear" onClear={() => Taro.showToast({ title: '点击清除' })} />
            </List>
        </View>
    )
}
