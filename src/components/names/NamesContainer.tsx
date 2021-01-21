import { useEffect, useState } from "react"
import { createUseStyles, useTheme } from "react-jss"
import { useHistory, useParams, useLocation } from "react-router-dom"
import NameCard from "./NameCard"

type Props = {
    names :Name[]
}

const useStyles = createUseStyles((theme :Theme) => ({
    container: {
        display: 'flex',
        alignContent: 'flex-start',
        flexFlow: 'wrap',
        justifyContent : 'space-between'
    },

}))

function NamesContainer({names} :Props) {

    const [filteredNames, setFilteredNames] = useState<Name[]>(names)

    const { id } = useParams<{id : string}>()
    const history = useHistory()

    useEffect(() => {

        console.log('useEffect names container')
        console.log(id)
        console.log(names)

        if (id) {

            const foundNode = names.find(name => name.id === parseInt(id))
            foundNode && setFilteredNames([foundNode])

            console.log(foundNode)

        } else {
            setFilteredNames(names)
        }

    }, [names,id])

    const route = (id :string) => {
        history.push(`/names/${id}`)
    }

    const theme = useTheme()
    const classes = useStyles({theme})
    
    return (
        <>
            <div className={classes.container}>
                {filteredNames.map((name) => <NameCard key={name.id} {...{...name, route}}></NameCard>)}
            </div>
        </>
    )
    



}

export default NamesContainer