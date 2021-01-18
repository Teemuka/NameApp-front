import React from 'react'
import { Layout, Menu } from 'antd'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles((theme :Theme) => ({
    header: {
        position: 'fixed', 
        zIndex: 1, 
        width: '100%',
        backgroundColor : theme.colorTheme.color8,
        lineHeight : '10vh',
        height : '10vh'
        
    },
    menu : {
        backgroundColor : [[theme.colorTheme.color8], '!important'],
        '& li.ant-menu-item-selected' : {
            backgroundColor : [[theme.colorTheme.color6], '!important'],
        },
        '& li:hover' : {
            backgroundColor : [[theme.colorTheme.color7], '!important'],
        },
        '& li' : {
            width : '8vw',
            textAlign : 'center',
            borderBottom : [['1px solid transparent'], '!important'],
        },
        height : '10vh'
    },
}))

function Header() {

    const theme = useTheme()
    const classes = useStyles({theme})

    return (
        <>
        <Layout.Header className={classes.header}>
            <div className="logo" />
            <Menu theme="dark" className={classes.menu} mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Layout.Header>
        </>

    )
}

export default Header
