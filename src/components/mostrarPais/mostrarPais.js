import react, {Component} from "react";
import { Link } from "react-router-dom";
import "./mostrarPais.css"
import Pais from "../pais/pais"

class MostrarPais extends Component{
    constructor(props){
        super(props)
        this.state = {
            pais:[],
            paisBuscado:"peru",
            url:"https://restcountries.com/v3.1/name/",
        }
    }
    apiCall(url,pais,consencuencia){
        fetch(url + pais)
            .then(response => response.json())
            .then(data => consencuencia(data))
    }

    actualizarData = (data) => {
        this.setState({pais:data})
    }
    
    componentDidMount(){
        this.apiCall("https://restcountries.com/v3.1/name/",this.state.paisBuscado,this.actualizarData)
        console.log("componente montado")
    }
    componentDidUpdate(){
        console.log("componente actualizado")
    }

    buscarPaisNuevo = (data) => {
        let paisEscrito = document.getElementById("paisBuscado").value
        this.setState({paisBuscado:paisEscrito})
        this.apiCall(this.state.url,paisEscrito,this.actualizarData)
        document.getElementById("paisBuscado").value = ""
    }

    render(){
        let unPais = this.state.pais
        let contenido;
        if (unPais.length == 0){
            contenido = <h3>Cargando...</h3>
        }
        else {
            contenido  = 
            <div className="paisContenedor">
                {unPais.map((pais,i)=>
                    <Pais item={pais} indice={i} />
                )}
            </div>
        }
        return(
            <div>
                <h1>Pais</h1>
                <div>
                    <input id="paisBuscado" type="text" placeholder="Nombre del pais"></input>
                    <button onClick={() => this.buscarPaisNuevo()}>Buscar</ button>
                </div>
                {contenido}
                <div><Link to="/">volver a la Home</Link></div>
                <div>{this.state.contador}</div>
            </div>
        )
    }
}

export default MostrarPais