import React from "react";
import Formulario from "./Components/Formulario";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Logaut from './Components/Logaut/Logaut'
import Salud from './Components/SaludAlimenticia/Salud'
import Ejercicio from './Components/Ejercicio/Ejercicio'
import Funcion from './Components/Funcion/Funcion2'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
      <Header></Header>
      <hr></hr>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Formulario" component={Formulario} />
        <Route  path="/Login" component={Login} />
        <Route path="/Logaut" component={Logaut} />
        <Route path="/Salud" component={Salud}/>
        <Route path="/Ejercicio" component={Ejercicio}/>
        <Route path="/Funcion" component={Funcion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
