import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Bienvendio a la pagina principal</h1>
            <h3>Que desea hacer?</h3>
            <div><Link to="/allCountries">Ver todos los paises</Link></div>
            <div><Link to="/country">Buscar un pais</Link></div>
        </div>
    )
}

export default Home