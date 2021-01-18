type Props = {
    names :Name[]
}

function NamesContainer({names} :Props) {

    
    return (
        <>
            {names.map((name) => <div key={name.id}>{name.name}</div>)}
        </>
    )
    



}

export default NamesContainer