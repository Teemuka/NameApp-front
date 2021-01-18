import React from 'react'
import { Layout } from 'antd'
import { createUseStyles, useTheme } from 'react-jss'
import { Route, Switch } from 'react-router-dom'

const useStyles = createUseStyles((theme :Theme) => ({
    layout: {
        padding: '0 50px', 
        marginTop: '10vh',
        height: '90vh',
        backgroundColor: theme.colorTheme.color1
    },
    layoutBackground : {
        padding: 24, 
        height: '100%',
        backgroundColor: theme.colorTheme.color2
    },
}))


function Content() {

    const theme = useTheme()
    const styles = useStyles(theme)

    return (
        <>
            <Layout.Content className={styles.layout}>
                <div className={styles.layoutBackground}>
                    <Switch>
                        <Route path="/names">
                        </Route>
                    </Switch>               
                </div>
            </Layout.Content>
        </>
    )
    



}

export default Content