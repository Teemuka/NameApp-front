import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { createUseStyles, useTheme } from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import NamesContainer from 'components/names/NamesContainer'

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

    const [names, setNames] = useState<Name[]>([])

    useEffect(() => {
        axios.get('/names').then(response => {
            setNames(response.data)
        })
    })

    return (
        <>
            <Layout.Content className={styles.layout}>
                <div className={styles.layoutBackground}>
                    <Switch>
                        <Route path="/names">
                            <NamesContainer {...{names}}></NamesContainer>
                        </Route>
                    </Switch>               
                </div>
            </Layout.Content>
        </>
    )
    



}

export default Content