import React from 'react'
import { Layout, Menu } from 'antd'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-router-dom'

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
            <Menu theme="dark" className={classes.menu} mode="horizontal">
                <Menu.Item key="1"><Link to="/names">Names</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/something1">Something 1</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/something2">Something 2</Link></Menu.Item>
            </Menu>
        </Layout.Header>
        </>

    )
}

export default Header
