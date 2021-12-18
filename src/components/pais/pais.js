import "./pais.css"

function Pais(props){
    return (
        <div key={props.indice} className="countryContainer">
            <p><span className="country">Country:</span> {props.item.name.official}</p>
            <p><span className="capital">Capital:</span> {props.item.capital}</p>
            <p><span className="currency">Currency:</span> {props.item.currencies ? props.item.currencies[Object.keys(props.item.currencies)[0]].name :"No currency"}</p>
            <img src={props.item.flags.png}></img>
        </div>
    )
}

export default Pais