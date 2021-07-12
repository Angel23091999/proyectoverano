import React from "react";
import Menu from "../Components/opcionMenu/Menu";
import CarrouselInicio from '../Components/carrousel/CarrouselInicio';
import Informacion from '../Components/datos/Informacion';
import Cards from '../Components/tarjetas/Cards';
//import FormDatos from '../Componentes/FormDatos';

function Home() {
  return (
    <div>
      <Menu/>
      <hr></hr>
      <CarrouselInicio/>
      <hr></hr>
      <Informacion/>
      <hr></hr>
      <Cards/>
    </div>
  )
}
export default Home;

