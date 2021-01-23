import { useEffect, useState } from "react"
import { createUseStyles, useTheme } from "react-jss"
import { useHistory, useParams } from "react-router-dom"
import NameCard from "./NameCard"
import NamesTable from "./NamesTable"
import NamesViewSelector from "./NamesViewSelector"

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
    const [cardView, setCardView] = useState<boolean>(true)

    const { id } = useParams<{id : string}>()

    const history = useHistory()
    const theme = useTheme()
    const classes = useStyles({theme})

    useEffect(() => {

        if (id) {
            const foundNode = names.find(name => name.id === parseInt(id))
            foundNode && setFilteredNames([foundNode])

        } else {
            setFilteredNames(names)
        }

    }, [names,id])

    const route = (id :string) => {
        history.push(`/names/${id}`)
    }

    const changeView = (_cardView :boolean) => {
        if (cardView !== _cardView) {
            setCardView(_cardView)
        }
    }
    
    return (
        <>
            <div className={classes.container}>
                <NamesViewSelector {...{changeView}} />
                {cardView && filteredNames.map((name) => <NameCard key={name.id} {...{...name, route}}></NameCard>)}
                {!cardView && <NamesTable {...{names : filteredNames, route}}></NamesTable>}
            </div>
        </>
    )

}

export default NamesContainer