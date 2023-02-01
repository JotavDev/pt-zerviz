import "./encabezados.css"

interface Props {
    title: string
}

function Encabezados({title}:Props){
    return (
        <>
            <div className="titleContainer">
                <img className="titleImage" src="https://i.imgur.com/bcJFwXe.png" alt="" />
                <h2 className="welcomeMessage">{title}</h2>
                <img className="titleImage" src="https://i.imgur.com/bcJFwXe.png" alt="" />
            </div>
        </>
    )
}

export default Encabezados;