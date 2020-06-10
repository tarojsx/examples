import React from 'react'
import { View } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'
import { useNavigationBarTitle, useRouterParams } from '@tarojsx/hooks'

export default () => {
    useNavigationBarTitle('路由参数')

    const params = useRouterParams()
    const s = useRouterParams('s')
    const n = useRouterParams('n', Number)

    return (
        <View>
            <List>
                <ListHeader title="路由参数" />
                <ListItem title="useRouterParams()" extra={typeof params}>
                    {JSON.stringify(params)}
                </ListItem>
                <ListItem title="useRouterParams('s')" extra={typeof s}>
                    {s}
                </ListItem>
                <ListItem title="useRouterParams('n', Number)" extra={typeof n}>
                    {n}
                </ListItem>
            </List>
        </View>
    )
}
