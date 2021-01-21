import { createUseStyles, useTheme } from "react-jss"
import person from 'person.svg'


type Props = {
    name :string,
    id :number,
    amount :number
    route :(id :string) => void
}

const useStyles = createUseStyles((theme :Theme) => ({
    container: {
        width: '25vw',
        backgroundColor : theme.colorTheme.color3,
        height : '30vh',
        display : 'flex',
        flexDirection : 'column',
        margin : '10px',
        borderRadius : '5px',
        position : 'relative',
        top : '0',
        boxShadow: `3px 3px ${theme.colorTheme.color8}`,
        transition: 'box-shadow 0.3s, top 0.5s',

        '&:hover': {
            top: '-5px',
            boxShadow: `7px 7px ${theme.colorTheme.color8}`
        }

    },
    column: {
        height : '50%',
        overflowWrap : 'break-word',
        textAlign : 'center'
    },
    image: {
        height : '100%'
    },
    line: {
        height: '2px',
        alignSelf: 'center',
        width: '80%',
        backgroundColor: theme.colorTheme.color8,
        margin: '10px 0 0 0',
        opacity: 0.2
    },
    name: {
        fontSize: '5vh',
        fontVariant: 'small-caps',
        fontFamily: 'cursive',
        color: theme.colorTheme.color8
    },
    amount: {
        width: '5vh',
        height: '5vh',
        backgroundColor: theme.colorTheme.color6,
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: '3vh',
        lineHeight: '5vh',
        fontFamily: 'cursive',
        margin: 'auto 10px 0 auto',
        color: theme.colorTheme.color8
    }
}))

function NameCard({name, id, amount, route} :Props) {

    const theme = useTheme()
    const classes = useStyles({theme})
    
    return (
        <>
            <div className={classes.container} onClick={() => {route(id.toString())}}>
                <div className={classes.column}>
                    <img className={classes.image} alt="" src={person} />
                </div>
                <div className={classes.line} />
                <div className={classes.column}>
                    <div className={classes.name}>
                        { name }
                    </div>
                    <div className={classes.amount}>
                        {amount}
                    </div>
                </div>
            </div>
            
        </>
    )
    



}

export default NameCard