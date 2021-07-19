import React from "react";
import Formulario from "./Components/Formulario/Formulario";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login'
import Logaut from './Components/Logaut'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
      <Header></Header>
      <hr></hr>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Formulario" component={Formulario} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logaut" component={Logaut} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
