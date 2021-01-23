import { createUseStyles, useTheme } from "react-jss"
import listIcon from 'toc-black-48dp.svg'
import cardIcon from 'view_module-black-48dp.svg'


type Props = {
    changeView : (cardView :boolean) => void
}

const useStyles = createUseStyles((theme :Theme) => ({
    selectionBar: {
        width: '90%',
        margin: '2vh auto 5vh auto',
        backgroundColor : theme.colorTheme.color5,
        boxShadow: `3px 3px ${theme.colorTheme.color8}`,
    },
    button: {
        backgroundColor: theme.colorTheme.color7,
        display: 'inline-block',
        margin: '5px 0 5px 5px',
        '&:hover' : {
            backgroundColor: theme.colorTheme.color4,
            boxShadow: `1px 1px 1px 1px ${theme.colorTheme.color8}`,
        },
        '&:active' : {
            backgroundColor: theme.colorTheme.color4,
            boxShadow: 'unset'
        }
    }
}))

function NamesViewSelector({changeView} :Props) {

    const theme = useTheme()
    const classes = useStyles({theme})
    
    return (
        <>
            <div className={classes.selectionBar}>  
                <div className={classes.button} onClick={() => {changeView(true)}}><img src={cardIcon} alt="Card View" /></div>
                <div className={classes.button} onClick={() => {changeView(false)}}><img src={listIcon} alt="Table View" /></div>
            </div>
        </>
    )
    



}

export default NamesViewSelector