import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/home/home"
import MostrarPaises from "./components/paises/paises"
import MostrarPais from "./components/mostrarPais/mostrarPais"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/allCountries" element={ <MostrarPaises /> } />
        <Route path="/country" element={ <MostrarPais /> } />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
