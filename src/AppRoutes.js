import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import CarrouselInicio from './Components/carrousel/CarrouselInicio';
import Tarjetas from './Components/tarjetas/Cards';
import Menu from './Components/opcionMenu/Menu';
import Informacion from './Components/datos/Informacion';

function AppRoutes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/Menu">
                        <Menu></Menu>
                    </Route>
                    <Route path="/CarrouselInicio">
                        <CarrouselInicio></CarrouselInicio>
                    </Route>
                    <Route path="/Informacion">
                        <Informacion></Informacion>
                    </Route>
                    <Route path="/Tarjetas">
                        <Tarjetas></Tarjetas>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes

