import react, {Component} from "react"
import { Link } from "react-router-dom";
import "./paises.css"
import Pais from "../pais/pais"

class MostrarPaises extends Component{
    constructor(props){
        super(props)
        this.state = {
            listaPaises:[],
            url:"https://restcountries.com/v3.1/all"
        }
    }

    componentDidMount(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {this.setState({listaPaises:data})})
            .catch(error =>{console.log(error)})
    }
    render(){
        let paises = this.state.listaPaises
        let contenido;
        if (paises.length==0){
            contenido = <h3>Cargando...</h3>
        }
        else {
            contenido  = 
            <div className="countriesContainer">
                {paises.map((pais,i)=>
                <Pais item={pais} indice={i} />
                )}
            </div>
        }
        return(
            <div>
                <h1>Lista de paises</h1>
                <div><Link to="/">volver a la Home</Link></div>
                {contenido}
            </div>
        )
    }
}

export default MostrarPaises