import React from "react";
import Formulario from "./Components/Formulario/Formulario";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
