import { createUseStyles, useTheme } from "react-jss"
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

    const theme = useTheme()
    const classes = useStyles({theme})
    
    return (
        <>
            <div className={classes.container}>
                {names.map((name) => <NameCard key={name.id} {...{...name}}></NameCard>)}
            </div>
        </>
    )
    



}

export default NamesContainer